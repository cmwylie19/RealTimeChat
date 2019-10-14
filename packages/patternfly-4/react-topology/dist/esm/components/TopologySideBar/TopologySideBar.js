import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { TimesIcon } from '@patternfly/react-icons';
import { Button } from '@patternfly/react-core';
import '@patternfly/react-styles/css/components/Topology/topology-side-bar.css';
export class TopologySideBar extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "timer", null);

    _defineProperty(this, "updateForTransitions", () => {
      this.setState({
        isIn: this.props.show
      });
    });

    _defineProperty(this, "startTimer", () => {
      this.clearTimer();
      this.timer = setTimeout(this.updateForTransitions, 150);
    });

    _defineProperty(this, "clearTimer", () => {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    });

    this.state = {
      isIn: false
    };
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  render() {
    const _this$props = this.props,
          {
      className = '',
      show = false,
      onClose = null,
      header,
      children = null
    } = _this$props,
          otherProps = _objectWithoutProperties(_this$props, ["className", "show", "onClose", "header", "children"]);

    const {
      isIn
    } = this.state;

    if (isIn !== show) {
      this.clearTimer();
      this.startTimer();
    }

    return React.createElement("div", _extends({}, otherProps, {
      role: "dialog",
      className: `pf-topology-side-bar fade ${className}${show ? ' shown' : ''}${isIn ? ' in' : ''}`
    }), show && React.createElement(React.Fragment, null, onClose && React.createElement(Button, {
      className: "pf-topology-side-bar__dismiss",
      variant: "plain",
      onClick: onClose,
      "aria-label": "Close"
    }, React.createElement(TimesIcon, null)), header && React.createElement("div", {
      className: "pf-topology-side-bar__header"
    }, header), React.createElement("div", {
      className: "pf-topology-side-bar__body"
    }, children)));
  }

}

_defineProperty(TopologySideBar, "propTypes", {
  className: _pt.string,
  children: _pt.node,
  show: _pt.bool,
  onClose: _pt.func,
  header: _pt.node
});
//# sourceMappingURL=TopologySideBar.js.map