"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _AboutModalBox = require("./AboutModalBox");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

test('AboutModalBox Test', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_AboutModalBox.AboutModalBox, {
    "aria-labelledby": "id",
    "aria-describedby": "id2"
  }, "This is a AboutModalBox"));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=AboutModalBox.test.js.map