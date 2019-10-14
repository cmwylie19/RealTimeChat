"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var enzyme_1 = require("enzyme");
var AboutModal_1 = require("./AboutModal");
var constants_1 = require("../../helpers/constants");
var mockListener = jest.spyOn(ReactDOM, 'createPortal');
jest.spyOn(document, 'createElement');
jest.spyOn(document, 'addEventListener');
mockListener.mockImplementation(function (node) { return node; });
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
    var view = enzyme_1.shallow(<AboutModal_1.AboutModal {...props}> Test About Modal </AboutModal_1.AboutModal>);
    view.update();
    expect(document.createElement).toBeCalledWith('div');
    expect(document.createElement).toHaveBeenCalledTimes(1);
});
test('About Modal closes with escape', function () {
    enzyme_1.shallow(<AboutModal_1.AboutModal {...props} isOpen>
     Test About Modal
   </AboutModal_1.AboutModal>);
    var _a = document.addEventListener.mock.calls[0], event = _a[0], handler = _a[1];
    expect(event).toBe('keydown');
    handler({ keyCode: constants_1.KEY_CODES.ESCAPE_KEY });
    expect(props.onClose).toBeCalled();
});
test('modal does not call onClose for esc key if it is not open', function () {
    enzyme_1.shallow(<AboutModal_1.AboutModal {...props}/>);
    var _a = document.addEventListener.mock.calls[0], event = _a[0], handler = _a[1];
    expect(event).toBe('keydown');
    handler({ keyCode: constants_1.KEY_CODES.ESCAPE_KEY });
    expect(props.onClose).not.toBeCalled();
});
test('Each modal is given new ariaDescribedById and ariaLabelledbyId', function () {
    var first = new AboutModal_1.AboutModal(props);
    var second = new AboutModal_1.AboutModal(props);
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
    global.console = { error: myMock };
    var JSAboutModal = AboutModal_1.AboutModal;
    enzyme_1.shallow(<JSAboutModal {...noImgAltrops}> Test About Modal </JSAboutModal>);
    expect(myMock).toBeCalled();
});
