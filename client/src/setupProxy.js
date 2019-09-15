const proxy = require('http-proxy-middleware');

const { server } = require('../../server/server');

module.exports = function (app) {
    server.applyMiddleware({ app });
};




