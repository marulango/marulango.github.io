var express = require('express')
var app = express()
var dribbble = require('node-dribbble/lib')

app.get('/popular', function (req, res, next) {
	dribbble.shots('popular', { page: 3, per_page: 30 }).then(function (data) {
 		res.json(data.shots)
	})
	.catch(next)
})

app.get('/me', function (req, res, next) {
	dribbble.player('bleedingxedge').shots().then(function (data) {
		res.json(data)
	})
	.catch(next)
})

app.use('/', express.static( __dirname + '/public'))

app.use(require('errorhandler')())

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('OMGYAY!')
})