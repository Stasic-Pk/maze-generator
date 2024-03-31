var canvas = document.getElementById('maze-generator')
var ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pathDelta = []
const special = []
const cells = []
const size = 5
const mazeSize = 125

function randomInt(max) {
  return Math.floor(Math.random() * max);
}


function create() {
  //i=y j=x
  for (i = 0; i < mazeSize; i++) {
    cells[i] = []
    for (j = 0; j < mazeSize; j++) {
      cells[i][j] = {
        wall: 1,
        path: 0,
        pathDelta: 0,
        x: j,
        y: i,
      }
    }
  }
  cells[Math.floor(mazeSize / 2)][Math.floor(mazeSize / 2)].wall = 0
  cells[Math.floor(mazeSize / 2)][Math.floor(mazeSize / 2)].path = 1
}
create()


function generate(array) {
  //generate all special

  for (i = 0; i < mazeSize; i++) {
    for (j = 0; j < mazeSize; j++) {
      if (array[i][j].path == 1) {
        if (array[i][j + 2] != undefined && array[i][j + 2].path != 1 && array[i][j + 2].pathDelta != 1) {
          array[i][j + 2].wall = 0
          special.push(array[i][j + 2])
        }
        if (array[i + 2] != undefined && array[i + 2][j].path != 1 && array[i + 2][j].pathDelta != 1) {
          array[i + 2][j].wall = 0
          special.push(array[i + 2][j])
        }
        if (array[i][j - 2] != undefined && array[i][j - 2].path != 1 && array[i][j - 2].pathDelta != 1) {
          array[i][j - 2].wall = 0
          special.push(array[i][j - 2])
        }
        if (array[i - 2] != undefined && array[i - 2][j].path != 1 && array[i - 2][j].pathDelta != 1) {
          array[i - 2][j].wall = 0
          special.push(array[i - 2][j])
        }
      }
    }
  }

  //random special to path

  let randomSpecial = randomInt(special.length)
      
  for (i = 0; i < mazeSize; i++) {
    for (j = 0; j < mazeSize; j++) {
      if (special.length != 0 && array[i][j].x == special[randomSpecial].x && array[i][j].y == special[randomSpecial].y) {
        array[i][j] = special[randomSpecial]
        array[i][j].path = 1

        if (array[i][j + 2] != undefined && array[i][j + 2].path == 1) {
          pathDelta.push(array[i][j + 1])
        }
        if (array[i + 2] != undefined && array[i + 2][j].path == 1) {
          pathDelta.push(array[i + 1][j])
        }
        if (array[i][j - 2] != undefined && array[i][j - 2].path == 1) {
          pathDelta.push(array[i][j - 1])
        }
        if (array[i - 2] != undefined && array[i - 2][j].path == 1) {
          pathDelta.push(array[i - 1][j])
        }
        let randomDirection = randomInt(pathDelta.length)

        pathDelta[randomDirection].pathDelta = 1
        pathDelta[randomDirection].wall = 0
        pathDelta.splice(0, pathDelta.length)
      }
    }
  }

  //recursive

  if (special.length == 0) {
    return array
  } else {
    special.splice(0, special.length)
  }
  // return generate(array)
}

function paint(array) {
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
  for (i = 0; i < mazeSize; i++) {
    for (j = 0; j < mazeSize; j++) {
      if (array[i][j].wall == 1 || array[i][j].path == 0 && array[i][j].wall == 0 && array[i][j].pathDelta == 0) {
        ctx.fillStyle = 'black'
        ctx.fillRect(array[i][j].x * size, array[i][j].y * size, size, size)
      } else {
        ctx.fillStyle = 'white'
        ctx.fillRect(array[i][j].x * size, array[i][j].y * size, size, size)
      }
    }
  }
}


addEventListener('mousedown', function start() {
  generate(cells)
  paint(cells)
})
