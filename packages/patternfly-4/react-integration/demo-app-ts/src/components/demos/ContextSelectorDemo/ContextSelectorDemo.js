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
var react_1 = require("react");
var react_core_1 = require("@patternfly/react-core");
var ContextSelectorDemo = /** @class */ (function (_super) {
    __extends(ContextSelectorDemo, _super);
    function ContextSelectorDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.items = [
            'My Project',
            'OpenShift Cluster',
            'Production Ansible',
            'AWS',
            'Azure',
            'My Project 2',
            'OpenShift Cluster ',
            'Production Ansible 2 ',
            'AWS 2',
            'Azure 2'
        ];
        _this.state = {
            isOpen: false,
            selected: _this.items[0],
            searchValue: '',
            filteredItems: _this.items
        };
        _this.onToggle = function (event, isOpen) {
            _this.setState({
                isOpen: isOpen
            });
        };
        _this.onSelect = function (event, value) {
            _this.setState({
                selected: value,
                isOpen: !_this.state.isOpen
            });
        };
        _this.onSearchInputChange = function (value) {
            _this.setState({ searchValue: value });
        };
        _this.onSearchButtonClick = function (event) {
            var filtered = _this.state.searchValue === ''
                ? _this.items
                : _this.items.filter(function (str) { return str.toLowerCase().indexOf(_this.state.searchValue.toLowerCase()) !== -1; });
            _this.setState({ filteredItems: filtered || [] });
        };
        return _this;
    }
    ContextSelectorDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    ContextSelectorDemo.prototype.render = function () {
        var _this = this;
        var _a = this.state, isOpen = _a.isOpen, selected = _a.selected, searchValue = _a.searchValue, filteredItems = _a.filteredItems;
        return (<react_core_1.ContextSelector toggleText={selected} onSearchInputChange={this.onSearchInputChange} isOpen={isOpen} searchInputValue={searchValue} onToggle={function (event) { return _this.onToggle(event, !isOpen); }} onSelect={this.onSelect} onSearchButtonClick={this.onSearchButtonClick} screenReaderLabel="Selected Project:">
        {filteredItems.map(function (item, index) { return (<react_core_1.ContextSelectorItem key={index}>{item}</react_core_1.ContextSelectorItem>); })}
      </react_core_1.ContextSelector>);
    };
    return ContextSelectorDemo;
}(react_1["default"].Component));
exports.ContextSelectorDemo = ContextSelectorDemo;
