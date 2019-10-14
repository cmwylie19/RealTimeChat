(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.index);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _index) {
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

  describe('TopologySideBar', () => {
    test('should display topology sidebar correctly', () => {
      const view = (0, _enzyme.mount)(React.createElement(_index.TopologySideBar, {
        className: "my-test-class",
        show: true,
        header: React.createElement("span", {
          id: "test-header-id"
        }, "Header")
      }, React.createElement("div", {
        id: "test-canvas"
      })));
      expect(view).toMatchSnapshot();
      expect(view.find('.pf-topology-side-bar__header #test-header-id').length).toBe(1);
    });
    test('should display topology sidebar w/ close correctly', () => {
      const mockClose = jest.fn();
      const view = (0, _enzyme.mount)(React.createElement(_index.TopologySideBar, {
        className: "my-test-class",
        show: true,
        onClose: mockClose
      }, ">", React.createElement("div", {
        id: "test-canvas"
      })));
      expect(view).toMatchSnapshot();
      view.find('button.pf-topology-side-bar__dismiss').simulate('click');
      expect(mockClose).toBeCalled();
    });
    test('should hide the sidebar correctly', () => {
      const view = (0, _enzyme.mount)(React.createElement(_index.TopologySideBar, {
        className: "my-test-class",
        show: false,
        header: React.createElement("span", {
          id: "test-header-id"
        }, "Header")
      }, ">", React.createElement("div", {
        id: "test-canvas"
      })));
      expect(view).toMatchSnapshot();
      expect(view.find('#test-canvas').length).toBe(0);
    });
  });
});
//# sourceMappingURL=TopologySideBar.test.js.map