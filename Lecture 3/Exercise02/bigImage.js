/**
 * Written on April 4, 2018
 * Creates a server that responses the client with big image having size greater than 3MB.
 * Uses the IP address 127.0.0.1 and port number 8013
 * Users are kindly requested to load url 127.0.0.1:8013 after the program is executed
 * @author Rupendra MAHARJAN
 */
const fs = require('fs');
const http = require('http');
const server = http.createServer();
server.on('request', (req, res) =>{
    const src = fs.createReadStream('./edward.jpg');
    src.pipe(res);
}).listen(8013,"127.0.0.1");