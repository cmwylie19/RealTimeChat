"use strict";
exports.__esModule = true;
var React = require("react");
var DropdownPosition;
(function (DropdownPosition) {
    DropdownPosition["right"] = "right";
    DropdownPosition["left"] = "left";
})(DropdownPosition = exports.DropdownPosition || (exports.DropdownPosition = {}));
var DropdownDirection;
(function (DropdownDirection) {
    DropdownDirection["up"] = "up";
    DropdownDirection["down"] = "down";
})(DropdownDirection = exports.DropdownDirection || (exports.DropdownDirection = {}));
exports.DropdownContext = React.createContext({
    onSelect: function (event) { return undefined; },
    id: '',
    toggleIconClass: '',
    toggleTextClass: '',
    menuClass: '',
    itemClass: '',
    toggleClass: '',
    baseClass: '',
    baseComponent: 'div',
    sectionClass: '',
    sectionTitleClass: '',
    sectionComponent: 'section',
    disabledClass: '',
    hoverClass: '',
    separatorClass: '',
    menuComponent: 'ul'
});
exports.DropdownArrowContext = React.createContext({
    keyHandler: null,
    sendRef: null
});
