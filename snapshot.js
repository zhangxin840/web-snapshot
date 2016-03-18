var fs = require('fs');
var mkdirp = require('mkdirp');
var utils = require('./tools/utils');
var shellRunner = require('./tools/shellRunner').setCommand('wkhtmltoimage');

var basePath = 'public/snapshots/';

var getFilePath = function (url, options) {
    var format = '.jpg';
    return basePath + utils.getMd5(url) + format;
};

var take = function (url, options) {
    var options = options || {
        quality: 100
    };
    var filePath = getFilePath(url, options);
    var childProcess;

    console.log('Start snapshot', url, options, filePath);

    childProcess = shellRunner.run(url, options);

    mkdirp(basePath, function (err) {
      if (err) return;
      childProcess.stdout.pipe(fs.createWriteStream(filePath));
    });

    // childProcess.stdout.on('data', (data) => {
    //     console.log(`stdout: ${data}`);
    // });

    childProcess.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });

    childProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });

    return childProcess;
};

module.exports = {
    take: take
};
