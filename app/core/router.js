var restify = require('restify')
    , fs = require('fs')


var controllers = {}
    , controllers_path = process.cwd() + '/app/controllers'
fs.readdirSync(controllers_path).forEach(function (file) {
    if (file.indexOf('.js') != -1) {
        controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
    }
})

var server = restify.createServer();

server
    .use(restify.fullResponse())
    .use(restify.bodyParser())

// User Start
server.post("/user", controllers.user.createUser) // register user
server.get("/user", controllers.user.loginUser) // login user
// User End

// Child Start
// server.post("/child", controllers.child.createChild) // create child
// server.put("/child", controllers.child.editChild) // edit child
// server.get("/child", controllers.child.getChildren) // get children
// server.del("/child", controllers.child.deleteChild) // delete child
// Child End

// Activity Start
server.post("/activity", controllers.activity.createActivity)

// Activity End
// // Article Start
// server.post("/articles", controllers.article.createArticle)
// server.put("/articles/:id", controllers.article.updateArticle)
// server.del("/articles/:id", controllers.article.deleteArticle)
// server.get({path: "/articles/:id", version: "1.0.0"}, controllers.article.viewArticle)
// server.get({path: "/articles/:id", version: "2.0.0"}, controllers.article.viewArticle_v2)

// // This is comment operations referenced in article
// server.put("/articles/:id/comments", controllers.article.createArticleComment)
// // Article End

// // Comment Start
// // You can also operate on commands in Comment resource. Some of the URI below, refers to above URIs for article
// server.put("/comments/:id", controllers.comment.updateComment)
// server.del("/comments/:id", controllers.comment.deleteComment)
// server.get("/comments/:id", controllers.comment.viewComment)
// // Comment End

var port = process.env.PORT || 3000;
server.listen(port, function (err) {
    if (err)
        console.error(err)
    else
        console.log('App is ready at : ' + port)
})

if (process.env.environment == 'production')
    process.on('uncaughtException', function (err) {
        console.error(JSON.parse(JSON.stringify(err, ['stack', 'message', 'inner'], 2)))
    })