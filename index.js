export default class Qwerty32 extends EventTarget {
  static connect () {
    return Promise.resolve(new this)
  }

  constructor () {
    super()

    addEventListener('keydown', ({ key, repeat }) => {
      if (repeat) return
      const [x, y] = MAP[key] || []
      x != null && this.dispatch('gridKeyDown', { x, y })
    })

    addEventListener('keyup', ({ key }) => {
      const [x, y] = MAP[key] || []
      x != null && this.dispatch('gridKeyUp', { x, y })
    })
  }

  query () {
    this.dispatch('query', { type: 2, count: 1 })
  }

  getId () {
    this.dispatch('getId', 'qwerty 32')
  }

  getGridSize () {
    this.dispatch('getGridSize', { x: 8, y: 4 })
  }

  // no-ops
  gridLed () {}
  gridLedAll () {}
  gridLedCol () {}
  gridLedRow () {}
  gridLedRow () {}
  gridLedMap () {}
  gridLedIntensity () {}
  gridLedLevel () {}
  gridLedLevelAll () {}
  gridLedLevelCol () {}
  gridLedLevelRow () {}
  gridLedLevelMap () {}

  dispatch (eventName, detail) {
    const event = new CustomEvent(eventName, { detail })
    this.dispatchEvent(event)
    return event
  }
}

const MAP = {
  '1': [0, 0],
  '2': [1, 0],
  '3': [2, 0],
  '4': [3, 0],
  '5': [4, 0],
  '6': [5, 0],
  '7': [6, 0],
  '8': [7, 0],

  'q': [0, 1],
  'w': [1, 1],
  'e': [2, 1],
  'r': [3, 1],
  't': [4, 1],
  'y': [5, 1],
  'u': [6, 1],
  'i': [7, 1],

  'a': [0, 2],
  's': [1, 2],
  'd': [2, 2],
  'f': [3, 2],
  'g': [4, 2],
  'h': [5, 2],
  'j': [6, 2],
  'k': [7, 2],

  'z': [0, 3],
  'x': [1, 3],
  'c': [2, 3],
  'v': [3, 3],
  'b': [4, 3],
  'n': [5, 3],
  'm': [6, 3],
  ',': [7, 3],
}
