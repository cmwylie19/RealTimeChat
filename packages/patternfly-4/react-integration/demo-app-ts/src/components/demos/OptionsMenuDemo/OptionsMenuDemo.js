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
var react_icons_1 = require("@patternfly/react-icons");
var OptionsMenuDemo = /** @class */ (function (_super) {
    __extends(OptionsMenuDemo, _super);
    function OptionsMenuDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            singleOptionIsOpen: false,
            modifiedIsOpen: false,
            disabledOptionsIsOpen: false,
            toggleTemplateText: 'Options menu',
            selectedOption: 'singleOption1'
        };
        _this.singleOptionOnToggle = function () {
            _this.setState({ singleOptionIsOpen: !_this.state.singleOptionIsOpen });
        };
        _this.modifiedOnToggle = function () {
            _this.setState({ modifiedIsOpen: !_this.state.modifiedIsOpen });
        };
        _this.disabledOnToggle = function () {
            _this.setState({ disabledOptionsIsOpen: !_this.state.disabledOptionsIsOpen });
        };
        _this.onSelect = function (event) {
            var id = event.target.id;
            _this.setState(function () {
                return { selectedOption: id };
            });
        };
        return _this;
    }
    OptionsMenuDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    OptionsMenuDemo.prototype.render = function () {
        var myOptionsMenuProps = {
            id: 'options-menu-single-option-example',
            menuItems: [
                <react_core_1.OptionsMenuItem onSelect={this.onSelect} isSelected={this.state.selectedOption === 'singleOption1'} id="singleOption1" key="option 1">Option 1</react_core_1.OptionsMenuItem>,
                <react_core_1.OptionsMenuItem onSelect={this.onSelect} isSelected={this.state.selectedOption === 'singleOption2'} id="singleOption2" key="option 2">Option 2</react_core_1.OptionsMenuItem>,
                <react_core_1.OptionsMenuItem onSelect={this.onSelect} isSelected={this.state.selectedOption === 'singleOption3'} id="singleOption3" key="option 3">Option 3</react_core_1.OptionsMenuItem>
            ],
            toggle: (<react_core_1.OptionsMenuToggle onToggle={this.singleOptionOnToggle} toggleTemplate={<react_1["default"].Fragment>{this.state.toggleTemplateText}</react_1["default"].Fragment>}/>),
            isOpen: this.state.singleOptionIsOpen
        };
        var myModifiedMenuProps = {
            id: 'options-menu-modified-example',
            menuItems: [
                <react_core_1.OptionsMenuItemGroup>
          <react_core_1.OptionsMenuItem onSelect={function () { }}>First Option</react_core_1.OptionsMenuItem>
        </react_core_1.OptionsMenuItemGroup>,
                <react_core_1.OptionsMenuSeparator />,
                <react_core_1.OptionsMenuItemGroup>
          <react_core_1.OptionsMenuItem onSelect={function () { }}>Second Option</react_core_1.OptionsMenuItem>
        </react_core_1.OptionsMenuItemGroup>
            ],
            toggle: (<react_core_1.OptionsMenuToggleWithText toggleText={<react_1["default"].Fragment>Custom text</react_1["default"].Fragment>} toggleButtonContents={<react_icons_1.CaretDownIcon />} onToggle={this.modifiedOnToggle}/>),
            isOpen: this.state.modifiedIsOpen,
            isPlain: true,
            direction: react_core_1.OptionsMenuDirection.up,
            position: react_core_1.OptionsMenuPosition.right
        };
        var myDisabledOptionsMenuProps = {
            id: 'options-menu-single-option-disabled-example',
            menuItems: [],
            toggle: (<react_core_1.OptionsMenuToggle isDisabled onToggle={this.disabledOnToggle} toggleTemplate={<react_1["default"].Fragment>{this.state.toggleTemplateText}</react_1["default"].Fragment>}/>),
            isOpen: this.state.disabledOptionsIsOpen
        };
        return (<react_1["default"].Fragment>
        <react_core_1.OptionsMenu id={myOptionsMenuProps.id} menuItems={myOptionsMenuProps.menuItems} isOpen={myOptionsMenuProps.isOpen} toggle={myOptionsMenuProps.toggle}/>

        <react_core_1.OptionsMenu id={myModifiedMenuProps.id} menuItems={myModifiedMenuProps.menuItems} isOpen={myModifiedMenuProps.isOpen} toggle={myModifiedMenuProps.toggle} isPlain={myModifiedMenuProps.isPlain} direction={myModifiedMenuProps.direction} position={myModifiedMenuProps.position}/>

        <react_core_1.OptionsMenu id={myDisabledOptionsMenuProps.id} menuItems={myDisabledOptionsMenuProps.menuItems} isOpen={myDisabledOptionsMenuProps.isOpen} toggle={myDisabledOptionsMenuProps.toggle}/>
      </react_1["default"].Fragment>);
    };
    return OptionsMenuDemo;
}(react_1["default"].Component));
exports.OptionsMenuDemo = OptionsMenuDemo;
exports["default"] = OptionsMenuDemo;
