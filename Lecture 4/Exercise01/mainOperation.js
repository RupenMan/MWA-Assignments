const http = require('http');
const url = require('url');
/**
 * Written on April 5, 2018
 * Reads the file as described by URL
 * @author Rupendra MAHARJAN
 */
const fs = require('fs');

process.on('message', (myPage) => {
    var myFile = fs.readFileSync(`${myPage}`, 'utf8');
    process.send(myFile);
});
