(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ContextSelector", "./ContextSelectorItem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ContextSelector"), require("./ContextSelectorItem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ContextSelector, global.ContextSelectorItem);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _ContextSelector, _ContextSelectorItem) {
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
  test('Renders ContextSelector', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_ContextSelector.ContextSelector, null, " ", items, " "));
    expect(view).toMatchSnapshot();
  });
  test('Renders ContextSelector open', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_ContextSelector.ContextSelector, {
      isOpen: true
    }, " ", items, " "));
    expect(view).toMatchSnapshot();
  });
  test('Verify onToggle is called ', () => {
    const mockfn = jest.fn();
    const view = (0, _enzyme.mount)(_react2.default.createElement(_ContextSelector.ContextSelector, {
      onToggle: mockfn
    }, " ", items, " "));
    view.find('button').at(0).simulate('click');
    expect(mockfn.mock.calls).toHaveLength(1);
  });
});
//# sourceMappingURL=ContextSelector.test.js.map