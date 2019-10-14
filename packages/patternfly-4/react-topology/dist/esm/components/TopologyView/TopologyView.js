import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { Stack, StackItem } from '@patternfly/react-core';
import '@patternfly/react-styles/css/components/Topology/topology-view.css';
export const TopologyView = (_ref) => {
  let {
    className = '',
    contextToolbar = null,
    viewToolbar = null,
    children = null,
    controlBar = null,
    sideBar = null,
    sideBarOpen = false
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "contextToolbar", "viewToolbar", "children", "controlBar", "sideBar", "sideBarOpen"]);

  const containerClasses = `${sideBar ? 'pf-topology-container__with-sidebar' : ''}` + `${sideBarOpen ? ' pf-topology-container__with-sidebar--open' : ''}`;
  return React.createElement(Stack, _extends({
    className: className
  }, props), contextToolbar && React.createElement(StackItem, {
    isFilled: false
  }, contextToolbar), viewToolbar && React.createElement(StackItem, {
    isFilled: false
  }, viewToolbar), React.createElement(StackItem, {
    isFilled: true,
    className: containerClasses
  }, React.createElement("div", {
    className: "pf-topology-content"
  }, children, controlBar && React.createElement("span", {
    className: "pf-topology-control-bar"
  }, controlBar)), sideBar));
};
TopologyView.propTypes = {
  className: _pt.string,
  children: _pt.node,
  contextToolbar: _pt.node,
  viewToolbar: _pt.node,
  controlBar: _pt.node,
  sideBar: _pt.node,
  sideBarOpen: _pt.bool
};
//# sourceMappingURL=TopologyView.js.map