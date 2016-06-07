var mongoose = require("mongoose");
var Schema   = mongoose.Schema;
var Activity = require('./../models/Activity.js');
var User = require('./../models/User.js');
var ChildSchema = new Schema({
    name: String,
   	activities: [Activity],
    parent: User
});
mongoose.model('Child', ChildSchema);