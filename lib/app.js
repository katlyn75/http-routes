const http = require('http');


module.exports = http.createServer((req, res) => {        res.write('rock');
    res.end();

});

