"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _Nav = require("./Nav");

var _NavList = require("./NavList");

var _NavGroup = require("./NavGroup");

var _NavItem = require("./NavItem");

var _NavExpandable = require("./NavExpandable");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var props = {
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
beforeEach(function () {
  window.location.hash = '#link1';
});
var context = {
  onSelect: function onSelect() {
    return undefined;
  },
  onToggle: function onToggle() {
    return undefined;
  }
};
test('Default Nav List', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Nav.Nav, {
    className: "test=nav-class"
  }, React.createElement(_NavList.NavList, {
    className: "test-nav-list-class"
  }, props.items.map(function (item) {
    return React.createElement(_NavItem.NavItem, {
      to: item.to,
      key: item.to,
      className: "test-nav-item-class"
    }, item.label);
  }))), {
    context: context
  });
  expect(view).toMatchSnapshot();
});
test('Dark Nav List', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Nav.Nav, {
    className: "test=nav-class",
    theme: "dark"
  }, React.createElement(_NavList.NavList, {
    className: "test-nav-list-class"
  }, props.items.map(function (item) {
    return React.createElement(_NavItem.NavItem, {
      to: item.to,
      key: item.to,
      className: "test-nav-item-class"
    }, item.label);
  }))), {
    context: context
  });
  expect(view).toMatchSnapshot();
});
test('Default Nav List - Trigger item active update', function () {
  window.location.hash = '#link2';
  var view = (0, _enzyme.mount)(React.createElement(_Nav.Nav, null, React.createElement(_NavList.NavList, null, props.items.map(function (item) {
    return React.createElement(_NavItem.NavItem, {
      to: item.to,
      key: item.to
    }, item.label);
  }))), {
    context: context
  });
  view.find({
    href: '#link2'
  }).first().simulate('click');
  expect(view).toMatchSnapshot();
});
test('Simple Nav List', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Nav.Nav, null, React.createElement(_NavList.NavList, {
    variant: "simple"
  }, props.items.map(function (item) {
    return React.createElement(_NavItem.NavItem, {
      to: item.to,
      key: item.to
    }, item.label);
  }))), {
    context: context
  });
  expect(view).toMatchSnapshot();
});
test('Expandable Nav List', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Nav.Nav, null, React.createElement(_NavList.NavList, null, React.createElement(_NavExpandable.NavExpandable, {
    id: "grp-1",
    title: "Section 1"
  }, props.items.map(function (item) {
    return React.createElement(_NavItem.NavItem, {
      to: item.to,
      key: item.to
    }, item.label);
  })))), {
    context: context
  });
  expect(view).toMatchSnapshot();
});
test('Expandable Nav List - Trigger toggle', function () {
  window.location.hash = '#link2';
  var view = (0, _enzyme.mount)(React.createElement(_Nav.Nav, null, React.createElement(_NavList.NavList, null, React.createElement(_NavExpandable.NavExpandable, {
    id: "grp-1",
    title: "Section 1",
    className: "expandable-group",
    isExpanded: true
  }, props.items.map(function (item) {
    return React.createElement(_NavItem.NavItem, {
      to: item.to,
      key: item.to
    }, item.label);
  })))), {
    context: context
  });
  view.find('li.expandable-group').first().simulate('click');
  expect(view).toMatchSnapshot();
});
test('Expandable Nav List with aria label', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Nav.Nav, {
    "aria-label": "Test"
  }, React.createElement(_NavList.NavList, null, React.createElement(_NavExpandable.NavExpandable, {
    id: "grp-1",
    title: "Section 1",
    srText: "Section 1 - Example sub-navigation"
  }, props.items.map(function (item) {
    return React.createElement(_NavItem.NavItem, {
      to: item.to,
      key: item.to
    }, item.label);
  })))), {
    context: context
  });
  expect(view).toMatchSnapshot();
});
test('Nav Grouped List', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Nav.Nav, null, React.createElement(_NavGroup.NavGroup, {
    id: "grp-1",
    title: "Section 1"
  }, React.createElement(_NavList.NavList, null, props.items.map(function (item) {
    return React.createElement(_NavItem.NavItem, {
      to: item.to,
      key: "section1_".concat(item.to)
    }, item.label);
  }))), React.createElement(_NavGroup.NavGroup, {
    id: "grp-2",
    title: "Section 2"
  }, React.createElement(_NavList.NavList, null, props.items.map(function (item) {
    return React.createElement(_NavItem.NavItem, {
      to: item.to,
      key: "section2_".concat(item.to)
    }, item.label);
  })))), {
    context: context
  });
  expect(view).toMatchSnapshot();
});
test('Horizontal Nav List', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Nav.Nav, null, React.createElement(_NavList.NavList, {
    variant: "horizontal"
  }, props.items.map(function (item) {
    return React.createElement(_NavItem.NavItem, {
      to: item.to,
      key: item.to
    }, item.label);
  }))), {
    context: context
  });
  expect(view).toMatchSnapshot();
});
test('Tertiary Nav List', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Nav.Nav, null, React.createElement(_NavList.NavList, {
    variant: "tertiary"
  }, props.items.map(function (item) {
    return React.createElement(_NavItem.NavItem, {
      to: item.to,
      key: item.to
    }, item.label);
  }))), {
    context: context
  });
  expect(view).toMatchSnapshot();
});
test('Nav List with custom item nodes', function () {
  var view = (0, _enzyme.mount)(React.createElement(_Nav.Nav, null, React.createElement(_NavList.NavList, {
    variant: "tertiary"
  }, React.createElement(_NavItem.NavItem, {
    to: "/components/nav#link1",
    className: "test-nav-item-class"
  }, React.createElement("div", {
    className: "my-custom-node"
  }, "My custom node")))), {
    context: context
  });
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=Nav.test.js.map