var utils = require('./tools/utils')
var shellRunner = require('./tools/shellRunner').setCommand('wkhtmltoimage');
var imagesPath = 'public/snapshots/';

var take = function (url) {
    var options = {
        output: imagesPath + utils.getMd5(url) + '.jpg',
        quality: 100
    };

    console.log('run', url, options);

    var wkhtmltoimage = shellRunner.run(url, options);

    wkhtmltoimage.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    wkhtmltoimage.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    wkhtmltoimage.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });

    return child;
};

module.exports = {
    take: take
};
