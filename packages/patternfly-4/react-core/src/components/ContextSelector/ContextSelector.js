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
var context_selector_1 = require("@patternfly/react-styles/css/components/ContextSelector/context-selector");
var react_styles_1 = require("@patternfly/react-styles");
var react_icons_1 = require("@patternfly/react-icons");
var ContextSelectorToggle_1 = require("./ContextSelectorToggle");
var ContextSelectorMenuList_1 = require("./ContextSelectorMenuList");
var contextSelectorConstants_1 = require("./contextSelectorConstants");
var Button_1 = require("../Button");
var TextInput_1 = require("../TextInput");
var InputGroup_1 = require("../InputGroup");
var constants_1 = require("../../helpers/constants");
// Can't use ES6 imports :(
// The types for it are also wrong, we should probably ditch this dependency.
// tslint:disable-next-line
var FocusTrap = require('focus-trap-react');
// seed for the aria-labelledby ID
var currentId = 0;
var newId = currentId++;
var ContextSelector = /** @class */ (function (_super) {
    __extends(ContextSelector, _super);
    function ContextSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.parentRef = React.createRef();
        _this.onEnterPressed = function (event) {
            if (event.charCode === constants_1.KEY_CODES.ENTER) {
                _this.props.onSearchButtonClick();
            }
        };
        return _this;
    }
    ContextSelector.prototype.render = function () {
        var toggleId = "pf-context-selector-toggle-id-" + newId;
        var screenReaderLabelId = "pf-context-selector-label-id-" + newId;
        var searchButtonId = "pf-context-selector-search-button-id-" + newId;
        var _a = this.props, children = _a.children, className = _a.className, isOpen = _a.isOpen, onToggle = _a.onToggle, onSelect = _a.onSelect, screenReaderLabel = _a.screenReaderLabel, toggleText = _a.toggleText, searchButtonAriaLabel = _a.searchButtonAriaLabel, searchInputValue = _a.searchInputValue, onSearchInputChange = _a.onSearchInputChange, searchInputPlaceholder = _a.searchInputPlaceholder, onSearchButtonClick = _a.onSearchButtonClick, props = __rest(_a, ["children", "className", "isOpen", "onToggle", "onSelect", "screenReaderLabel", "toggleText", "searchButtonAriaLabel", "searchInputValue", "onSearchInputChange", "searchInputPlaceholder", "onSearchButtonClick"]);
        return (<div className={react_styles_1.css(context_selector_1["default"].contextSelector, isOpen && context_selector_1["default"].modifiers.expanded, className)} ref={this.parentRef} {...props}>
        {screenReaderLabel && (<span id={screenReaderLabelId} hidden>
            {screenReaderLabel}
          </span>)}
        <ContextSelectorToggle_1.ContextSelectorToggle onToggle={onToggle} isOpen={isOpen} toggleText={toggleText} id={toggleId} parentRef={this.parentRef.current} aria-labelledby={screenReaderLabelId + " " + toggleId}/>
        {isOpen && (<div className={react_styles_1.css(context_selector_1["default"].contextSelectorMenu)}>
            {isOpen && (<FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }}>
                <div className={react_styles_1.css(context_selector_1["default"].contextSelectorMenuInput)}>
                  <InputGroup_1.InputGroup>
                    <TextInput_1.TextInput value={searchInputValue} type="search" placeholder={searchInputPlaceholder} onChange={onSearchInputChange} onKeyPress={this.onEnterPressed} aria-labelledby={searchButtonId}/>
                    <Button_1.Button variant={Button_1.ButtonVariant.control} aria-label={searchButtonAriaLabel} id={searchButtonId} onClick={onSearchButtonClick}>
                      <react_icons_1.SearchIcon aria-hidden="true"/>
                    </Button_1.Button>
                  </InputGroup_1.InputGroup>
                </div>
                <contextSelectorConstants_1.ContextSelectorContext.Provider value={{ onSelect: onSelect }}>
                  <ContextSelectorMenuList_1.ContextSelectorMenuList isOpen={isOpen}>{children}</ContextSelectorMenuList_1.ContextSelectorMenuList>
                </contextSelectorConstants_1.ContextSelectorContext.Provider>
              </FocusTrap>)}
          </div>)}
      </div>);
    };
    ContextSelector.defaultProps = {
        children: null,
        className: '',
        isOpen: false,
        onToggle: function () { return undefined; },
        onSelect: function () { return undefined; },
        screenReaderLabel: '',
        toggleText: '',
        searchButtonAriaLabel: 'Search menu items',
        searchInputValue: '',
        onSearchInputChange: function () { return undefined; },
        searchInputPlaceholder: 'Search',
        onSearchButtonClick: function () { return undefined; }
    };
    return ContextSelector;
}(React.Component));
exports.ContextSelector = ContextSelector;
