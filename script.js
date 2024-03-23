var canvas = document.getElementById('game-life')
var ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let cells = []
const size = 50

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

for (let y = 0; y < 10; y++) {
  for (let x = 0; x < 10; x++) {
    cells.push({
      top: randomInt(2),
      bottom: randomInt(2),
      right: randomInt(2),
      left: randomInt(2),
      x: x,
      y: y
    })
  }
}

// function sort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (cells[i].y == 0) {
//       return cells[i].top = 0
//     }
//     if (cells[i].y == 9) {
//       return cells[i].bottom = 0
//     }
//     if (cells[i].x == 0) {
//       return cells[i].left = 0
//     }
//     if (cells[i].x == 9) {
//       return cells[i].right = 0
//     }
//   }
// }

function paint(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].left == 1) {
      ctx.beginPath()
      ctx.moveTo(arr[i].x * size, arr[i].y * size)
      ctx.lineTo(arr[i].x * size, arr[i].y * size - size)
      ctx.stroke()
    }
    if (arr[i].right == 1) {
      ctx.beginPath()
      ctx.moveTo(arr[i].x * size + size, arr[i].y * size)
      ctx.lineTo(arr[i].x * size + size, arr[i].y * size - size)
      ctx.stroke()
    }

    if (arr[i].top == 1) {
      ctx.beginPath()
      ctx.moveTo(arr[i].x * size, arr[i].y * size)
      ctx.lineTo(arr[i].x * size - size, arr[i].y * size)
      ctx.stroke()
    }
    if (arr[i].bottom == 1) {
      ctx.beginPath()
      ctx.moveTo(arr[i].x * size, arr[i].y * size + size)
      ctx.lineTo(arr[i].x * size - size, arr[i].y * size + size)
      ctx.stroke()
    }
  }
  console.log(arr)
}

paint(cells)
