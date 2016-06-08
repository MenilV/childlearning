process.env['MONGO_URL'] = 'mongodb://127.0.0.1:27017/test';
process.env['environment'] = 'debug';
// process.env['environment'] = 'production';
require('./app/core/mongoose')
require('./app/core/router')