import _pt from "prop-types";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';

const Tab0 = (_ref) => {
  let {
    children,
    eventKey,
    className = '',
    tabContentId,
    tabContentRef,
    title
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "eventKey", "className", "tabContentId", "tabContentRef", "title"]);

  // destructuring to prevent console warnings for applying eventKey, and tabContentId to a DOM element and remove title from the DOM element
  const Component = props.href ? 'a' : 'button';
  return React.createElement(Component, _extends({}, props, {
    className: className,
    ref: tabContentRef
  }), children);
};

Tab0.propTypes = {
  children: _pt.node,
  className: _pt.string,
  href: _pt.string,
  title: _pt.node.isRequired,
  eventKey: _pt.oneOfType([_pt.number, _pt.string]).isRequired,
  tabContentId: _pt.oneOfType([_pt.string, _pt.number]),
  tabContentRef: _pt.any
};

const withForwardedRef = Component => {
  class TabContainer extends React.Component {
    render() {
      const _this$props = this.props,
            {
        forwardRef
      } = _this$props,
            rest = _objectWithoutProperties(_this$props, ["forwardRef"]);

      return React.createElement(Component, _extends({
        ref: forwardRef
      }, rest));
    }

  }

  _defineProperty(TabContainer, "propTypes", {
    children: _pt.node,
    className: _pt.string,
    href: _pt.string,
    title: _pt.node.isRequired,
    eventKey: _pt.oneOfType([_pt.number, _pt.string]).isRequired,
    tabContentId: _pt.oneOfType([_pt.string, _pt.number]),
    tabContentRef: _pt.any,
    forwardRef: _pt.oneOfType([_pt.string, _pt.func, _pt.object])
  });

  return React.forwardRef((props, tabContentRef) => React.createElement(TabContainer, _extends({}, props, {
    forwardRef: tabContentRef
  })));
};

export const Tab = withForwardedRef(Tab0);
//# sourceMappingURL=Tab.js.map