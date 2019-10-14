"use strict";
exports.__esModule = true;
/**
 * API example server.
 */
var http_1 = require("http");
var server = http_1.createServer(function (sent, res) {
    var body = [];
    sent.on('data', function (data) { return body.push(data); });
    sent.on('error', function (err) { console.error(err); });
    sent.on('end', function () {
        var message = Buffer.concat(body).toString();
        console.log(message);
    });
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('pong');
});
server.listen(8080, 'localhost', function () { console.log('Server running at https://localhost:8080/'); });
