"use strict";

var React = _interopRequireWildcard(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _enzyme = require("enzyme");

var _AboutModal = require("./AboutModal");

var _constants = require("../../helpers/constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var mockListener = jest.spyOn(ReactDOM, 'createPortal');
jest.spyOn(document, 'createElement');
jest.spyOn(document, 'addEventListener');
mockListener.mockImplementation(function (node) {
  return node;
});
var props = {
  onClose: jest.fn(),
  children: 'modal content',
  productName: 'Product Name',
  trademark: 'Trademark and copyright information here',
  brandImageSrc: 'brandImg...',
  brandImageAlt: 'Brand Image',
  logoImageSrc: 'logoImg...',
  logoImageAlt: 'AboutModal Logo'
};
test('AboutModal creates a container element once for div', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_AboutModal.AboutModal, props, " Test About Modal "));
  view.update();
  expect(document.createElement).toBeCalledWith('div');
  expect(document.createElement).toHaveBeenCalledTimes(1);
});
test('About Modal closes with escape', function () {
  (0, _enzyme.shallow)(React.createElement(_AboutModal.AboutModal, _extends({}, props, {
    isOpen: true
  }), "Test About Modal"));

  var _mock$calls$ = _slicedToArray(document.addEventListener.mock.calls[0], 2),
      event = _mock$calls$[0],
      handler = _mock$calls$[1];

  expect(event).toBe('keydown');
  handler({
    keyCode: _constants.KEY_CODES.ESCAPE_KEY
  });
  expect(props.onClose).toBeCalled();
});
test('modal does not call onClose for esc key if it is not open', function () {
  (0, _enzyme.shallow)(React.createElement(_AboutModal.AboutModal, props));

  var _mock$calls$2 = _slicedToArray(document.addEventListener.mock.calls[0], 2),
      event = _mock$calls$2[0],
      handler = _mock$calls$2[1];

  expect(event).toBe('keydown');
  handler({
    keyCode: _constants.KEY_CODES.ESCAPE_KEY
  });
  expect(props.onClose).not.toBeCalled();
});
test('Each modal is given new ariaDescribedById and ariaLabelledbyId', function () {
  var first = new _AboutModal.AboutModal(props);
  var second = new _AboutModal.AboutModal(props);
  expect(first.ariaLabelledBy).not.toBe(second.ariaLabelledBy);
  expect(first.ariaDescribedBy).not.toBe(second.ariaDescribedBy);
});
test('Console error is generated when the logoImageSrc is provided without logoImageAlt', function () {
  var noImgAltrops = {
    onClose: jest.fn(),
    children: 'modal content',
    productName: 'Product Name',
    trademark: 'Trademark and copyright information here',
    brandImageSrc: 'brandImg...',
    logoImageSrc: 'logoImg...'
  };
  var myMock = jest.fn();
  global.console = {
    error: myMock
  };
  var JSAboutModal = _AboutModal.AboutModal;
  (0, _enzyme.shallow)(React.createElement(JSAboutModal, noImgAltrops, " Test About Modal "));
  expect(myMock).toBeCalled();
});
//# sourceMappingURL=AboutModal.test.js.map