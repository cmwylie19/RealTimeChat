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
var select_1 = require("@patternfly/react-styles/css/components/Select/select");
var badge_1 = require("@patternfly/react-styles/css/components/Badge/badge");
var form_control_1 = require("@patternfly/react-styles/css/components/FormControl/form-control");
var button_1 = require("@patternfly/react-styles/css/components/Button/button");
var react_styles_1 = require("@patternfly/react-styles");
var react_icons_1 = require("@patternfly/react-icons");
var SelectMenu_1 = require("./SelectMenu");
var SelectOption_1 = require("./SelectOption");
var SelectToggle_1 = require("./SelectToggle");
var selectConstants_1 = require("./selectConstants");
var ChipGroup_1 = require("../ChipGroup");
var util_1 = require("../../helpers/util");
// seed for the aria-labelledby ID
var currentId = 0;
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.parentRef = React.createRef();
        _this.refCollection = [];
        _this.state = {
            openedOnEnter: false,
            typeaheadInputValue: '',
            typeaheadActiveChild: null,
            typeaheadFilteredChildren: React.Children.toArray(_this.props.children),
            typeaheadCurrIndex: -1,
            creatableValue: ''
        };
        _this.componentDidUpdate = function (prevProps, prevState) {
            if (!prevState.openedOnEnter && _this.state.openedOnEnter) {
                _this.refCollection[0].focus();
            }
            if (prevProps.children !== _this.props.children) {
                _this.setState({
                    typeaheadFilteredChildren: React.Children.toArray(_this.props.children)
                });
            }
            if (prevProps.selections !== _this.props.selections && _this.state.typeaheadActiveChild) {
                _this.setState({
                    typeaheadInputValue: _this.state.typeaheadActiveChild.innerText
                });
            }
        };
        _this.onEnter = function () {
            _this.setState({ openedOnEnter: true });
        };
        _this.onClose = function () {
            _this.setState({
                openedOnEnter: false,
                typeaheadInputValue: null,
                typeaheadActiveChild: null,
                typeaheadFilteredChildren: React.Children.toArray(_this.props.children),
                typeaheadCurrIndex: -1
            });
        };
        _this.onChange = function (e) {
            var _a = _this.props, onFilter = _a.onFilter, isCreatable = _a.isCreatable, onCreateOption = _a.onCreateOption, createText = _a.createText, noResultsFoundText = _a.noResultsFoundText;
            var typeaheadFilteredChildren;
            if (onFilter) {
                typeaheadFilteredChildren = onFilter(e);
            }
            else {
                var input_1;
                try {
                    input_1 = new RegExp(e.target.value.toString(), 'i');
                }
                catch (err) {
                    input_1 = new RegExp(e.target.value.toString().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
                }
                typeaheadFilteredChildren =
                    e.target.value.toString() !== ''
                        ? React.Children.toArray(_this.props.children).filter(function (child) {
                            return _this.getDisplay(child.props.value.toString(), 'text').search(input_1) === 0;
                        })
                        : React.Children.toArray(_this.props.children);
            }
            if (typeaheadFilteredChildren.length === 0) {
                !isCreatable && typeaheadFilteredChildren.push(<SelectOption_1.SelectOption isDisabled key={0} value={noResultsFoundText}/>);
            }
            if (isCreatable && e.target.value != '') {
                var newValue_1 = e.target.value;
                typeaheadFilteredChildren.push(<SelectOption_1.SelectOption key={0} value={newValue_1} onClick={function () { return onCreateOption && onCreateOption(newValue_1); }}>
          {createText} "{newValue_1}"
        </SelectOption_1.SelectOption>);
            }
            _this.setState({
                typeaheadInputValue: e.target.value,
                typeaheadCurrIndex: -1,
                typeaheadFilteredChildren: typeaheadFilteredChildren,
                typeaheadActiveChild: null,
                creatableValue: e.target.value
            });
            _this.refCollection = [];
        };
        _this.onClick = function (e) {
            e.stopPropagation();
        };
        _this.clearSelection = function (e) {
            e.stopPropagation();
            _this.setState({
                typeaheadInputValue: '',
                typeaheadActiveChild: null,
                typeaheadFilteredChildren: React.Children.toArray(_this.props.children),
                typeaheadCurrIndex: -1
            });
        };
        _this.sendRef = function (ref, index) {
            _this.refCollection[index] = ref;
        };
        _this.handleArrowKeys = function (index, position) {
            util_1.keyHandler(index, position, _this.refCollection, _this.refCollection);
        };
        _this.handleFocus = function () {
            if (!_this.props.isExpanded) {
                _this.props.onToggle(true);
            }
        };
        _this.handleTypeaheadKeys = function (position) {
            var _a = _this.props, isExpanded = _a.isExpanded, isCreatable = _a.isCreatable, createText = _a.createText;
            var _b = _this.state, typeaheadActiveChild = _b.typeaheadActiveChild, typeaheadCurrIndex = _b.typeaheadCurrIndex;
            if (isExpanded) {
                if (position === 'enter' && (typeaheadActiveChild || _this.refCollection[0])) {
                    _this.setState({
                        typeaheadInputValue: (typeaheadActiveChild && typeaheadActiveChild.innerText) || _this.refCollection[0].innerText
                    });
                    if (typeaheadActiveChild) {
                        typeaheadActiveChild.click();
                    }
                    else {
                        _this.refCollection[0].click();
                    }
                }
                else {
                    var nextIndex = void 0;
                    if (typeaheadCurrIndex === -1 && position === 'down') {
                        nextIndex = 0;
                    }
                    else if (typeaheadCurrIndex === -1 && position === 'up') {
                        nextIndex = _this.refCollection.length - 1;
                    }
                    else {
                        nextIndex = util_1.getNextIndex(typeaheadCurrIndex, position, _this.refCollection);
                    }
                    _this.setState({
                        typeaheadCurrIndex: nextIndex,
                        typeaheadActiveChild: _this.refCollection[nextIndex],
                        typeaheadInputValue: isCreatable && _this.refCollection[nextIndex].innerText.includes(createText)
                            ? _this.state.creatableValue
                            : _this.refCollection[nextIndex].innerText
                    });
                }
            }
        };
        _this.getDisplay = function (value, type) {
            if (type === void 0) { type = 'node'; }
            if (!value) {
                return;
            }
            var children = _this.props.children;
            var item = children.filter(function (child) { return child.props.value.toString() === value.toString(); })[0];
            if (item) {
                if (item && item.props.children) {
                    if (type === 'node') {
                        return item.props.children;
                    }
                    return _this.findText(item);
                }
                return item.props.value.toString();
            }
            return value;
        };
        _this.findText = function (item) {
            if (!item.props || !item.props.children) {
                if (typeof item !== 'string') {
                    return '';
                }
                return item;
            }
            if (typeof item.props.children === 'string') {
                return item.props.children;
            }
            var multi = [];
            React.Children.toArray(item.props.children).forEach(function (child) {
                return multi.push(_this.findText(child));
            });
            return multi.join('');
        };
        return _this;
    }
    Select.prototype.extendTypeaheadChildren = function (typeaheadActiveChild) {
        var _this = this;
        return this.state.typeaheadFilteredChildren.map(function (child) {
            return React.cloneElement(child, {
                isFocused: typeaheadActiveChild &&
                    (typeaheadActiveChild.innerText ===
                        _this.getDisplay(child.props.value.toString(), 'text') ||
                        (_this.props.isCreatable && typeaheadActiveChild.innerText === "{createText} \"" + child.props.value + "\""))
            });
        });
    };
    Select.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, className = _a.className, variant = _a.variant, direction = _a.direction, onToggle = _a.onToggle, onSelect = _a.onSelect, onClear = _a.onClear, onFilter = _a.onFilter, onCreateOption = _a.onCreateOption, toggleId = _a.toggleId, isExpanded = _a.isExpanded, isGrouped = _a.isGrouped, isPlain = _a.isPlain, isDisabled = _a.isDisabled, isCreatable = _a.isCreatable, selections = _a.selections, ariaLabelledBy = _a.ariaLabelledBy, ariaLabelTypeAhead = _a.ariaLabelTypeAhead, ariaLabelClear = _a.ariaLabelClear, ariaLabelToggle = _a.ariaLabelToggle, ariaLabelRemove = _a.ariaLabelRemove, ariaLabel = _a["aria-label"], placeholderText = _a.placeholderText, width = _a.width, maxHeight = _a.maxHeight, toggleIcon = _a.toggleIcon, props = __rest(_a, ["children", "className", "variant", "direction", "onToggle", "onSelect", "onClear", "onFilter", "onCreateOption", "toggleId", "isExpanded", "isGrouped", "isPlain", "isDisabled", "isCreatable", "selections", "ariaLabelledBy", "ariaLabelTypeAhead", "ariaLabelClear", "ariaLabelToggle", "ariaLabelRemove", 'aria-label', "placeholderText", "width", "maxHeight", "toggleIcon"]);
        var _b = this.state, openedOnEnter = _b.openedOnEnter, typeaheadInputValue = _b.typeaheadInputValue, typeaheadActiveChild = _b.typeaheadActiveChild;
        var selectToggleId = toggleId || "pf-toggle-id-" + currentId++;
        var childPlaceholderText = null;
        if (!selections && !placeholderText) {
            var childPlaceholder = React.Children.toArray(children.filter(function (child) { return child.props.isPlaceholder === true; }));
            childPlaceholderText =
                (childPlaceholder[0] && this.getDisplay(childPlaceholder[0].props.value, 'node')) ||
                    (children[0] && this.getDisplay(children[0].props.value, 'node'));
        }
        var selectedChips = null;
        if (variant === selectConstants_1.SelectVariant.typeaheadMulti) {
            selectedChips = (<ChipGroup_1.ChipGroup>
          {selections &&
                selections.map(function (item) { return (<ChipGroup_1.Chip key={item} onClick={function (e) { return onSelect(e, item); }} closeBtnAriaLabel={ariaLabelRemove}>
                {_this.getDisplay(item, 'node')}
              </ChipGroup_1.Chip>); })}
        </ChipGroup_1.ChipGroup>);
        }
        return (<div className={react_styles_1.css(select_1["default"].select, isExpanded && select_1["default"].modifiers.expanded, direction === selectConstants_1.SelectDirection.up && select_1["default"].modifiers.top, className)} ref={this.parentRef} style={{ width: width }}>
        <selectConstants_1.SelectContext.Provider value={{ onSelect: onSelect, onClose: this.onClose, variant: variant }}>
          <SelectToggle_1.SelectToggle id={selectToggleId} parentRef={this.parentRef} isExpanded={isExpanded} isPlain={isPlain} onToggle={onToggle} onEnter={this.onEnter} onClose={this.onClose} ariaLabelledBy={(ariaLabelledBy || '') + " " + selectToggleId} variant={variant} ariaLabelToggle={ariaLabelToggle} handleTypeaheadKeys={this.handleTypeaheadKeys} isDisabled={isDisabled}>
            {variant === selectConstants_1.SelectVariant.single && (<div className={react_styles_1.css(select_1["default"].selectToggleWrapper)}>
                {toggleIcon && <span className={react_styles_1.css(select_1["default"].selectToggleIcon)}>{toggleIcon}</span>}
                <span className={react_styles_1.css(select_1["default"].selectToggleText)}>
                  {this.getDisplay(selections, 'node') || placeholderText || childPlaceholderText}
                </span>
              </div>)}
            {variant === selectConstants_1.SelectVariant.checkbox && (<React.Fragment>
                <div className={react_styles_1.css(select_1["default"].selectToggleWrapper)}>
                  {toggleIcon && <span className={react_styles_1.css(select_1["default"].selectToggleIcon)}>{toggleIcon}</span>}
                  <span className={react_styles_1.css(select_1["default"].selectToggleText)}>{placeholderText}</span>
                  {selections && (Array.isArray(selections) && selections.length > 0) && (<div className={react_styles_1.css(select_1["default"].selectToggleBadge)}>
                      <span className={react_styles_1.css(badge_1["default"].badge, badge_1["default"].modifiers.read)}>{selections.length}</span>
                    </div>)}
                </div>
              </React.Fragment>)}
            {variant === selectConstants_1.SelectVariant.typeahead && (<React.Fragment>
                <div className={react_styles_1.css(select_1["default"].selectToggleWrapper)}>
                  {toggleIcon && <span className={react_styles_1.css(select_1["default"].selectToggleIcon)}>{toggleIcon}</span>}
                  <form onSubmit={function (e) { return e.preventDefault(); }}>
                    <input className={react_styles_1.css(form_control_1["default"].formControl, select_1["default"].selectToggleTypeahead)} aria-activedescendant={typeaheadActiveChild && typeaheadActiveChild.id} id="select-typeahead" aria-label={ariaLabelTypeAhead} placeholder={placeholderText} value={typeaheadInputValue !== null
            ? typeaheadInputValue
            : this.getDisplay(selections, 'text') || ''} type="text" onChange={this.onChange} onFocus={this.handleFocus} autoComplete="off" disabled={isDisabled}/>
                  </form>
                </div>
                {selections && (<button className={react_styles_1.css(button_1["default"].button, button_1["default"].modifiers.plain, select_1["default"].selectToggleClear)} onClick={function (e) {
            _this.clearSelection(e);
            onClear(e);
        }} aria-label={ariaLabelClear} type="button" disabled={isDisabled}>
                    <react_icons_1.TimesCircleIcon aria-hidden/>
                  </button>)}
              </React.Fragment>)}
            {variant === selectConstants_1.SelectVariant.typeaheadMulti && (<React.Fragment>
                <div className={react_styles_1.css(select_1["default"].selectToggleWrapper)}>
                  {toggleIcon && <span className={react_styles_1.css(select_1["default"].selectToggleIcon)}>{toggleIcon}</span>}
                  {selections && (Array.isArray(selections) && selections.length > 0) && selectedChips}
                  <form onSubmit={function (e) { return e.preventDefault(); }}>
                    <input className={react_styles_1.css(form_control_1["default"].formControl, select_1["default"].selectToggleTypeahead)} aria-activedescendant={typeaheadActiveChild && typeaheadActiveChild.id} id="select-multi-typeahead-typeahead" aria-label={ariaLabelTypeAhead} placeholder={placeholderText} value={typeaheadInputValue !== null ? typeaheadInputValue : ''} type="text" onChange={this.onChange} onFocus={this.handleFocus} autoComplete="off" disabled={isDisabled}/>
                  </form>
                </div>
                {selections && (Array.isArray(selections) && selections.length > 0) && (<button className={react_styles_1.css(button_1["default"].button, button_1["default"].modifiers.plain, select_1["default"].selectToggleClear)} onClick={function (e) {
            _this.clearSelection(e);
            onClear(e);
        }} aria-label={ariaLabelClear} type="button" disabled={isDisabled}>
                    <react_icons_1.TimesCircleIcon aria-hidden/>
                  </button>)}
              </React.Fragment>)}
          </SelectToggle_1.SelectToggle>
          {variant === selectConstants_1.SelectVariant.single && isExpanded && (<SelectMenu_1.SelectMenu {...props} selected={selections} openedOnEnter={openedOnEnter} aria-label={ariaLabel} aria-labelledby={ariaLabelledBy} sendRef={this.sendRef} keyHandler={this.handleArrowKeys} maxHeight={maxHeight}>
              {children}
            </SelectMenu_1.SelectMenu>)}
          {variant === selectConstants_1.SelectVariant.checkbox && isExpanded && (<SelectMenu_1.SelectMenu {...props} checked={selections} aria-label={ariaLabel} aria-labelledby={ariaLabelledBy} isGrouped={isGrouped} sendRef={this.sendRef} keyHandler={this.handleArrowKeys} maxHeight={maxHeight}>
              {children}
            </SelectMenu_1.SelectMenu>)}
          {(variant === selectConstants_1.SelectVariant.typeahead || variant === selectConstants_1.SelectVariant.typeaheadMulti) && isExpanded && (<SelectMenu_1.SelectMenu {...props} selected={selections} openedOnEnter={openedOnEnter} aria-label={ariaLabel} aria-labelledby={ariaLabelledBy} sendRef={this.sendRef} keyHandler={this.handleArrowKeys} maxHeight={maxHeight}>
              {this.extendTypeaheadChildren(typeaheadActiveChild)}
            </SelectMenu_1.SelectMenu>)}
        </selectConstants_1.SelectContext.Provider>
      </div>);
    };
    Select.defaultProps = {
        "children": [],
        "className": '',
        "direction": selectConstants_1.SelectDirection.down,
        "toggleId": null,
        "isExpanded": false,
        "isGrouped": false,
        "isPlain": false,
        "isDisabled": false,
        "isCreatable": false,
        "aria-label": '',
        "ariaLabelledBy": '',
        "ariaLabelTypeAhead": '',
        "ariaLabelClear": 'Clear all',
        "ariaLabelToggle": 'Options menu',
        "ariaLabelRemove": 'Remove',
        "selections": '',
        "createText": "Create",
        "placeholderText": '',
        "noResultsFoundText": "No results found",
        "variant": selectConstants_1.SelectVariant.single,
        "width": '',
        "maxHeight": '',
        "onClear": Function.prototype,
        "onCreateOption": Function.prototype,
        "toggleIcon": null,
        "onFilter": undefined
    };
    return Select;
}(React.Component));
exports.Select = Select;
