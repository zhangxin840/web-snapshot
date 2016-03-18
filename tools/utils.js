var crypto = require('crypto');

utils = {};

utils.getMd5 = function (str){
    var hash = crypto.createHash('md5').update(str).digest('hex');
    return hash;
};

module.exports = utils;
