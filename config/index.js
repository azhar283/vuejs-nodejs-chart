var config = require('./config');

var connectionStr = `mongodb://${config.database.uname}:${config.database.pwd}@${config.database.path}`;

module.exports = {
    connectionStr: connectionStr
}