(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./List", "./ListItem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./List"), require("./ListItem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.List, global.ListItem);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _List, _ListItem) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const ListItems = () => _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(_List.List, null, _react2.default.createElement(_ListItem.ListItem, null, "First"), _react2.default.createElement(_ListItem.ListItem, null, "Second"), _react2.default.createElement(_ListItem.ListItem, null, "Third")));

  describe('list', () => {
    test('simple list', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_List.List, null, _react2.default.createElement(ListItems, null)));
      expect(view).toMatchSnapshot();
    });
    test('inline list', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_List.List, {
        variant: "inline"
      }, _react2.default.createElement(ListItems, null)));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=List.test.js.map