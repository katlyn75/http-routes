const app = require('/lib/app');
const http = require('http');

const PORT = process.env.port || 3000;
const server = http.createServer(app);



module.exports = server.listen(PORT, () => {
    console.log('listening at port', server.address().port()); //eslint-disable-line
});





