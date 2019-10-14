"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var ClipboardCopyButton_1 = require("./ClipboardCopyButton");
var props = {
    "id": 'my-id',
    "textId": 'my-text-id',
    "className": 'fancy-copy-button',
    "onClick": jest.fn(),
    "exitDelay": 1000,
    "entryDelay": 2000,
    "maxWidth": '500px',
    "position": 'right',
    'aria-label': 'click this button to copy text'
};
test('copy button render', function () {
    var view = enzyme_1.shallow(<ClipboardCopyButton_1.ClipboardCopyButton {...props}>Copy Me</ClipboardCopyButton_1.ClipboardCopyButton>);
    expect(view).toMatchSnapshot();
});
test('copy button onClick', function () {
    var onclick = jest.fn();
    var view = enzyme_1.shallow(<ClipboardCopyButton_1.ClipboardCopyButton {...props} onClick={onclick}>
      Copy to Clipboard
    </ClipboardCopyButton_1.ClipboardCopyButton>);
    view.find('button').simulate('click');
    expect(onclick).toBeCalled();
});
