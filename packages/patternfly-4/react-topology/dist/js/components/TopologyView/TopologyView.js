"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopologyView = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _reactCore = require("@patternfly/react-core");

require("@patternfly/react-styles/css/components/Topology/topology-view.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TopologyView = function TopologyView(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$contextToolbar = _ref.contextToolbar,
      contextToolbar = _ref$contextToolbar === void 0 ? null : _ref$contextToolbar,
      _ref$viewToolbar = _ref.viewToolbar,
      viewToolbar = _ref$viewToolbar === void 0 ? null : _ref$viewToolbar,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$controlBar = _ref.controlBar,
      controlBar = _ref$controlBar === void 0 ? null : _ref$controlBar,
      _ref$sideBar = _ref.sideBar,
      sideBar = _ref$sideBar === void 0 ? null : _ref$sideBar,
      _ref$sideBarOpen = _ref.sideBarOpen,
      sideBarOpen = _ref$sideBarOpen === void 0 ? false : _ref$sideBarOpen,
      props = _objectWithoutProperties(_ref, ["className", "contextToolbar", "viewToolbar", "children", "controlBar", "sideBar", "sideBarOpen"]);

  var containerClasses = "".concat(sideBar ? 'pf-topology-container__with-sidebar' : '') + "".concat(sideBarOpen ? ' pf-topology-container__with-sidebar--open' : '');
  return React.createElement(_reactCore.Stack, _extends({
    className: className
  }, props), contextToolbar && React.createElement(_reactCore.StackItem, {
    isFilled: false
  }, contextToolbar), viewToolbar && React.createElement(_reactCore.StackItem, {
    isFilled: false
  }, viewToolbar), React.createElement(_reactCore.StackItem, {
    isFilled: true,
    className: containerClasses
  }, React.createElement("div", {
    className: "pf-topology-content"
  }, children, controlBar && React.createElement("span", {
    className: "pf-topology-control-bar"
  }, controlBar)), sideBar));
};

exports.TopologyView = TopologyView;
TopologyView.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  contextToolbar: _propTypes["default"].node,
  viewToolbar: _propTypes["default"].node,
  controlBar: _propTypes["default"].node,
  sideBar: _propTypes["default"].node,
  sideBarOpen: _propTypes["default"].bool
};
//# sourceMappingURL=TopologyView.js.map