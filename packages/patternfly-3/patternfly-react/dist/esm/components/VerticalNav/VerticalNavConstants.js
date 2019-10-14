var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
import { withContext } from 'recompose';
import { selectKeys, filterChildren } from '../../common/helpers';
import { VerticalNavItem, VerticalNavSecondaryItem, VerticalNavTertiaryItem } from './index';

// Properties of the nav item object, which can also be passed as
// props directly to Item, SecondaryItem and TertiaryItem components.
var itemObjectTypes = {
  /** Title of the nav item */
  title: PropTypes.string,
  /** Class applied to the item for icons */
  iconClass: PropTypes.string,
  /** Badges rendered on the item */
  badges: PropTypes.arrayOf(PropTypes.shape({
    badgeClass: PropTypes.string,
    tooltip: PropTypes.string,
    count: PropTypes.number,
    iconClass: PropTypes.string
  })),
  /** Sub-items, either can be passed as objects here or as JSX children */
  subItems: PropTypes.array,
  /** Is this the current active item? (used only if tracking this in app) */
  active: PropTypes.bool,
  /** Is this the current hovered item? (used only if tracking this in app) */
  hovered: PropTypes.bool,
  /** Is this the last item we tapped on mobile? (used only if tracking this in app) */
  selectedOnMobile: PropTypes.bool,
  /** Is this item pinned? (used only if tracking this in app) */
  pinned: PropTypes.bool,
  /** Set the activePath to this item initially, but allow that state to change. */
  initialActive: PropTypes.bool,
  /** If this item is a link, what URL it should go to. */
  href: PropTypes.string,
  /** Optional callback for updating hovered prop */
  onHover: PropTypes.func,
  /** Optional callback for updating hovered prop */
  onBlur: PropTypes.func,
  /** Optional callback for updating active prop */
  onClick: PropTypes.func,
  /** Optional additional className(s) to be applied to the item */
  className: PropTypes.string
};

// Props that can be passed to a NavContextProvider
var navContextTypes = {
  /** The path down the item tree so far (made up of each item's idPath() joined by '/') */
  idPath: PropTypes.string,
  /** The depth down the item tree so far. Assume 'primary' if undefined. */
  depth: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /** The nav item object of the ancestor at primary depth, for secondary and tertiary items. */
  primaryItem: PropTypes.shape(itemObjectTypes), // *
  /** The nav item object of the ancestor at secondary depth, for tertiary items. */
  secondaryItem: PropTypes.shape(itemObjectTypes), // *
  /** See VerticalNav.propTypes */
  activePath: PropTypes.string,
  /** See VerticalNav.propTypes */
  hoverPath: PropTypes.string,
  /** See VerticalNav.propTypes */
  mobilePath: PropTypes.string,
  /** See VerticalNav.propTypes */
  pinnedPath: PropTypes.string,
  /** See VerticalNav.propTypes */
  hiddenIcons: PropTypes.bool,
  /** See VerticalNav.propTypes */
  pinnableMenus: PropTypes.bool,
  /** See VerticalNav.propTypes */
  isMobile: PropTypes.bool,
  /** See VerticalNav.propTypes */
  navCollapsed: PropTypes.bool,
  /** See VerticalNav.propTypes */
  hoverDelay: PropTypes.number,
  /** See VerticalNav.propTypes */
  blurDelay: PropTypes.number,
  /** See VerticalNav.propTypes */
  showBadges: PropTypes.bool,
  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnMenuToggleClick: PropTypes.func,
  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnItemHover: PropTypes.func,
  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnItemBlur: PropTypes.func,
  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnItemClick: PropTypes.func,
  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnPin: PropTypes.func,
  /** Reference to method of the same name in the VerticalNav container. */
  updateNavOnMobileSelection: PropTypes.func,
  /** Reference to method of the same name in the VerticalNav container. */
  setActivePath: PropTypes.func,
  /** Reference to method of the same name in the VerticalNav container. */
  setHoverPath: PropTypes.func,
  /** Reference to method of the same name in the VerticalNav container. */
  setMobilePath: PropTypes.func,
  /** Reference to method of the same name in the VerticalNav container. */
  setPinnedPath: PropTypes.func,
  /** Notifies the main component that an item has used the active prop. */
  setControlledActivePath: PropTypes.func,
  /** Notifies the main component that an item has used the hovered prop. */
  setControlledHoverPath: PropTypes.func,
  /** Notifies the main component that an item has used the selectedOnMobile prop. */
  setControlledMobilePath: PropTypes.func,
  /** Notifies the main component that an item has used the selectedOnMobile prop. */
  setControlledPinnedPath: PropTypes.func,
  /** Reference to method of the same name in the VerticalNav container. */
  forceHideSecondaryMenu: PropTypes.func,
  /** (Internal helper value) */
  showMobileSecondary: PropTypes.bool,
  /** (Internal helper value) */
  showMobileTertiary: PropTypes.bool
};

var getNextDepth = function getNextDepth(depth) {
  return depth === 'primary' && 'secondary' || depth === 'secondary' && 'tertiary' || 'primary';
};

var deepestOf = function deepestOf(pri, sec, ter) {
  return pri && sec && ter || pri && sec || pri;
};

var componentForDepth = function componentForDepth(depth) {
  if (depth === 'primary') {
    return VerticalNavItem;
  }
  if (depth === 'secondary') {
    return VerticalNavSecondaryItem;
  }
  if (depth === 'tertiary') {
    return VerticalNavTertiaryItem;
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
  return React.createElement(Component, props);
};
correctDepth.propTypes = { depth: PropTypes.string };
correctDepth.defaultProps = {
  depth: 'primary'
};

var isNavItem = function isNavItem(node) {
  return node && node.type && node.type.displayName && node.type.displayName.includes('VerticalNav') && node.type.displayName.includes('Item');
};

var getItemProps = function getItemProps(props) {
  var itemChildren = filterChildren(props.children, isNavItem);
  return _extends({}, selectKeys(props, Object.keys(itemObjectTypes)), {
    subItems: itemChildren && itemChildren.map(function (child) {
      return getItemProps(child.props);
    })
  });
};

var NavContextProvider = withContext(navContextTypes, function (providerProps) {
  // The item prop doesn't get included in context, but must be passed to the provider
  // In order to properly include primaryItem and secondaryItem in context.
  var item = providerProps.item,
      primaryItem = providerProps.primaryItem,
      secondaryItem = providerProps.secondaryItem;

  var nextDepth = getNextDepth(providerProps.depth);
  return _extends({}, selectKeys(providerProps, Object.keys(navContextTypes)), {
    depth: nextDepth,
    primaryItem: nextDepth === 'secondary' ? item : primaryItem,
    secondaryItem: nextDepth === 'tertiary' ? item : secondaryItem
    // We don't need a tertiaryItem in context (see VerticalNavItem.getContextNavItems)
  });
})(function (props) {
  return React.createElement(
    React.Fragment,
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

export { getNextDepth, deepestOf, componentForDepth, wrongDepth, correctDepth, isNavItem, getItemProps, itemObjectTypes, navContextTypes, NavContextProvider, setBodyClassIf, addBodyEventListener, removeBodyEventListener };