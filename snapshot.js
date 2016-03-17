var shellRunner = require('./tools/shellRunner').setCommand(__dirname + '/bin/wkhtmltoimage');

var take = function (url){
    var url = 'http://output.jsbin.com/faroxoc';
    var options = {
        output: 'public/snapshots/faroxoc.jpg'
    };

    var child = shellRunner.run(url, options);

    child.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    child.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    child.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });

    return child;
};

module.exports = {
    take: take
};
