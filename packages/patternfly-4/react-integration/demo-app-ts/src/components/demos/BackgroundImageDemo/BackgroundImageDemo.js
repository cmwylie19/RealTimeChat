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
var pfbg_1200 = require('../LoginPageDemo/images/pfbg_1200.jpg');
var pfbg_768 = require('../LoginPageDemo/images/pfbg_768.jpg');
var pfbg_768_2x = require('../LoginPageDemo/images/pfbg_768@2x.jpg');
var pfbg_576 = require('../LoginPageDemo/images/pfbg_576.jpg');
var pfbg_576_2x = require('../LoginPageDemo/images/pfbg_576@2x.jpg');
var BackgroundImageDemo = /** @class */ (function (_super) {
    __extends(BackgroundImageDemo, _super);
    function BackgroundImageDemo() {
        var _a;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myBackgroundProps = {
            /**
            * Note: When using background-filter.svg, you must also include #image_overlay as the fragment identifier
            */
            src: (_a = {},
                _a[react_core_1.BackgroundImageSrc.lg] = pfbg_1200,
                _a[react_core_1.BackgroundImageSrc.sm] = pfbg_768,
                _a[react_core_1.BackgroundImageSrc.sm2x] = pfbg_768_2x,
                _a[react_core_1.BackgroundImageSrc.xs] = pfbg_576,
                _a[react_core_1.BackgroundImageSrc.xs2x] = pfbg_576_2x,
                _a[react_core_1.BackgroundImageSrc.filter] = '',
                _a)
        };
        return _this;
    }
    BackgroundImageDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    BackgroundImageDemo.prototype.render = function () {
        return (<react_core_1.BackgroundImage src={this.myBackgroundProps.src}/>);
    };
    return BackgroundImageDemo;
}(react_1["default"].Component));
exports.BackgroundImageDemo = BackgroundImageDemo;
