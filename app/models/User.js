var mongoose = require("mongoose");
var Schema   = mongoose.Schema;
var Child = require('./../models/Child.js');
var UserSchema = new Schema({
    username: String,
    password: String,
   	children: [Child]
});
mongoose.model('User', UserSchema);