(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ClipboardCopyToggle"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ClipboardCopyToggle"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ClipboardCopyToggle);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _ClipboardCopyToggle) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  const props = {
    id: 'my-id',
    textId: 'my-text-id',
    contentId: 'my-content-id',
    isExpanded: false,
    className: 'myclassName',
    onClick: jest.fn()
  };
  test('toggle button render', () => {
    const desc = 'toggle content';
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_ClipboardCopyToggle.ClipboardCopyToggle, _extends({}, props, {
      "aria-label": desc
    })));
    expect(view).toMatchSnapshot();
  });
  test('toggle button onClick', () => {
    const onclick = jest.fn();
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_ClipboardCopyToggle.ClipboardCopyToggle, _extends({}, props, {
      onClick: onclick
    })));
    view.find('button').simulate('click');
    expect(onclick).toBeCalled();
  });
  test('toggle button is on expanded mode', () => {
    let view = (0, _enzyme.shallow)(_react2.default.createElement(_ClipboardCopyToggle.ClipboardCopyToggle, _extends({}, props, {
      isExpanded: true
    })));
    expect(view.props()['aria-expanded']).toBe(true);
    view = (0, _enzyme.shallow)(_react2.default.createElement(_ClipboardCopyToggle.ClipboardCopyToggle, _extends({}, props, {
      isExpanded: false
    })));
    expect(view.props()['aria-expanded']).toBe(false);
  });
});
//# sourceMappingURL=ClipboardCopyToggle.test.js.map