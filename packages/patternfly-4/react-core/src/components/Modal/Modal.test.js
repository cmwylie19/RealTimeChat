"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var constants_1 = require("../../helpers/constants");
var js_1 = require("../../../../react-styles/dist/js");
var backdrop_1 = require("@patternfly/react-styles/css/components/Backdrop/backdrop");
var Modal_1 = require("./Modal");
jest.spyOn(document, 'createElement');
jest.spyOn(document.body, 'addEventListener');
var props = {
    title: 'Modal',
    onClose: jest.fn(),
    isOpen: false,
    children: 'modal content'
};
test('Modal creates a container element once for div', function () {
    var view = enzyme_1.shallow(<Modal_1.Modal {...props}/>);
    view.update();
    expect(document.createElement).toBeCalledWith('div');
    expect(document.createElement).toHaveBeenCalledTimes(1);
});
test('modal closes with escape', function () {
    enzyme_1.shallow(<Modal_1.Modal {...props} isOpen appendTo={document.body}/>);
    var mock = document.body.addEventListener.mock;
    var _a = mock.calls[0], event = _a[0], handler = _a[1];
    expect(event).toBe('keydown');
    handler({ keyCode: constants_1.KEY_CODES.ESCAPE_KEY });
    expect(props.onClose).toBeCalled();
});
test('modal does not call onClose for esc key if it is not open', function () {
    enzyme_1.shallow(<Modal_1.Modal {...props}/>);
    var mock = document.body.addEventListener.mock;
    var _a = mock.calls[0], event = _a[0], handler = _a[1];
    expect(event).toBe('keydown');
    handler({ keyCode: constants_1.KEY_CODES.ESCAPE_KEY });
    expect(props.onClose).not.toBeCalled();
});
test('Each modal is given a new id', function () {
    var first = enzyme_1.shallow(<Modal_1.Modal {...props}/>);
    var second = enzyme_1.shallow(<Modal_1.Modal {...props}/>);
    expect(first.instance().id).not.toBe(second.instance().id);
});
test('modal removes body backdropOpen class when removed', function () {
    var view = enzyme_1.shallow(<Modal_1.Modal {...props} isOpen/>);
    view.update();
    expect(document.body.className).toContain(js_1.css(backdrop_1["default"].backdropOpen));
    view.setProps({ isOpen: false });
    view.update();
    expect(document.body.className).not.toContain(js_1.css(backdrop_1["default"].backdropOpen));
});
test('modal shows/hides the close button based on showClose (default true)', function () {
    var view = enzyme_1.mount(<Modal_1.Modal {...props} isOpen/>);
    view.update();
    expect(view.exists('.pf-c-modal-box .pf-c-button')).toBeTruthy();
    view.setProps({ showClose: false });
    view.update();
    expect(view.exists('.pf-c-modal-box .pf-c-button')).toBeFalsy();
});
