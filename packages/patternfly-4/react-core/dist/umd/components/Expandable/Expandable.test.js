(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Expandable"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Expandable"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Expandable);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _Expandable) {
  "use strict";

  var React = _interopRequireWildcard(_react);

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};

    if (obj != null) {
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  const props = {};
  test('Expandable', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_Expandable.Expandable, props, "test "));
    expect(view).toMatchSnapshot();
  });
  test('Renders Expandable expanded', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_Expandable.Expandable, {
      isExpanded: true
    }, " test "));
    expect(view).toMatchSnapshot();
  });
  test('Expandable onToggle called', () => {
    const mockfn = jest.fn();
    const view = (0, _enzyme.shallow)(React.createElement(_Expandable.Expandable, {
      onToggle: mockfn
    }, " test "));
    view.find('button').at(0).simulate('click');
    expect(mockfn.mock.calls).toHaveLength(1);
  });
  test('Renders Uncontrolled Expandable', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_Expandable.Expandable, {
      toggleText: "Show More"
    }, " test "));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=Expandable.test.js.map