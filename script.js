var canvas = document.getElementById('game-life')
var ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let special = []
let passage = []
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
      passage: 0,
      special: 0,
      x: x,
      y: y
    })
  }
}

function sort(arr) {
  for (i = 0; i < arr.length; i++) {
    if (cells[i].wall = 1) {
      wall[i].push(cells[i])
    } else if (cells[i].passage = 1) {
      wall[i].push(cells[i])
    } else if (cells[i].special = 1) {
      wall[i].push(cells[i])
    }
  }
}

function generate(arr) {
  arr[0].wall = 0
  arr[0].passage = 1
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
    } else if(cells[i].passage == 1) {
      ctx.fillStyle = 'white'
      ctx.fillRect(cells[i].x * size, cells[i].y * size, size, size)
    }
  }
}

paint(cells)
