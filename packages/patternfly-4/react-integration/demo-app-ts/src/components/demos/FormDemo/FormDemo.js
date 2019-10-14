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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_core_1 = require("@patternfly/react-core");
var FormDemo = /** @class */ (function (_super) {
    __extends(FormDemo, _super);
    function FormDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.handleTextInputChange = function (value) {
            _this.setState({ value: value, isValid: /^\d+$/.test(value) });
        };
        _this.onToggle = function (isExpanded) {
            _this.setState({
                isExpanded: isExpanded
            });
        };
        _this.onSelect = function (event, selection) {
            var selected = _this.state.selected;
            if (selected.includes(selection)) {
                _this.setState(function (prevState) { return ({ selected: prevState.selected.filter(function (item) { return item !== selection; }) }); }, function () { return console.log('selections: ', _this.state.selected); });
            }
            else {
                _this.setState(function (prevState) { return ({ selected: __spreadArrays(prevState.selected, [selection]) }); }, function () { return console.log('selections: ', _this.state.selected); });
            }
        };
        _this.clearSelection = function () {
            _this.setState({
                selected: [],
                isExpanded: false
            });
        };
        _this.state = {
            value: 'Five',
            isValid: false,
            isExpanded: false,
            selected: []
        };
        return _this;
    }
    FormDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    FormDemo.prototype.render = function () {
        var _a = this.state, value = _a.value, isValid = _a.isValid, isExpanded = _a.isExpanded, selected = _a.selected;
        var titleId = 'multi-typeahead-select-id';
        var options = [
            { value: 'Alabama', disabled: false },
            { value: 'Florida', disabled: false },
            { value: 'New Jersey', disabled: false },
            { value: 'New Mexico', disabled: false },
            { value: 'New York', disabled: false },
            { value: 'North Carolina', disabled: false }
        ];
        return (<react_1["default"].Fragment>
        <react_core_1.Form>
          <react_core_1.FormGroup label="Age:" type="number" helperText="Please write your age" helperTextInvalid="Age has to be a number" fieldId="age" isValid={isValid}>
            <react_core_1.TextInput isValid={isValid} value={value} id="age" aria-describedby="age-helper" onChange={this.handleTextInputChange}/>
          </react_core_1.FormGroup>
        </react_core_1.Form>
        <div>
          <div>
              <react_core_1.Form>
              <span id={titleId} hidden>
                  Select a state
              </span>
              <react_core_1.Select id={this.props.id} variant={react_core_1.SelectVariant.typeaheadMulti} aria-label="Select a state" onToggle={this.onToggle} onSelect={this.onSelect} onClear={this.clearSelection} selections={selected} isExpanded={isExpanded} ariaLabelledBy={titleId} placeholderText="Select a state">
                  {options.map(function (option, index) { return (<react_core_1.SelectOption isDisabled={option.disabled} key={index} value={option.value}/>); })}
              </react_core_1.Select>
              </react_core_1.Form>
          </div>
      </div>
    </react_1["default"].Fragment>);
    };
    return FormDemo;
}(react_1.Component));
exports.FormDemo = FormDemo;
