//user controlls
var mongoose = require('mongoose'),
    User = mongoose.model("User")
ObjectId = mongoose.Types.ObjectId
var auth = require('basic-auth');

//used to register user
exports.createUser = function(req, res, next) {
    var UserModel = new User(req.body);

    User.find({"username": req.body.username}, function(err, oldUserModel) {

        if (err) { 
            res.status(500)
            res.json({
            	"message": "Error occured: " + err
            })
        } else if (oldUserModel[0]) {
//	always use model[0] when using find().limit(1) to get the element from db
	if(process.env.environment === 'debug')
		console.log(oldUserModel[0])
            res.status(403)
            res.json({
                "message": "User " + oldUserModel[0].username + " already exists",
            })
        } else {
            UserModel.save(function(err, User) {
                if (err) {
                    res.status(500);
                    res.json({                        
                        "message": "Error occured: " + err
                })
            } else {
            		res.status(201)
                    res.json({
                        "message":"Successfully created user"
                    })
                }
            })
        }
    }).limit(1)
}

//used to login user
exports.loginUser = function(req, res, next){
	var authUser = auth(req);
	User.find({$and:[{"username":authUser.name}, {"password":authUser.pass}]}, function(err, user){
		
		if(process.env.environment === 'debug')
			{
				console.log(user[0]);
				console.log(req.headers);
				console.log(authUser);
			}
		if(err){
			res.status(500)
			res.json({
				"message":"Error occured " + err
			})
		}else if(user[0] && user[0].username === authUser.name && user[0].password === authUser.pass){
			res.status(200)
			res.json({
				"message": "Found user proceed"
			})
		}else{
			res.status(400)
			res.json({
				"message":"Somethings wrong"
			})
		}
	})
	.limit(1)
}