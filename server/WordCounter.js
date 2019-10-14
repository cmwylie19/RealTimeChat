"use strict";
exports.__esModule = true;
/**
 * Reads file then shows how many matching occurrences of a word is found
 */
var fs_1 = require("fs");
var path_1 = require("path");
var path = path_1.join(__dirname, '../lorem.txt');
var ipsum = fs_1.readFileSync(path, { encoding: 'utf8' });
var word = 'ut';
var re = new RegExp(word, 'gm');
var matching = ipsum.match(re);
console.log("Number of occurrences of the \"" + word + "\" word is: " + matching.length);
