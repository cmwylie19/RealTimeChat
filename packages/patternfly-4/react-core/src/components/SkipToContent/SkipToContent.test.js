"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var SkipToContent_1 = require("./SkipToContent");
var props = {};
test('Verify Skip To Content', function () {
    var view = enzyme_1.shallow(<SkipToContent_1.SkipToContent href="#main-content" {...props}/>);
    // Add a useful assertion here.
    expect(view).toMatchSnapshot();
});
test('Verify Skip To Content if forced to display', function () {
    var view = enzyme_1.shallow(<SkipToContent_1.SkipToContent href="#main-content" {...props} show/>);
    // Add a useful assertion here.
    expect(view).toMatchSnapshot();
});
