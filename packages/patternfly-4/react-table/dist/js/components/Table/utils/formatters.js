"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTitle = void 0;

var defaultTitle = function defaultTitle(data) {
  return data && data.hasOwnProperty('title') ? data.title : data;
};

exports.defaultTitle = defaultTitle;
//# sourceMappingURL=formatters.js.map