var canvas = document.getElementById('maze-generator')
var ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let special = []
let path = []
let wall = []
let cells = []
const size = 25
const mazeSize = 4

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function linearSearch(array, item) {
  for (i = 0; i < mazeSize; i++) {
    for (j = 0; j < mazeSize; j++) {
      if (array[i][j].special === item) {
        return true
      }
    }
  }
}


//i=y j=x
for (i = 0; i < mazeSize; i++) {
  cells[i] = []
  for (j = 0; j < mazeSize; j++) {
    cells[i][j] = {
      wall: 1,
      path: 0,
      special: 0,
      y: i,
      x: j
    }
  }
}

cells[0][0].wall = 0
cells[0][0].path = 1

function generate(array) {
  if (linearSearch(cells, 1) === true) {
    return array
  }

  randomInt()
  for (i = 0; i < mazeSize; i++) {
    for (let j = 0; j < mazeSize; j++) {
      if (cells[i][j].path == 1) {
        cells[i][j + 2].wall = 0
        cells[i + 2][j].wall = 0
        cells[i][j + 2].special = 1
        cells[i + 2][j].special = 1
      }
    }
  }
  return generate(array)
}

generate(cells)

function paint(array) {
  for (i = 0; i < mazeSize; i++) {
    for (j = 0; j < mazeSize; j++) {
      if (array[i][j].wall == 1) {
        ctx.fillStyle = 'black'
        ctx.fillRect(array[i][j].x * size, array[i][j].y * size, size, size)
      } else {
        ctx.fillStyle = 'white'
        ctx.fillRect(array[i][j].x * size, array[i][j].y * size, size, size)
      }
    }
  }
}

console.log(special, wall, path, cells)

paint(cells)
