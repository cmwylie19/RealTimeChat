"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _ModalContent = require("./ModalContent");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

test('Modal Content Test only body', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_ModalContent.ModalContent, {
    title: "Test Modal Content title",
    id: "id",
    isOpen: true
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Content Test isOpen', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_ModalContent.ModalContent, {
    title: "Test Modal Content title",
    id: "id",
    isOpen: true
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Content Test with footer', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_ModalContent.ModalContent, {
    title: "Test Modal Content title",
    id: "id",
    isOpen: true,
    actions: ['Testing']
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Content test without footer', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_ModalContent.ModalContent, {
    title: "Test Modal Content title",
    id: "id",
    isOpen: true
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Content Test with onclose', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_ModalContent.ModalContent, {
    title: "Test Modal Content title",
    actions: ['Testing footer'],
    isLarge: true,
    onClose: function onClose() {
      return undefined;
    },
    id: "id",
    isOpen: true
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Test with custom header', function () {
  var header = React.createElement("span", {
    id: "test-custom-header"
  }, "TEST");
  var view = (0, _enzyme.shallow)(React.createElement(_ModalContent.ModalContent, {
    header: header,
    title: "test-custom-header-modal",
    actions: ['Testing footer'],
    isLarge: true,
    onClose: function onClose() {
      return undefined;
    },
    id: "id",
    isOpen: true
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Test with custom footer', function () {
  var footer = React.createElement("span", {
    id: "test-custom-footer"
  }, "TEST");
  var view = (0, _enzyme.shallow)(React.createElement(_ModalContent.ModalContent, {
    footer: footer,
    title: "Test Modal Custom Footer",
    isLarge: true,
    onClose: function onClose() {
      return undefined;
    },
    id: "id",
    isOpen: true
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=ModalContent.test.js.map