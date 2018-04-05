/**
 * Written on April 4, 2019
 * Unzips the file test.txt.zip located in the same folder as this module
 * Uses stream technology to unzip the file 
 * @author Rupendra MAHARJAN
 */
const fs = require('fs');
const zlib = require('zlib');
const gUnzip = zlib.createGunzip();
const readable = fs.createReadStream('./test.txt.zip');
const uncompressed = fs.createWriteStream('./newTest.txt');
readable.pipe(gUnzip).pipe(uncompressed);