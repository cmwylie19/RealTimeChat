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
var react_icons_1 = require("@patternfly/react-icons");
var react_core_1 = require("@patternfly/react-core");
var InputGroupDemo = /** @class */ (function (_super) {
    __extends(InputGroupDemo, _super);
    function InputGroupDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isOpen: false,
            selected: ''
        };
        _this.onToggle = function (isOpen) {
            _this.setState({
                isOpen: isOpen
            });
        };
        _this.onSelect = function (event) {
            _this.setState({
                isOpen: false,
                selected: event.currentTarget.value
            });
        };
        return _this;
    }
    InputGroupDemo.prototype.render = function () {
        return (<react_1["default"].Fragment>
        <react_core_1.InputGroup>
          <react_core_1.Button id="textAreaButton1" variant={react_core_1.ButtonVariant.control}>
            Button
          </react_core_1.Button>
          <react_core_1.TextArea name="textarea1" id="textarea1" aria-label="textarea with buttons"/>
          <react_core_1.Button variant={react_core_1.ButtonVariant.control}>Button</react_core_1.Button>
        </react_core_1.InputGroup>
        <br />
        <br />
        <react_core_1.InputGroup>
          <react_core_1.TextArea name="textarea2" id="textarea2" aria-label="textarea with button"/>
          <react_core_1.Button id="textAreaButton2" variant={react_core_1.ButtonVariant.control}>
            Button
          </react_core_1.Button>
        </react_core_1.InputGroup>
        <br />
        <br />
        <react_core_1.InputGroup>
          <react_core_1.Button id="textAreaButton3" variant={react_core_1.ButtonVariant.control}>
            Button
          </react_core_1.Button>
          <react_core_1.Button variant={react_core_1.ButtonVariant.control}>Button</react_core_1.Button>
          <react_core_1.TextArea name="textarea3" id="textarea3" aria-label="textarea with 3 buttons"/>
          <react_core_1.Button variant={react_core_1.ButtonVariant.control}>Button</react_core_1.Button>
        </react_core_1.InputGroup>
        <br />
        <br />
        <react_core_1.InputGroup>
          <react_core_1.Dropdown onSelect={this.onSelect} toggle={<react_core_1.DropdownToggle onToggle={this.onToggle}>
                {this.state.selected ? this.state.selected : 'Dropdown'}
              </react_core_1.DropdownToggle>} isOpen={this.state.isOpen} dropdownItems={[
            <react_core_1.DropdownItem key="opt-1" value="Option 1" component="button">
                Option 1
              </react_core_1.DropdownItem>,
            <react_core_1.DropdownItem key="opt-2" value="Option 2" component="button">
                Option 2
              </react_core_1.DropdownItem>,
            <react_core_1.DropdownItem key="opt-3" value="Option 3" component="button">
                Option 3
              </react_core_1.DropdownItem>
        ]}>
          </react_core_1.Dropdown>
          <react_core_1.TextInput id="textInput3" aria-label="input with dropdown and button"/>
          <react_core_1.Button id="inputDropdownButton1" variant={react_core_1.ButtonVariant.control}>Button</react_core_1.Button>
        </react_core_1.InputGroup>
        <br />
        <br />
        <react_core_1.InputGroup>
          <react_core_1.InputGroupText>
            <react_icons_1.DollarSignIcon />
          </react_core_1.InputGroupText>
          <react_core_1.TextInput id="textInput5" type="number" aria-label="Dollar amount input example"/>
          <react_core_1.InputGroupText>.00</react_core_1.InputGroupText>
        </react_core_1.InputGroup>
        <br />
        <br />
        <react_core_1.InputGroup>
          <react_core_1.TextInput id="textInput6" type="email" aria-label="email input field"/>
          <react_core_1.InputGroupText id="email-example">@example.com</react_core_1.InputGroupText>
        </react_core_1.InputGroup>
        <br />
        <br />
        <react_core_1.InputGroup>
          <react_core_1.InputGroupText id="username" aria-label="@">
            <react_icons_1.AtIcon />
          </react_core_1.InputGroupText>
          <react_core_1.TextInput isValid={false} id="textInput7" type="email" aria-label="Error state username example"/>
        </react_core_1.InputGroup>
        <br />
        <br />
        <react_core_1.InputGroup>
          <react_core_1.InputGroupText component="label" htmlFor="textInput9">
            <react_icons_1.CalendarAltIcon />
          </react_core_1.InputGroupText>
          <react_core_1.TextInput name="textInput9" id="textInput9" type="date" aria-label="Date input example"/>
        </react_core_1.InputGroup>
        <br />
        <br />
        <react_core_1.InputGroup>
          <react_core_1.TextInput name="textInput11" id="textInput11" type="search" aria-label="search input example"/>
          <react_core_1.Button variant={react_core_1.ButtonVariant.control} aria-label="search button for search input">
            <react_icons_1.SearchIcon />
          </react_core_1.Button>
        </react_core_1.InputGroup>
        <br />
        <br />
        <react_core_1.InputGroup>
          <react_core_1.TextInput name="textInput10" id="textInput10" type="search" aria-label="input example with popover"/>
          <react_core_1.Popover aria-label="popover example" position={react_core_1.PopoverPosition.top} bodyContent="This field is an example of input group with popover">
            <react_core_1.Button variant={react_core_1.ButtonVariant.control} aria-label="popover for input">
              <react_icons_1.QuestionCircleIcon />
            </react_core_1.Button>
          </react_core_1.Popover>
        </react_core_1.InputGroup>
      </react_1["default"].Fragment>);
    };
    return InputGroupDemo;
}(react_1["default"].Component));
exports.InputGroupDemo = InputGroupDemo;
