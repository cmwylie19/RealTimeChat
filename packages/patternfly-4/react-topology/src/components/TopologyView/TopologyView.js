"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var React = require("react");
var react_core_1 = require("@patternfly/react-core");
require("@patternfly/react-styles/css/components/Topology/topology-view.css");
exports.TopologyView = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.contextToolbar, contextToolbar = _c === void 0 ? null : _c, _d = _a.viewToolbar, viewToolbar = _d === void 0 ? null : _d, _e = _a.children, children = _e === void 0 ? null : _e, _f = _a.controlBar, controlBar = _f === void 0 ? null : _f, _g = _a.sideBar, sideBar = _g === void 0 ? null : _g, _h = _a.sideBarOpen, sideBarOpen = _h === void 0 ? false : _h, props = __rest(_a, ["className", "contextToolbar", "viewToolbar", "children", "controlBar", "sideBar", "sideBarOpen"]);
    var containerClasses = "" + (sideBar ? 'pf-topology-container__with-sidebar' : '') +
        ("" + (sideBarOpen ? ' pf-topology-container__with-sidebar--open' : ''));
    return (<react_core_1.Stack className={className} {...props}>
      {contextToolbar && <react_core_1.StackItem isFilled={false}>{contextToolbar}</react_core_1.StackItem>}
      {viewToolbar && <react_core_1.StackItem isFilled={false}>{viewToolbar}</react_core_1.StackItem>}
      <react_core_1.StackItem isFilled className={containerClasses}>
        <div className="pf-topology-content">
          {children}
          {controlBar && <span className="pf-topology-control-bar">{controlBar}</span>}
        </div>
        {sideBar}
      </react_core_1.StackItem>
    </react_core_1.Stack>);
};
