var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ListGroup } from '../ListGroup';
import VerticalNavItem from './VerticalNavItem';
import VerticalNavMasthead from './VerticalNavMasthead';
import { filterChildren, findChild, hasDisplayName, noop, propsChanged } from '../../common/helpers';
import Timer from '../../common/Timer';
import controlled from '../../common/controlled';
import { layout } from '../../common/patternfly';
import { NavContextProvider, deepestOf, itemObjectTypes, addBodyEventListener, removeBodyEventListener, setBodyClassIf } from './VerticalNavConstants';
import VerticalNavSecondaryItem from './VerticalNavSecondaryItem';
import VerticalNavTertiaryItem from './VerticalNavTertiaryItem';
import VerticalNavBrand from './VerticalNavBrand';
import VerticalNavIconBar from './VerticalNavIconBar';
import VerticalNavBadge from './VerticalNavBadge';
import VerticalNavDividerItem from './VerticalNavDividerItem';

/**
 * VerticalNav - The Vertical Navigation pattern
 * http://www.patternfly.org/pattern-library/navigation/vertical-navigation/
 */

var BaseVerticalNav = function (_React$Component) {
  _inherits(BaseVerticalNav, _React$Component);

  function BaseVerticalNav() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BaseVerticalNav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BaseVerticalNav.__proto__ || Object.getPrototypeOf(BaseVerticalNav)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      forceHidden: false, // eslint-disable-line react/no-unused-state
      controlledActivePath: false,
      controlledHoverPath: false,
      controlledMobilePath: false,
      controlledPinnedPath: false
    }, _this.onLayoutChange = function (newLayout) {
      var _this$props = _this.props,
          onLayoutChange = _this$props.onLayoutChange,
          setControlledState = _this$props.setControlledState;

      setControlledState({ isMobile: newLayout === 'mobile' });
      onLayoutChange && onLayoutChange(newLayout);
    }, _this.setActivePath = function (activePath) {
      if (!_this.state.controlledActivePath) {
        _this.props.setControlledState({ activePath: activePath });
      }
    }, _this.setControlledActivePath = function (controlledActivePath) {
      _this.setState({ controlledActivePath: controlledActivePath });
    }, _this.setControlledHoverPath = function (controlledHoverPath) {
      _this.setState({ controlledHoverPath: controlledHoverPath });
    }, _this.setControlledMobilePath = function (controlledMobilePath) {
      _this.setState({ controlledMobilePath: controlledMobilePath });
    }, _this.setControlledPinnedPath = function (controlledPinnedPath) {
      _this.setState({ controlledPinnedPath: controlledPinnedPath });
    }, _this.setHoverPath = function (hoverPath) {
      if (!_this.state.controlledHoverPath) {
        _this.props.setControlledState(_extends({
          hoverPath: hoverPath
        }, hoverPath === null ? { showMobileNav: false } : {}));
      }
    }, _this.setMobilePath = function (mobilePath) {
      if (!_this.state.controlledMobilePath) {
        _this.props.setControlledState({ mobilePath: mobilePath });
      }
    }, _this.setPinnedPath = function (pinnedPath) {
      if (!_this.state.controlledPinnedPath) {
        _this.props.setControlledState({ pinnedPath: pinnedPath });
      }
    }, _this.hoverTimer = new Timer(), _this.clearBodyClasses = function () {
      if (_this.props.dynamicBodyClasses) {
        setBodyClassIf(false, 'collapsed-nav');
        setBodyClassIf(false, 'hidden-nav');
      }
    }, _this.collapseMenu = function () {
      var _this$props2 = _this.props,
          onCollapse = _this$props2.onCollapse,
          setControlledState = _this$props2.setControlledState;

      setControlledState({ navCollapsed: true });
      onCollapse && onCollapse();
    }, _this.expandMenu = function () {
      var _this$props3 = _this.props,
          onExpand = _this$props3.onExpand,
          setControlledState = _this$props3.setControlledState;

      setControlledState({ navCollapsed: false });
      onExpand && onExpand();
    }, _this.forceHideSecondaryMenu = function () {
      _this.setState({ forceHidden: true }); // eslint-disable-line react/no-unused-state
      setTimeout(function () {
        _this.setState({ forceHidden: false }); // eslint-disable-line react/no-unused-state
      }, 500);
    }, _this.handleBodyClick = function () {
      // Clear hover state on body click. Helps especially when using blurDisabled prop.
      _this.setHoverPath(null);
    }, _this.navigateToItem = function (item) {
      var onNavigate = _this.props.onNavigate;

      onNavigate(item);
      // Note: This should become router-aware later on.
    }, _this.updateBodyClasses = function () {
      // Note: Updating the body element classes from here like this is a hacky, non-react-y pattern.
      // It's only here for consistency. See comments on getBodyContentElement in ./constants.js.
      var _this$props4 = _this.props,
          dynamicBodyClasses = _this$props4.dynamicBodyClasses,
          navCollapsed = _this$props4.navCollapsed,
          pinnedPath = _this$props4.pinnedPath,
          isMobile = _this$props4.isMobile;

      var collapsed = navCollapsed && pinnedPath === null;
      if (dynamicBodyClasses) {
        setBodyClassIf(!isMobile && collapsed, 'collapsed-nav');
        setBodyClassIf(isMobile, 'hidden-nav');
      }
    }, _this.updateNavOnItemBlur = function (primary, secondary, tertiary, idPath, parentPath, noDelay, callback) {
      var _this$props5 = _this.props,
          hoverPath = _this$props5.hoverPath,
          blurDelay = _this$props5.blurDelay,
          blurDisabled = _this$props5.blurDisabled,
          setControlledState = _this$props5.setControlledState;

      var item = deepestOf(primary, secondary, tertiary);
      var hovered = hoverPath && hoverPath.startsWith(idPath);
      _this.hoverTimer.clearTimer();
      if (hovered) {
        var doBlur = function doBlur() {
          if (!blurDisabled) {
            // IMPORTANT: We reference this.props below for the hoverPath value when the timeout fires.
            // If we just use the hoverPath in scope from above, it is from when the timeout was set.
            if (idPath === _this.props.hoverPath) {
              // Only bump up the hover path if it's still set to the item we're blurring
              setControlledState({ hoverPath: parentPath });
            }
            callback && callback(primary, secondary, tertiary);
          }
        };
        if (item.subItems && item.subItems.length > 0) {
          if (noDelay) {
            doBlur();
          } else {
            _this.hoverTimer.startTimer(doBlur, blurDelay);
          }
        }
      }
    }, _this.updateNavOnItemClick = function (primary, secondary, tertiary, idPath, parentPath) {
      var _this$props6 = _this.props,
          onItemClick = _this$props6.onItemClick,
          hoverPath = _this$props6.hoverPath,
          hoverDisabled = _this$props6.hoverDisabled,
          isMobile = _this$props6.isMobile;

      _this.hoverTimer.skipTimer();
      var item = deepestOf(primary, secondary, tertiary);
      var isLeafItem = !item.subItems || item.subItems.length === 0;
      if (isMobile) {
        _this.setMobilePath(null);
      }
      if (isLeafItem) {
        _this.setHoverPath(null);
      } else if (hoverDisabled && hoverPath === idPath) {
        // Clicking the currently-"hovered" item in hoverDisabled un-"hovers" it.
        _this.setHoverPath(parentPath);
      }
      if (isLeafItem || !isMobile) {
        _this.navigateToItem(item);
      }
      onItemClick && onItemClick(primary, secondary, tertiary);
    }, _this.updateNavOnItemHover = function (primary, secondary, tertiary, idPath, parentPath, callback) {
      var _this$props7 = _this.props,
          onItemHover = _this$props7.onItemHover,
          hoverPath = _this$props7.hoverPath,
          hoverDelay = _this$props7.hoverDelay,
          hoverDisabled = _this$props7.hoverDisabled,
          isMobile = _this$props7.isMobile;

      var item = deepestOf(primary, secondary, tertiary);
      var hovered = hoverPath && hoverPath.startsWith(idPath);
      var targetPath = item.subItems && item.subItems.length > 0 ? idPath : parentPath;
      var that = _this;
      if (!isMobile) {
        _this.hoverTimer.clearTimer();
        if (!hovered) {
          _this.hoverTimer.startTimer(function (skipped) {
            if (skipped || !hoverDisabled) {
              that.setHoverPath(targetPath);
              callback && callback(primary, secondary, tertiary);
              onItemHover && onItemHover(primary, secondary, tertiary);
            }
          }, hoverDelay);
        }
      }
    }, _this.updateNavOnMenuToggleClick = function () {
      var _this$props8 = _this.props,
          onMenuToggleClick = _this$props8.onMenuToggleClick,
          isMobile = _this$props8.isMobile,
          showMobileNav = _this$props8.showMobileNav,
          navCollapsed = _this$props8.navCollapsed,
          setControlledState = _this$props8.setControlledState;

      if (isMobile) {
        if (showMobileNav) {
          setControlledState({ showMobileNav: false });
        } else {
          _this.setMobilePath(null);
          setControlledState({ showMobileNav: true });
        }
      } else if (navCollapsed) {
        _this.expandMenu();
      } else {
        _this.collapseMenu();
      }
      onMenuToggleClick && onMenuToggleClick();
    }, _this.updateNavOnMobileSelection = function (primary, secondary, tertiary) {
      var onMobileSelection = _this.props.onMobileSelection;
      // All the behavior here is handled by mobilePath and setMobilePath,
      // but we still make a callback available here.

      onMobileSelection && onMobileSelection(primary, secondary, tertiary);
    }, _this.updateNavOnPin = function (item, depth, pinned) {
      var _this$props9 = _this.props,
          onItemPin = _this$props9.onItemPin,
          isMobile = _this$props9.isMobile;

      if (!isMobile) {
        onItemPin && onItemPin(item, depth, pinned);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // More state is defined in controlledStateTypes.
  // These ones just don't need to be able to be controlled by props.


  _createClass(BaseVerticalNav, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateBodyClasses();
      layout.addChangeListener(this.onLayoutChange);
      addBodyEventListener('mousedown', this.handleBodyClick);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(oldProps) {
      var bodyClassProps = ['navCollapsed', 'pinnedPath', 'showMobileNav', 'isMobile'];
      if (propsChanged(bodyClassProps, oldProps, this.props)) {
        this.updateBodyClasses();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // Clear any timers so they don't trigger while the component is unmounted.
      this.hoverTimer.clearTimer();
      this.clearBodyClasses();
      layout.removeChangeListener(this.onLayoutChange);
      removeBodyEventListener('mousedown', this.handleBodyClick);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          children = _props.children;
      // Nav items may be passed either as nested VerticalNavItem children, or as nested items in a prop.
      // The items prop will take priority, if present, and must be an array of item objects (not React components).
      // If the items prop is not present, items must be expressed as VerticalNavItem children instead.

      var itemsFromChildren = filterChildren(children, function (child) {
        return hasDisplayName(child, VerticalNavItem.displayName);
      });
      var itemsFromProps = items && items.length > 0 && items.map(function (primaryItem, i) {
        return React.createElement(
          VerticalNavItem,
          { item: primaryItem, key: 'primary_' + primaryItem.title },
          primaryItem.subItems && primaryItem.subItems.map(function (secondaryItem) {
            return React.createElement(
              VerticalNavSecondaryItem,
              {
                id: secondaryItem.id,
                dataID: secondaryItem.dataID,
                isDivider: secondaryItem.isDivider,
                preventHref: secondaryItem.preventHref,
                item: secondaryItem,
                key: 'secondary_' + secondaryItem.title
              },
              secondaryItem.subItems && secondaryItem.subItems.map(function (tertiaryItem) {
                return React.createElement(VerticalNavTertiaryItem, { item: tertiaryItem, key: 'tertiary_' + tertiaryItem.title });
              })
            );
          })
        );
      });
      var itemComponents = itemsFromProps || itemsFromChildren || [];

      var _props2 = this.props,
          hiddenIcons = _props2.hiddenIcons,
          pinnableMenus = _props2.pinnableMenus,
          showBadges = _props2.showBadges,
          forceHidden = _props2.forceHidden,
          hideMasthead = _props2.hideMasthead,
          persistentSecondary = _props2.persistentSecondary,
          hoverDelay = _props2.hoverDelay,
          blurDelay = _props2.blurDelay,
          isMobile = _props2.isMobile,
          showMobileNav = _props2.showMobileNav,
          masthead = _props2.masthead,
          navCollapsed = _props2.navCollapsed,
          activePath = _props2.activePath,
          hoverPath = _props2.hoverPath,
          mobilePath = _props2.mobilePath,
          pinnedPath = _props2.pinnedPath;


      var mastheadElem = masthead || React.createElement(
        'nav',
        { className: classNames('navbar navbar-pf-vertical') },
        findChild(children, function (child) {
          return hasDisplayName(child, VerticalNavMasthead.displayName);
        })
      );

      var getPathDepth = function getPathDepth(path) {
        return path && path.split('/').filter(function (s) {
          return s !== '';
        }).length;
      };
      var mobileDepth = getPathDepth(mobilePath);
      var hoverDepth = getPathDepth(hoverPath);
      var pinnedDepth = getPathDepth(pinnedPath);
      var showMobileSecondary = isMobile && mobileDepth >= 1;
      var showMobileTertiary = isMobile && mobileDepth >= 2;
      var hoverSecondaryNav = hoverDepth >= 1;
      var hoverTertiaryNav = hoverDepth >= 2;
      var pinnedSecondaryNav = pinnedDepth >= 1;
      var pinnedTertiaryNav = pinnedDepth >= 2;

      return React.createElement(
        NavContextProvider,
        {
          idPath: '/',
          updateNavOnMenuToggleClick: this.updateNavOnMenuToggleClick,
          updateNavOnItemHover: this.updateNavOnItemHover,
          updateNavOnItemBlur: this.updateNavOnItemBlur,
          updateNavOnItemClick: this.updateNavOnItemClick,
          updateNavOnMobileSelection: this.updateNavOnMobileSelection,
          setActivePath: this.setActivePath,
          setHoverPath: this.setHoverPath,
          setMobilePath: this.setMobilePath,
          setPinnedPath: this.setPinnedPath,
          setControlledActivePath: this.setControlledActivePath,
          setControlledHoverPath: this.setControlledHoverPath,
          setControlledMobilePath: this.setControlledMobilePath,
          setControlledPinnedPath: this.setControlledPinnedPath,
          activePath: activePath,
          hoverPath: hoverPath,
          mobilePath: mobilePath,
          pinnedPath: pinnedPath,
          hiddenIcons: hiddenIcons,
          pinnableMenus: pinnableMenus,
          isMobile: isMobile,
          showMobileSecondary: showMobileSecondary,
          showMobileTertiary: showMobileTertiary,
          showBadges: showBadges,
          navCollapsed: navCollapsed,
          updateNavOnPin: this.updateNavOnPin,
          forceHideSecondaryMenu: this.forceHideSecondaryMenu,
          hoverDelay: hoverDelay,
          blurDelay: blurDelay
        },
        !hideMasthead && mastheadElem,
        React.createElement(
          'div',
          {
            className: classNames('nav-pf-vertical nav-pf-vertical-with-sub-menus', {
              'nav-pf-vertical-collapsible-menus': pinnableMenus,
              'hidden-icons-pf': hiddenIcons,
              'nav-pf-vertical-with-badges': showBadges,
              'nav-pf-persistent-secondary': persistentSecondary,
              'show-mobile-secondary': showMobileSecondary,
              'show-mobile-tertiary': showMobileTertiary,
              'hover-secondary-nav-pf': hoverSecondaryNav,
              'hover-tertiary-nav-pf': hoverTertiaryNav,
              'collapsed-secondary-nav-pf': pinnableMenus && pinnedSecondaryNav,
              'collapsed-tertiary-nav-pf': pinnableMenus && pinnedTertiaryNav,
              hidden: isMobile,
              collapsed: !isMobile && navCollapsed,
              'force-hide-secondary-nav-pf': forceHidden,
              'show-mobile-nav': showMobileNav
            })
          },
          React.createElement(
            ListGroup,
            { componentClass: 'ul' },
            itemComponents
          )
        )
      );
    }
  }]);

  return BaseVerticalNav;
}(React.Component);

var controlledState = {
  // NOTE: If you use any of these props, be sure to also use the corresponding callbacks/handlers.
  // These props override values of the same name set by setControlledState().
  types: {
    /** Use the mobile layout of the component. Corresponds to onLayoutChange callback. */
    isMobile: PropTypes.bool,
    /** Display the nav in mobile mode */
    showMobileNav: PropTypes.bool,
    /** Collapse the nav. Corresponds to onMenuToggleClick or onCollapse and onExpand callbacks. */
    navCollapsed: PropTypes.bool,
    /** The idPath matching the currently active item. Corresponds to onItemClick callback. */
    activePath: PropTypes.string,
    /** The idPath matching the currently hovered item. Corresponds to onItemHover and onItemBlur callbacks. */
    hoverPath: PropTypes.string,
    /** The idPath matching the currently selected item on mobile. Corresponds to onMobileSelection callback. */
    mobilePath: PropTypes.string,
    /** The idPath matching the currently pinned item. Corresponds to onItemPin callback. */
    pinnedPath: PropTypes.string
  },
  defaults: {
    isMobile: layout.is('mobile'),
    showMobileNav: null,
    navCollapsed: null,
    activePath: null,
    hoverPath: null,
    mobilePath: null,
    pinnedPath: null
  }
};

BaseVerticalNav.propTypes = _extends({}, controlledState.types, {
  /** Navigation items, passed as an array of objects (as opposed to JSX children w/ props) */
  items: PropTypes.arrayOf(PropTypes.shape(itemObjectTypes)),
  /** Enables the pin buttons on the active submenu. */
  pinnableMenus: PropTypes.bool,
  /** Automatically applies classes to the body element when the layout changes. */
  dynamicBodyClasses: PropTypes.bool,
  /** Hide all icons */
  hiddenIcons: PropTypes.bool,
  /** Show badges in nav items */
  showBadges: PropTypes.bool,
  /** Don't show items on hover, require a click */
  hoverDisabled: PropTypes.bool,
  /** Don't hide items on blur, require a click elsewhere */
  blurDisabled: PropTypes.bool,
  /** Force the nav to be hidden temporarily. */
  forceHidden: PropTypes.bool,
  /** Hide the masthead and notification drawer areas. */
  hideMasthead: PropTypes.bool,
  /** Persist the secondary nav */
  persistentSecondary: PropTypes.bool,
  /** Delay between mouse hover and menu show in ms */
  hoverDelay: PropTypes.number,
  /** Delay between mouse blur and menu hide in ms */
  blurDelay: PropTypes.number,
  /**  */
  masthead: PropTypes.node,
  /** Optional callback for updating isMobile prop */
  onLayoutChange: PropTypes.func, // eslint-disable-line react/require-default-props
  /** Optional callback for updating navCollapsed and showMobileNav props (option 1) */
  onMenuToggleClick: PropTypes.func,
  /** Optional callback for updating navCollapsed and showMobileNav props (option 2) */
  onCollapse: PropTypes.func,
  /** Optional callback for updating navCollapsed and showMobileNav props (option 2) */
  onExpand: PropTypes.func,
  /** Optional callback for updating active props on items or activePath prop. Only called on leaf item click. */
  onNavigate: PropTypes.func,
  /** Optional callback for updating active props on items or activePath prop. Called on any item click. */
  onItemClick: PropTypes.func,
  /** Optional callback for updating hovered prop on items */
  onItemHover: PropTypes.func,
  /** Optional callback for updating hovered prop on items */
  onItemBlur: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  /** Optional callback for updating pinned props on items or pinnedPath prop. */
  onItemPin: PropTypes.func,
  /** Optional callback for updating mobilePath prop */
  onMobileSelection: PropTypes.func, // *
  /** Navigation items, passed as Item, SecondaryItem and TertiaryItem children. */
  children: PropTypes.node,
  /** Helper injected by `controlled()` to manage controlledStateTypes values */
  setControlledState: PropTypes.func // eslint-disable-line react/require-default-props
});

BaseVerticalNav.defaultProps = {
  items: null,
  pinnableMenus: false,
  dynamicBodyClasses: true,
  hiddenIcons: false,
  showBadges: false,
  hoverDisabled: false,
  blurDisabled: false,
  forceHidden: false,
  hideMasthead: false,
  persistentSecondary: true,
  hoverDelay: 500,
  blurDelay: 700,
  masthead: null,
  onMenuToggleClick: null,
  onCollapse: null,
  onExpand: null,
  onItemClick: null,
  onItemHover: null,
  onItemBlur: null,
  onItemPin: null,
  onMobileSelection: null,
  onNavigate: noop,
  children: null
};

var NoPersist = controlled(controlledState)(BaseVerticalNav);
var WithPersist = controlled(_extends({}, controlledState, {
  persist: ['navCollapsed', 'pinnedPath']
}))(BaseVerticalNav);

var VerticalNav = function VerticalNav(_ref2) {
  var persist = _ref2.persist,
      props = _objectWithoutProperties(_ref2, ['persist']);

  return persist ? React.createElement(WithPersist, props) : React.createElement(NoPersist, props);
};

VerticalNav.propTypes = _extends({}, BaseVerticalNav.propTypes, {
  persist: PropTypes.bool
});

VerticalNav.defaultProps = _extends({}, BaseVerticalNav.defaultProps, {
  persist: true
});

VerticalNav.displayName = 'VerticalNav';

VerticalNav.NoPersist = NoPersist;
VerticalNav.WithPersist = WithPersist;

VerticalNav.Masthead = VerticalNavMasthead;
VerticalNav.Item = VerticalNavItem;
VerticalNav.SecondaryItem = VerticalNavSecondaryItem;
VerticalNav.TertiaryItem = VerticalNavTertiaryItem;
VerticalNav.Brand = VerticalNavBrand;
VerticalNav.IconBar = VerticalNavIconBar;
VerticalNav.Badge = VerticalNavBadge;
VerticalNav.Divider = VerticalNavDividerItem;

export default VerticalNav;