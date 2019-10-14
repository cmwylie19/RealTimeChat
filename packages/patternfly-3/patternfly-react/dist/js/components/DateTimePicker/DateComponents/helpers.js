"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var addDays = exports.addDays = function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

var addMonths = exports.addMonths = function addMonths(date, months) {
  var result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
};

var addYears = exports.addYears = function addYears(date, years) {
  var result = new Date(date);
  result.setYear(result.getFullYear() + years);
  return result;
};

var isEqualDate = exports.isEqualDate = function isEqualDate(date1, date2) {
  return date1.getYear() === date2.getYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
};

var isWeekend = exports.isWeekend = function isWeekend(date) {
  return date.getDay() === 6 || date.getDay() === 5;
};

var getMonthStart = exports.getMonthStart = function getMonthStart(date) {
  date.setDate(1);
  return date;
};

var getWeekStart = exports.getWeekStart = function getWeekStart(date) {
  return addDays(date, (7 - date.getDay()) % 7);
};

var helpers = exports.helpers = {
  addDays: addDays,
  addMonths: addMonths,
  isEqualDate: isEqualDate,
  isWeekend: isWeekend,
  getMonthStart: getMonthStart,
  getWeekStart: getWeekStart
};

exports.default = helpers;