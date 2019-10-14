"use strict";

var _ = require("./");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Object.values([{
  isExpanded: true,
  isInline: false
}, {
  isExpanded: false,
  isInline: false
}, {
  isExpanded: true,
  isInline: true
}, {
  isExpanded: false,
  isInline: true
}]).forEach(function (_ref) {
  var isExpanded = _ref.isExpanded,
      isInline = _ref.isInline;
  var drawerContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';
  test("Drawer isExpanded = ".concat(isExpanded, " and isInline = ").concat(isInline), function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_.Drawer, {
      isExpanded: isExpanded,
      isInline: isInline
    }, _react["default"].createElement(_.DrawerContent, null, drawerContent), _react["default"].createElement(_.DrawerPanelContent, null, " drawer-panel ")));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=Drawer.test.js.map