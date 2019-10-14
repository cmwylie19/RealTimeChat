"use strict";
var _a;
exports.__esModule = true;
var BackgroundImage_1 = require("./BackgroundImage");
var React = require("react");
var enzyme_1 = require("enzyme");
var images = (_a = {},
    _a[BackgroundImage_1.BackgroundImageSrc.lg] = '/assets/images/pfbg_1200.jpg',
    _a[BackgroundImage_1.BackgroundImageSrc.sm] = '/assets/images/pfbg_768.jpg',
    _a[BackgroundImage_1.BackgroundImageSrc.sm2x] = '/assets/images/pfbg_768@2x.jpg',
    _a[BackgroundImage_1.BackgroundImageSrc.xs] = '/assets/images/pfbg_576.jpg',
    _a[BackgroundImage_1.BackgroundImageSrc.xs2x] = '/assets/images/pfbg_576@2x.jpg',
    _a[BackgroundImage_1.BackgroundImageSrc.filter] = '/assets/images/background-filter.svg',
    _a);
Object.values([true, false]).forEach(function (isRead) {
    test('BackgroundImage', function () {
        var view = enzyme_1.shallow(<BackgroundImage_1.BackgroundImage src={images}/>);
        expect(view).toMatchSnapshot();
    });
});
test('allows passing in a single string as the image src', function () {
    var view = enzyme_1.shallow(<BackgroundImage_1.BackgroundImage src={images.lg}/>);
    expect(view).toMatchSnapshot();
});
