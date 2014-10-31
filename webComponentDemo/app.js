var express = require('express');
var app = express();
 
var hbs = require('hbs');

app.use(express.static(__dirname + '/views/polymer-tutorial-master'));

app.set('view engine', 'html');
app.engine('html', hbs.__express);
 
app.get('/step1', function(req, res) {
   res.render('polymer-tutorial-master/step-1/index');
});
 
app.listen(3001);