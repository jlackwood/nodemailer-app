const http = require('http');
const { server } =require('./server.js');

http.createServer(server).listen(8080, () => {
    console.log('Server is listening on port 8080');
});