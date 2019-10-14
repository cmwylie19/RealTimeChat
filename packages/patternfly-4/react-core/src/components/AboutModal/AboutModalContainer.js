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
// tslint:disable-next-line
var FocusTrap = require('focus-trap-react');
var bullseye_1 = require("@patternfly/react-styles/css/layouts/Bullseye/bullseye");
var react_styles_1 = require("@patternfly/react-styles");
var AboutModalBoxContent_1 = require("./AboutModalBoxContent");
var AboutModalBoxHeader_1 = require("./AboutModalBoxHeader");
var AboutModalBoxHero_1 = require("./AboutModalBoxHero");
var AboutModalBoxBrand_1 = require("./AboutModalBoxBrand");
var AboutModalBoxCloseButton_1 = require("./AboutModalBoxCloseButton");
var AboutModalBox_1 = require("./AboutModalBox");
var Backdrop_1 = require("../Backdrop/Backdrop");
exports.AboutModalContainer = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.isOpen, isOpen = _c === void 0 ? false : _c, _d = _a.onClose, onClose = _d === void 0 ? function () { return undefined; } : _d, _e = _a.productName, productName = _e === void 0 ? '' : _e, trademark = _a.trademark, brandImageSrc = _a.brandImageSrc, brandImageAlt = _a.brandImageAlt, backgroundImageSrc = _a.backgroundImageSrc, ariaLabelledbyId = _a.ariaLabelledbyId, ariaDescribedById = _a.ariaDescribedById, props = __rest(_a, ["children", "className", "isOpen", "onClose", "productName", "trademark", "brandImageSrc", "brandImageAlt", "backgroundImageSrc", "ariaLabelledbyId", "ariaDescribedById"]);
    if (!isOpen) {
        return null;
    }
    return (<Backdrop_1.Backdrop>
      <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }} className={react_styles_1.css(bullseye_1["default"].bullseye)}>
        <AboutModalBox_1.AboutModalBox className={className} aria-labelledby={ariaLabelledbyId} aria-describedby={ariaDescribedById}>
          <AboutModalBoxBrand_1.AboutModalBoxBrand src={brandImageSrc} alt={brandImageAlt}/>
          <AboutModalBoxCloseButton_1.AboutModalBoxCloseButton onClose={onClose}/>
          {productName && <AboutModalBoxHeader_1.AboutModalBoxHeader id={ariaLabelledbyId} productName={productName}/>}
          <AboutModalBoxContent_1.AboutModalBoxContent trademark={trademark} id={ariaDescribedById} noAboutModalBoxContentContainer={false} {...props}>
            {children}
          </AboutModalBoxContent_1.AboutModalBoxContent>
          <AboutModalBoxHero_1.AboutModalBoxHero backgroundImageSrc={backgroundImageSrc}/>
        </AboutModalBox_1.AboutModalBox>
      </FocusTrap>
    </Backdrop_1.Backdrop>);
};
