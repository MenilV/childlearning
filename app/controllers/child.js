//child controlls
var mongoose = require('mongoose'),
    Child = mongoose.model("Child")
ObjectId = mongoose.Types.ObjectId
var auth = require('basic-auth');

// used to create a new child
// exports.createUser = function(req, res, next) {
//     var ChildModel = new Child(req.body);
// 	User.find({$and:[{"username":authUser.name}, {"password":authUser.pass}]}, function(err, user){
		
// 		if(process.env.environment === 'debug')
// 			{
// 				console.log(user[0]);
// 				console.log(req.headers);
// 				console.log(authUser);
// 			}
// 		if(err){
// 			res.status(500)
// 			res.json({
// 				"message":"Error occured " + err
// 			})
// 		}else if(user[0] && user[0].username === authUser.name && user[0].password === authUser.pass){
// 			res.status(200)
// 			res.json({
// 				"message": "Found user proceed"
// 			})
//   //  User.find({"username": req.body.username}, function(err, oldUserModel) {
// 			}
// 	}).limit(1)
// }