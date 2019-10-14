"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _constants = require("../../helpers/constants");

var _js = require("../../../../react-styles/dist/js");

var _backdrop = _interopRequireDefault(require("@patternfly/react-styles/css/components/Backdrop/backdrop"));

var _Modal = require("./Modal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

jest.spyOn(document, 'createElement');
jest.spyOn(document.body, 'addEventListener');
var props = {
  title: 'Modal',
  onClose: jest.fn(),
  isOpen: false,
  children: 'modal content'
};
test('Modal creates a container element once for div', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Modal.Modal, props));
  view.update();
  expect(document.createElement).toBeCalledWith('div');
  expect(document.createElement).toHaveBeenCalledTimes(1);
});
test('modal closes with escape', function () {
  (0, _enzyme.shallow)(React.createElement(_Modal.Modal, _extends({}, props, {
    isOpen: true,
    appendTo: document.body
  })));
  var mock = document.body.addEventListener.mock;

  var _mock$calls$ = _slicedToArray(mock.calls[0], 2),
      event = _mock$calls$[0],
      handler = _mock$calls$[1];

  expect(event).toBe('keydown');
  handler({
    keyCode: _constants.KEY_CODES.ESCAPE_KEY
  });
  expect(props.onClose).toBeCalled();
});
test('modal does not call onClose for esc key if it is not open', function () {
  (0, _enzyme.shallow)(React.createElement(_Modal.Modal, props));
  var mock = document.body.addEventListener.mock;

  var _mock$calls$2 = _slicedToArray(mock.calls[0], 2),
      event = _mock$calls$2[0],
      handler = _mock$calls$2[1];

  expect(event).toBe('keydown');
  handler({
    keyCode: _constants.KEY_CODES.ESCAPE_KEY
  });
  expect(props.onClose).not.toBeCalled();
});
test('Each modal is given a new id', function () {
  var first = (0, _enzyme.shallow)(React.createElement(_Modal.Modal, props));
  var second = (0, _enzyme.shallow)(React.createElement(_Modal.Modal, props));
  expect(first.instance().id).not.toBe(second.instance().id);
});
test('modal removes body backdropOpen class when removed', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Modal.Modal, _extends({}, props, {
    isOpen: true
  })));
  view.update();
  expect(document.body.className).toContain((0, _js.css)(_backdrop["default"].backdropOpen));
  view.setProps({
    isOpen: false
  });
  view.update();
  expect(document.body.className).not.toContain((0, _js.css)(_backdrop["default"].backdropOpen));
});
test('modal shows/hides the close button based on showClose (default true)', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Modal.Modal, _extends({}, props, {
    isOpen: true
  })));
  view.update();
  expect(view.exists('.pf-c-modal-box .pf-c-button')).toBeTruthy();
  view.setProps({
    showClose: false
  });
  view.update();
  expect(view.exists('.pf-c-modal-box .pf-c-button')).toBeFalsy();
});
//# sourceMappingURL=Modal.test.js.map