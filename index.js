var node = document.getElementById('test')
var ctx = node.getContext('2d')
var nw = node.width
var nh = node.height
var offsetLeft = 40
var offsetTop = 40
var tri

function init () {
  drawGrid(offsetLeft, offsetTop)
  tri = new Triangle(new Point(offsetLeft, offsetTop), new Point(offsetLeft + 50, offsetTop), new Point(offsetLeft + 25, offsetTop + 50))
}

function onRight () {
  clear()
  drawGrid(offsetLeft, offsetTop)
  tri.move(50, 0)
}
function onLeft () {
  clear()
  drawGrid(offsetLeft, offsetTop)
  tri.move(-50, 0)
}
function onUp () {
  clear()
  drawGrid(offsetLeft, offsetTop)
  tri.move(0, -50)
}
function onDown () {
  clear()
  drawGrid(offsetLeft, offsetTop)
  tri.move(0, 50)
}

function onTurn1 () {
  clear()
  drawGrid(offsetLeft, offsetTop)
  tri.turn(10)
}
function onTurn2 () {
  clear()
  drawGrid(offsetLeft, offsetTop)
  tri.turn(-10)
}


init()