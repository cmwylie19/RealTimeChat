"use strict";

var React = _interopRequireWildcard(require("react"));

var _Level = require("./Level");

var _gutters = require("../../styles/gutters");

var _LevelItem = require("./LevelItem");

var _enzyme = require("enzyme");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

Object.values(_gutters.GutterSize).forEach(function (gutter) {
  test("Gutter ".concat(gutter), function () {
    var view = (0, _enzyme.shallow)(React.createElement(_Level.Level, {
      gutter: gutter
    }));
    expect(view).toMatchSnapshot();
  });
});
test('item', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_LevelItem.LevelItem, null, "Level Item"));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=Level.test.js.map