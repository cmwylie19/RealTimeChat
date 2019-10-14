(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./createIcon", "enzyme", "./common"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./createIcon"), require("enzyme"), require("./common"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.createIcon, global.enzyme, global.common);
    global.undefined = mod.exports;
  }
})(this, function (_react, _createIcon, _enzyme, _common) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _createIcon2 = _interopRequireDefault(_createIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const iconDef = {
    name: 'IconName',
    width: 10,
    height: 20,
    svgPath: 'svgPath'
  };
  const Icon = (0, _createIcon2.default)(iconDef);
  test('sets correct viewBox', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(Icon, null));
    expect(view.find('svg').prop('viewBox')).toBe(`0 0 ${iconDef.width} ${iconDef.height}`);
  });
  test('sets correct svgPath', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(Icon, null));
    expect(view.find('path').prop('d')).toBe(iconDef.svgPath);
  });
  test('sets correct displayName', () => {
    expect(Icon.displayName).toBe(iconDef.name);
  });
  test('height and width are set from size', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(Icon, {
      size: _common.IconSize.sm
    }));
    expect(view.find('svg').prop('width')).toMatchSnapshot('width');
    expect(view.find('svg').prop('height')).toMatchSnapshot('height');
  });
  test('aria-hidden is true if no title is specified', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(Icon, null));
    expect(view.find('svg').prop('aria-hidden')).toBe(true);
  });
  test('title is not renderd if a title is not passed', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(Icon, null));
    expect(view.find('title').exists()).toBe(false);
  });
  test('aria-labelledby is null if a title is not passed', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(Icon, null));
    expect(view.find('svg').prop('aria-labelledby')).toBe(null);
  });
  test('title is rendered', () => {
    const title = 'icon title';
    const view = (0, _enzyme.shallow)(_react2.default.createElement(Icon, {
      title: title
    }));
    expect(view.find('title').text()).toBe(title);
  });
  test('aria-labelledby matches title id', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(Icon, {
      title: "icon title"
    }));
    const labelledby = view.find('svg').prop('aria-labelledby');
    const id = view.find('title').prop('id');
    expect(labelledby).toBe(id);
  });
  test('ids should be unique for each rendered icon', () => {
    const first = (0, _enzyme.shallow)(_react2.default.createElement(Icon, {
      title: "icon title"
    }));
    const second = (0, _enzyme.shallow)(_react2.default.createElement(Icon, {
      title: "icon title"
    }));
    expect(first.find('title').prop('id')).not.toBe(second.find('title').prop('id'));
  });
  test('additional props should be spread to the root svg element', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(Icon, {
      "data-testid": "icon"
    }));
    expect(view.find('svg')).toMatchSnapshot();
  });
});
//# sourceMappingURL=createIcon.test.js.map