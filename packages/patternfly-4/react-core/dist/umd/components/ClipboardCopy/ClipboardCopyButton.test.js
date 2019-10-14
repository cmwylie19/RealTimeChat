(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ClipboardCopyButton"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ClipboardCopyButton"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ClipboardCopyButton);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _ClipboardCopyButton) {
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
    "id": 'my-id',
    "textId": 'my-text-id',
    "className": 'fancy-copy-button',
    "onClick": jest.fn(),
    "exitDelay": 1000,
    "entryDelay": 2000,
    "maxWidth": '500px',
    "position": 'right',
    'aria-label': 'click this button to copy text'
  };
  test('copy button render', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_ClipboardCopyButton.ClipboardCopyButton, props, "Copy Me"));
    expect(view).toMatchSnapshot();
  });
  test('copy button onClick', () => {
    const onclick = jest.fn();
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_ClipboardCopyButton.ClipboardCopyButton, _extends({}, props, {
      onClick: onclick
    }), "Copy to Clipboard"));
    view.find('button').simulate('click');
    expect(onclick).toBeCalled();
  });
});
//# sourceMappingURL=ClipboardCopyButton.test.js.map