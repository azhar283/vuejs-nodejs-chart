var config = require('./config');

var connectionStr = `mongodb://${config.database.uname}:${process.env.MONGO_TEST_PWD}@${config.database.path}`;



module.exports = {
    connectionStr: connectionStr
}