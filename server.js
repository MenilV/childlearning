process.env['MONGO_URL'] = 'mongodb://127.0.0.1:27017/test';
require('./app/core/mongoose')
require('./app/core/router')