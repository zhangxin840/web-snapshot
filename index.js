var express = require('express');
var childProcess = require('child_process');
var snapshot = require('./snapshot');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/update', function(request, response) {
  snapshot.take();

  response.send({
      status: 0,
      msg: 'Success'
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
