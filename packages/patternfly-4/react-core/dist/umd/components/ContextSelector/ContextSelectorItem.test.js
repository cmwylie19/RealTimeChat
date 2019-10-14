(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ContextSelectorItem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ContextSelectorItem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ContextSelectorItem);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _ContextSelectorItem) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('Renders ContextSelectorItem', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_ContextSelectorItem.ContextSelectorItem, {
      sendRef: jest.fn(),
      index: 0
    }, "My Project"));
    expect(view).toMatchSnapshot();
  });
  test('Renders ContextSelectorItem disabled and hovered', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_ContextSelectorItem.ContextSelectorItem, {
      isDisabled: true,
      isHovered: true,
      sendRef: jest.fn(),
      index: 0
    }, "My Project"));
    expect(view).toMatchSnapshot();
  });
  test('Verify onClick is called ', () => {
    const mockfn = jest.fn();
    const view = (0, _enzyme.mount)(_react2.default.createElement(_ContextSelectorItem.ContextSelectorItem, {
      isHovered: true,
      onClick: mockfn,
      sendRef: jest.fn(),
      index: 0
    }, "My Project"));
    view.find('button').at(0).simulate('click');
    expect(mockfn.mock.calls).toHaveLength(1);
  });
});
//# sourceMappingURL=ContextSelectorItem.test.js.map