var utils = require('./tools/utils')
var shellRunner = require('./tools/shellRunner').setCommand(__dirname +
    '/bin/wkhtmltoimage');
var imagesPath = 'public/snapshots/';

var take = function (url) {
    var options = {
        output: imagesPath + utils.getMd5(url) + '.jpg',
        quality: 100
    };

    console.log('run', url, options);

    var child = shellRunner.run(url, options);

    child.stdout.on('data', function (data){
      console.log('stdout:', data);
    });

    child.stderr.on('data', function (data) {
      console.log('stderr:', data);
    });

    child.on('close', function (code) {
      console.log('child process exited with code:', code);
    });

    return child;
};

module.exports = {
    take: take
};
