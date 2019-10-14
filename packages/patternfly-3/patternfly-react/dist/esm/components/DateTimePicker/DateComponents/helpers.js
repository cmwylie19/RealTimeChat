export var addDays = function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export var addMonths = function addMonths(date, months) {
  var result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
};

export var addYears = function addYears(date, years) {
  var result = new Date(date);
  result.setYear(result.getFullYear() + years);
  return result;
};

export var isEqualDate = function isEqualDate(date1, date2) {
  return date1.getYear() === date2.getYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
};

export var isWeekend = function isWeekend(date) {
  return date.getDay() === 6 || date.getDay() === 5;
};

export var getMonthStart = function getMonthStart(date) {
  date.setDate(1);
  return date;
};

export var getWeekStart = function getWeekStart(date) {
  return addDays(date, (7 - date.getDay()) % 7);
};

export var helpers = {
  addDays: addDays,
  addMonths: addMonths,
  isEqualDate: isEqualDate,
  isWeekend: isWeekend,
  getMonthStart: getMonthStart,
  getWeekStart: getWeekStart
};

export default helpers;