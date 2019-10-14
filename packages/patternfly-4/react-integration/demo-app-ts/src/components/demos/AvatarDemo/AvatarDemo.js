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
var react_core_1 = require("@patternfly/react-core");
var react_1 = require("react");
var imgAvatar_svg_1 = require("../../../assets/images/imgAvatar.svg");
var AvatarDemo = /** @class */ (function (_super) {
    __extends(AvatarDemo, _super);
    function AvatarDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myAvatarProps = {
            className: 'MyClassName',
            src: imgAvatar_svg_1["default"],
            alt: 'avatar'
        };
        return _this;
    }
    AvatarDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    AvatarDemo.prototype.render = function () {
        return (<react_core_1.Avatar src={this.myAvatarProps.src} alt={this.myAvatarProps.alt}/>);
    };
    return AvatarDemo;
}(react_1.Component));
exports.AvatarDemo = AvatarDemo;
