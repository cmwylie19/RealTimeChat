'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getDateFromTime = exports.getDateFromTime = function getDateFromTime(time) {
  if (time === '') {
    return time;
  }
  if (Date.parse(time)) {
    return new Date(time);
  } else if (Date.parse('1/1/1 ' + time)) {
    return new Date('1/1/1 ' + time);
  }
  return time;
};

var formatTime = exports.formatTime = function formatTime(time) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';

  var options = { hour: '2-digit', minute: '2-digit' };
  var parsedTime = getDateFromTime(time);
  if (Date.parse(parsedTime)) {
    return parsedTime.toLocaleString(locale, options);
  }
  return time;
};