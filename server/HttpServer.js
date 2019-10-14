"use strict";
exports.__esModule = true;
/**
 * HTTPS server example.
 */
var http_1 = require("http");
var host = 'localhost';
var port = 1337;
var server = http_1.createServer(function (_, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});
server.listen(port, host, function () { console.log("Server running at " + host + ":" + port); });
