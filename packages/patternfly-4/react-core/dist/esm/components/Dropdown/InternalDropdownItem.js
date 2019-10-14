import _pt from "prop-types";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { DropdownContext } from './dropdownConstants';
import { KEY_CODES, KEYHANDLER_DIRECTION } from '../../helpers/constants';
import { Tooltip } from '../Tooltip';
export class InternalDropdownItem extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "ref", React.createRef());

    _defineProperty(this, "onKeyDown", event => {
      // Detected key press on this item, notify the menu parent so that the appropriate
      // item can be focused
      if (event.keyCode === KEY_CODES.TAB) {
        return;
      }

      event.preventDefault();

      if (event.keyCode === KEY_CODES.ARROW_UP) {
        this.props.context.keyHandler(this.props.index, KEYHANDLER_DIRECTION.UP);
      } else if (event.keyCode === KEY_CODES.ARROW_DOWN) {
        this.props.context.keyHandler(this.props.index, KEYHANDLER_DIRECTION.DOWN);
      } else if (event.keyCode === KEY_CODES.ENTER) {
        const childNode = this.ref.current && this.ref.current.childNodes && this.ref.current.childNodes.length ? this.ref.current.childNodes[0] : this.ref.current;

        if (childNode.click) {
          childNode.click();
        }
      }
    });
  }

  componentDidMount() {
    const {
      context,
      index,
      isDisabled,
      role
    } = this.props;
    context.sendRef(index, this.ref.current, isDisabled, role === 'separator');
  }

  render() {
    const _this$props = this.props,
          {
      className,
      children,
      isHovered,
      context,
      onClick,
      component,
      role,
      isDisabled,
      index,
      href,
      tooltip,
      tooltipProps
    } = _this$props,
          additionalProps = _objectWithoutProperties(_this$props, ["className", "children", "isHovered", "context", "onClick", "component", "role", "isDisabled", "index", "href", "tooltip", "tooltipProps"]);

    const Component = component;
    let isComponentReactElement = false;
    let classes;

    if (Component === 'a') {
      additionalProps['aria-disabled'] = isDisabled;
      additionalProps.tabIndex = isDisabled ? -1 : additionalProps.tabIndex;
    } else if (Component === 'button') {
      additionalProps.disabled = isDisabled;
      additionalProps.type = additionalProps.type || 'button';
    } else if (React.isValidElement(Component)) {
      // Render a custom wrapper component, for example router Link component
      // instead of our wrapper
      isComponentReactElement = true;
    }

    const renderWithTooltip = childNode => tooltip ? React.createElement(Tooltip, _extends({
      content: tooltip
    }, tooltipProps), childNode) : childNode;

    return React.createElement(DropdownContext.Consumer, null, ({
      onSelect,
      itemClass,
      disabledClass,
      hoverClass
    }) => {
      if (this.props.role === 'separator') {
        classes = className;
      } else {
        classes = css(isDisabled && disabledClass, isHovered && hoverClass, className);
      }

      return React.createElement("li", {
        role: role,
        ref: this.ref,
        onKeyDown: this.onKeyDown,
        onClick: event => {
          if (!isDisabled) {
            onClick(event);
            onSelect(event);
          }
        }
      }, renderWithTooltip(isComponentReactElement ? React.cloneElement(Component, _objectSpread({}, additionalProps, {
        className: css(classes, itemClass)
      })) : React.createElement(Component, _extends({}, additionalProps, {
        href: href || null,
        className: css(classes, this.props.role !== 'separator' && itemClass)
      }), children)));
    });
  }

}

_defineProperty(InternalDropdownItem, "propTypes", {
  children: _pt.node,
  className: _pt.string,
  component: _pt.oneOfType([_pt.node, _pt.string]),
  role: _pt.string,
  isDisabled: _pt.bool,
  isHovered: _pt.bool,
  href: _pt.string,
  tooltip: _pt.node,
  tooltipProps: _pt.any,
  index: _pt.number,
  context: _pt.shape({
    keyHandler: _pt.func,
    sendRef: _pt.func
  }),
  onClick: _pt.func
});

_defineProperty(InternalDropdownItem, "defaultProps", {
  className: '',
  isHovered: false,
  component: 'a',
  role: 'none',
  isDisabled: false,
  href: '',
  tooltipProps: {},
  onClick: event => undefined,
  onSelect: () => undefined,
  index: -1,
  context: {
    keyHandler: Function.prototype,
    sendRef: Function.prototype
  }
});
//# sourceMappingURL=InternalDropdownItem.js.map