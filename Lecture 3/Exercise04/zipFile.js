/**
 * Written on April 4, 2018
 * Creates a zip file for the given file
 * @author Rupendra MAHARJAN
 */
var fs = require('fs');
var zlib = require('zlib');
var gzip = zlib.createGzip();
var readable = fs.createReadStream('./test.txt');
var compressed = fs.createWriteStream('./test.txt.zip');
readable.pipe(gzip).pipe(compressed);