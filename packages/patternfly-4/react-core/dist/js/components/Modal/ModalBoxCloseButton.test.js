"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _ModalBoxCloseButton = require("./ModalBoxCloseButton");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

test('ModalBoxCloseButton Test', function () {
  var mockfn = jest.fn();
  var view = (0, _enzyme.shallow)(React.createElement(_ModalBoxCloseButton.ModalBoxCloseButton, {
    className: "test-box-close-button-class",
    onClose: mockfn
  }));
  expect(view).toMatchSnapshot();
  view.find('.test-box-close-button-class').at(0).simulate('click');
  expect(mockfn.mock.calls).toHaveLength(1);
});
//# sourceMappingURL=ModalBoxCloseButton.test.js.map