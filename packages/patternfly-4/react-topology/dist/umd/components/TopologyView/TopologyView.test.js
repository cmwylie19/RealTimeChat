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

  describe('TopologyView', () => {
    test('should display an empty topology correctly', () => {
      const view = (0, _enzyme.mount)(React.createElement(_index.TopologyView, {
        className: "my-test-class",
        id: "simple-test-id"
      }));
      expect(view).toMatchSnapshot();
    });
    test('should display topology correctly', () => {
      const view = (0, _enzyme.mount)(React.createElement(_index.TopologyView, {
        className: "my-test-class",
        id: "simple-test-id",
        contextToolbar: React.createElement("div", {
          id: "test-context-bar"
        }),
        viewToolbar: React.createElement("div", {
          id: "test-view-bar"
        }),
        controlBar: React.createElement("div", {
          id: "test-control-bar"
        })
      }, React.createElement("div", {
        id: "test-canvas"
      })));
      expect(view).toMatchSnapshot();
    });
    test('should display topology sidebar correctly', () => {
      const view = (0, _enzyme.mount)(React.createElement(_index.TopologyView, {
        className: "my-test-class",
        id: "simple-test-id",
        contextToolbar: React.createElement("div", {
          id: "test-context-bar"
        }),
        viewToolbar: React.createElement("div", {
          id: "test-view-bar"
        }),
        controlBar: React.createElement("div", {
          id: "test-control-bar"
        }),
        sideBar: React.createElement("div", null, "Test SideBar"),
        sideBarOpen: false
      }, React.createElement("div", {
        id: "test-canvas"
      })));
      expect(view).toMatchSnapshot();
      expect(view.find('div.pf-topology-container__with-sidebar').length).toBe(1);
      expect(view.find('div.pf-topology-container__with-sidebar.pf-topology-container__with-sidebar--open').length).toBe(0);
    });
    test('should display topology w/ open sidebar correctly', () => {
      const view = (0, _enzyme.mount)(React.createElement(_index.TopologyView, {
        className: "my-test-class",
        id: "simple-test-id",
        contextToolbar: React.createElement("div", {
          id: "test-context-bar"
        }),
        viewToolbar: React.createElement("div", {
          id: "test-view-bar"
        }),
        controlBar: React.createElement("div", {
          id: "test-control-bar"
        }),
        sideBar: React.createElement("div", null, "Test SideBar"),
        sideBarOpen: true
      }, React.createElement("div", {
        id: "test-canvas"
      })));
      expect(view).toMatchSnapshot();
      expect(view.find('div.pf-topology-container__with-sidebar.pf-topology-container__with-sidebar--open').length).toBe(1);
    });
  });
});
//# sourceMappingURL=TopologyView.test.js.map