"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var Tab_1 = require("./Tab");
test('should render tab', function () {
    var view = enzyme_1.shallow(<Tab_1.Tab eventKey={0} title="Tab item 1">
      Tab 1 section
    </Tab_1.Tab>);
    expect(view).toMatchSnapshot();
});
test('should render active tab', function () {
    var view = enzyme_1.shallow(<Tab_1.Tab eventKey={0} title="Tab item 1">
      Tab 1 section
    </Tab_1.Tab>);
    expect(view).toMatchSnapshot();
});
