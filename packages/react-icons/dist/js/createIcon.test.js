"use strict";

var _react = _interopRequireDefault(require("react"));

var _createIcon = _interopRequireDefault(require("./createIcon"));

var _enzyme = require("enzyme");

var _common = require("./common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var iconDef = {
  name: 'IconName',
  width: 10,
  height: 20,
  svgPath: 'svgPath'
};
var Icon = (0, _createIcon["default"])(iconDef);
test('sets correct viewBox', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(Icon, null));
  expect(view.find('svg').prop('viewBox')).toBe("0 0 ".concat(iconDef.width, " ").concat(iconDef.height));
});
test('sets correct svgPath', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(Icon, null));
  expect(view.find('path').prop('d')).toBe(iconDef.svgPath);
});
test('sets correct displayName', function () {
  expect(Icon.displayName).toBe(iconDef.name);
});
test('height and width are set from size', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(Icon, {
    size: _common.IconSize.sm
  }));
  expect(view.find('svg').prop('width')).toMatchSnapshot('width');
  expect(view.find('svg').prop('height')).toMatchSnapshot('height');
});
test('aria-hidden is true if no title is specified', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(Icon, null));
  expect(view.find('svg').prop('aria-hidden')).toBe(true);
});
test('title is not renderd if a title is not passed', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(Icon, null));
  expect(view.find('title').exists()).toBe(false);
});
test('aria-labelledby is null if a title is not passed', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(Icon, null));
  expect(view.find('svg').prop('aria-labelledby')).toBe(null);
});
test('title is rendered', function () {
  var title = 'icon title';
  var view = (0, _enzyme.shallow)(_react["default"].createElement(Icon, {
    title: title
  }));
  expect(view.find('title').text()).toBe(title);
});
test('aria-labelledby matches title id', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(Icon, {
    title: "icon title"
  }));
  var labelledby = view.find('svg').prop('aria-labelledby');
  var id = view.find('title').prop('id');
  expect(labelledby).toBe(id);
});
test('ids should be unique for each rendered icon', function () {
  var first = (0, _enzyme.shallow)(_react["default"].createElement(Icon, {
    title: "icon title"
  }));
  var second = (0, _enzyme.shallow)(_react["default"].createElement(Icon, {
    title: "icon title"
  }));
  expect(first.find('title').prop('id')).not.toBe(second.find('title').prop('id'));
});
test('additional props should be spread to the root svg element', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(Icon, {
    "data-testid": "icon"
  }));
  expect(view.find('svg')).toMatchSnapshot();
});
//# sourceMappingURL=createIcon.test.js.map