var canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d'),
  img = new Image(),
  w,
  h,
  offset,
  glitchInterval

img.src = 'img/marumaru.png'
img.onload = function () {
  init()
}

var init = function () {
  canvas.width = w = window.innerWidth
  canvas.height = h = window.innerHeight
  offset = w * 0.1
  clearInterval(glitchInterval)
  for (var i = 200; i < 3000; i += 200) {
    (function(ms) {
        setTimeout(glitchInterval, ms)
    }(i))
  }

var clear = function () {
  context.rect(0, 0, w, h)
  context.fillStyle = '#fcfcfc'
  context.fill()
}

var glitchInterval = function(){
    clear()
    context.drawImage(img, 0, 0)
    setTimeout(glitchImg, randInt(1, 150))
}


var glitchImg = function () {
  for (var i = 0; i < randInt(1, 6); i++) {
    var x = Math.random() * w
    var y = Math.random() * h
    var spliceWidth = w - x
    var spliceHeight = randInt(5, h / 3.2)
    context.drawImage(canvas, 0, y, spliceWidth, spliceHeight, x, y, spliceWidth, spliceHeight)
    context.drawImage(canvas, spliceWidth, y, x, spliceHeight, 0, y, x, spliceHeight)
  }
}

var randInt = function (a, b) {
  return ~~(Math.random() * (b - a) + a)
}
