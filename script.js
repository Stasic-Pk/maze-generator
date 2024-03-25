var canvas = document.getElementById('game-life')
var ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let special = []
let path = []
let wall = []
let cells = []
const size = 25
const mazeSize = 25

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

for (y = 0; y < mazeSize; y++) {
  for (x = 0; x < mazeSize; x++) {
    cells.push({
      wall: 1,
      path: 0,
      special: 0,
      x: x,
      y: y,
      index: x + y * mazeSize
    })
  }
}

function generate(arr) {
  arr[0].wall = 0
  arr[0].path = 1
  for (i = 0; i < arr.length; i++) {
    if (arr[i] ) {

    }
  }
}

generate(cells)

function paint(arr) {
  for (i = 0; i < cells.length; i++) {
    if (cells[i].wall == 1) {
      ctx.fillStyle = 'black'
      ctx.fillRect(cells[i].x * size, cells[i].y * size, size, size)
    } else if(cells[i].path == 1) {
      ctx.fillStyle = 'white'
      ctx.fillRect(cells[i].x * size, cells[i].y * size, size, size)
    }
  }
}

console.log(special, wall, path, cells)

paint(cells)
