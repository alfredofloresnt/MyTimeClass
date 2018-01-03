var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var user = new Schema({
            "className": String,
            "color": String,
            "secColor": String
});


module.exports = mongoose.model('class', user);
