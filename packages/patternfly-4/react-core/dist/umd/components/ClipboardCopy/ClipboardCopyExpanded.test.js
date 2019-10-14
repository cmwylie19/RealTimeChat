(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ClipboardCopyExpanded"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ClipboardCopyExpanded"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ClipboardCopyExpanded);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _ClipboardCopyExpanded) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const props = {
    className: 'class-1',
    id: 'id-1'
  };
  test('expanded content render', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_ClipboardCopyExpanded.ClipboardCopyExpanded, props, "This is my text"));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=ClipboardCopyExpanded.test.js.map