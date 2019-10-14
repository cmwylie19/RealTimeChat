(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "@patternfly/react-icons", "./EmptyState", "./EmptyStateBody", "./EmptyStateSecondaryActions", "./EmptyStateIcon", "./EmptyStatePrimary", "../Button", "../Title", "../../styles/sizes"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("@patternfly/react-icons"), require("./EmptyState"), require("./EmptyStateBody"), require("./EmptyStateSecondaryActions"), require("./EmptyStateIcon"), require("./EmptyStatePrimary"), require("../Button"), require("../Title"), require("../../styles/sizes"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.reactIcons, global.EmptyState, global.EmptyStateBody, global.EmptyStateSecondaryActions, global.EmptyStateIcon, global.EmptyStatePrimary, global.Button, global.Title, global.sizes);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _reactIcons, _EmptyState, _EmptyStateBody, _EmptyStateSecondaryActions, _EmptyStateIcon, _EmptyStatePrimary, _Button, _Title, _sizes) {
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

  describe('EmptyState', () => {
    test('Main', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_EmptyState.EmptyState, null, React.createElement(_Title.Title, {
        headingLevel: "h5",
        size: "lg"
      }, "HTTP Proxies"), React.createElement(_EmptyStateBody.EmptyStateBody, null, "Defining HTTP Proxies that exist on your network allows you to perform various actions through those proxies."), React.createElement(_Button.Button, {
        variant: "primary"
      }, "New HTTP Proxy"), React.createElement(_EmptyStateSecondaryActions.EmptyStateSecondaryActions, null, React.createElement(_Button.Button, {
        variant: "link",
        "aria-label": "learn more action"
      }, "Learn more about this in the documentation."))));
      expect(view).toMatchSnapshot();
    });
    test('Main variant regular', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_EmptyState.EmptyState, {
        variant: _EmptyState.EmptyStateVariant.full
      }, React.createElement(_Title.Title, {
        size: _sizes.BaseSizes.md
      }, "EmptyState full")));
      expect(view).toMatchSnapshot();
    });
    test('Main variant small', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_EmptyState.EmptyState, {
        variant: _EmptyState.EmptyStateVariant.small
      }, React.createElement(_Title.Title, {
        size: _sizes.BaseSizes.md
      }, "EmptyState small")));
      expect(view).toMatchSnapshot();
    });
    test('Body', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_EmptyStateBody.EmptyStateBody, {
        className: "custom-empty-state-body",
        id: "empty-state-1"
      }));
      expect(view.props().className).toBe('pf-c-empty-state__body custom-empty-state-body');
      expect(view.props().id).toBe('empty-state-1');
    });
    test('Secondary Action', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_EmptyStateSecondaryActions.EmptyStateSecondaryActions, {
        className: "custom-empty-state-secondary",
        id: "empty-state-2"
      }));
      expect(view.props().className).toBe('pf-c-empty-state__secondary custom-empty-state-secondary');
      expect(view.props().id).toBe('empty-state-2');
    });
    test('Icon', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_EmptyStateIcon.EmptyStateIcon, {
        icon: _reactIcons.AddressBookIcon,
        className: "custom-empty-state-icon",
        id: "empty-state-icon"
      }));
      expect(view.props().className).toBe('pf-c-empty-state__icon custom-empty-state-icon');
      expect(view.props().id).toBe('empty-state-icon');
    });
    test('Wrap icon in a div', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_EmptyStateIcon.EmptyStateIcon, {
        variant: "container",
        component: _reactIcons.AddressBookIcon,
        className: "custom-empty-state-icon",
        id: "empty-state-icon"
      }));
      console.log(view.debug());
      expect(view.find('div').props().className).toBe('pf-c-empty-state__icon custom-empty-state-icon');
      expect(view.find('AddressBookIcon').length).toBe(1);
    });
    test('Primary div', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_EmptyStatePrimary.EmptyStatePrimary, {
        className: "custom-empty-state-prim-cls",
        id: "empty-state-prim-id"
      }, React.createElement(_Button.Button, {
        variant: "link"
      }, "Link")));
      expect(view.props().className).toBe('pf-c-empty-state__primary custom-empty-state-prim-cls');
      expect(view.props().id).toBe('empty-state-prim-id');
    });
  });
});
//# sourceMappingURL=EmptyState.test.js.map