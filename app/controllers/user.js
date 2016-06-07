var mongoose = require('mongoose'),
    User = mongoose.model("User")
ObjectId = mongoose.Types.ObjectId

exports.createUser = function(req, res, next) {
    var UserModel = new User(req.body);
    var OldUserModel = User.findOne({'username':req.body.username});
    res.json({
                type: true,
                data: OldUserModel
            })

    UserModel.save(function(err, User) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            res.json({
                type: true,
                data: User
            })
        }
    })
}
