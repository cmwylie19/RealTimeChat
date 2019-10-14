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
exports.__esModule = true;
var react_1 = require("react");
var react_core_1 = require("@patternfly/react-core");
var react_icons_1 = require("@patternfly/react-icons");
var NotificationBadgeDemo = /** @class */ (function (_super) {
    __extends(NotificationBadgeDemo, _super);
    function NotificationBadgeDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = function () {
            _this.setState({
                isRead: true
            });
        };
        _this.state = {
            isRead: false
        };
        return _this;
    }
    NotificationBadgeDemo.prototype.render = function () {
        var isRead = this.state.isRead;
        return (<react_core_1.NotificationBadge id="notification-demo-badge" isRead={isRead} onClick={this.onClick} aria-label="Notifications">
        <react_icons_1.BellIcon />
      </react_core_1.NotificationBadge>);
    };
    return NotificationBadgeDemo;
}(react_1["default"].Component));
exports.NotificationBadgeDemo = NotificationBadgeDemo;
