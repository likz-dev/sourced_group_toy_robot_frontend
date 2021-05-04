import { shallowMount } from '@vue/test-utils'
import api from '@/assets/js/api'
import index from '@/pages/index.vue'

//
// const sampleAPIResponse = {
//   startDate: '2021/03/09',
//   endDate: '2021/03/15',
//   facilities: {
//     Novena: {
//       level: 1,
//       pax: 4,
//       schedule: [{
//         text: 'Mr.A reserved',
//         start: '2021/03/09 18:00',
//         end: '2021/03/09 20:00',
//         isMe: false
//       },
//         {
//           text: 'Mr.B reserved',
//           start: '2021/03/10 15:00',
//           end: '2021/03/10 17:00',
//           isMe: false
//         }
//       ]
//     },
//     'Dhoby Ghaut': {
//       level: 1,
//       pax: 1,
//       schedule: [{
//         text: 'Mr.C reserved',
//         start: '2021/03/9 12:00',
//         end: '2021/03/9 17:00',
//         isMe: false
//       }]
//     },
//     Marina: {
//       level: 1,
//       pax: 8,
//       schedule: [{
//         text: 'Mr.D reserved',
//         start: '2021/03/10 12:00',
//         end: '2021/03/10 18:00',
//         isMe: false
//       }]
//     }
//   }
// }
//
// const $route = {
//   path: '/',
//   query: {
//     token: 'sample_token',
//     email: 'likz'
//   }
// }
//
// const $auth = {
//   $storage: {
//     getLocalStorage (key) {
//       if (key === 'email') {
//         return 'likz'
//       }
//     },
//     setLocalStorage (key, val) {
//
//     }
//   }
// }
//
// const $router = {
//   push: jest.fn()
// }
//
// const { location } = window
//
describe('Booking page', () => {
  let wrapper

  // beforeAll(() => {
  //   delete window.location
  //   window.location = {
  //     reload: jest.fn(),
  //     replace: jest.fn()
  //   }
  // })

  // afterAll(() => {
  //   window.location = oldLocation
  // })

  beforeEach(() => {
    wrapper = shallowMount(index, {
      propsData: {},
      mocks: {
        // $route,
        // $auth,
        // $router
      }
    })
    //
    // jest
    //   .useFakeTimers('modern')
    //   .setSystemTime(new Date('2021-03-11 08:00').getTime())

    // jest.spyOn(api, 'get').mockImplementation(() => Promise.resolve({
    //   success: true,
    //   data: sampleAPIResponse
    // }))
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('contains the right components', () => {
    expect(wrapper.find('#game-board')).toBeTruthy()
    expect(wrapper.find('#controls')).toBeTruthy()
    expect(wrapper.find('#input-x')).toBeTruthy()
    expect(wrapper.find('#input-y')).toBeTruthy()
    expect(wrapper.find('#input-facing')).toBeTruthy()
    expect(wrapper.find('#input-place')).toBeTruthy()
    expect(wrapper.find('#input-left')).toBeTruthy()
    expect(wrapper.find('#input-right')).toBeTruthy()
    expect(wrapper.find('#input-move')).toBeTruthy()
    expect(wrapper.find('#input-report')).toBeTruthy()
  })

  // test('parses api response correctly', () => {
  //   expect(wrapper.vm.$data.scData).toStrictEqual([{
  //     businessHours: [{
  //       end: '24:00',
  //       start: '00:00'
  //     }, {
  //       end: '24:00',
  //       start: '00:00'
  //     }, {
  //       end: '24:00',
  //       start: '00:00'
  //     }, {
  //       end: '24:00',
  //       start: '00:00'
  //     }, {
  //       end: '24:00',
  //       start: '08:0'
  //     }, {
  //       end: '24:00',
  //       start: '00:00'
  //     }, {
  //       end: '24:00',
  //       start: '00:00'
  //     }],
  //     data: { something: 'something' },
  //     level: 1,
  //     noBusinessDate: [],
  //     pax: 4,
  //     schedule: [{
  //       end: '2021/03/09 20:00',
  //       isMe: false,
  //       start: '2021/03/09 18:00',
  //       text: 'Mr.A reserved'
  //     }, {
  //       end: '2021/03/10 17:00',
  //       isMe: false,
  //       start: '2021/03/10 15:00',
  //       text: 'Mr.B reserved'
  //     }],
  //     title: 'Novena'
  //   }, {
  //     businessHours: [{
  //       end: '24:00',
  //       start: '00:00'
  //     }, {
  //       end: '24:00',
  //       start: '00:00'
  //     }, {
  //       end: '24:00',
  //       start: '00:00'
  //     }, {
  //       end: '24:00',
  //       start: '00:00'
  //     }, {
  //       end: '24:00',
  //       start: '08:0'
  //     }, {
  //       end: '24:00',
  //       start: '00:00'
  //     }, {
  //       end: '24:00',
  //       start: '00:00'
  //     }],
  //     data: { something: 'something' },
  //     level: 1,
  //     noBusinessDate: [],
  //     pax: 1,
  //     schedule: [{
  //       end: '2021/03/9 17:00',
  //       isMe: false,
  //       start: '2021/03/9 12:00',
  //       text: 'Mr.C reserved'
  //     }],
  //     title: 'Dhoby Ghaut'
  //   }, {
  //     businessHours: [{
  //       end: '24:00',
  //       start: '00:00'
  //     }, {
  //       end: '24:00',
  //       start: '00:00'
  //     }, {
  //       end: '24:00',
  //       start: '00:00'
  //     }, {
  //       end: '24:00',
  //       start: '00:00'
  //     }, {
  //       end: '24:00',
  //       start: '08:0'
  //     }, {
  //       end: '24:00',
  //       start: '00:00'
  //     }, {
  //       end: '24:00',
  //       start: '00:00'
  //     }],
  //     data: { something: 'something' },
  //     level: 1,
  //     noBusinessDate: [],
  //     pax: 8,
  //     schedule: [{
  //       end: '2021/03/10 18:00',
  //       isMe: false,
  //       start: '2021/03/10 12:00',
  //       text: 'Mr.D reserved'
  //     }],
  //     title: 'Marina'
  //   }])
  //   expect(wrapper.vm.$data.scSetting).toStrictEqual({
  //     borderW: 1,
  //     dateDivH: 25,
  //     endDate: '2021/03/15',
  //     rowH: 64,
  //     startDate: '2021/03/09',
  //     timeDivH: 25,
  //     titleDivW: 16,
  //     unit: 30,
  //     unitDivW: 24,
  //     weekdayText: [
  //       'Sun',
  //       'Mon',
  //       'Tue',
  //       'Wed',
  //       'Thu',
  //       'Fri',
  //       'Sat'
  //     ]
  //   })
  //   expect(wrapper.vm.$data.meetingRooms).toStrictEqual([
  //     'Novena',
  //     'Dhoby Ghaut',
  //     'Marina'
  //   ])
  // })
  //
  test('placeRobot', async () => {
    jest.spyOn(api, 'get').mockImplementation(() => Promise.resolve({
      success: true,
      data: {
        x: 0,
        y: 0,
        facing: 'NORTH'
      }
    }))
    wrapper.vm.placeRobot()
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$data.robotDirection).toBe('NORTH')
    expect(wrapper.vm.$data.robotPosition).toBe('0-0')
    expect(wrapper.find('#img-0-0')).toBeTruthy()
    expect(wrapper.find('#img-0-0').attributes().style).toBe("transform: rotate(0deg);")
  })

  test('rotateRobotLeft', async () => {
    jest.spyOn(api, 'get').mockImplementation(() => Promise.resolve({
      success: true,
      data: {
        x: 0,
        y: 0,
        facing: 'WEST'
      }
    }))
    wrapper.vm.placeRobot()
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$data.robotDirection).toBe('WEST')
    expect(wrapper.vm.$data.robotPosition).toBe('0-0')
    expect(wrapper.find('#img-0-0')).toBeTruthy()
    expect(wrapper.find('#img-0-0').attributes().style).toBe("transform: rotate(270deg);")
  })

  test('rotateRobotRight', async () => {
    jest.spyOn(api, 'get').mockImplementation(() => Promise.resolve({
      success: true,
      data: {
        x: 0,
        y: 0,
        facing: 'NORTH'
      }
    }))
    wrapper.vm.placeRobot()
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$data.robotDirection).toBe('NORTH')
    expect(wrapper.vm.$data.robotPosition).toBe('0-0')
    expect(wrapper.find('#img-0-0')).toBeTruthy()
    expect(wrapper.find('#img-0-0').attributes().style).toBe("transform: rotate(0deg);")
  })

  test('moveRobot', async () => {
    jest.spyOn(api, 'get').mockImplementation(() => Promise.resolve({
      success: true,
      data: {
        x: 1,
        y: 0,
        facing: 'NORTH'
      }
    }))
    wrapper.vm.placeRobot()
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$data.robotDirection).toBe('NORTH')
    expect(wrapper.vm.$data.robotPosition).toBe('1-0')
    expect(wrapper.find('#img-1-0')).toBeTruthy()
    expect(wrapper.find('#img-1-0').attributes().style).toBe("transform: rotate(0deg);")
  })

})
