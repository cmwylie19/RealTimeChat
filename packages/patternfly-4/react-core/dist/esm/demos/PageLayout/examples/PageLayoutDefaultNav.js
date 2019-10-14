function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { Avatar, Brand, Breadcrumb, BreadcrumbItem, Button, ButtonVariant, Card, CardBody, Dropdown, DropdownToggle, DropdownItem, DropdownSeparator, Gallery, GalleryItem, KebabToggle, Nav, NavItem, NavList, Page, PageHeader, PageSection, PageSectionVariants, PageSidebar, SkipToContent, TextContent, Text, Toolbar, ToolbarGroup, ToolbarItem } from '@patternfly/react-core'; // make sure you've installed @patternfly/patternfly

import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import spacingStyles from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
import imgBrand from './imgBrand.png';
import imgAvatar from './imgAvatar.svg';

class PageLayoutDefaultNav extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onDropdownToggle", isDropdownOpen => {
      this.setState({
        isDropdownOpen
      });
    });

    _defineProperty(this, "onDropdownSelect", event => {
      this.setState({
        isDropdownOpen: !this.state.isDropdownOpen
      });
    });

    _defineProperty(this, "onKebabDropdownToggle", isKebabDropdownOpen => {
      this.setState({
        isKebabDropdownOpen
      });
    });

    _defineProperty(this, "onKebabDropdownSelect", event => {
      this.setState({
        isKebabDropdownOpen: !this.state.isKebabDropdownOpen
      });
    });

    _defineProperty(this, "onNavSelect", result => {
      this.setState({
        activeItem: result.itemId
      });
    });

    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 0
    };
  }

  render() {
    const {
      isDropdownOpen,
      isKebabDropdownOpen,
      activeItem
    } = this.state;
    const PageNav = React.createElement(Nav, {
      onSelect: this.onNavSelect,
      "aria-label": "Nav",
      theme: "dark"
    }, React.createElement(NavList, null, React.createElement(NavItem, {
      itemId: 0,
      isActive: activeItem === 0
    }, "System Panel"), React.createElement(NavItem, {
      itemId: 1,
      isActive: activeItem === 1
    }, "Policy"), React.createElement(NavItem, {
      itemId: 2,
      isActive: activeItem === 2
    }, "Authentication"), React.createElement(NavItem, {
      itemId: 3,
      isActive: activeItem === 3
    }, "Network Services"), React.createElement(NavItem, {
      itemId: 4,
      isActive: activeItem === 4
    }, "Server")));
    const kebabDropdownItems = [React.createElement(DropdownItem, null, React.createElement(BellIcon, null), " Notifications"), React.createElement(DropdownItem, null, React.createElement(CogIcon, null), " Settings")];
    const userDropdownItems = [React.createElement(DropdownItem, null, "Link"), React.createElement(DropdownItem, {
      component: "button"
    }, "Action"), React.createElement(DropdownItem, {
      isDisabled: true
    }, "Disabled Link"), React.createElement(DropdownItem, {
      isDisabled: true,
      component: "button"
    }, "Disabled Action"), React.createElement(DropdownSeparator, null), React.createElement(DropdownItem, null, "Separated Link"), React.createElement(DropdownItem, {
      component: "button"
    }, "Separated Action")];
    const PageToolbar = React.createElement(Toolbar, null, React.createElement(ToolbarGroup, {
      className: css(accessibleStyles.screenReader, accessibleStyles.visibleOnLg)
    }, React.createElement(ToolbarItem, null, React.createElement(Button, {
      id: "default-example-uid-01",
      "aria-label": "Notifications actions",
      variant: ButtonVariant.plain
    }, React.createElement(BellIcon, null))), React.createElement(ToolbarItem, null, React.createElement(Button, {
      id: "default-example-uid-02",
      "aria-label": "Settings actions",
      variant: ButtonVariant.plain
    }, React.createElement(CogIcon, null)))), React.createElement(ToolbarGroup, null, React.createElement(ToolbarItem, {
      className: css(accessibleStyles.hiddenOnLg, spacingStyles.mr_0)
    }, React.createElement(Dropdown, {
      isPlain: true,
      position: "right",
      onSelect: this.onKebabDropdownSelect,
      toggle: React.createElement(KebabToggle, {
        onToggle: this.onKebabDropdownToggle
      }),
      isOpen: isKebabDropdownOpen,
      dropdownItems: kebabDropdownItems
    })), React.createElement(ToolbarItem, {
      className: css(accessibleStyles.screenReader, accessibleStyles.visibleOnMd)
    }, React.createElement(Dropdown, {
      isPlain: true,
      position: "right",
      onSelect: this.onDropdownSelect,
      isOpen: isDropdownOpen,
      toggle: React.createElement(DropdownToggle, {
        onToggle: this.onDropdownToggle
      }, "Kyle Baker"),
      dropdownItems: userDropdownItems
    }))));
    const Header = React.createElement(PageHeader, {
      logo: React.createElement(Brand, {
        src: imgBrand,
        alt: "Patternfly Logo"
      }),
      toolbar: PageToolbar,
      avatar: React.createElement(Avatar, {
        src: imgAvatar,
        alt: "Avatar image"
      }),
      showNavToggle: true
    });
    const Sidebar = React.createElement(PageSidebar, {
      nav: PageNav,
      theme: "dark"
    });
    const pageId = 'main-content-page-layout-default-nav';
    const PageSkipToContent = React.createElement(SkipToContent, {
      href: `#${pageId}`
    }, "Skip to Content");
    const PageBreadcrumb = React.createElement(Breadcrumb, null, React.createElement(BreadcrumbItem, null, "Section Home"), React.createElement(BreadcrumbItem, {
      to: "#"
    }, "Section Title"), React.createElement(BreadcrumbItem, {
      to: "#"
    }, "Section Title"), React.createElement(BreadcrumbItem, {
      to: "#",
      isActive: true
    }, "Section Landing"));
    return React.createElement(React.Fragment, null, React.createElement(Page, {
      header: Header,
      sidebar: Sidebar,
      isManagedSidebar: true,
      skipToContent: PageSkipToContent,
      breadcrumb: PageBreadcrumb,
      mainContainerId: pageId
    }, React.createElement(PageSection, {
      variant: PageSectionVariants.light
    }, React.createElement(TextContent, null, React.createElement(Text, {
      component: "h1"
    }, "Main Title"), React.createElement(Text, {
      component: "p"
    }, "Body text should be Overpass Regular at 16px. It should have leading of 24px because ", React.createElement("br", null), "of it\u2019s relative line height of 1.5."))), React.createElement(PageSection, null, React.createElement(Gallery, {
      gutter: "md"
    }, Array.apply(0, Array(10)).map((x, i) => React.createElement(GalleryItem, {
      key: i
    }, React.createElement(Card, null, React.createElement(CardBody, null, "This is a card"))))))));
  }

}

export default PageLayoutDefaultNav;
//# sourceMappingURL=PageLayoutDefaultNav.js.map