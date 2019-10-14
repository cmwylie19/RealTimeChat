function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { mount } from 'enzyme';
import { Page } from './Page';
import { PageHeader } from './PageHeader';
import { PageSidebar } from './PageSidebar';
import { PageSection } from './PageSection';
import { Breadcrumb, BreadcrumbItem } from '../Breadcrumb';
import { SkipToContent } from '../SkipToContent';
const props = {
  'aria-label': 'Page layout',
  'id': 'PageId',
  'className': 'my-page-class'
};
test('Check page vertical layout example against snapshot', () => {
  const Header = React.createElement(PageHeader, {
    logo: "Logo",
    toolbar: "Toolbar",
    avatar: " | Avatar",
    onNavToggle: () => undefined
  });
  const Sidebar = React.createElement(PageSidebar, {
    nav: "Navigation",
    isNavOpen: true
  });
  const view = mount(React.createElement(Page, _extends({}, props, {
    header: Header,
    sidebar: Sidebar
  }), React.createElement(PageSection, {
    variant: "default"
  }, "Section with default background"), React.createElement(PageSection, {
    variant: "light"
  }, "Section with light background"), React.createElement(PageSection, {
    variant: "dark"
  }, "Section with dark background"), React.createElement(PageSection, {
    variant: "darker"
  }, "Section with darker background")));
  expect(view).toMatchSnapshot();
});
test('Check dark page against snapshot', () => {
  const Header = React.createElement(PageHeader, {
    logo: "Logo",
    toolbar: "Toolbar",
    avatar: " | Avatar",
    onNavToggle: () => undefined
  });
  const Sidebar = React.createElement(PageSidebar, {
    nav: "Navigation",
    isNavOpen: true,
    theme: "dark"
  });
  const view = mount(React.createElement(Page, _extends({}, props, {
    header: Header,
    sidebar: Sidebar
  }), React.createElement(PageSection, {
    variant: "default"
  }, "Section with default background"), React.createElement(PageSection, {
    variant: "light"
  }, "Section with light background"), React.createElement(PageSection, {
    variant: "dark"
  }, "Section with dark background"), React.createElement(PageSection, {
    variant: "darker"
  }, "Section with darker background")));
  expect(view).toMatchSnapshot();
});
test('Check page horizontal layout example against snapshot', () => {
  const Header = React.createElement(PageHeader, {
    logo: "Logo",
    toolbar: "Toolbar",
    avatar: " | Avatar",
    topNav: "Navigation"
  });
  const Sidebar = React.createElement(PageSidebar, {
    isNavOpen: true
  });
  const view = mount(React.createElement(Page, _extends({}, props, {
    header: Header,
    sidebar: Sidebar
  }), React.createElement(PageSection, {
    variant: "default"
  }, "Section with default background"), React.createElement(PageSection, {
    variant: "light"
  }, "Section with light background"), React.createElement(PageSection, {
    variant: "dark"
  }, "Section with dark background"), React.createElement(PageSection, {
    variant: "darker"
  }, "Section with darker background")));
  expect(view).toMatchSnapshot();
});
test('Check page to verify breadcrumb is created', () => {
  const Header = React.createElement(PageHeader, {
    logo: "Logo",
    toolbar: "Toolbar",
    avatar: " | Avatar",
    topNav: "Navigation"
  });
  const Sidebar = React.createElement(PageSidebar, {
    isNavOpen: true
  });

  const PageBreadcrumb = () => React.createElement(Breadcrumb, null, React.createElement(BreadcrumbItem, null, "Section Home"), React.createElement(BreadcrumbItem, {
    to: "#"
  }, "Section Title"), React.createElement(BreadcrumbItem, {
    to: "#"
  }, "Section Title"), React.createElement(BreadcrumbItem, {
    to: "#",
    isActive: true
  }, "Section Landing"));

  const view = mount(React.createElement(Page, _extends({}, props, {
    header: Header,
    sidebar: Sidebar,
    breadcrumb: React.createElement(PageBreadcrumb, null)
  }), React.createElement(PageSection, {
    variant: "default"
  }, "Section with default background"), React.createElement(PageSection, {
    variant: "light"
  }, "Section with light background"), React.createElement(PageSection, {
    variant: "dark"
  }, "Section with dark background"), React.createElement(PageSection, {
    variant: "darker"
  }, "Section with darker background")));
  expect(view).toMatchSnapshot();
  expect(view.find('.pf-c-page__main').getDOMNode().id).toBe('');
});
test('Check page to verify skip to content points to main content region', () => {
  const Header = React.createElement(PageHeader, {
    logo: "Logo",
    toolbar: "Toolbar",
    avatar: " | Avatar",
    topNav: "Navigation"
  });
  const Sidebar = React.createElement(PageSidebar, {
    isNavOpen: true
  });
  const PageBreadcrumb = React.createElement(Breadcrumb, null, React.createElement(BreadcrumbItem, null, "Section Home"), React.createElement(BreadcrumbItem, {
    to: "#"
  }, "Section Title"), React.createElement(BreadcrumbItem, {
    to: "#"
  }, "Section Title"), React.createElement(BreadcrumbItem, {
    to: "#",
    isActive: true
  }, "Section Landing"));
  const mainId = 'main-content-page-layout-test-nav';
  const PageSkipToContent = React.createElement(SkipToContent, {
    href: `#${mainId}`
  }, "Skip to Content");
  const view = mount(React.createElement(Page, _extends({}, props, {
    header: Header,
    sidebar: Sidebar,
    breadcrumb: PageBreadcrumb,
    skipToContent: PageSkipToContent,
    mainContainerId: mainId
  }), React.createElement(PageSection, {
    variant: "default"
  }, "Section with default background"), React.createElement(PageSection, {
    variant: "light"
  }, "Section with light background"), React.createElement(PageSection, {
    variant: "dark"
  }, "Section with dark background"), React.createElement(PageSection, {
    variant: "darker"
  }, "Section with darker background")));
  expect(view).toMatchSnapshot();
  expect(view.find('.pf-c-page').getDOMNode().id).toBe(props.id);
  expect(view.find('.pf-c-page__main').getDOMNode().id).toBe(mainId);
});
//# sourceMappingURL=Page.test.js.map