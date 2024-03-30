var canvas = document.getElementById('maze-generator')
var ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let special = []
let cells = []
const size = 25
const mazeSize = 5

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

//i=y j=x
for (i = 0; i < mazeSize; i++) {
  cells[i] = []
  for (j = 0; j < mazeSize; j++) {
    cells[i][j] = {
      wall: 1,
      path: 0,
      x: j,
      y: i,
    }
  }
}

cells[0][0].wall = 0
cells[0][0].path = 1

function generate(array) {
  //generate all special

  for (i = 0; i < mazeSize; i++) {
    for (j = 0; j < mazeSize; j++) {
      if (array[i][j].path == 1) {
        if (array[i][j + 2] != undefined && array[i][j + 2].wall == 1) {
          array[i][j + 2].wall = 0
          special.push(array[i][j + 2])
        }
        if (array[i + 2][j] != undefined && array[i + 2][j].wall == 1) {
          array[i + 2][j].wall = 0
          special.push(array[i + 2][j])
        }
      }
    }
  }

  //random special to path

  let randomSpecial = randomInt(special.length)
  
  for (i = 0; i < mazeSize; i++) {
    for (j = 0; j < mazeSize; j++) {
      if (array[i][j].x == special[randomSpecial].x && array[i][j].y == special[randomSpecial].y) {
        array[i][j] = special[randomSpecial]
        array[i][j].path = 1
      }
    }
  }

  //recursive

  if (special.length <= 0) {
    return array
  } else {
    special.splice(0, special.length)
  }
  // return generate(array)
}

generate(cells)
generate(cells)
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

console.log(special, cells)

paint(cells)
