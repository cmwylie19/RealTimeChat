import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/AppLauncher/app-launcher';
import { ThIcon } from '@patternfly/react-icons';
import { DropdownDirection, DropdownPosition, DropdownToggle, DropdownContext } from '../Dropdown';
import { DropdownWithContext } from '../Dropdown/DropdownWithContext';
export class ApplicationLauncher extends React.Component {
  render() {
    const _this$props = this.props,
          {
      'aria-label': ariaLabel,
      isOpen,
      onToggle,
      toggleIcon,
      onSelect,
      isDisabled,
      className,
      isGrouped,
      dropdownItems,
      items,
      ref
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["aria-label", "isOpen", "onToggle", "toggleIcon", "onSelect", "isDisabled", "className", "isGrouped", "dropdownItems", "items", "ref"]);

    return React.createElement(DropdownContext.Provider, {
      value: {
        onSelect,
        menuClass: styles.appLauncherMenu,
        itemClass: styles.appLauncherMenuItem,
        toggleClass: styles.appLauncherToggle,
        baseClass: styles.appLauncher,
        baseComponent: 'nav',
        sectionClass: styles.appLauncherGroup,
        sectionTitleClass: styles.appLauncherGroupTitle,
        sectionComponent: 'section',
        disabledClass: styles.modifiers.disabled,
        hoverClass: styles.modifiers.hover,
        separatorClass: styles.appLauncherSeparator
      }
    }, React.createElement(DropdownWithContext, _extends({}, props, {
      dropdownItems: items.length ? items : dropdownItems,
      isOpen: isOpen,
      className: className,
      "aria-label": ariaLabel,
      toggle: React.createElement(DropdownToggle, {
        iconComponent: null,
        isOpen: isOpen,
        onToggle: onToggle,
        isDisabled: isDisabled,
        "aria-label": ariaLabel
      }, toggleIcon),
      isGrouped: isGrouped
    })));
  }

}

_defineProperty(ApplicationLauncher, "propTypes", {
  className: _pt.string,
  direction: _pt.any,
  dropdownItems: _pt.arrayOf(_pt.node),
  items: _pt.arrayOf(_pt.node),
  isDisabled: _pt.bool,
  isOpen: _pt.bool,
  position: _pt.any,
  onSelect: _pt.func,
  onToggle: _pt.func,
  'aria-label': _pt.string,
  isGrouped: _pt.bool,
  toggleIcon: _pt.node
});

_defineProperty(ApplicationLauncher, "defaultProps", {
  "className": '',
  "isDisabled": false,
  "direction": DropdownDirection.down,
  "dropdownItems": [],
  "items": [],
  "isOpen": false,
  "position": DropdownPosition.left,
  "onSelect": _event => undefined,
  "onToggle": _value => undefined,
  'aria-label': 'Application launcher',
  "isGrouped": false,
  "toggleIcon": React.createElement(ThIcon, null)
});
//# sourceMappingURL=ApplicationLauncher.js.map