"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactCore = require("@patternfly/react-core");

var _accessibility = _interopRequireDefault(require("@patternfly/react-styles/css/utilities/Accessibility/accessibility"));

var _spacing = _interopRequireDefault(require("@patternfly/react-styles/css/utilities/Spacing/spacing"));

var _reactStyles = require("@patternfly/react-styles");

var _reactIcons = require("@patternfly/react-icons");

var _imgBrand = _interopRequireDefault(require("./imgBrand.png"));

var _imgAvatar = _interopRequireDefault(require("./imgAvatar.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PageLayoutHorizontalNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageLayoutHorizontalNav, _React$Component);

  function PageLayoutHorizontalNav(props) {
    var _this;

    _classCallCheck(this, PageLayoutHorizontalNav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PageLayoutHorizontalNav).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onDropdownToggle", function (isDropdownOpen) {
      _this.setState({
        isDropdownOpen: isDropdownOpen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDropdownSelect", function (event) {
      _this.setState({
        isDropdownOpen: !_this.state.isDropdownOpen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onKebabDropdownToggle", function (isKebabDropdownOpen) {
      _this.setState({
        isKebabDropdownOpen: isKebabDropdownOpen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onKebabDropdownSelect", function (event) {
      _this.setState({
        isKebabDropdownOpen: !_this.state.isKebabDropdownOpen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onNavSelect", function (result) {
      _this.setState({
        activeItem: result.itemId
      });
    });

    _this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 0
    };
    return _this;
  }

  _createClass(PageLayoutHorizontalNav, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isDropdownOpen = _this$state.isDropdownOpen,
          isKebabDropdownOpen = _this$state.isKebabDropdownOpen,
          activeItem = _this$state.activeItem;

      var PageNav = _react["default"].createElement(_reactCore.Nav, {
        onSelect: this.onNavSelect,
        "aria-label": "Nav"
      }, _react["default"].createElement(_reactCore.NavList, {
        variant: _reactCore.NavVariants.horizontal
      }, _react["default"].createElement(_reactCore.NavItem, {
        itemId: 0,
        isActive: activeItem === 0
      }, "System Panel"), _react["default"].createElement(_reactCore.NavItem, {
        itemId: 1,
        isActive: activeItem === 1
      }, "Policy"), _react["default"].createElement(_reactCore.NavItem, {
        itemId: 2,
        isActive: activeItem === 2
      }, "Authentication"), _react["default"].createElement(_reactCore.NavItem, {
        itemId: 3,
        isActive: activeItem === 3
      }, "Network Services"), _react["default"].createElement(_reactCore.NavItem, {
        itemId: 4,
        isActive: activeItem === 4
      }, "Server")));

      var kebabDropdownItems = [_react["default"].createElement(_reactCore.DropdownItem, null, _react["default"].createElement(_reactIcons.BellIcon, null), " Notifications"), _react["default"].createElement(_reactCore.DropdownItem, null, _react["default"].createElement(_reactIcons.CogIcon, null), " Settings")];
      var userDropdownItems = [_react["default"].createElement(_reactCore.DropdownItem, null, "Link"), _react["default"].createElement(_reactCore.DropdownItem, {
        component: "button"
      }, "Action"), _react["default"].createElement(_reactCore.DropdownItem, {
        isDisabled: true
      }, "Disabled Link"), _react["default"].createElement(_reactCore.DropdownItem, {
        isDisabled: true,
        component: "button"
      }, "Disabled Action"), _react["default"].createElement(_reactCore.DropdownSeparator, null), _react["default"].createElement(_reactCore.DropdownItem, null, "Separated Link"), _react["default"].createElement(_reactCore.DropdownItem, {
        component: "button"
      }, "Separated Action")];

      var PageToolbar = _react["default"].createElement(_reactCore.Toolbar, null, _react["default"].createElement(_reactCore.ToolbarGroup, {
        className: (0, _reactStyles.css)(_accessibility["default"].screenReader, _accessibility["default"].visibleOnLg)
      }, _react["default"].createElement(_reactCore.ToolbarItem, null, _react["default"].createElement(_reactCore.Button, {
        id: "horizontal-example-uid-01",
        "aria-label": "Notifications actions",
        variant: _reactCore.ButtonVariant.plain
      }, _react["default"].createElement(_reactIcons.BellIcon, null))), _react["default"].createElement(_reactCore.ToolbarItem, null, _react["default"].createElement(_reactCore.Button, {
        id: "horizontal-example-uid-02",
        "aria-label": "Settings actions",
        variant: _reactCore.ButtonVariant.plain
      }, _react["default"].createElement(_reactIcons.CogIcon, null)))), _react["default"].createElement(_reactCore.ToolbarGroup, null, _react["default"].createElement(_reactCore.ToolbarItem, {
        className: (0, _reactStyles.css)(_accessibility["default"].hiddenOnLg, _spacing["default"].mr_0)
      }, _react["default"].createElement(_reactCore.Dropdown, {
        isPlain: true,
        position: "right",
        onSelect: this.onKebabDropdownSelect,
        toggle: _react["default"].createElement(_reactCore.KebabToggle, {
          onToggle: this.onKebabDropdownToggle
        }),
        isOpen: isKebabDropdownOpen,
        dropdownItems: kebabDropdownItems
      })), _react["default"].createElement(_reactCore.ToolbarItem, {
        className: (0, _reactStyles.css)(_accessibility["default"].screenReader, _accessibility["default"].visibleOnMd)
      }, _react["default"].createElement(_reactCore.Dropdown, {
        isPlain: true,
        position: "right",
        onSelect: this.onDropdownSelect,
        isOpen: isDropdownOpen,
        toggle: _react["default"].createElement(_reactCore.DropdownToggle, {
          onToggle: this.onDropdownToggle
        }, "Kyle Baker"),
        dropdownItems: userDropdownItems
      }))));

      var Header = _react["default"].createElement(_reactCore.PageHeader, {
        logo: _react["default"].createElement(_reactCore.Brand, {
          src: _imgBrand["default"],
          alt: "Patternfly Logo"
        }),
        toolbar: PageToolbar,
        avatar: _react["default"].createElement(_reactCore.Avatar, {
          src: _imgAvatar["default"],
          alt: "Avatar image"
        }),
        topNav: PageNav
      });

      var PageBreadcrumb = _react["default"].createElement(_reactCore.Breadcrumb, null, _react["default"].createElement(_reactCore.BreadcrumbItem, null, "Section Home"), _react["default"].createElement(_reactCore.BreadcrumbItem, {
        to: "#"
      }, "Section Title"), _react["default"].createElement(_reactCore.BreadcrumbItem, {
        to: "#"
      }, "Section Title"), _react["default"].createElement(_reactCore.BreadcrumbItem, {
        to: "#",
        isActive: true
      }, "Section Landing"));

      var pageId = 'main-content-page-layout-horizontal-nav';

      var PageSkipToContent = _react["default"].createElement(_reactCore.SkipToContent, {
        href: "#".concat(pageId)
      }, "Skip to Content");

      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactCore.Page, {
        header: Header,
        skipToContent: PageSkipToContent,
        breadcrumb: PageBreadcrumb,
        mainContainerId: pageId
      }, _react["default"].createElement(_reactCore.PageSection, {
        variant: _reactCore.PageSectionVariants.light
      }, _react["default"].createElement(_reactCore.TextContent, null, _react["default"].createElement(_reactCore.Text, {
        component: "h1"
      }, "Main Title"), _react["default"].createElement(_reactCore.Text, {
        component: "p"
      }, "Body text should be Overpass Regular at 16px. It should have leading of 24px because ", _react["default"].createElement("br", null), "of it\u2019s relative line height of 1.5."))), _react["default"].createElement(_reactCore.PageSection, null, _react["default"].createElement(_reactCore.Gallery, {
        gutter: "md"
      }, Array.apply(0, Array(10)).map(function (x, i) {
        return _react["default"].createElement(_reactCore.GalleryItem, {
          key: i
        }, _react["default"].createElement(_reactCore.Card, null, _react["default"].createElement(_reactCore.CardBody, null, "This is a card")));
      })))));
    }
  }]);

  return PageLayoutHorizontalNav;
}(_react["default"].Component);

var _default = PageLayoutHorizontalNav;
exports["default"] = _default;
//# sourceMappingURL=PageLayoutHorizontalNav.js.map