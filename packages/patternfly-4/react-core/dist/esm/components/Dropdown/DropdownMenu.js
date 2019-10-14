import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import { css } from '@patternfly/react-styles';
import { keyHandler } from '../../helpers/util';
import { DropdownPosition, DropdownArrowContext, DropdownContext } from './dropdownConstants';
export class DropdownMenu extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "refsCollection", []);

    _defineProperty(this, "childKeyHandler", (index, position, custom = false) => {
      keyHandler(index, position, this.refsCollection, this.props.isGrouped ? this.refsCollection : React.Children.toArray(this.props.children), custom);
    });

    _defineProperty(this, "sendRef", (index, node, isDisabled, isSeparator) => {
      // since the ref is on the outer <li>, target the inner child for focusing and keyboard navigation
      const innerNode = node.childNodes && node.childNodes.length ? node.childNodes[0] : node;

      if (!innerNode.getAttribute) {
        // eslint-disable-line react/no-find-dom-node
        this.refsCollection[index] = ReactDOM.findDOMNode(innerNode);
      } else if (isDisabled || isSeparator) {
        this.refsCollection[index] = null;
      } else {
        this.refsCollection[index] = innerNode;
      }
    });
  }

  componentDidMount() {
    const {
      autoFocus
    } = this.props;

    if (this.props.component === 'ul' && autoFocus) {
      const focusTarget = this.refsCollection.find(ref => {
        return ref && !ref.hasAttribute('disabled');
      });

      if (focusTarget) {
        if (focusTarget.focus) {
          focusTarget.focus();
        } else {
          const searchedFocusTarget = ReactDOM.findDOMNode(focusTarget);
          searchedFocusTarget.focus();
        }
      } else if (focusTarget) {// eslint-disable-line react/no-find-dom-node
      }
    }
  }

  extendChildren() {
    const {
      children,
      isGrouped
    } = this.props;

    if (isGrouped) {
      let index = 0;
      return React.Children.map(children, groupedChildren => {
        const group = groupedChildren;
        return React.cloneElement(group, _objectSpread({}, group.props && group.props.children && {
          children: group.props.children.constructor === Array && React.Children.map(group.props.children, option => React.cloneElement(option, {
            index: index++
          })) || React.cloneElement(group.props.children, {
            index: index++
          })
        }));
      });
    }

    return React.Children.map(children, (child, index) => React.cloneElement(child, {
      index
    }));
  }

  render() {
    const _this$props = this.props,
          {
      className,
      isOpen,
      position,
      children,
      component,
      isGrouped,
      openedOnEnter
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["className", "isOpen", "position", "children", "component", "isGrouped", "openedOnEnter"]);

    return React.createElement(DropdownArrowContext.Provider, {
      value: {
        keyHandler: this.childKeyHandler,
        sendRef: this.sendRef
      }
    }, component === 'div' ? React.createElement(DropdownContext.Consumer, null, ({
      onSelect,
      menuClass
    }) => React.createElement("div", {
      className: css(menuClass, position === DropdownPosition.right && styles.modifiers.alignRight, className),
      hidden: !isOpen,
      onClick: event => onSelect && onSelect(event)
    }, children)) : isGrouped && React.createElement(DropdownContext.Consumer, null, ({
      menuClass,
      menuComponent
    }) => {
      const MenuComponent = menuComponent || 'div';
      return React.createElement(MenuComponent, _extends({}, props, {
        className: css(menuClass, position === DropdownPosition.right && styles.modifiers.alignRight, className),
        hidden: !isOpen,
        role: "menu"
      }), this.extendChildren());
    }) || React.createElement(DropdownContext.Consumer, null, ({
      menuClass,
      menuComponent
    }) => {
      const MenuComponent = menuComponent || component;
      return React.createElement(MenuComponent, _extends({}, props, {
        className: css(menuClass, position === DropdownPosition.right && styles.modifiers.alignRight, className),
        hidden: !isOpen,
        role: "menu"
      }), this.extendChildren());
    }));
  }

}

_defineProperty(DropdownMenu, "propTypes", {
  children: _pt.node,
  className: _pt.string,
  isOpen: _pt.bool,
  openedOnEnter: _pt.bool,
  autoFocus: _pt.bool,
  component: _pt.node,
  position: _pt.oneOfType([_pt.any, _pt.oneOf(['right']), _pt.oneOf(['left'])]),
  isGrouped: _pt.bool
});

_defineProperty(DropdownMenu, "defaultProps", {
  className: '',
  isOpen: true,
  openedOnEnter: false,
  autoFocus: true,
  position: DropdownPosition.left,
  component: 'ul',
  isGrouped: false
});
//# sourceMappingURL=DropdownMenu.js.map