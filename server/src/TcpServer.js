"use strict";
exports.__esModule = true;
/**
 * TCP server example.
 */
var net_1 = require("net");
var host = 'localhost';
var port = 1337;
var server = net_1.createServer(function (socket) {
    socket.write('Echo server\r\n');
    socket.pipe(socket);
});
server.listen(port, host, function () { console.log("Server running at " + host + ":" + port); });
