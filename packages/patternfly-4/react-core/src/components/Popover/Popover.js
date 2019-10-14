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
var PopoverBase_1 = require("../../helpers/PopoverBase/PopoverBase");
var constants_1 = require("../../helpers/constants");
var popover_1 = require("@patternfly/react-styles/css/components/Popover/popover");
require("@patternfly/react-styles/css/components/Tooltip/tippy.css");
require("@patternfly/react-styles/css/components/Tooltip/tippy-overrides.css");
var react_styles_1 = require("@patternfly/react-styles");
var PopoverContent_1 = require("./PopoverContent");
var PopoverBody_1 = require("./PopoverBody");
var PopoverHeader_1 = require("./PopoverHeader");
var PopoverFooter_1 = require("./PopoverFooter");
var PopoverCloseButton_1 = require("./PopoverCloseButton");
var GenerateId_1 = require("../../helpers/GenerateId/GenerateId");
var react_tokens_1 = require("@patternfly/react-tokens");
// Can't use ES6 imports :(
// The types for it are also wrong, we should probably ditch this dependency.
// tslint:disable-next-line
var FocusTrap = require('focus-trap-react');
var PopoverPosition;
(function (PopoverPosition) {
    PopoverPosition["auto"] = "auto";
    PopoverPosition["top"] = "top";
    PopoverPosition["bottom"] = "bottom";
    PopoverPosition["left"] = "left";
    PopoverPosition["right"] = "right";
})(PopoverPosition = exports.PopoverPosition || (exports.PopoverPosition = {}));
var Popover = /** @class */ (function (_super) {
    __extends(Popover, _super);
    function Popover(props) {
        var _this = _super.call(this, props) || this;
        _this.hideOrNotify = function () {
            if (_this.props.isVisible === null) {
                // Handle closing
                _this.tip.hide();
            }
            else {
                // notify consumer
                _this.props.shouldClose(_this.tip);
            }
        };
        _this.handleEscKeyClick = function (event) {
            if (event.keyCode === constants_1.KEY_CODES.ESCAPE_KEY && _this.tip.state.isVisible) {
                _this.hideOrNotify();
            }
        };
        _this.storeTippyInstance = function (tip) {
            tip.popperChildren.tooltip.classList.add(popover_1["default"].popover);
            _this.tip = tip;
        };
        _this.closePopover = function () {
            _this.hideOrNotify();
        };
        _this.hideAllPopovers = function () {
            document.querySelectorAll('.tippy-popper').forEach(function (popper) {
                if (popper._tippy) {
                    popper._tippy.hide();
                }
            });
        };
        _this.onHide = function (tip) {
            if (_this.state.isOpen) {
                _this.setState({ isOpen: false });
            }
            return _this.props.onHide(tip);
        };
        _this.onHidden = function (tip) { return _this.props.onHidden(tip); };
        _this.onMount = function (tip) { return _this.props.onMount(tip); };
        _this.onShow = function (tip) {
            var _a = _this.props, hideOnOutsideClick = _a.hideOnOutsideClick, isVisible = _a.isVisible, onShow = _a.onShow;
            // hide all other open popovers first if events are managed by us
            if (!hideOnOutsideClick && isVisible === null) {
                _this.hideAllPopovers();
            }
            if (_this.state.isOpen === false) {
                _this.setState({ isOpen: true });
            }
            return onShow(tip);
        };
        _this.onShown = function (tip) { return _this.props.onShown(tip); };
        _this.state = {
            isOpen: false
        };
        return _this;
    }
    Popover.prototype.componentDidMount = function () {
        document.addEventListener('keydown', this.handleEscKeyClick, false);
    };
    Popover.prototype.componentWillUnmount = function () {
        document.removeEventListener('keydown', this.handleEscKeyClick, false);
    };
    Popover.prototype.render = function () {
        var _this = this;
        var _a = this.props, position = _a.position, enableFlip = _a.enableFlip, children = _a.children, className = _a.className, ariaLabel = _a["aria-label"], headerContent = _a.headerContent, bodyContent = _a.bodyContent, footerContent = _a.footerContent, isVisible = _a.isVisible, shouldClose = _a.shouldClose, appendTo = _a.appendTo, hideOnOutsideClick = _a.hideOnOutsideClick, onHide = _a.onHide, onHidden = _a.onHidden, onShow = _a.onShow, onShown = _a.onShown, onMount = _a.onMount, zIndex = _a.zIndex, maxWidth = _a.maxWidth, closeBtnAriaLabel = _a.closeBtnAriaLabel, distance = _a.distance, boundary = _a.boundary, flipBehavior = _a.flipBehavior, tippyProps = _a.tippyProps, rest = __rest(_a, ["position", "enableFlip", "children", "className", 'aria-label', "headerContent", "bodyContent", "footerContent", "isVisible", "shouldClose", "appendTo", "hideOnOutsideClick", "onHide", "onHidden", "onShow", "onShown", "onMount", "zIndex", "maxWidth", "closeBtnAriaLabel", "distance", "boundary", "flipBehavior", "tippyProps"]);
        if (!headerContent && !ariaLabel) {
            return new Error('aria-label is required when header is not used');
        }
        var content = (<GenerateId_1["default"]>
        {function (randomId) {
            return (<FocusTrap active={_this.state.isOpen} focusTrapOptions={{ clickOutsideDeactivates: true }}>
              <div className={react_styles_1.css(!enableFlip && react_styles_1.getModifier(popover_1["default"], position, popover_1["default"].modifiers.top), className)} role="dialog" aria-modal="true" aria-label={headerContent ? undefined : ariaLabel} aria-labelledby={headerContent ? "popover-" + randomId + "-header" : undefined} aria-describedby={"popover-" + randomId + "-body"} {...rest}>
                <PopoverContent_1.PopoverContent>
                  <PopoverCloseButton_1.PopoverCloseButton onClose={_this.closePopover} aria-label={closeBtnAriaLabel}/>
                  {headerContent && <PopoverHeader_1.PopoverHeader id={"popover-" + randomId + "-header"}>{headerContent}</PopoverHeader_1.PopoverHeader>}
                  <PopoverBody_1.PopoverBody id={"popover-" + randomId + "-body"}>{bodyContent}</PopoverBody_1.PopoverBody>
                  {footerContent && <PopoverFooter_1.PopoverFooter>{footerContent}</PopoverFooter_1.PopoverFooter>}
                </PopoverContent_1.PopoverContent>
              </div>
            </FocusTrap>);
        }}
      </GenerateId_1["default"]>);
        var handleEvents = isVisible === null;
        var shouldHideOnClick = function () {
            if (handleEvents) {
                if (hideOnOutsideClick === true) {
                    return true;
                }
                return 'toggle';
            }
            return false;
        };
        return (<PopoverBase_1["default"] {...tippyProps} arrow onCreate={this.storeTippyInstance} maxWidth={maxWidth} zIndex={zIndex} appendTo={appendTo} content={content} lazy trigger={handleEvents ? 'click' : 'manual'} isVisible={isVisible} hideOnClick={shouldHideOnClick()} animateFill={false} theme="pf-popover" performance interactive interactiveBorder={0} placement={position} distance={distance} flip={enableFlip} flipBehavior={flipBehavior} boundary={boundary} popperOptions={{
            modifiers: {
                preventOverflow: {
                    enabled: enableFlip
                },
                hide: {
                    enabled: enableFlip
                }
            }
        }} onHide={function (tip) { return _this.onHide(tip); }} onHidden={function (tip) { return _this.onHidden(tip); }} onShow={function (tip) { return _this.onShow(tip); }} onShown={function (tip) { return _this.onShown(tip); }} onMount={function (tip) { return _this.onMount(tip); }}>
        {children}
      </PopoverBase_1["default"]>);
    };
    Popover.defaultProps = {
        "position": 'top',
        "enableFlip": true,
        "className": '',
        "isVisible": null,
        "shouldClose": function () { return null; },
        'aria-label': '',
        "headerContent": null,
        "footerContent": null,
        "appendTo": function () { return document.body; },
        "hideOnOutsideClick": true,
        "onHide": function () { return null; },
        "onHidden": function () { return null; },
        "onShow": function () { return null; },
        "onShown": function () { return null; },
        "onMount": function () { return null; },
        "zIndex": 9999,
        "maxWidth": react_tokens_1.c_popover_MaxWidth && react_tokens_1.c_popover_MaxWidth.value,
        "closeBtnAriaLabel": 'Close',
        "distance": 25,
        "boundary": 'window',
        // For every initial starting position, there are 3 escape positions
        "flipBehavior": ['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom'],
        "tippyProps": {}
    };
    return Popover;
}(React.Component));
exports.Popover = Popover;
