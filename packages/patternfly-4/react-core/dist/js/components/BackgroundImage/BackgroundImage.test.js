"use strict";

var _BackgroundImage = require("./BackgroundImage");

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _images;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var images = (_images = {}, _defineProperty(_images, _BackgroundImage.BackgroundImageSrc.lg, '/assets/images/pfbg_1200.jpg'), _defineProperty(_images, _BackgroundImage.BackgroundImageSrc.sm, '/assets/images/pfbg_768.jpg'), _defineProperty(_images, _BackgroundImage.BackgroundImageSrc.sm2x, '/assets/images/pfbg_768@2x.jpg'), _defineProperty(_images, _BackgroundImage.BackgroundImageSrc.xs, '/assets/images/pfbg_576.jpg'), _defineProperty(_images, _BackgroundImage.BackgroundImageSrc.xs2x, '/assets/images/pfbg_576@2x.jpg'), _defineProperty(_images, _BackgroundImage.BackgroundImageSrc.filter, '/assets/images/background-filter.svg'), _images);
Object.values([true, false]).forEach(function (isRead) {
  test('BackgroundImage', function () {
    var view = (0, _enzyme.shallow)(React.createElement(_BackgroundImage.BackgroundImage, {
      src: images
    }));
    expect(view).toMatchSnapshot();
  });
});
test('allows passing in a single string as the image src', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_BackgroundImage.BackgroundImage, {
    src: images.lg
  }));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=BackgroundImage.test.js.map