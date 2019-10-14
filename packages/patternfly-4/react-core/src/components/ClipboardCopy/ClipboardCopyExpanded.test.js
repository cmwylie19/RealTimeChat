"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var ClipboardCopyExpanded_1 = require("./ClipboardCopyExpanded");
var props = {
    className: 'class-1',
    id: 'id-1'
};
test('expanded content render', function () {
    var view = enzyme_1.shallow(<ClipboardCopyExpanded_1.ClipboardCopyExpanded {...props}>
      This is my text
    </ClipboardCopyExpanded_1.ClipboardCopyExpanded>);
    expect(view).toMatchSnapshot();
});
