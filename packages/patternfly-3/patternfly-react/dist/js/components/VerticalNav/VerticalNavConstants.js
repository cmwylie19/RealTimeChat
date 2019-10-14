'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeBodyEventListener = exports.addBodyEventListener = exports.setBodyClassIf = exports.NavContextProvider = exports.navContextTypes = exports.itemObjectTypes = exports.getItemProps = exports.isNavItem = exports.correctDepth = exports.wrongDepth = exports.componentForDepth = exports.deepestOf = exports.getNextDepth = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _helpers = require('../../common/helpers');

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Properties of the nav item object, which can also be passed as
// props directly to Item, SecondaryItem and TertiaryItem components.
var itemObjectTypes = {
  /** Title of the nav item */
  title: _propTypes2.default.string,
  /** Class applied to the item for icons */
  iconClass: _propTypes2.default.string,
  /** Badges rendered on the item */
  badges: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    badgeClass: _propTypes2.default.string,
    tooltip: _propTypes2.default.string,
    count: _propTypes2.default.number,
    iconClass: _propTypes2.default.string
  })),
  /** Sub-items, either can be passed as objects here or as JSX children */
  subItems: _propTypes2.default.array,
  /** Is this the current active item? (used only if tracking this in app) */
  active: _propTypes2.default.bool,
  /** Is this the current hovered item? (used only if tracking this in app) */
  hovered: _propTypes2.default.bool,
  /** Is this the last item we tapped on mobile? (used only if tracking this in app) */
  selectedOnMobile: _propTypes2.default.bool,
  /** Is this item pinned? (used only if tracking this in app) */
  pinned: _propTypes2.default.bool,
  /** Set the activePath to this item initially, but allow that state to change. */
  initialActive: _propTypes2.default.bool,
  /** If this item is a link, what URL it should go to. */
  href: _propTypes2.default.string,
  /** Optional callback for updating hovered prop */
  onHover: _propTypes2.default.func,
  /** Optional callback for updating hovered prop */
  onBlur: _propTypes2.default.func,
  /** Optional callback for updating active prop */
  onClick: _propTypes2.default.func,
  /** Optional additional className(s) to be applied to the item */
  className: _propTypes2.default.string
};

// Props that can be passed to a NavContextProvider
var navContextTypes = {
  /** The path down the item tree so far (made up of each item's idPath() joined by '/') */
  idPath: _propTypes2.default.string,
  /** The depth down the item tree so far. Assume 'primary' if undefined. */
  depth: _propTypes2.default.oneOf(['primary', 'secondary', 'tertiary']),
  /** The nav item object of the ancestor at primary depth, for secondary and tertiary items. */
  primaryItem: _propTypes2.default.shape(itemObjectTypes), // *
  /** The nav item object of the ancestor at secondary depth, for tertiary items. */
  secondaryItem: _propTypes2.default.shape(itemObjectTypes), // *
  /** See VerticalNav.propTypes */
  activePath: _propTypes2.default.string,
  /** See VerticalNav.propTypes */
  hoverPath: _propTypes2.default.string,
  /** See VerticalNav.propTypes */
  mobilePath: _propTypes2.default.string,
  /** See VerticalNav.propTypes */
  pinnedPath: _propTypes2.default.string,
  /** See VerticalNav.propTypes */
  hiddenIcons: _propTypes2.default.bool,
  /** See VerticalNav.propTypes */
  pinnableMenus: _propTypes2.default.bool,
  /** See VerticalNav.propTypes */
  isMobile: _propTypes2.default.bool,
  /** See VerticalNav.propTypes */
  navCollapsed: _propTypes2.default.bool,
  /** See VerticalNav.propTypes */
  hoverDelay: _propTypes2.default.number,
  /** See VerticalNav.propTypes */
  blurDelay: _propTypes2.default.number,
  /** See VerticalNav.propTypes */
  showBadges: _propTypes2.default.bool,
  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnMenuToggleClick: _propTypes2.default.func,
  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnItemHover: _propTypes2.default.func,
  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnItemBlur: _propTypes2.default.func,
  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnItemClick: _propTypes2.default.func,
  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnPin: _propTypes2.default.func,
  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnMobileSelection: _propTypes2.default.func,
  /** Reference to method of the same name in the VerticalNav container. */
  setActivePath: _propTypes2.default.func,
  /** Reference to method of the same name in the VerticalNav container. */
  setHoverPath: _propTypes2.default.func,
  /** Reference to method of the same name in the VerticalNav container. */
  setMobilePath: _propTypes2.default.func,
  /** Reference to method of the same name in the VerticalNav container. */
  setPinnedPath: _propTypes2.default.func,
  /** Notifies the main component that an item has used the active prop. */
  setControlledActivePath: _propTypes2.default.func,
  /** Notifies the main component that an item has used the hovered prop. */
  setControlledHoverPath: _propTypes2.default.func,
  /** Notifies the main component that an item has used the selectedOnMobile prop. */
  setControlledMobilePath: _propTypes2.default.func,
  /** Notifies the main component that an item has used the selectedOnMobile prop. */
  setControlledPinnedPath: _propTypes2.default.func,
  /** Reference to method of the same name in the VerticalNav container. */
  forceHideSecondaryMenu: _propTypes2.default.func,
  /** (Internal helper value) */
  showMobileSecondary: _propTypes2.default.bool,
  /** (Internal helper value) */
  showMobileTertiary: _propTypes2.default.bool
};

var getNextDepth = function getNextDepth(depth) {
  return depth === 'primary' && 'secondary' || depth === 'secondary' && 'tertiary' || 'primary';
};

var deepestOf = function deepestOf(pri, sec, ter) {
  return pri && sec && ter || pri && sec || pri;
};

var componentForDepth = function componentForDepth(depth) {
  if (depth === 'primary') {
    return _index.VerticalNavItem;
  }
  if (depth === 'secondary') {
    return _index.VerticalNavSecondaryItem;
  }
  if (depth === 'tertiary') {
    return _index.VerticalNavTertiaryItem;
  }
  return null;
};

var wrongDepth = function wrongDepth(props, expectedDepth) {
  if (props.depth !== expectedDepth) {
    var componentUsed = componentForDepth(expectedDepth).displayName;
    // eslint-disable-next-line no-console
    console.warn('Warning: ' + componentUsed + ' was used at ' + props.depth + ' depth, but it is for ' + expectedDepth + ' items.');
  }
};

var correctDepth = function correctDepth(props) {
  var Component = componentForDepth(props.depth);
  // eslint-disable-next-line no-console
  console.warn('Rendering with ' + Component.displayName + ' instead.');
  return _react2.default.createElement(Component, props);
};
correctDepth.propTypes = { depth: _propTypes2.default.string };
correctDepth.defaultProps = {
  depth: 'primary'
};

var isNavItem = function isNavItem(node) {
  return node && node.type && node.type.displayName && node.type.displayName.includes('VerticalNav') && node.type.displayName.includes('Item');
};

var getItemProps = function getItemProps(props) {
  var itemChildren = (0, _helpers.filterChildren)(props.children, isNavItem);
  return _extends({}, (0, _helpers.selectKeys)(props, Object.keys(itemObjectTypes)), {
    subItems: itemChildren && itemChildren.map(function (child) {
      return getItemProps(child.props);
    })
  });
};

var NavContextProvider = (0, _recompose.withContext)(navContextTypes, function (providerProps) {
  // The item prop doesn't get included in context, but must be passed to the provider
  // In order to properly include primaryItem and secondaryItem in context.
  var item = providerProps.item,
      primaryItem = providerProps.primaryItem,
      secondaryItem = providerProps.secondaryItem;

  var nextDepth = getNextDepth(providerProps.depth);
  return _extends({}, (0, _helpers.selectKeys)(providerProps, Object.keys(navContextTypes)), {
    depth: nextDepth,
    primaryItem: nextDepth === 'secondary' ? item : primaryItem,
    secondaryItem: nextDepth === 'tertiary' ? item : secondaryItem
    // We don't need a tertiaryItem in context (see VerticalNavItem.getContextNavItems)
  });
})(function (props) {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    props.children
  );
});

// WARNING: HACK! HAAAACK HACK HACK HACK WARNING THIS IS A HACK.
// We only use this to apply magic body classes when the prop `dynamicBodyClasses` is used.
// And only for consistency-- the better solution is to manage these classes yourself in the application.
var getBodyContentElement = function getBodyContentElement() {
  return document.querySelector('.container-pf-nav-pf-vertical');
};

var setBodyClassIf = function setBodyClassIf(condition, className) {
  var body = getBodyContentElement();
  if (condition) {
    body && body.classList.add(className);
  } else {
    body && body.classList.remove(className);
  }
};

var addBodyEventListener = function addBodyEventListener(eventName, handler) {
  var body = getBodyContentElement();
  body && body.addEventListener(eventName, handler);
};

var removeBodyEventListener = function removeBodyEventListener(eventName, handler) {
  var body = getBodyContentElement();
  body && body.removeEventListener(eventName, handler);
};

exports.getNextDepth = getNextDepth;
exports.deepestOf = deepestOf;
exports.componentForDepth = componentForDepth;
exports.wrongDepth = wrongDepth;
exports.correctDepth = correctDepth;
exports.isNavItem = isNavItem;
exports.getItemProps = getItemProps;
exports.itemObjectTypes = itemObjectTypes;
exports.navContextTypes = navContextTypes;
exports.NavContextProvider = NavContextProvider;
exports.setBodyClassIf = setBodyClassIf;
exports.addBodyEventListener = addBodyEventListener;
exports.removeBodyEventListener = removeBodyEventListener;