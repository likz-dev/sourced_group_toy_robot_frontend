<template>
  <v-container>
    <div id="game-board">
      <v-row
        v-for="y in rowIndexes"
        :key="y"
        no-gutters
      >
        <v-col
          v-for="x in columnIndexes"
          :key="x"
        >
          <v-card
            class="pa-2 justify-center"
            outlined
            height="96px"
            align="center"
          >
            <img :id="'img-'+x+'-'+y" v-if="showRobot(x+'-'+y)" src="@/assets/images/robot.png"
                 :style="`transform: rotate(${rotationDegree}deg);`" height="64" width="64"/>
            <br/>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <v-container id="controls" style="max-width: 360px; margin-top: 16px;">
      <v-row style="color: #6d6d6d">
        Place the Robot on the GameBoard first before starting the game.
      </v-row>
      <v-row style="margin-top: 20px;">
        <v-col style="padding:0; margin-right: 6px">
          <v-select
            id="input-x"
            v-model="selectedX"
            :items="Array.from(Array(5).keys())"
            label="X"
            filled/>
        </v-col>
        <v-col style="padding:0; margin-left: 3px; margin-right: 3px">
          <v-select
            id="input-y"
            v-model="selectedY"
            :items="Array.from(Array(5).keys())"
            label="Y"
            filled/>
        </v-col>
        <v-col style="padding:0; margin-left: 6px">
          <v-select
            id="input-facing"
            v-model="selectedFacing"
            :items="directions"
            label="Facing"
            filled/>
        </v-col>
      </v-row>

      <v-row style="margin-top: -20px">
        <v-btn id="#input-place" color="primary" block @click="placeRobot()">
          Place
        </v-btn>
      </v-row>

      <v-row>
        <div style="border: 1px solid #cbcbcb; width: 100%; margin-top: 16px; margin-bottom: 8px;"/>
      </v-row>

      <v-row style="margin-top: 20px">
        <v-col style="padding: 0; margin-right: 8px">
          <v-btn id="input-left" color="secondary" block @click="rotateRobotLeft()">
            Left
          </v-btn>
        </v-col>
        <v-col style="padding: 0; margin-left: 8px">
          <v-btn id="input-right" color="secondary" block @click="rotateRobotRight()">
            Right
          </v-btn>
        </v-col>
      </v-row>
      <v-row style="margin-top: 20px">
        <v-btn id="input-move" color="success" block @click="moveRobot()">
          Move
        </v-btn>
      </v-row>
      <v-row style="margin-top: 20px">
        <v-btn id="input-report" color="secondary" block>
          Report
        </v-btn>
      </v-row>
      <v-row style="color: indianred">
        {{ errorMessage }}
      </v-row>
    </v-container>

  </v-container>
</template>

<script>
import api from "@/assets/js/api";

const {DIRECTION_NORTH, DIRECTION_EAST, DIRECTION_SOUTH, DIRECTION_WEST} = require('@/assets/js/robotHelper');
import robotHelper from "@/assets/js/robotHelper";
import util from "@/assets/js/util";

export default {
  name: "GameBoard",
  data: () => ({
    rowIndexes: Array.from(Array(5).keys()).reverse(),
    columnIndexes: Array.from(Array(5).keys()),
    directions: [DIRECTION_NORTH, DIRECTION_EAST, DIRECTION_SOUTH, DIRECTION_WEST],
    robotPosition: '',
    robotDirection: 'NORTH',
    selectedX: 0,
    selectedY: 0,
    selectedFacing: 'NORTH',
    errorMessage: ''
  }),
  methods: {
    showRobot(position) {
      return position === this.robotPosition
    },

    getSessionId() {
      return this.$auth.$storage.getLocalStorage('session_id')
    },

    placeRobot() {
      api.get(`/place?x=${this.selectedX}&y=${this.selectedY}&facing=${this.selectedFacing}`).then((response) => {
        let apiResponse = response.data

        this.robotPosition = `${apiResponse.x}-${apiResponse.y}`
        this.robotDirection = apiResponse.facing

        if (util.notNullUndefinedOrBlank(apiResponse.session_id)) {
          this.$auth.$storage.setLocalStorage('session_id', apiResponse.session_id)
        }
      }).catch((error) => {
        console.log(error)
      })
    },

    rotateRobotLeft() {
      api.get(`/left?session_id=${this.getSessionId()}`).then((response) => {
        let apiResponse = response.data
        this.robotPosition = `${apiResponse.x}-${apiResponse.y}`
        this.robotDirection = apiResponse.facing
      }).catch((error) => {
        console.log(error)
      })
      // this.robotDirection = robotHelper.robotRotateLeft(this.robotDirection)
    },

    rotateRobotRight() {
      api.get(`/right?session_id=${this.getSessionId()}`).then((response) => {
        let apiResponse = response.data
        this.robotPosition = `${apiResponse.x}-${apiResponse.y}`
        this.robotDirection = apiResponse.facing
      }).catch((error) => {
        console.log(error)
      })
      // this.robotDirection = robotHelper.robotRotateRight(this.robotDirection)
    },

    moveRobot() {
      this.errorMessage = ''

      api.get(`/move?session_id=${this.getSessionId()}`).then((response) => {
        let apiResponse = response.data
        this.robotPosition = `${apiResponse.x}-${apiResponse.y}`
        this.robotDirection = apiResponse.facing
      }).catch((error) => {
        console.log(error)
        this.errorMessage = 'Invalid move. Robot must stay within the board.'
      })

      // let newPosition = robotHelper.robotMove(this.robotDirection, this.robotPosition)
      // if (newPosition === false) {
      //   this.errorMessage = 'Invalid move. Robot must stay within the board.'
      // } else {
      //   this.robotPosition = newPosition
      // }
    }
  },
  computed: {
    rotationDegree() {
      return robotHelper.robotDirectionToDegree(this.robotDirection)
    }
  }
}
</script>

<style scoped>

</style>
