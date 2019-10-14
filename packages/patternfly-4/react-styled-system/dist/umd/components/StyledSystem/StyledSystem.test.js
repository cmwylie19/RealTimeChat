(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./StyledBox", "./StyledFlex", "./StyledText"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./StyledBox"), require("./StyledFlex"), require("./StyledText"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.StyledBox, global.StyledFlex, global.StyledText);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _StyledBox, _StyledFlex, _StyledText) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _StyledBox2 = _interopRequireDefault(_StyledBox);

  var _StyledFlex2 = _interopRequireDefault(_StyledFlex);

  var _StyledText2 = _interopRequireDefault(_StyledText);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const props = {
    m: 'md',
    p: 'lg',
    fontSize: 'md',
    fontFamily: 'monospace',
    bg: 'dark_100',
    color: 'light_100'
  };
  test('StyledBox test', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_StyledBox2.default, props, "Styled Box")); // Add a useful assertion here.

    expect(view).toMatchSnapshot();
  });
  test('StyledFlex test', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_StyledFlex2.default, props, "Styled Flex")); // Add a useful assertion here.

    expect(view).toMatchSnapshot();
  });
  test('StyledText test', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_StyledText2.default, props, "Styled Text")); // Add a useful assertion here.

    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=StyledSystem.test.js.map