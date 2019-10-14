"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _AboutModalBoxHero = require("./AboutModalBoxHero");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

test('test About Modal Box SHero', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_AboutModalBoxHero.AboutModalBoxHero, null));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=AboutModalBoxHero.test.js.map