var express = require('express');
var childProcess = require('child_process');
var utils = require('./tools/utils')
var snapshot = require('./snapshot');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.render('pages/index');
});

app.get('/show', function (request, response) {
    response.render('pages/show', {
        imageUrl: './snapshots/' + utils.getMd5(request.query.url) + '.jpg'
    });
});

app.get('/update', function (request, response) {
    var url = decodeURIComponent(request.query.url);
    url = url || 'http://output.jsbin.com/faroxoc';

    snapshot.take(url);

    response.send({
        status: 0,
        msg: 'Success',
        data: {
            url: url
        }
    });
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
