"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var PageSection_1 = require("./PageSection");
jest.mock('./Page');
test('Check page section with no padding example against snapshot', function () {
    var Section = <PageSection_1.PageSection noPadding/>;
    var view = enzyme_1.mount(Section);
    expect(view).toMatchSnapshot();
});
test('Check page main nav section against snapshot', function () {
    var Section = <PageSection_1.PageSection type={PageSection_1.PageSectionTypes.nav}/>;
    var view = enzyme_1.mount(Section);
    expect(view).toMatchSnapshot();
});
test('Check page section with no padding on mobile example against snapshot', function () {
    var Section = <PageSection_1.PageSection noPaddingMobile/>;
    var view = enzyme_1.mount(Section);
    expect(view).toMatchSnapshot();
});
test('Check page section with no fill example against snapshot', function () {
    var Section = <PageSection_1.PageSection isFilled={false}/>;
    var view = enzyme_1.mount(Section);
    expect(view).toMatchSnapshot();
});
test('Check page section with fill example against snapshot', function () {
    var Section = <PageSection_1.PageSection isFilled/>;
    var view = enzyme_1.mount(Section);
    expect(view).toMatchSnapshot();
});
test('Check page section with fill and no padding example against snapshot', function () {
    var Section = <PageSection_1.PageSection isFilled noPadding/>;
    var view = enzyme_1.mount(Section);
    expect(view).toMatchSnapshot();
});
