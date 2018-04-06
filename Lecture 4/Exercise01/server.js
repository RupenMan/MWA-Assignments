/**
 * Written on April 5, 2018
 * Fork the process that reads file in mainOperation.js
 * After running the program, users are kindly requested to browse the page
 * with url: http://localhost:4010/?url=path/to/my/file.txt
 * @author Rupendra MAHARJAN
 */
const http = require('http');
const url = require('url');
const fs = require('fs');
const { fork } = require('child_process');

const hostname = 'localhost';
const port = 4010;

function onRequest(request, response) {
    const childProcess = fork('./mainOperation.js');
    const myUrl = url.parse(request.url, true);
    if (request.url === `/${myUrl.search}`) {
        childProcess.send(`${myUrl.query.url}`);
    }
    childProcess.on('message', myFile => {
        response.end(`My output is ${myFile}`);
    });
}

http.createServer(onRequest).listen(port, hostname);