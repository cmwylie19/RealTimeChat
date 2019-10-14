(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Toolbar", "./ToolbarGroup", "./ToolbarItem", "./ToolbarSection"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Toolbar"), require("./ToolbarGroup"), require("./ToolbarItem"), require("./ToolbarSection"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Toolbar, global.ToolbarGroup, global.ToolbarItem, global.ToolbarSection);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _Toolbar, _ToolbarGroup, _ToolbarItem, _ToolbarSection) {
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

  test('Simple toolbar with single group', () => {
    const view = (0, _enzyme.mount)(React.createElement(_Toolbar.Toolbar, null, React.createElement(_ToolbarGroup.ToolbarGroup, null, React.createElement(_ToolbarItem.ToolbarItem, null, "Item 1"), React.createElement(_ToolbarItem.ToolbarItem, null, "Item 2"))));
    expect(view).toMatchSnapshot();
  });
  test('Toolbar with multiple groups', () => {
    const view = (0, _enzyme.mount)(React.createElement(_Toolbar.Toolbar, null, React.createElement(_ToolbarGroup.ToolbarGroup, null, React.createElement(_ToolbarItem.ToolbarItem, null, "Item 1"), React.createElement(_ToolbarItem.ToolbarItem, null, "Item 2")), React.createElement(_ToolbarGroup.ToolbarGroup, null, React.createElement(_ToolbarItem.ToolbarItem, null, "Item 3")), React.createElement(_ToolbarGroup.ToolbarGroup, null, React.createElement(_ToolbarItem.ToolbarItem, null, "Item 4"), React.createElement(_ToolbarItem.ToolbarItem, null, "Item 5"), React.createElement(_ToolbarItem.ToolbarItem, null, "Item 6"))));
    expect(view).toMatchSnapshot();
  });
  test('Toolbar with sections', () => {
    const view = (0, _enzyme.mount)(React.createElement(_Toolbar.Toolbar, null, React.createElement(_ToolbarSection.ToolbarSection, {
      "aria-label": "First section"
    }, React.createElement(_ToolbarGroup.ToolbarGroup, null, React.createElement(_ToolbarItem.ToolbarItem, null, "Item 1"), React.createElement(_ToolbarItem.ToolbarItem, null, "Item 2")), React.createElement(_ToolbarGroup.ToolbarGroup, null, React.createElement(_ToolbarItem.ToolbarItem, null, "Item 3"))), React.createElement(_ToolbarSection.ToolbarSection, {
      "aria-label": "Second section"
    }, React.createElement(_ToolbarGroup.ToolbarGroup, null, React.createElement(_ToolbarItem.ToolbarItem, null, "Item 4"), React.createElement(_ToolbarItem.ToolbarItem, null, "Item 5"), React.createElement(_ToolbarItem.ToolbarItem, null, "Item 6")))));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=Toolbar.test.js.map