// to run:  C:\sandbox\daily\webComponentDemo>node app.js
// browser: http://localhost:3001/step2 (step#)

var express = require('express');
var app = express();
 
var hbs = require('hbs');

app.use(express.static(__dirname + '/views/polymer-tutorial-master'));

app.set('view engine', 'html');
app.engine('html', hbs.__express);
 
app.get('/step1', function(req, res) {
   res.render('polymer-tutorial-master/step-1/index');
});

app.get('/step2', function(req, res) {
   res.render('polymer-tutorial-master/step-2/index');
});

app.get('/post-card.html', function(req, res) {
   res.render('polymer-tutorial-master/step-2/post-card.html');
});

app.get('/step3', function(req, res) {
   res.render('polymer-tutorial-master/step-3/index');
});

app.get('/post-card.html', function(req, res) {
   res.render('polymer-tutorial-master/step-3/post-card.html');
});

app.get('/post-list.html', function(req, res) {
   res.render('polymer-tutorial-master/step-3/post-list.html');
});

app.get('/aws-meme-generator', function(req, res) {
   res.render('polymer-tutorial-master/aws-meme-generator/index.html');
});

app.get('/timer', function(req, res) {
   res.render('polymer-tutorial-master/timer/index.html');
});

app.listen(3001);