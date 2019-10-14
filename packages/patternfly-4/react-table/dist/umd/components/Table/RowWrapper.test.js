(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./RowWrapper"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./RowWrapper"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.RowWrapper);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _RowWrapper) {
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

  const getRowWrapper = props => React.createElement("table", null, React.createElement("tbody", null, React.createElement(_RowWrapper.RowWrapper, props)));

  describe('RowWrapper', () => {
    test('renders correctly', () => {
      const trRef = jest.fn();
      const view = (0, _enzyme.mount)(getRowWrapper({
        onScroll: jest.fn(),
        onResize: jest.fn(),
        trRef
      }));
      expect(view).toMatchSnapshot();
      expect(trRef.mock.calls).toHaveLength(1);
    });
    test('renders expanded correctly', () => {
      const view = (0, _enzyme.mount)(getRowWrapper({
        row: {
          isExpanded: true
        }
      }));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=RowWrapper.test.js.map