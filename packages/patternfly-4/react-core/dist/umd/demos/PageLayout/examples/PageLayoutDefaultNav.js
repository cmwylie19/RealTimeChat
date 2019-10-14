(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-core", "@patternfly/react-styles/css/utilities/Accessibility/accessibility", "@patternfly/react-styles/css/utilities/Spacing/spacing", "@patternfly/react-styles", "@patternfly/react-icons", "./imgBrand.png", "./imgAvatar.svg"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-core"), require("@patternfly/react-styles/css/utilities/Accessibility/accessibility"), require("@patternfly/react-styles/css/utilities/Spacing/spacing"), require("@patternfly/react-styles"), require("@patternfly/react-icons"), require("./imgBrand.png"), require("./imgAvatar.svg"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactCore, global.accessibility, global.spacing, global.reactStyles, global.reactIcons, global.imgBrand, global.imgAvatar);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _reactCore, _accessibility, _spacing, _reactStyles, _reactIcons, _imgBrand, _imgAvatar) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _accessibility2 = _interopRequireDefault(_accessibility);

  var _spacing2 = _interopRequireDefault(_spacing);

  var _imgBrand2 = _interopRequireDefault(_imgBrand);

  var _imgAvatar2 = _interopRequireDefault(_imgAvatar);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  class PageLayoutDefaultNav extends _react2.default.Component {
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

      const PageNav = _react2.default.createElement(_reactCore.Nav, {
        onSelect: this.onNavSelect,
        "aria-label": "Nav",
        theme: "dark"
      }, _react2.default.createElement(_reactCore.NavList, null, _react2.default.createElement(_reactCore.NavItem, {
        itemId: 0,
        isActive: activeItem === 0
      }, "System Panel"), _react2.default.createElement(_reactCore.NavItem, {
        itemId: 1,
        isActive: activeItem === 1
      }, "Policy"), _react2.default.createElement(_reactCore.NavItem, {
        itemId: 2,
        isActive: activeItem === 2
      }, "Authentication"), _react2.default.createElement(_reactCore.NavItem, {
        itemId: 3,
        isActive: activeItem === 3
      }, "Network Services"), _react2.default.createElement(_reactCore.NavItem, {
        itemId: 4,
        isActive: activeItem === 4
      }, "Server")));

      const kebabDropdownItems = [_react2.default.createElement(_reactCore.DropdownItem, null, _react2.default.createElement(_reactIcons.BellIcon, null), " Notifications"), _react2.default.createElement(_reactCore.DropdownItem, null, _react2.default.createElement(_reactIcons.CogIcon, null), " Settings")];
      const userDropdownItems = [_react2.default.createElement(_reactCore.DropdownItem, null, "Link"), _react2.default.createElement(_reactCore.DropdownItem, {
        component: "button"
      }, "Action"), _react2.default.createElement(_reactCore.DropdownItem, {
        isDisabled: true
      }, "Disabled Link"), _react2.default.createElement(_reactCore.DropdownItem, {
        isDisabled: true,
        component: "button"
      }, "Disabled Action"), _react2.default.createElement(_reactCore.DropdownSeparator, null), _react2.default.createElement(_reactCore.DropdownItem, null, "Separated Link"), _react2.default.createElement(_reactCore.DropdownItem, {
        component: "button"
      }, "Separated Action")];

      const PageToolbar = _react2.default.createElement(_reactCore.Toolbar, null, _react2.default.createElement(_reactCore.ToolbarGroup, {
        className: (0, _reactStyles.css)(_accessibility2.default.screenReader, _accessibility2.default.visibleOnLg)
      }, _react2.default.createElement(_reactCore.ToolbarItem, null, _react2.default.createElement(_reactCore.Button, {
        id: "default-example-uid-01",
        "aria-label": "Notifications actions",
        variant: _reactCore.ButtonVariant.plain
      }, _react2.default.createElement(_reactIcons.BellIcon, null))), _react2.default.createElement(_reactCore.ToolbarItem, null, _react2.default.createElement(_reactCore.Button, {
        id: "default-example-uid-02",
        "aria-label": "Settings actions",
        variant: _reactCore.ButtonVariant.plain
      }, _react2.default.createElement(_reactIcons.CogIcon, null)))), _react2.default.createElement(_reactCore.ToolbarGroup, null, _react2.default.createElement(_reactCore.ToolbarItem, {
        className: (0, _reactStyles.css)(_accessibility2.default.hiddenOnLg, _spacing2.default.mr_0)
      }, _react2.default.createElement(_reactCore.Dropdown, {
        isPlain: true,
        position: "right",
        onSelect: this.onKebabDropdownSelect,
        toggle: _react2.default.createElement(_reactCore.KebabToggle, {
          onToggle: this.onKebabDropdownToggle
        }),
        isOpen: isKebabDropdownOpen,
        dropdownItems: kebabDropdownItems
      })), _react2.default.createElement(_reactCore.ToolbarItem, {
        className: (0, _reactStyles.css)(_accessibility2.default.screenReader, _accessibility2.default.visibleOnMd)
      }, _react2.default.createElement(_reactCore.Dropdown, {
        isPlain: true,
        position: "right",
        onSelect: this.onDropdownSelect,
        isOpen: isDropdownOpen,
        toggle: _react2.default.createElement(_reactCore.DropdownToggle, {
          onToggle: this.onDropdownToggle
        }, "Kyle Baker"),
        dropdownItems: userDropdownItems
      }))));

      const Header = _react2.default.createElement(_reactCore.PageHeader, {
        logo: _react2.default.createElement(_reactCore.Brand, {
          src: _imgBrand2.default,
          alt: "Patternfly Logo"
        }),
        toolbar: PageToolbar,
        avatar: _react2.default.createElement(_reactCore.Avatar, {
          src: _imgAvatar2.default,
          alt: "Avatar image"
        }),
        showNavToggle: true
      });

      const Sidebar = _react2.default.createElement(_reactCore.PageSidebar, {
        nav: PageNav,
        theme: "dark"
      });

      const pageId = 'main-content-page-layout-default-nav';

      const PageSkipToContent = _react2.default.createElement(_reactCore.SkipToContent, {
        href: `#${pageId}`
      }, "Skip to Content");

      const PageBreadcrumb = _react2.default.createElement(_reactCore.Breadcrumb, null, _react2.default.createElement(_reactCore.BreadcrumbItem, null, "Section Home"), _react2.default.createElement(_reactCore.BreadcrumbItem, {
        to: "#"
      }, "Section Title"), _react2.default.createElement(_reactCore.BreadcrumbItem, {
        to: "#"
      }, "Section Title"), _react2.default.createElement(_reactCore.BreadcrumbItem, {
        to: "#",
        isActive: true
      }, "Section Landing"));

      return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(_reactCore.Page, {
        header: Header,
        sidebar: Sidebar,
        isManagedSidebar: true,
        skipToContent: PageSkipToContent,
        breadcrumb: PageBreadcrumb,
        mainContainerId: pageId
      }, _react2.default.createElement(_reactCore.PageSection, {
        variant: _reactCore.PageSectionVariants.light
      }, _react2.default.createElement(_reactCore.TextContent, null, _react2.default.createElement(_reactCore.Text, {
        component: "h1"
      }, "Main Title"), _react2.default.createElement(_reactCore.Text, {
        component: "p"
      }, "Body text should be Overpass Regular at 16px. It should have leading of 24px because ", _react2.default.createElement("br", null), "of it\u2019s relative line height of 1.5."))), _react2.default.createElement(_reactCore.PageSection, null, _react2.default.createElement(_reactCore.Gallery, {
        gutter: "md"
      }, Array.apply(0, Array(10)).map((x, i) => _react2.default.createElement(_reactCore.GalleryItem, {
        key: i
      }, _react2.default.createElement(_reactCore.Card, null, _react2.default.createElement(_reactCore.CardBody, null, "This is a card"))))))));
    }

  }

  exports.default = PageLayoutDefaultNav;
});
//# sourceMappingURL=PageLayoutDefaultNav.js.map