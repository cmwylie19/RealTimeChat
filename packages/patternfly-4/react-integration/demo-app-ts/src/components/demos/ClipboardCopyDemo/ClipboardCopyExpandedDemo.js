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
var ClipboardCopyExpandedDemo = /** @class */ (function (_super) {
    __extends(ClipboardCopyExpandedDemo, _super);
    function ClipboardCopyExpandedDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClipboardCopyExpandedDemo.prototype.render = function () {
        return (<react_core_1.ClipboardCopy isExpanded variant={react_core_1.ClipboardCopyVariant.expansion}>
        Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting
        expansion.
      </react_core_1.ClipboardCopy>);
    };
    return ClipboardCopyExpandedDemo;
}(react_1["default"].Component));
exports.ClipboardCopyExpandedDemo = ClipboardCopyExpandedDemo;
