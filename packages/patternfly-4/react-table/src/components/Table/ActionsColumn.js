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
var react_core_1 = require("@patternfly/react-core");
var ActionsColumn = /** @class */ (function (_super) {
    __extends(ActionsColumn, _super);
    function ActionsColumn(props) {
        var _this = _super.call(this, props) || this;
        _this.onToggle = function (isOpen) {
            _this.setState({
                isOpen: isOpen
            });
        };
        _this.onSelect = function (event, onClick) {
            var _a = _this.props, rowData = _a.rowData, extraData = _a.extraData;
            event.preventDefault();
            // tslint:disable-next-line:no-unused-expression
            onClick && onClick(event, extraData && extraData.rowIndex, rowData, extraData);
            _this.setState({
                isOpen: !_this.state.isOpen
            });
        };
        _this.state = {
            isOpen: false
        };
        return _this;
    }
    ActionsColumn.prototype.render = function () {
        var _this = this;
        var isOpen = this.state.isOpen;
        var _a = this.props, items = _a.items, children = _a.children, dropdownPosition = _a.dropdownPosition, dropdownDirection = _a.dropdownDirection, isDisabled = _a.isDisabled;
        return (<React.Fragment>
        <react_core_1.Dropdown toggle={<react_core_1.KebabToggle isDisabled={isDisabled} onToggle={this.onToggle}/>} position={dropdownPosition} direction={dropdownDirection} isOpen={isOpen} dropdownItems={items.map(function (_a, key) {
            var title = _a.title, itemKey = _a.itemKey, onClick = _a.onClick, isSeparator = _a.isSeparator, props = __rest(_a, ["title", "itemKey", "onClick", "isSeparator"]);
            return isSeparator ? (<react_core_1.DropdownSeparator {...props} key={itemKey || key} data-key={itemKey || key}/>) : (<react_core_1.DropdownItem onClick={function (event) { return _this.onSelect(event, onClick); }} {...props} key={itemKey || key} data-key={itemKey || key}>
                  {title}
                </react_core_1.DropdownItem>);
        })} isPlain/>
        {children}
      </React.Fragment>);
    };
    ActionsColumn.defaultProps = {
        children: null,
        items: [],
        dropdownPosition: react_core_1.DropdownPosition.right,
        dropdownDirection: react_core_1.DropdownDirection.down,
        rowData: {},
        extraData: {}
    };
    return ActionsColumn;
}(React.Component));
exports.ActionsColumn = ActionsColumn;
