"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var ReactDOM = require("react-dom");
var constants_1 = require("./constants");
var react_styles_1 = require("@patternfly/react-styles");
function capitalize(input) {
    return input[0].toUpperCase() + input.substring(1);
}
exports.capitalize = capitalize;
function getUniqueId(prefix) {
    if (prefix === void 0) { prefix = 'pf'; }
    var uid = new Date().getTime() +
        Math.random()
            .toString(36)
            .slice(2);
    return prefix + "-" + uid;
}
exports.getUniqueId = getUniqueId;
function debounce(func, wait) {
    var _this = this;
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timeout);
        timeout = setTimeout(function () { return func.apply(_this, args); }, wait);
    };
}
exports.debounce = debounce;
/** This function returns whether or not an element is within the viewable area of a container. If partial is true,
 * then this function will return true even if only part of the element is in view.
 * @param {HTMLElement} container  The container to check if the element is in view of.
 * @param {HTMLElement} element    The element to check if it is view
 * @param {boolean} partial   true if partial view is allowed
 *
 * @return {type} True if the component is in View.
 */
function isElementInView(container, element, partial) {
    var containerBounds = container.getBoundingClientRect();
    var elementBounds = element.getBoundingClientRect();
    var containerBoundsLeft = Math.floor(containerBounds.left);
    var containerBoundsRight = Math.floor(containerBounds.right);
    var elementBoundsLeft = Math.floor(elementBounds.left);
    var elementBoundsRight = Math.floor(elementBounds.right);
    // Check if in view
    var isTotallyInView = elementBoundsLeft >= containerBoundsLeft && elementBoundsRight <= containerBoundsRight;
    var isPartiallyInView = partial &&
        ((elementBoundsLeft < containerBoundsLeft && elementBoundsRight > containerBoundsLeft) ||
            (elementBoundsRight > containerBoundsRight && elementBoundsLeft < containerBoundsRight));
    // Return outcome
    return isTotallyInView || isPartiallyInView;
}
exports.isElementInView = isElementInView;
/** This function returns the side the element is out of view on (right, left or both)
 * @param {HTMLElement} container    The container to check if the element is in view of.
 * @param {HTMLElement} element      The element to check if it is view
 *
 * @return {type} right if the element is of the right, left if element is off the left or both if it is off on both sides.
 */
function sideElementIsOutOfView(container, element) {
    var containerBounds = container.getBoundingClientRect();
    var elementBounds = element.getBoundingClientRect();
    var containerBoundsLeft = Math.floor(containerBounds.left);
    var containerBoundsRight = Math.floor(containerBounds.right);
    var elementBoundsLeft = Math.floor(elementBounds.left);
    var elementBoundsRight = Math.floor(elementBounds.right);
    // Check if in view
    var isOffLeft = elementBoundsLeft < containerBoundsLeft;
    var isOffRight = elementBoundsRight > containerBoundsRight;
    var side = constants_1.SIDE.NONE;
    if (isOffRight && isOffLeft) {
        side = constants_1.SIDE.BOTH;
    }
    else if (isOffRight) {
        side = constants_1.SIDE.RIGHT;
    }
    else if (isOffLeft) {
        side = constants_1.SIDE.LEFT;
    }
    // Return outcome
    return side;
}
exports.sideElementIsOutOfView = sideElementIsOutOfView;
/** Interpolates a parameterized templateString using values from a templateVars object.
 * The templateVars object should have keys and values which match the templateString's parameters.
 * Example:
 *    const templateString: 'My name is ${firstName} ${lastName}';
 *    const templateVars: {
 *      firstName: 'Jon'
 *      lastName: 'Dough'
 *    };
 *    const result = fillTemplate(templateString, templateVars);
 *    // "My name is Jon Dough"
 * @param {Object} templateString  The string passed by the consumer
 * @param {Object} templateVars The variables passed to the string
 *
 * @return {type} The template string literal result
 */
function fillTemplate(templateString, templateVars) {
    var func = new (Function.bind.apply(Function, __spreadArrays([void 0], Object.keys(templateVars), ["return `" + templateString + "`;"])))();
    return func.apply(void 0, Object.values(templateVars));
}
exports.fillTemplate = fillTemplate;
/** This function allows for keyboard navigation through dropdowns. The custom argument is optional.
 * @param {number} index The index of the element you're on
 * @param {string} position The orientation of the dropdown
 * @param {string[]} refsCollection Array of refs to the items in the dropdown
 * @param {Object[]} kids Array of items in the dropdown
 * @param {boolean} [custom] Allows for handling of flexible content
 */
function keyHandler(index, position, refsCollection, kids, custom) {
    if (custom === void 0) { custom = false; }
    if (!Array.isArray(kids)) {
        return;
    }
    var nextIndex;
    if (position === 'up') {
        if (index === 0) {
            // loop back to end
            nextIndex = kids.length - 1;
        }
        else {
            nextIndex = index - 1;
        }
    }
    else if (index === kids.length - 1) {
        // loop back to beginning
        nextIndex = 0;
    }
    else {
        nextIndex = index + 1;
    }
    if (refsCollection[nextIndex] === null) {
        keyHandler(nextIndex, position, refsCollection, kids, custom);
    }
    else if (custom) {
        if (refsCollection[nextIndex].focus) {
            refsCollection[nextIndex].focus();
        }
        var element_1 = ReactDOM.findDOMNode(refsCollection[nextIndex]);
        element_1.focus();
    }
    else {
        refsCollection[nextIndex].focus();
    }
}
exports.keyHandler = keyHandler;
/** This function is a helper for keyboard navigation through dropdowns.
 * @param {number} index The index of the element you're on
 * @param {string} position The orientation of the dropdown
 * @param {string[]} collection Array of refs to the items in the dropdown
 */
function getNextIndex(index, position, collection) {
    var nextIndex;
    if (position === 'up') {
        if (index === 0) {
            // loop back to end
            nextIndex = collection.length - 1;
        }
        else {
            nextIndex = index - 1;
        }
    }
    else if (index === collection.length - 1) {
        // loop back to beginning
        nextIndex = 0;
    }
    else {
        nextIndex = index + 1;
    }
    if (collection[nextIndex] === null) {
        getNextIndex(nextIndex, position, collection);
    }
    else {
        return nextIndex;
    }
}
exports.getNextIndex = getNextIndex;
/** This function is a helper for pluralizing strings.
 * @param {number} i The quantity of the string you want to pluralize
 * @param {string} singular The singular version of the string
 * @param {string} plural The change to the string that should occur if the quantity is not equal to 1.
 *                 Defaults to adding an 's'.
 */
function pluralize(i, singular, plural) {
    if (!plural) {
        plural = singular + "s";
    }
    return (i || 0) + " " + (i === 1 ? singular : plural);
}
exports.pluralize = pluralize;
/** This function is a helper for turning arrays of breakpointMod objects for data toolbar and flex into classes
 * @param {(DataToolbarBreakpointMod | FlexBreakpointMod | FlexItemBreakpointMod)[]} breakpointMods The modifiers object
 * @param {any} styles The appropriate styles object for the component
 */
exports.formatBreakpointMods = function (breakpointMods, styles) {
    return breakpointMods.reduce(function (acc, curr) { return ("" + acc + (acc && ' ') + react_styles_1.getModifier(styles, "" + curr.modifier + (curr.breakpoint ? "-on-" + curr.breakpoint : ''))); }, '');
};
