const rocks = require('/routes/rocks');
const { parse } = require('url');
const notFound = require('routes/not-found');
const http = require('http');

const routes = {
    __proto__: null,
    rocks
};


module.exports = http.createServer((req, res) => {    
    const key = parse(req.url).pathname.slice(1).split('/')[0];
    const route = routes[key] || notFound;
    route(req, res);
    
    res.write('rock');
    res.end();

});

