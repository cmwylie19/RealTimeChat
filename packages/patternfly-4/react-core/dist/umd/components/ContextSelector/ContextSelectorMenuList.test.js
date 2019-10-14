(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ContextSelectorItem", "./ContextSelectorMenuList"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ContextSelectorItem"), require("./ContextSelectorMenuList"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ContextSelectorItem, global.ContextSelectorMenuList);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _ContextSelectorItem, _ContextSelectorMenuList) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const items = [_react2.default.createElement(_ContextSelectorItem.ContextSelectorItem, {
    key: "0"
  }, "My Project"), _react2.default.createElement(_ContextSelectorItem.ContextSelectorItem, {
    key: "1"
  }, "OpenShift Cluster"), _react2.default.createElement(_ContextSelectorItem.ContextSelectorItem, {
    key: "2"
  }, "Production Ansible"), _react2.default.createElement(_ContextSelectorItem.ContextSelectorItem, {
    key: "3"
  }, "AWS"), _react2.default.createElement(_ContextSelectorItem.ContextSelectorItem, {
    key: "4"
  }, "Azure")];
  test('Renders ContextSelectorMenuList open', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_ContextSelectorMenuList.ContextSelectorMenuList, {
      isOpen: false
    }, items));
    expect(view).toMatchSnapshot();
  });
  test('Renders ContextSelectorMenuList closed', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_ContextSelectorMenuList.ContextSelectorMenuList, {
      isOpen: false
    }, items));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=ContextSelectorMenuList.test.js.map