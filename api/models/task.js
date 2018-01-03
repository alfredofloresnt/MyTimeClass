var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var user = new Schema({
            "taskid": String,
            "class": String,
            "text": String,
            "endtime": String
});


module.exports = mongoose.model('task', user);
