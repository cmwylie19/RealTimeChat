"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var react_icons_1 = require("@patternfly/react-icons");
var react_core_1 = require("@patternfly/react-core");
require("@patternfly/react-styles/css/components/Topology/topology-side-bar.css");
var TopologySideBar = /** @class */ (function (_super) {
    __extends(TopologySideBar, _super);
    function TopologySideBar(props) {
        var _this = _super.call(this, props) || this;
        _this.timer = null;
        _this.updateForTransitions = function () {
            _this.setState({ isIn: _this.props.show });
        };
        _this.startTimer = function () {
            _this.clearTimer();
            _this.timer = setTimeout(_this.updateForTransitions, 150);
        };
        _this.clearTimer = function () {
            if (_this.timer) {
                clearTimeout(_this.timer);
                _this.timer = null;
            }
        };
        _this.state = { isIn: false };
        return _this;
    }
    TopologySideBar.prototype.componentWillUnmount = function () {
        this.clearTimer();
    };
    TopologySideBar.prototype.render = function () {
        var _a = this.props, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.show, show = _c === void 0 ? false : _c, _d = _a.onClose, onClose = _d === void 0 ? null : _d, header = _a.header, _e = _a.children, children = _e === void 0 ? null : _e, otherProps = __rest(_a, ["className", "show", "onClose", "header", "children"]);
        var isIn = this.state.isIn;
        if (isIn !== show) {
            this.clearTimer();
            this.startTimer();
        }
        return (<div {...otherProps} role="dialog" className={"pf-topology-side-bar fade " + className + (show ? ' shown' : '') + (isIn ? ' in' : '')}>
        {show && (<React.Fragment>
            {onClose && (<react_core_1.Button className="pf-topology-side-bar__dismiss" variant="plain" onClick={onClose} aria-label="Close">
                <react_icons_1.TimesIcon />
              </react_core_1.Button>)}
            {header && (<div className="pf-topology-side-bar__header">
                {header}
              </div>)}
            <div className="pf-topology-side-bar__body">
              {children}
            </div>
          </React.Fragment>)}
      </div>);
    };
    return TopologySideBar;
}(React.Component));
exports.TopologySideBar = TopologySideBar;
