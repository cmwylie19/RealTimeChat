(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Nav", "./NavList", "./NavGroup", "./NavItem", "./NavExpandable"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Nav"), require("./NavList"), require("./NavGroup"), require("./NavItem"), require("./NavExpandable"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Nav, global.NavList, global.NavGroup, global.NavItem, global.NavExpandable);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _Nav, _NavList, _NavGroup, _NavItem, _NavExpandable) {
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

  const props = {
    items: [{
      to: '#link1',
      label: 'Link 1'
    }, {
      to: '#link2',
      label: 'Link 2'
    }, {
      to: '#link3',
      label: 'Link 3'
    }, {
      to: '#link4',
      label: 'Link 4'
    }]
  };
  beforeEach(() => {
    window.location.hash = '#link1';
  });
  const context = {
    onSelect: () => undefined,
    onToggle: () => undefined
  };
  test('Default Nav List', () => {
    const view = (0, _enzyme.mount)(React.createElement(_Nav.Nav, {
      className: "test=nav-class"
    }, React.createElement(_NavList.NavList, {
      className: "test-nav-list-class"
    }, props.items.map(item => React.createElement(_NavItem.NavItem, {
      to: item.to,
      key: item.to,
      className: "test-nav-item-class"
    }, item.label)))), {
      context
    });
    expect(view).toMatchSnapshot();
  });
  test('Dark Nav List', () => {
    const view = (0, _enzyme.mount)(React.createElement(_Nav.Nav, {
      className: "test=nav-class",
      theme: "dark"
    }, React.createElement(_NavList.NavList, {
      className: "test-nav-list-class"
    }, props.items.map(item => React.createElement(_NavItem.NavItem, {
      to: item.to,
      key: item.to,
      className: "test-nav-item-class"
    }, item.label)))), {
      context
    });
    expect(view).toMatchSnapshot();
  });
  test('Default Nav List - Trigger item active update', () => {
    window.location.hash = '#link2';
    const view = (0, _enzyme.mount)(React.createElement(_Nav.Nav, null, React.createElement(_NavList.NavList, null, props.items.map(item => React.createElement(_NavItem.NavItem, {
      to: item.to,
      key: item.to
    }, item.label)))), {
      context
    });
    view.find({
      href: '#link2'
    }).first().simulate('click');
    expect(view).toMatchSnapshot();
  });
  test('Simple Nav List', () => {
    const view = (0, _enzyme.mount)(React.createElement(_Nav.Nav, null, React.createElement(_NavList.NavList, {
      variant: "simple"
    }, props.items.map(item => React.createElement(_NavItem.NavItem, {
      to: item.to,
      key: item.to
    }, item.label)))), {
      context
    });
    expect(view).toMatchSnapshot();
  });
  test('Expandable Nav List', () => {
    const view = (0, _enzyme.mount)(React.createElement(_Nav.Nav, null, React.createElement(_NavList.NavList, null, React.createElement(_NavExpandable.NavExpandable, {
      id: "grp-1",
      title: "Section 1"
    }, props.items.map(item => React.createElement(_NavItem.NavItem, {
      to: item.to,
      key: item.to
    }, item.label))))), {
      context
    });
    expect(view).toMatchSnapshot();
  });
  test('Expandable Nav List - Trigger toggle', () => {
    window.location.hash = '#link2';
    const view = (0, _enzyme.mount)(React.createElement(_Nav.Nav, null, React.createElement(_NavList.NavList, null, React.createElement(_NavExpandable.NavExpandable, {
      id: "grp-1",
      title: "Section 1",
      className: "expandable-group",
      isExpanded: true
    }, props.items.map(item => React.createElement(_NavItem.NavItem, {
      to: item.to,
      key: item.to
    }, item.label))))), {
      context
    });
    view.find('li.expandable-group').first().simulate('click');
    expect(view).toMatchSnapshot();
  });
  test('Expandable Nav List with aria label', () => {
    const view = (0, _enzyme.mount)(React.createElement(_Nav.Nav, {
      "aria-label": "Test"
    }, React.createElement(_NavList.NavList, null, React.createElement(_NavExpandable.NavExpandable, {
      id: "grp-1",
      title: "Section 1",
      srText: "Section 1 - Example sub-navigation"
    }, props.items.map(item => React.createElement(_NavItem.NavItem, {
      to: item.to,
      key: item.to
    }, item.label))))), {
      context
    });
    expect(view).toMatchSnapshot();
  });
  test('Nav Grouped List', () => {
    const view = (0, _enzyme.mount)(React.createElement(_Nav.Nav, null, React.createElement(_NavGroup.NavGroup, {
      id: "grp-1",
      title: "Section 1"
    }, React.createElement(_NavList.NavList, null, props.items.map(item => React.createElement(_NavItem.NavItem, {
      to: item.to,
      key: `section1_${item.to}`
    }, item.label)))), React.createElement(_NavGroup.NavGroup, {
      id: "grp-2",
      title: "Section 2"
    }, React.createElement(_NavList.NavList, null, props.items.map(item => React.createElement(_NavItem.NavItem, {
      to: item.to,
      key: `section2_${item.to}`
    }, item.label))))), {
      context
    });
    expect(view).toMatchSnapshot();
  });
  test('Horizontal Nav List', () => {
    const view = (0, _enzyme.mount)(React.createElement(_Nav.Nav, null, React.createElement(_NavList.NavList, {
      variant: "horizontal"
    }, props.items.map(item => React.createElement(_NavItem.NavItem, {
      to: item.to,
      key: item.to
    }, item.label)))), {
      context
    });
    expect(view).toMatchSnapshot();
  });
  test('Tertiary Nav List', () => {
    const view = (0, _enzyme.mount)(React.createElement(_Nav.Nav, null, React.createElement(_NavList.NavList, {
      variant: "tertiary"
    }, props.items.map(item => React.createElement(_NavItem.NavItem, {
      to: item.to,
      key: item.to
    }, item.label)))), {
      context
    });
    expect(view).toMatchSnapshot();
  });
  test('Nav List with custom item nodes', () => {
    const view = (0, _enzyme.mount)(React.createElement(_Nav.Nav, null, React.createElement(_NavList.NavList, {
      variant: "tertiary"
    }, React.createElement(_NavItem.NavItem, {
      to: "/components/nav#link1",
      className: "test-nav-item-class"
    }, React.createElement("div", {
      className: "my-custom-node"
    }, "My custom node")))), {
      context
    });
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=Nav.test.js.map