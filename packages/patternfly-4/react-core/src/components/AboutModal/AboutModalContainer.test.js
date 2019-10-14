"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var AboutModalContainer_1 = require("./AboutModalContainer");
var props = {
    children: 'modal content',
    productName: 'Product Name',
    trademark: 'Trademark and copyright information here',
    brandImageSrc: 'brandImg...',
    brandImageAlt: 'Brand Image',
    backgroundImageSrc: 'backgroundImageSrc...',
    ariaLabelledbyId: 'ariaLablledbyId',
    ariaDescribedById: 'ariaDescribedById'
};
test('About Modal Container Test simple', function () {
    var view = enzyme_1.shallow(<AboutModalContainer_1.AboutModalContainer {...props}>This is ModalBox content</AboutModalContainer_1.AboutModalContainer>);
    expect(view).toMatchSnapshot();
});
test('About Modal Container Test isOpen', function () {
    var view = enzyme_1.shallow(<AboutModalContainer_1.AboutModalContainer title="Test Modal Container title" {...props} isOpen>
      This is ModalBox content
    </AboutModalContainer_1.AboutModalContainer>);
    expect(view).toMatchSnapshot();
});
test('About Modal Container Test with onlose', function () {
    var view = enzyme_1.shallow(<AboutModalContainer_1.AboutModalContainer onClose={function () { return undefined; }} {...props}>
      This is ModalBox content
    </AboutModalContainer_1.AboutModalContainer>);
    expect(view).toMatchSnapshot();
});
