function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { Avatar, Brand, Button, ButtonVariant, Dropdown, DropdownToggle, DropdownItem, DropdownSeparator, KebabToggle, Nav, NavGroup, NavItem, Page, PageHeader, PageSection, PageSectionVariants, PageSidebar, SkipToContent, TextContent, Text, Toolbar, ToolbarGroup, ToolbarItem } from '@patternfly/react-core'; // make sure you've installed @patternfly/patternfly

import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import spacingStyles from '@patternfly/react-styles/css/utilities/Spacing/spacing';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
import imgBrand from './imgBrand.png';
import imgAvatar from './imgAvatar.svg';

class PageLayoutGroupsNav extends React.Component {
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
      activeItem: 'grp-1_itm-1'
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
    }, React.createElement(NavGroup, {
      title: "System Panel"
    }, React.createElement(NavItem, {
      itemId: "grp-1_itm-1",
      isActive: activeItem === 'grp-1_itm-1'
    }, "Overview"), React.createElement(NavItem, {
      itemId: "grp-1_itm-2",
      isActive: activeItem === 'grp-1_itm-2'
    }, "Resource Usage"), React.createElement(NavItem, {
      itemId: "grp-1_itm-3",
      isActive: activeItem === 'grp-1_itm-3'
    }, "Hypervisors"), React.createElement(NavItem, {
      itemId: "grp-1_itm-4",
      isActive: activeItem === 'grp-1_itm-4'
    }, "Instances"), React.createElement(NavItem, {
      itemId: "grp-1_itm-5",
      isActive: activeItem === 'grp-1_itm-5'
    }, "Volumes"), React.createElement(NavItem, {
      itemId: "grp-1_itm-6",
      isActive: activeItem === 'grp-1_itm-6'
    }, "Network")), React.createElement(NavGroup, {
      title: "Policy"
    }, React.createElement(NavItem, {
      itemId: "grp-2_itm-1",
      isActive: activeItem === 'grp-2_itm-1'
    }, "Hosts"), React.createElement(NavItem, {
      itemId: "grp-2_itm-2",
      isActive: activeItem === 'grp-2_itm-2'
    }, "Virtual Machines"), React.createElement(NavItem, {
      itemId: "grp-2_itm-3",
      isActive: activeItem === 'grp-2_itm-3'
    }, "Storage")));
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
      id: "groups-example-uid-01",
      "aria-label": "Notifications actions",
      variant: ButtonVariant.plain
    }, React.createElement(BellIcon, null))), React.createElement(ToolbarItem, null, React.createElement(Button, {
      id: "groups-example-uid-02",
      "aria-label": "Setings actions",
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
    const pageId = 'main-content-page-layout-group-nav';
    const PageSkipToContent = React.createElement(SkipToContent, {
      href: `#${pageId}`
    }, "Skip to Content");
    return React.createElement(React.Fragment, null, React.createElement(Page, {
      header: Header,
      sidebar: Sidebar,
      isManagedSidebar: true,
      skipToContent: PageSkipToContent,
      mainContainerId: pageId
    }, React.createElement(PageSection, {
      variant: PageSectionVariants.light
    }, React.createElement(TextContent, null, React.createElement(Text, {
      component: "h1"
    }, "Main Title"), React.createElement(Text, {
      component: "p"
    }, "Body text should be Overpass Regular at 16px. It should have leading of 24px because ", React.createElement("br", null), "of it\u2019s relative line height of 1.5."))), React.createElement(PageSection, {
      variant: PageSectionVariants.light
    }, "Light"), React.createElement(PageSection, {
      variant: PageSectionVariants.dark
    }, "Dark"), React.createElement(PageSection, {
      variant: PageSectionVariants.darker
    }, "Darker"), React.createElement(PageSection, null, "Content")));
  }

}

export default PageLayoutGroupsNav;
//# sourceMappingURL=PageLayoutGroupsNav.js.map