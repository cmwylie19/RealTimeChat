"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var ClipboardCopyToggle_1 = require("./ClipboardCopyToggle");
var props = {
    id: 'my-id',
    textId: 'my-text-id',
    contentId: 'my-content-id',
    isExpanded: false,
    className: 'myclassName',
    onClick: jest.fn()
};
test('toggle button render', function () {
    var desc = 'toggle content';
    var view = enzyme_1.shallow(<ClipboardCopyToggle_1.ClipboardCopyToggle {...props} aria-label={desc}/>);
    expect(view).toMatchSnapshot();
});
test('toggle button onClick', function () {
    var onclick = jest.fn();
    var view = enzyme_1.shallow(<ClipboardCopyToggle_1.ClipboardCopyToggle {...props} onClick={onclick}/>);
    view.find('button').simulate('click');
    expect(onclick).toBeCalled();
});
test('toggle button is on expanded mode', function () {
    var view = enzyme_1.shallow(<ClipboardCopyToggle_1.ClipboardCopyToggle {...props} isExpanded/>);
    expect(view.props()['aria-expanded']).toBe(true);
    view = enzyme_1.shallow(<ClipboardCopyToggle_1.ClipboardCopyToggle {...props} isExpanded={false}/>);
    expect(view.props()['aria-expanded']).toBe(false);
});
