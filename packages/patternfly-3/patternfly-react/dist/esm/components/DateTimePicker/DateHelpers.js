export var formatDate = function formatDate(date) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';

  var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  if (Date.parse(date)) {
    var parsedValue = new Date(date);
    return Intl.DateTimeFormat(locale, options).format(parsedValue);
  }
  return date;
};