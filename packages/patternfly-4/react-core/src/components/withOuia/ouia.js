"use strict";
exports.__esModule = true;
exports.isOUIAEnvironment = function () { return typeof window !== 'undefined' && window.localStorage.ouia && window.localStorage.ouia.toLowerCase() === 'true' || false; };
exports.generateOUIAId = function () { return typeof window !== 'undefined' && window.localStorage['ouia-generate-id'] && window.localStorage['ouia-generate-id'].toLowerCase() === 'true' || false; };
var id = 0;
exports.getUniqueId = function () { return id++; };
