"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Tabs = require("./Tabs");

var _Tab = require("./Tab");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('should render simple tabs', function () {
  var view = (0, _enzyme.render)(_react["default"].createElement(_Tabs.Tabs, {
    id: "simpleTabs"
  }, _react["default"].createElement(_Tab.Tab, {
    id: "tab1",
    eventKey: 0,
    title: "Tab item 1"
  }, "Tab 1 section"), _react["default"].createElement(_Tab.Tab, {
    id: "tab2",
    eventKey: 1,
    title: "Tab item 2"
  }, "Tab 2 section"), _react["default"].createElement(_Tab.Tab, {
    id: "tab3",
    eventKey: 2,
    title: "Tab item 3"
  }, "Tab 3 section"), _react["default"].createElement(_Tab.Tab, {
    id: "tab4",
    eventKey: 3,
    title: _react["default"].createElement("b", null, "Tab item ", _react["default"].createElement("i", null, "4"))
  }, "Tab 4 section")));
  expect(view).toMatchSnapshot();
});
test('should render accessible tabs', function () {
  var view = (0, _enzyme.render)(_react["default"].createElement(_Tabs.Tabs, {
    id: "accessibleTabs",
    "aria-label": "accessible Tabs example",
    variant: "nav"
  }, _react["default"].createElement(_Tab.Tab, {
    id: "tab1",
    eventKey: 0,
    title: "Tab item 1",
    href: "#/items/1"
  }, "Tab 1 section"), _react["default"].createElement(_Tab.Tab, {
    id: "tab2",
    eventKey: 1,
    title: "Tab item 2",
    href: "#/items/2"
  }, "Tab 2 section"), _react["default"].createElement(_Tab.Tab, {
    id: "tab3",
    eventKey: 2,
    title: "Tab item 3",
    href: "#/items/3"
  }, "Tab 3 section")));
  expect(view).toMatchSnapshot();
});
test('should render filled tabs', function () {
  var view = (0, _enzyme.render)(_react["default"].createElement(_Tabs.Tabs, {
    id: "filledTabs",
    isFilled: true
  }, _react["default"].createElement(_Tab.Tab, {
    id: "tab1",
    eventKey: 0,
    title: "Tab item 1"
  }, "Tab 1 section"), _react["default"].createElement(_Tab.Tab, {
    id: "tab2",
    eventKey: 1,
    title: "Tab item 2"
  }, "Tab 2 section"), _react["default"].createElement(_Tab.Tab, {
    id: "tab3",
    eventKey: 2,
    title: "Tab item 3"
  }, "Tab 3 section")));
  expect(view).toMatchSnapshot();
});
test('should render secondary tabs', function () {
  var view = (0, _enzyme.render)(_react["default"].createElement(_Tabs.Tabs, {
    id: "primarieTabs"
  }, _react["default"].createElement(_Tab.Tab, {
    eventKey: 0,
    title: "Tab item 1"
  }, _react["default"].createElement(_Tabs.Tabs, {
    id: "secondaryTabs"
  }, _react["default"].createElement(_Tab.Tab, {
    id: "secondary tab1",
    eventKey: 10,
    title: "Secondary Tab 1"
  }, "Secondary Tab 1 section"), _react["default"].createElement(_Tab.Tab, {
    id: "secondary tab2",
    eventKey: 11,
    title: "Secondary Tab 2"
  }, "Secondary Tab 2 section"), _react["default"].createElement(_Tab.Tab, {
    id: "secondary tab3",
    eventKey: 12,
    title: "Secondary Tab 3"
  }, "Secondary Tab 3 section"))), _react["default"].createElement(_Tab.Tab, {
    id: "tab2",
    eventKey: 1,
    title: "Tab item 2"
  }, "Tab 2 section"), _react["default"].createElement(_Tab.Tab, {
    id: "tab3",
    eventKey: 2,
    title: "Tab item 3"
  }, "Tab 3 section")));
  expect(view).toMatchSnapshot();
});
test('should call scrollLeft tabs with scrolls', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Tabs.Tabs, {
    id: "scrollLeft",
    isFilled: true
  }, _react["default"].createElement(_Tab.Tab, {
    id: "tab1",
    eventKey: 0,
    title: "Tab item 1"
  }, "Tab 1 section"), _react["default"].createElement(_Tab.Tab, {
    id: "tab2",
    eventKey: 1,
    title: "Tab item 2"
  }, "Tab 2 section"), _react["default"].createElement(_Tab.Tab, {
    id: "tab3",
    eventKey: 2,
    title: "Tab item 3"
  }, "Tab 3 section")));
  view.find('.pf-c-tabs__scroll-button').first().simulate('click');
  expect(view).toMatchSnapshot();
});
test('should call scrollRight tabs with scrolls', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Tabs.Tabs, {
    id: "scrollRight",
    isFilled: true
  }, _react["default"].createElement(_Tab.Tab, {
    id: "tab1",
    eventKey: 0,
    title: "Tab item 1"
  }, "Tab 1 section"), _react["default"].createElement(_Tab.Tab, {
    id: "tab2",
    eventKey: 1,
    title: "Tab item 2"
  }, "Tab 2 section"), _react["default"].createElement(_Tab.Tab, {
    id: "tab3",
    eventKey: 2,
    title: "Tab item 3"
  }, "Tab 3 section")));
  view.find('.pf-c-tabs__scroll-button').last().simulate('click');
  expect(view).toMatchSnapshot();
});
test('should call handleScrollButtons tabs with scrolls', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Tabs.Tabs, {
    id: "handleScrollButtons",
    isFilled: true
  }, _react["default"].createElement(_Tab.Tab, {
    id: "tab1",
    eventKey: 0,
    title: "Tab item 1"
  }, "Tab 1 section"), _react["default"].createElement(_Tab.Tab, {
    id: "tab2",
    eventKey: 1,
    title: "Tab item 2"
  }, "Tab 2 section"), _react["default"].createElement(_Tab.Tab, {
    id: "tab3",
    eventKey: 2,
    title: "Tab item 3"
  }, "Tab 3 section")));
  view.simulate('scroll');
  expect(view).toMatchSnapshot();
});
test('should render tabs with eventKey Strings', function () {
  var view = (0, _enzyme.render)(_react["default"].createElement(_Tabs.Tabs, {
    id: "eventKeyTabs"
  }, _react["default"].createElement(_Tab.Tab, {
    id: "tab1",
    eventKey: 'one',
    title: "Tab item 1"
  }, "Tab 1 section"), _react["default"].createElement(_Tab.Tab, {
    id: "tab2",
    eventKey: 'two',
    title: "Tab item 2"
  }, "Tab 2 section"), _react["default"].createElement(_Tab.Tab, {
    id: "tab3",
    eventKey: 'three',
    title: "Tab item 3"
  }, "Tab 3 section")));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=Tabs.test.js.map