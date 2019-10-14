(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Wizard"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Wizard"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Wizard);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _Wizard) {
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

  test('Wizard should match snapshot', () => {
    const steps = [{
      name: 'A',
      component: React.createElement("p", null, "Step 1")
    }, {
      name: 'B',
      steps: [{
        name: 'B-1',
        component: React.createElement("p", null, "Step 2"),
        enableNext: true
      }, {
        name: 'B-2',
        component: React.createElement("p", null, "Step 3"),
        enableNext: false
      }]
    }, {
      name: 'C',
      component: React.createElement("p", null, "Step 4")
    }, {
      name: 'D',
      component: React.createElement("p", null, "Step 5")
    }];

    const onBack = step => {
      const name = {
        step
      };
    };

    const view = (0, _enzyme.mount)(React.createElement(_Wizard.Wizard, {
      isOpen: true,
      title: "Wizard title",
      description: "Description here",
      steps: steps,
      startAtStep: 1,
      onBack: onBack
    })); // ran into: https://github.com/airbnb/enzyme/issues/1213
    // so instead of: expect(view).toMatchSnapshot();

    const fragment = view.instance().render();
    expect((0, _enzyme.mount)(React.createElement("div", null, fragment)).getElement()).toMatchSnapshot();
  });
});
//# sourceMappingURL=Wizard.test.js.map