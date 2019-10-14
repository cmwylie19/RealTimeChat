"use strict";
exports.__esModule = true;
var https_1 = require("https");
var response = function (res) {
    var statusCode = res.statusCode;
    var chunk = '';
    if (statusCode !== 200) {
        console.error(new Error("[Request status " + statusCode + "] Not accepted"));
    }
    else {
        res.on('error', console.error)
            .on('uncaughtException', console.error)
            .on('data', function (data) { return chunk += data; })
            .on('end', function () {
            var result = JSON.parse(chunk);
            console.log(result);
        });
    }
};
var search = 'microsoft';
var query = "action=query&format=json&list=search&srsearch=" + encodeURI(search);
var path = "/w/api.php?" + query;
var options = {
    path: path,
    method: 'GET',
    hostname: 'en.wikipedia.org',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'text/html'
    }
};
var wikipedia = https_1.request(options);
wikipedia.on('error', console.error)
    .on('response', response)
    .end();
