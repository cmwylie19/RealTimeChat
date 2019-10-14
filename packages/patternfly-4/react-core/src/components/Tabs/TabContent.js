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
var react_styles_1 = require("@patternfly/react-styles");
var TabContent0 = function (_a) {
    var id = _a.id, activeKey = _a.activeKey, ariaLabel = _a["aria-label"], child = _a.child, children = _a.children, className = _a.className, eventKey = _a.eventKey, innerRef = _a.innerRef, props = __rest(_a, ["id", "activeKey", 'aria-label', "child", "children", "className", "eventKey", "innerRef"]);
    if (children || child) {
        var labelledBy = void 0;
        if (ariaLabel) {
            labelledBy = null;
        }
        else {
            labelledBy = children ? "pf-tab-" + eventKey + "-" + id : "pf-tab-" + child.props.eventKey + "-" + id;
        }
        return (<section ref={innerRef} hidden={children ? null : child.props.eventKey !== activeKey} className={children ? react_styles_1.css('pf-c-tab-content', className) : react_styles_1.css('pf-c-tab-content', child.props.className)} id={children ? id : "pf-tab-section-" + child.props.eventKey + "-" + id} aria-label={ariaLabel} aria-labelledby={labelledBy} role="tabpanel" tabIndex={0} {...props}>
        {children || child.props.children}
      </section>);
    }
    return null;
};
// eslint-disable-next-line react/no-multi-comp
exports.TabContent = React.forwardRef(function (props, ref) { return <TabContent0 innerRef={ref} {...props}/>; });
