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
var data_toolbar_1 = require("@patternfly/react-styles/css/components/DataToolbar/data-toolbar");
var react_styles_1 = require("@patternfly/react-styles");
var DataToolbarExpandableContent_1 = require("./DataToolbarExpandableContent");
var DataToolbarUtils_1 = require("./DataToolbarUtils");
var DataToolbar = /** @class */ (function (_super) {
    __extends(DataToolbar, _super);
    function DataToolbar(props) {
        var _this = _super.call(this, props) || this;
        _this.expandableContentRef = React.createRef();
        _this.toggleIsExpanded = function () {
            _this.setState(function (prevState) { return ({
                componentManagedIsExpanded: !prevState.componentManagedIsExpanded
            }); });
        };
        _this.closeExpandableContent = function () {
            _this.setState(function () { return ({
                componentManagedIsExpanded: false
            }); });
        };
        _this.state = {
            isConsumerManagedToggleGroup: props.isExpanded || !!props.toggleIsExpanded,
            componentManagedIsExpanded: false
        };
        return _this;
    }
    DataToolbar.prototype.componentDidMount = function () {
        var isConsumerManagedToggleGroup = this.state.isConsumerManagedToggleGroup;
        if (!isConsumerManagedToggleGroup) {
            window.addEventListener('resize', this.closeExpandableContent);
        }
    };
    DataToolbar.prototype.componentWillUnmount = function () {
        var isConsumerManagedToggleGroup = this.state.isConsumerManagedToggleGroup;
        if (isConsumerManagedToggleGroup) {
            window.removeEventListener('resize', this.closeExpandableContent);
        }
    };
    DataToolbar.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, isExpanded = _a.isExpanded, toggleIsExpanded = _a.toggleIsExpanded, id = _a.id, props = __rest(_a, ["className", "children", "isExpanded", "toggleIsExpanded", "id"]);
        var _b = this.state, isConsumerManagedToggleGroup = _b.isConsumerManagedToggleGroup, componentManagedIsExpanded = _b.componentManagedIsExpanded;
        var expandableContentId = id + "-expandable-content";
        return (<div className={react_styles_1.css(data_toolbar_1["default"].dataToolbar, className)} id={id} {...props}>
        <DataToolbarUtils_1.DataToolbarContext.Provider value={{
            isExpanded: isConsumerManagedToggleGroup ? isExpanded : componentManagedIsExpanded,
            toggleIsExpanded: isConsumerManagedToggleGroup ? toggleIsExpanded : this.toggleIsExpanded,
            expandableContentRef: this.expandableContentRef,
            expandableContentId: expandableContentId
        }}>
          {children}
        </DataToolbarUtils_1.DataToolbarContext.Provider>
        <DataToolbarExpandableContent_1.DataToolbarExpandableContent id={expandableContentId} isExpanded={isConsumerManagedToggleGroup ? isExpanded : componentManagedIsExpanded} expandableContentRef={this.expandableContentRef}/>
      </div>);
    };
    DataToolbar.defaultProps = {
        isExpanded: false
    };
    return DataToolbar;
}(React.Component));
exports.DataToolbar = DataToolbar;
