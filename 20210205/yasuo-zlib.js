const fs=require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();

const rs = fs.createReadStream('www/1.html');
const ws = fs.createWriteStream('www/2.html.gz');

rs.pipe(gzip).pipe(ws);