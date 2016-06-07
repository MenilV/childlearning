var mongoose = require('mongoose'),
    User = mongoose.model("User")
ObjectId = mongoose.Types.ObjectId

exports.createUser = function(req, res, next) {
    var UserModel = new User(req.body);

    User.findOne({"username": req.body.username}, function(err, oldUserModel) {

        console.log(oldUserModel)
        if (err) { 
            res.status(500);
        } else if (oldUserModel) {
            res.status(403)
            res.json({
                "error": oldUserModel.length,
            })
        } else {
            UserModel.save(function(err, User) {
                if (err) {
                    res.status(500);
                    res.json({
                        type: false,
                        data: "Error occured: " + err
                })
            }    else {
                    res.json({
                        type: true,
                        data: User
                    })
                }
            })
        }
    })
}
