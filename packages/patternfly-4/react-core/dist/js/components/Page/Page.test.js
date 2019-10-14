"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _Page = require("./Page");

var _PageHeader = require("./PageHeader");

var _PageSidebar = require("./PageSidebar");

var _PageSection = require("./PageSection");

var _Breadcrumb = require("../Breadcrumb");

var _SkipToContent = require("../SkipToContent");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  'aria-label': 'Page layout',
  'id': 'PageId',
  'className': 'my-page-class'
};
test('Check page vertical layout example against snapshot', function () {
  var Header = React.createElement(_PageHeader.PageHeader, {
    logo: "Logo",
    toolbar: "Toolbar",
    avatar: " | Avatar",
    onNavToggle: function onNavToggle() {
      return undefined;
    }
  });
  var Sidebar = React.createElement(_PageSidebar.PageSidebar, {
    nav: "Navigation",
    isNavOpen: true
  });
  var view = (0, _enzyme.mount)(React.createElement(_Page.Page, _extends({}, props, {
    header: Header,
    sidebar: Sidebar
  }), React.createElement(_PageSection.PageSection, {
    variant: "default"
  }, "Section with default background"), React.createElement(_PageSection.PageSection, {
    variant: "light"
  }, "Section with light background"), React.createElement(_PageSection.PageSection, {
    variant: "dark"
  }, "Section with dark background"), React.createElement(_PageSection.PageSection, {
    variant: "darker"
  }, "Section with darker background")));
  expect(view).toMatchSnapshot();
});
test('Check dark page against snapshot', function () {
  var Header = React.createElement(_PageHeader.PageHeader, {
    logo: "Logo",
    toolbar: "Toolbar",
    avatar: " | Avatar",
    onNavToggle: function onNavToggle() {
      return undefined;
    }
  });
  var Sidebar = React.createElement(_PageSidebar.PageSidebar, {
    nav: "Navigation",
    isNavOpen: true,
    theme: "dark"
  });
  var view = (0, _enzyme.mount)(React.createElement(_Page.Page, _extends({}, props, {
    header: Header,
    sidebar: Sidebar
  }), React.createElement(_PageSection.PageSection, {
    variant: "default"
  }, "Section with default background"), React.createElement(_PageSection.PageSection, {
    variant: "light"
  }, "Section with light background"), React.createElement(_PageSection.PageSection, {
    variant: "dark"
  }, "Section with dark background"), React.createElement(_PageSection.PageSection, {
    variant: "darker"
  }, "Section with darker background")));
  expect(view).toMatchSnapshot();
});
test('Check page horizontal layout example against snapshot', function () {
  var Header = React.createElement(_PageHeader.PageHeader, {
    logo: "Logo",
    toolbar: "Toolbar",
    avatar: " | Avatar",
    topNav: "Navigation"
  });
  var Sidebar = React.createElement(_PageSidebar.PageSidebar, {
    isNavOpen: true
  });
  var view = (0, _enzyme.mount)(React.createElement(_Page.Page, _extends({}, props, {
    header: Header,
    sidebar: Sidebar
  }), React.createElement(_PageSection.PageSection, {
    variant: "default"
  }, "Section with default background"), React.createElement(_PageSection.PageSection, {
    variant: "light"
  }, "Section with light background"), React.createElement(_PageSection.PageSection, {
    variant: "dark"
  }, "Section with dark background"), React.createElement(_PageSection.PageSection, {
    variant: "darker"
  }, "Section with darker background")));
  expect(view).toMatchSnapshot();
});
test('Check page to verify breadcrumb is created', function () {
  var Header = React.createElement(_PageHeader.PageHeader, {
    logo: "Logo",
    toolbar: "Toolbar",
    avatar: " | Avatar",
    topNav: "Navigation"
  });
  var Sidebar = React.createElement(_PageSidebar.PageSidebar, {
    isNavOpen: true
  });

  var PageBreadcrumb = function PageBreadcrumb() {
    return React.createElement(_Breadcrumb.Breadcrumb, null, React.createElement(_Breadcrumb.BreadcrumbItem, null, "Section Home"), React.createElement(_Breadcrumb.BreadcrumbItem, {
      to: "#"
    }, "Section Title"), React.createElement(_Breadcrumb.BreadcrumbItem, {
      to: "#"
    }, "Section Title"), React.createElement(_Breadcrumb.BreadcrumbItem, {
      to: "#",
      isActive: true
    }, "Section Landing"));
  };

  var view = (0, _enzyme.mount)(React.createElement(_Page.Page, _extends({}, props, {
    header: Header,
    sidebar: Sidebar,
    breadcrumb: React.createElement(PageBreadcrumb, null)
  }), React.createElement(_PageSection.PageSection, {
    variant: "default"
  }, "Section with default background"), React.createElement(_PageSection.PageSection, {
    variant: "light"
  }, "Section with light background"), React.createElement(_PageSection.PageSection, {
    variant: "dark"
  }, "Section with dark background"), React.createElement(_PageSection.PageSection, {
    variant: "darker"
  }, "Section with darker background")));
  expect(view).toMatchSnapshot();
  expect(view.find('.pf-c-page__main').getDOMNode().id).toBe('');
});
test('Check page to verify skip to content points to main content region', function () {
  var Header = React.createElement(_PageHeader.PageHeader, {
    logo: "Logo",
    toolbar: "Toolbar",
    avatar: " | Avatar",
    topNav: "Navigation"
  });
  var Sidebar = React.createElement(_PageSidebar.PageSidebar, {
    isNavOpen: true
  });
  var PageBreadcrumb = React.createElement(_Breadcrumb.Breadcrumb, null, React.createElement(_Breadcrumb.BreadcrumbItem, null, "Section Home"), React.createElement(_Breadcrumb.BreadcrumbItem, {
    to: "#"
  }, "Section Title"), React.createElement(_Breadcrumb.BreadcrumbItem, {
    to: "#"
  }, "Section Title"), React.createElement(_Breadcrumb.BreadcrumbItem, {
    to: "#",
    isActive: true
  }, "Section Landing"));
  var mainId = 'main-content-page-layout-test-nav';
  var PageSkipToContent = React.createElement(_SkipToContent.SkipToContent, {
    href: "#".concat(mainId)
  }, "Skip to Content");
  var view = (0, _enzyme.mount)(React.createElement(_Page.Page, _extends({}, props, {
    header: Header,
    sidebar: Sidebar,
    breadcrumb: PageBreadcrumb,
    skipToContent: PageSkipToContent,
    mainContainerId: mainId
  }), React.createElement(_PageSection.PageSection, {
    variant: "default"
  }, "Section with default background"), React.createElement(_PageSection.PageSection, {
    variant: "light"
  }, "Section with light background"), React.createElement(_PageSection.PageSection, {
    variant: "dark"
  }, "Section with dark background"), React.createElement(_PageSection.PageSection, {
    variant: "darker"
  }, "Section with darker background")));
  expect(view).toMatchSnapshot();
  expect(view.find('.pf-c-page').getDOMNode().id).toBe(props.id);
  expect(view.find('.pf-c-page__main').getDOMNode().id).toBe(mainId);
});
//# sourceMappingURL=Page.test.js.map