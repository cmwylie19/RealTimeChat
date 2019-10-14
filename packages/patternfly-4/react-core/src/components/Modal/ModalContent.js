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
// Can't use ES6 imports :(
// The types for it are also wrong, we should probably ditch this dependency.
// tslint:disable-next-line
var FocusTrap = require('focus-trap-react');
var bullseye_1 = require("@patternfly/react-styles/css/layouts/Bullseye/bullseye");
var title_1 = require("@patternfly/react-styles/css/components/Title/title");
var react_styles_1 = require("@patternfly/react-styles");
var Backdrop_1 = require("../Backdrop/Backdrop");
var ModalBoxBody_1 = require("./ModalBoxBody");
var ModalBoxHeader_1 = require("./ModalBoxHeader");
var ModalBoxCloseButton_1 = require("./ModalBoxCloseButton");
var ModalBox_1 = require("./ModalBox");
var ModalBoxFooter_1 = require("./ModalBoxFooter");
exports.ModalContent = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.isOpen, isOpen = _c === void 0 ? false : _c, _d = _a.header, header = _d === void 0 ? null : _d, title = _a.title, _e = _a.hideTitle, hideTitle = _e === void 0 ? false : _e, _f = _a.showClose, showClose = _f === void 0 ? true : _f, _g = _a.footer, footer = _g === void 0 ? null : _g, _h = _a.actions, actions = _h === void 0 ? [] : _h, _j = _a.isFooterLeftAligned, isFooterLeftAligned = _j === void 0 ? false : _j, _k = _a.onClose, onClose = _k === void 0 ? function () { return undefined; } : _k, _l = _a.isLarge, isLarge = _l === void 0 ? false : _l, _m = _a.isSmall, isSmall = _m === void 0 ? false : _m, _o = _a.width, width = _o === void 0 ? -1 : _o, _p = _a.ariaDescribedById, ariaDescribedById = _p === void 0 ? '' : _p, _q = _a.id, id = _q === void 0 ? '' : _q, _r = _a.disableFocusTrap, disableFocusTrap = _r === void 0 ? false : _r, props = __rest(_a, ["children", "className", "isOpen", "header", "title", "hideTitle", "showClose", "footer", "actions", "isFooterLeftAligned", "onClose", "isLarge", "isSmall", "width", "ariaDescribedById", "id", "disableFocusTrap"]);
    if (!isOpen) {
        return null;
    }
    var modalBoxHeader = header ?
        <div className={react_styles_1.css(title_1["default"].title)}>{header}</div> :
        <ModalBoxHeader_1.ModalBoxHeader hideTitle={hideTitle}> {title} </ModalBoxHeader_1.ModalBoxHeader>;
    var modalBoxFooter = footer ?
        <ModalBoxFooter_1.ModalBoxFooter isLeftAligned={isFooterLeftAligned}>{footer}</ModalBoxFooter_1.ModalBoxFooter> :
        actions.length > 0 && <ModalBoxFooter_1.ModalBoxFooter isLeftAligned={isFooterLeftAligned}>{actions}</ModalBoxFooter_1.ModalBoxFooter>;
    var boxStyle = width === -1 ? {} : { width: width };
    var modalBox = (<ModalBox_1.ModalBox style={boxStyle} className={className} isLarge={isLarge} isSmall={isSmall} title={title} id={ariaDescribedById || id}>
      {showClose && <ModalBoxCloseButton_1.ModalBoxCloseButton onClose={onClose}/>}
      {modalBoxHeader}
      <ModalBoxBody_1.ModalBoxBody {...props} id={id}>
        {children}
      </ModalBoxBody_1.ModalBoxBody>
      {modalBoxFooter}
    </ModalBox_1.ModalBox>);
    return (<Backdrop_1.Backdrop>
      <FocusTrap active={!disableFocusTrap} focusTrapOptions={{ clickOutsideDeactivates: true }} className={react_styles_1.css(bullseye_1["default"].bullseye)}>
        {modalBox}
      </FocusTrap>
    </Backdrop_1.Backdrop>);
};
