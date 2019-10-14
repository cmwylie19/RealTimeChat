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
var chip_group_1 = require("@patternfly/react-styles/css/components/ChipGroup/chip-group");
var react_styles_1 = require("@patternfly/react-styles");
var Chip_1 = require("./Chip");
var helpers_1 = require("../../helpers");
exports.ChipGroupContext = React.createContext('');
var ChipGroup = /** @class */ (function (_super) {
    __extends(ChipGroup, _super);
    function ChipGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.toggleCollapse = function () {
            _this.setState(function (prevState) { return ({
                isOpen: !prevState.isOpen
            }); });
        };
        _this.state = {
            isOpen: _this.props.defaultIsOpen
        };
        return _this;
    }
    ChipGroup.prototype.renderToolbarGroup = function () {
        var isOpen = this.state.isOpen;
        var _a = this.props.headingLevel, headingLevel = _a === void 0 ? 'h4' : _a;
        return (<exports.ChipGroupContext.Provider value={headingLevel}>
        <InnerChipGroup {...this.props} isOpen={isOpen} onToggleCollapse={this.toggleCollapse}/>
      </exports.ChipGroupContext.Provider>);
    };
    ChipGroup.prototype.renderChipGroup = function () {
        var className = this.props.className;
        var isOpen = this.state.isOpen;
        return (<ul className={react_styles_1.css(chip_group_1["default"].chipGroup, className)}>
        <InnerChipGroup {...this.props} isOpen={isOpen} onToggleCollapse={this.toggleCollapse}/>
      </ul>);
    };
    ChipGroup.prototype.render = function () {
        var _a = this.props, withToolbar = _a.withToolbar, children = _a.children;
        if (React.Children.count(children)) {
            return withToolbar ? this.renderToolbarGroup() : this.renderChipGroup();
        }
        return null;
    };
    ChipGroup.defaultProps = {
        className: '',
        expandedText: 'Show Less',
        collapsedText: '${remaining} more',
        withToolbar: false,
        defaultIsOpen: false,
        numChips: 3
    };
    return ChipGroup;
}(React.Component));
exports.ChipGroup = ChipGroup;
var InnerChipGroup = function (props) {
    var children = props.children, expandedText = props.expandedText, isOpen = props.isOpen, onToggleCollapse = props.onToggleCollapse, collapsedText = props.collapsedText, withToolbar = props.withToolbar, numChips = props.numChips;
    var collapsedTextResult = helpers_1.fillTemplate(collapsedText, { remaining: React.Children.count(children) - numChips });
    var mappedChildren = React.Children.map(children, function (c) {
        var child = c;
        if (withToolbar) {
            return React.cloneElement(child, {
                children: React.Children.toArray(child.props.children).map(function (chip) {
                    return React.cloneElement(chip, { component: 'li' });
                })
            });
        }
        return React.cloneElement(child, {
            component: 'li'
        });
    });
    return (<React.Fragment>
      {isOpen ? (<React.Fragment>{mappedChildren}</React.Fragment>) : (<React.Fragment>
          {mappedChildren.map(function (child, i) {
        if (i < numChips) {
            return child;
        }
    })}
        </React.Fragment>)}
      {React.Children.count(children) > numChips && (<Chip_1.Chip isOverflowChip onClick={onToggleCollapse} component={withToolbar ? 'div' : 'li'}>
          {isOpen ? expandedText : collapsedTextResult}
        </Chip_1.Chip>)}
    </React.Fragment>);
};
