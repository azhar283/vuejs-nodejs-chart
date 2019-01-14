var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var indexSchema = new Schema({
    Period: Date,
    Open: Number,
    High: Number,
    Low: Number,
    Close: Number,
    Index: String
});

var IndexPerformance = mongoose.model('IndexPerformance', indexSchema);

module.exports = IndexPerformance;