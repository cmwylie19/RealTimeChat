(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Page", "./PageHeader", "./PageSidebar", "./PageSection", "../Breadcrumb", "../SkipToContent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Page"), require("./PageHeader"), require("./PageSidebar"), require("./PageSection"), require("../Breadcrumb"), require("../SkipToContent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Page, global.PageHeader, global.PageSidebar, global.PageSection, global.Breadcrumb, global.SkipToContent);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _Page, _PageHeader, _PageSidebar, _PageSection, _Breadcrumb, _SkipToContent) {
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

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  const props = {
    'aria-label': 'Page layout',
    'id': 'PageId',
    'className': 'my-page-class'
  };
  test('Check page vertical layout example against snapshot', () => {
    const Header = React.createElement(_PageHeader.PageHeader, {
      logo: "Logo",
      toolbar: "Toolbar",
      avatar: " | Avatar",
      onNavToggle: () => undefined
    });
    const Sidebar = React.createElement(_PageSidebar.PageSidebar, {
      nav: "Navigation",
      isNavOpen: true
    });
    const view = (0, _enzyme.mount)(React.createElement(_Page.Page, _extends({}, props, {
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
  test('Check dark page against snapshot', () => {
    const Header = React.createElement(_PageHeader.PageHeader, {
      logo: "Logo",
      toolbar: "Toolbar",
      avatar: " | Avatar",
      onNavToggle: () => undefined
    });
    const Sidebar = React.createElement(_PageSidebar.PageSidebar, {
      nav: "Navigation",
      isNavOpen: true,
      theme: "dark"
    });
    const view = (0, _enzyme.mount)(React.createElement(_Page.Page, _extends({}, props, {
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
  test('Check page horizontal layout example against snapshot', () => {
    const Header = React.createElement(_PageHeader.PageHeader, {
      logo: "Logo",
      toolbar: "Toolbar",
      avatar: " | Avatar",
      topNav: "Navigation"
    });
    const Sidebar = React.createElement(_PageSidebar.PageSidebar, {
      isNavOpen: true
    });
    const view = (0, _enzyme.mount)(React.createElement(_Page.Page, _extends({}, props, {
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
  test('Check page to verify breadcrumb is created', () => {
    const Header = React.createElement(_PageHeader.PageHeader, {
      logo: "Logo",
      toolbar: "Toolbar",
      avatar: " | Avatar",
      topNav: "Navigation"
    });
    const Sidebar = React.createElement(_PageSidebar.PageSidebar, {
      isNavOpen: true
    });

    const PageBreadcrumb = () => React.createElement(_Breadcrumb.Breadcrumb, null, React.createElement(_Breadcrumb.BreadcrumbItem, null, "Section Home"), React.createElement(_Breadcrumb.BreadcrumbItem, {
      to: "#"
    }, "Section Title"), React.createElement(_Breadcrumb.BreadcrumbItem, {
      to: "#"
    }, "Section Title"), React.createElement(_Breadcrumb.BreadcrumbItem, {
      to: "#",
      isActive: true
    }, "Section Landing"));

    const view = (0, _enzyme.mount)(React.createElement(_Page.Page, _extends({}, props, {
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
  test('Check page to verify skip to content points to main content region', () => {
    const Header = React.createElement(_PageHeader.PageHeader, {
      logo: "Logo",
      toolbar: "Toolbar",
      avatar: " | Avatar",
      topNav: "Navigation"
    });
    const Sidebar = React.createElement(_PageSidebar.PageSidebar, {
      isNavOpen: true
    });
    const PageBreadcrumb = React.createElement(_Breadcrumb.Breadcrumb, null, React.createElement(_Breadcrumb.BreadcrumbItem, null, "Section Home"), React.createElement(_Breadcrumb.BreadcrumbItem, {
      to: "#"
    }, "Section Title"), React.createElement(_Breadcrumb.BreadcrumbItem, {
      to: "#"
    }, "Section Title"), React.createElement(_Breadcrumb.BreadcrumbItem, {
      to: "#",
      isActive: true
    }, "Section Landing"));
    const mainId = 'main-content-page-layout-test-nav';
    const PageSkipToContent = React.createElement(_SkipToContent.SkipToContent, {
      href: `#${mainId}`
    }, "Skip to Content");
    const view = (0, _enzyme.mount)(React.createElement(_Page.Page, _extends({}, props, {
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
});
//# sourceMappingURL=Page.test.js.map