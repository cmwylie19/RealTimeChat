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
var React = require("react");
var options_menu_1 = require("@patternfly/react-styles/css/components/OptionsMenu/options-menu");
var pagination_1 = require("@patternfly/react-styles/css/components/Pagination/pagination");
var react_styles_1 = require("@patternfly/react-styles");
var Dropdown_1 = require("../Dropdown");
var react_icons_1 = require("@patternfly/react-icons");
var OptionsToggle_1 = require("./OptionsToggle");
var PaginationOptionsMenu = /** @class */ (function (_super) {
    __extends(PaginationOptionsMenu, _super);
    function PaginationOptionsMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.parentRef = React.createRef();
        _this.onToggle = function (isOpen) {
            _this.setState({ isOpen: isOpen });
        };
        _this.onSelect = function () {
            _this.setState(function (prevState) {
                return { isOpen: !prevState.isOpen };
            });
        };
        _this.renderItems = function () {
            var _a = _this.props, perPageOptions = _a.perPageOptions, perPage = _a.perPage, onPerPageSelect = _a.onPerPageSelect, perPageSuffix = _a.perPageSuffix;
            return perPageOptions.map(function (_a) {
                var value = _a.value, title = _a.title;
                return (<Dropdown_1.DropdownItem key={value} component="button" data-action={"per-page-" + value} className={react_styles_1.css(perPage === value && 'pf-m-selected')} onClick={function (event) { return onPerPageSelect(event, value); }}>
        {title}
        <span className={react_styles_1.css(pagination_1["default"].paginationMenuText)}>{" " + perPageSuffix}</span>
        {perPage === value && (<i className={react_styles_1.css(options_menu_1["default"].optionsMenuMenuItemIcon)}>
            <react_icons_1.CheckIcon />
          </i>)}
      </Dropdown_1.DropdownItem>);
            });
        };
        _this.state = {
            isOpen: false
        };
        return _this;
    }
    PaginationOptionsMenu.prototype.render = function () {
        var _a = this.props, widgetId = _a.widgetId, isDisabled = _a.isDisabled, itemsPerPageTitle = _a.itemsPerPageTitle, dropDirection = _a.dropDirection, optionsToggle = _a.optionsToggle, perPageOptions = _a.perPageOptions, toggleTemplate = _a.toggleTemplate, firstIndex = _a.firstIndex, lastIndex = _a.lastIndex, itemCount = _a.itemCount, itemsTitle = _a.itemsTitle;
        var isOpen = this.state.isOpen;
        return (<Dropdown_1.DropdownContext.Provider value={{
            id: widgetId,
            onSelect: this.onSelect,
            toggleIconClass: options_menu_1["default"].optionsMenuToggleIcon,
            toggleTextClass: options_menu_1["default"].optionsMenuToggleText,
            menuClass: options_menu_1["default"].optionsMenuMenu,
            itemClass: options_menu_1["default"].optionsMenuMenuItem,
            toggleClass: " ",
            baseClass: options_menu_1["default"].optionsMenu,
            disabledClass: options_menu_1["default"].modifiers.disabled,
            menuComponent: 'ul',
            baseComponent: 'div'
        }}>
        <Dropdown_1.DropdownWithContext direction={dropDirection} isOpen={isOpen} toggle={<OptionsToggle_1.OptionsToggle optionsToggle={optionsToggle} itemsPerPageTitle={itemsPerPageTitle} showToggle={perPageOptions && perPageOptions.length > 0} onToggle={this.onToggle} isOpen={isOpen} widgetId={widgetId} firstIndex={firstIndex} lastIndex={lastIndex} itemCount={itemCount} itemsTitle={itemsTitle} toggleTemplate={toggleTemplate} parentRef={this.parentRef.current} isDisabled={isDisabled}/>} dropdownItems={this.renderItems()} isPlain/>
      </Dropdown_1.DropdownContext.Provider>);
    };
    PaginationOptionsMenu.defaultProps = {
        className: '',
        widgetId: '',
        isDisabled: false,
        dropDirection: Dropdown_1.DropdownDirection.down,
        perPageOptions: [],
        itemsPerPageTitle: 'Items per page',
        perPageSuffix: 'per page',
        optionsToggle: 'Select',
        perPage: 0,
        firstIndex: 0,
        lastIndex: 0,
        itemCount: 0,
        itemsTitle: 'items',
        toggleTemplate: function (_a) {
            var firstIndex = _a.firstIndex, lastIndex = _a.lastIndex, itemCount = _a.itemCount, itemsTitle = _a.itemsTitle;
            return (<React.Fragment>
       <b>
         {firstIndex} - {lastIndex}
       </b>{' '}
       of<b>{itemCount}</b> {itemsTitle}
     </React.Fragment>);
        },
        onPerPageSelect: function () { return null; }
    };
    return PaginationOptionsMenu;
}(React.Component));
exports.PaginationOptionsMenu = PaginationOptionsMenu;
