function Point (x, y) {
  this.x = x
  this.y = y
}

function Triangle (p1, p2, p3) {
  this.points = [p1, p2, p3]
  this.angle = 0
  this.conf = {
    color: 'red'
  }
  this.draw()
}

Triangle.prototype.draw = function () {
  turn(ctx, this.angle, function () {
    drawTriangle(ctx, this.points[0], this.points[1], this.points[2], this.conf)
  }.bind(this))
  console.log(this)
}

Triangle.prototype.move = function (dx, dy) {
  for (var i = 0; i < this.points.length; i++) {
    this.points[i].x += dx
    this.points[i].y += dy
  }
  this.draw()
}

Triangle.prototype.turn = function (dangle) {
  this.angle += dangle
  this.draw()
}


/**
 *  @param start {Point} 
 *  @param end {Point}
 *  @param opts {Object}
 *    - color {String}
 *    - width {number}
 */
function drawLine (ctx, start, end, opts) {
  opts = opts || {}
  opts.color = opts.color || '#000'
  opts.width = opts.width || 1
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(start.x, start.y)
  ctx.lineTo(end.x, end.y)
  ctx.strokeStyle = opts.color
  ctx.lineWidth = opts.width
  ctx.stroke()
  ctx.restore()
}

/**
 *  @param p1 {Point} 
 *  @param p2 {Point}
 *  @param p3 {Point}
 *  @param opts {Object}
 *    - color {String}
 */
function drawTriangle (ctx, p1, p2, p3, opts) {
  opts = opts || {}
  opts.color = opts.color || '#000'
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(p1.x, p1.y)
  ctx.lineTo(p2.x, p2.y)
  ctx.lineTo(p3.x, p3.y)
  ctx.closePath()
  ctx.fillStyle = opts.color
  ctx.fill()
  ctx.restore()
}

function turn (ctx, angle, cb) {
  ctx.save()
  ctx.rotate(Math.PI / 180 * angle)
  cb && cb()
  ctx.restore()
}

function clear () {
  ctx.clearRect(0, 0, nw, nh)
}

function drawGrid (offsetLeft, offsetTop) {
  for (var i = 0; i < 11; i++) {
    drawLine(ctx, new Point(offsetLeft, i * 50 + offsetTop), new Point(500 + offsetLeft, i * 50 + offsetTop), {width: 1})
    drawLine(ctx, new Point(i * 50 + offsetLeft, offsetTop), new Point(i * 50 + offsetLeft, 500 + offsetTop), {width: 1})
  }
}