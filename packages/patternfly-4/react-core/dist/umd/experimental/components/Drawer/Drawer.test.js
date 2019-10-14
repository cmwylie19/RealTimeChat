(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./", "react", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./"), require("react"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global._, global.react, global.enzyme);
    global.undefined = mod.exports;
  }
})(this, function (_, _react, _enzyme) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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
  }]).forEach(({
    isExpanded,
    isInline
  }) => {
    const drawerContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';
    test(`Drawer isExpanded = ${isExpanded} and isInline = ${isInline}`, () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_.Drawer, {
        isExpanded: isExpanded,
        isInline: isInline
      }, _react2.default.createElement(_.DrawerContent, null, drawerContent), _react2.default.createElement(_.DrawerPanelContent, null, " drawer-panel ")));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=Drawer.test.js.map