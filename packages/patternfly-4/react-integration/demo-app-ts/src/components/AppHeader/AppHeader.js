"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_core_1 = require("@patternfly/react-core");
var AppToolbar_1 = require("../AppToolbar/AppToolbar");
var imgBrand_png_1 = require("../../assets/images/imgBrand.png");
var imgAvatar_svg_1 = require("../../assets/images/imgAvatar.svg");
var showNavToogle = false;
exports.AppHeader = function (props) {
    return (<react_core_1.PageHeader logo={<react_core_1.Brand src={imgBrand_png_1["default"]} alt="Patternfly Logo"/>} toolbar={AppToolbar_1.AppToolbar} avatar={<react_core_1.Avatar src={imgAvatar_svg_1["default"]} alt="Avatar image"/>} showNavToggle={showNavToogle}/>);
};
exports["default"] = exports.AppHeader;
