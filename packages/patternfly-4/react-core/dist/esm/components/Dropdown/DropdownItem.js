import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { InternalDropdownItem } from './InternalDropdownItem';
import { DropdownArrowContext } from './dropdownConstants';
export const DropdownItem = (_ref) => {
  let {
    children = null,
    className = '',
    component = 'a',
    isDisabled = false,
    isHovered = false,
    href = '',
    tooltip = null,
    tooltipProps = {},
    onClick,
    ref
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "component", "isDisabled", "isHovered", "href", "tooltip", "tooltipProps", "onClick", "ref"]);

  return React.createElement(DropdownArrowContext.Consumer, null, context => React.createElement(InternalDropdownItem, _extends({
    context: context,
    role: "menuitem",
    tabIndex: -1,
    children: children,
    className: className,
    component: component,
    isDisabled: isDisabled,
    isHovered: isHovered,
    href: href,
    tooltip: tooltip,
    tooltipProps: tooltipProps,
    onClick: onClick
  }, props)));
};
DropdownItem.propTypes = {
  children: _pt.node,
  className: _pt.string,
  component: _pt.node,
  isDisabled: _pt.bool,
  isHovered: _pt.bool,
  href: _pt.string,
  tooltip: _pt.node,
  tooltipProps: _pt.any
};
//# sourceMappingURL=DropdownItem.js.map