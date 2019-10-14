"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closest = closest;
var matches = exports.matches = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

if (!Element.prototype.matches) {
  Element.prototype.matches = matches;
}

function closest(selector) {
  var el = this;
  if (document.documentElement.contains(el)) {
    while (el && el.nodeType === 1) {
      if (el.matches(selector)) {
        return el;
      }
      el = el.parentElement || el.parentNode;
    }
  }
  return null;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = closest;
}

exports.default = closest;