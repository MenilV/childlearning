var mongoose = require('mongoose'),
    Activity = mongoose.model("Activity")
ObjectId = mongoose.Types.ObjectId

exports.createActivity = function(req, res, next) {
    var ActivityModel = new Activity(req.body);
    //var OldActivityModel = Activity.findOne({'name':req.body.name});
    // res.json({
    //             type: true,
    //             data: OldUserModel
    //         })

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
