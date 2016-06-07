var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var ActivitySchema = new Schema({
    name: String,
    time: String,
    repeat: {type: Boolean, default: true}
});
mongoose.model('Activity', ActivitySchema);