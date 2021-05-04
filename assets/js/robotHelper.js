export const DIRECTION_NORTH = 'NORTH'
export const DIRECTION_SOUTH = 'SOUTH'
export const DIRECTION_EAST = 'EAST'
export const DIRECTION_WEST = 'WEST'

const robotHelper = {
  robotDirectionToDegree(robotDirection) {
    if (robotDirection === DIRECTION_NORTH) {
      return 0
    }
    if (robotDirection === DIRECTION_EAST) {
      return 90
    }
    if (robotDirection === DIRECTION_SOUTH) {
      return 180
    }
    if (robotDirection === DIRECTION_WEST) {
      return 270
    }
  },
  robotRotateLeft(robotDirection) {
    if (robotDirection === DIRECTION_NORTH) {
      return DIRECTION_WEST
    }
    if (robotDirection === DIRECTION_WEST) {
      return DIRECTION_SOUTH
    }
    if (robotDirection === DIRECTION_SOUTH) {
      return DIRECTION_EAST
    }
    if (robotDirection === DIRECTION_EAST) {
      return DIRECTION_NORTH
    }
  },
  robotRotateRight(robotDirection) {
    if (robotDirection === DIRECTION_NORTH) {
      return DIRECTION_EAST
    }
    if (robotDirection === DIRECTION_EAST) {
      return DIRECTION_SOUTH
    }
    if (robotDirection === DIRECTION_SOUTH) {
      return DIRECTION_WEST
    }
    if (robotDirection === DIRECTION_WEST) {
      return DIRECTION_NORTH
    }
  },
  robotMove(robotDirection, robotPosition) {
    let position = robotPosition.split('-')
    let newPositionX = parseInt(position[0])
    let newPositionY = parseInt(position[1])

    if (robotDirection === DIRECTION_NORTH) {
      newPositionY += 1
    } else if (robotDirection === DIRECTION_SOUTH) {
      newPositionY -= 1
    } else if (robotDirection === DIRECTION_EAST) {
      newPositionX += 1
    } else if (robotDirection === DIRECTION_WEST) {
      newPositionX -= 1
    }

    if(newPositionX < 0 || newPositionX > 4 || newPositionY < 0 || newPositionY > 4) {
      return false
    } else {
      return `${newPositionX}-${newPositionY}`
    }
  }
}

export default robotHelper
