# qwerty32
monome grid-like output from a qwerty keyboard

## usage

```js
import Qwerty32 from 'qwerty32'
const device = await Qwerty32.connect()

device.addEventListener('gridKeyDown', (event) => {
  console.log(event.detail.x, event.detail.y, 1)
})
device.addEventListener('gridKeyUp', (event) => {
  console.log(event.detail.x, event.detail.y, 0)
})
device.addEventListener('query', (event) => {
  console.log(event.detail) // { type: 2, count: 1 }
})
device.addEventListener('getId', (event) => {
  console.log(event.detail) // qwerty 32
})
device.addEventListener('getGridSize', (event) => {
  console.log(event.detail)  // { x: 8, y: 4 }
})

device.query()
device.getId()
device.getGridSize()
```

## mappings

- <kbd>1</kbd>: `{ x: 0, y: 0 }`
- <kbd>2</kbd>: `{ x: 1, y: 0 }`
- <kbd>3</kbd>: `{ x: 2, y: 0 }`
- <kbd>4</kbd>: `{ x: 3, y: 0 }`
- <kbd>5</kbd>: `{ x: 4, y: 0 }`
- <kbd>6</kbd>: `{ x: 5, y: 0 }`
- <kbd>7</kbd>: `{ x: 6, y: 0 }`
- <kbd>8</kbd>: `{ x: 7, y: 0 }`
- <kbd>q</kbd>: `{ x: 0, y: 1 }`
- <kbd>w</kbd>: `{ x: 1, y: 1 }`
- <kbd>e</kbd>: `{ x: 2, y: 1 }`
- <kbd>r</kbd>: `{ x: 3, y: 1 }`
- <kbd>t</kbd>: `{ x: 4, y: 1 }`
- <kbd>y</kbd>: `{ x: 5, y: 1 }`
- <kbd>u</kbd>: `{ x: 6, y: 1 }`
- <kbd>i</kbd>: `{ x: 7, y: 1 }`
- <kbd>a</kbd>: `{ x: 0, y: 2 }`
- <kbd>s</kbd>: `{ x: 1, y: 2 }`
- <kbd>d</kbd>: `{ x: 2, y: 2 }`
- <kbd>f</kbd>: `{ x: 3, y: 2 }`
- <kbd>g</kbd>: `{ x: 4, y: 2 }`
- <kbd>h</kbd>: `{ x: 5, y: 2 }`
- <kbd>j</kbd>: `{ x: 6, y: 2 }`
- <kbd>k</kbd>: `{ x: 7, y: 2 }`
- <kbd>z</kbd>: `{ x: 0, y: 3 }`
- <kbd>x</kbd>: `{ x: 1, y: 3 }`
- <kbd>c</kbd>: `{ x: 2, y: 3 }`
- <kbd>v</kbd>: `{ x: 3, y: 3 }`
- <kbd>b</kbd>: `{ x: 4, y: 3 }`
- <kbd>n</kbd>: `{ x: 5, y: 3 }`
- <kbd>m</kbd>: `{ x: 6, y: 3 }`
- <kbd>,</kbd>: `{ x: 7, y: 3 }`
