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
var react_core_1 = require("@patternfly/react-core");
var react_1 = require("react");
var react_icons_1 = require("@patternfly/react-icons");
var State_1 = require("../../../common/State");
var SelectDemo = /** @class */ (function (_super) {
    __extends(SelectDemo, _super);
    function SelectDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            singleIsExpanded: false,
            singleSelected: null,
            disabledSingleIsExpanded: null,
            disabledSingleSelected: false,
            customSingleIsExpanded: false,
            customSingleSelected: null,
            checkIsExpanded: false,
            checkSelected: [],
            typeaheadIsExpanded: false,
            typeaheadSelected: null,
            typeaheadMultiIsExpanded: false,
            typeaheadMultiSelected: [],
            cdtypeaheadMultiIsExpanded: false,
            cdtypeaheadMultiSelected: [],
            plainTypeaheadMultiIsExpanded: false,
            plainTypeaheadMultiSelected: [],
            plainTypeaheadMultiIsPlain: true,
            customTypeaheadMultiIsExpanded: false,
            customTypeaheadMultiSelected: [],
            direction: react_core_1.SelectDirection.down,
            typeaheadOptions: [
                { value: 'Alabama', disabled: false },
                { value: 'Florida', disabled: false },
                { value: 'New Jersey', disabled: false }
            ],
            typeaheadIsCreatable: false,
            typeaheadNewOptions: false
        };
        _this.singleOptions = [
            { value: 'Choose...', disabled: false, isPlaceholder: true },
            { value: 'Mr', disabled: false },
            { value: 'Miss', disabled: false },
            { value: 'Mrs', disabled: false },
            { value: 'Ms', disabled: false },
            { value: 'Dr', disabled: false },
            { value: 'Other', disabled: false }
        ];
        _this.checkboxOptions = [
            <react_core_1.SelectOption key={0} value="Active"/>,
            <react_core_1.SelectOption key={1} value={{ numericValue: 0, toString: function () { return 'Cancelled'; } }}/>,
            <react_core_1.SelectOption key={2} value="Paused"/>,
            <react_core_1.SelectOption key={3} value="Warning"/>,
            <react_core_1.SelectOption key={4} value="Restarted"/>
        ];
        _this.customTypeaheadOptions = [
            { value: new State_1.State('Alabama', 'AL', 'Montgomery', 1846) },
            { value: 'Florida', disabled: false },
            { value: 'New Jersey', disabled: false },
            { value: new State_1.State('New Mexico', 'NM', 'Santa Fe', 1912), disabled: false },
            { value: new State_1.State('New York', 'NY', 'Albany', 1788), disabled: false },
            { value: new State_1.State('North Carolina', 'NC', 'Raleigh', 1789), disabled: false }
        ];
        _this.customSelectValueOptions = [
            <react_core_1.SelectOption key={6} value={new State_1.State('Alabama', 'AL', 'Montgomery', 1846)}/>,
            <react_core_1.SelectOption key={7} value={new State_1.State('Florida', 'FL', 'Tailahassee', 1845)}/>,
            <react_core_1.SelectOption key={8} value={new State_1.State('New Jersey', 'NJ', 'Trenton', 1787)}/>,
            <react_core_1.SelectOption key={9} value={new State_1.State('New Mexico', 'NM', 'Santa Fe', 1912)}/>,
            <react_core_1.SelectOption key={10} value={new State_1.State('New York', 'NY', 'Albany', 1788)}/>,
            <react_core_1.SelectOption key={11} value={new State_1.State('North Carolina', 'NC', 'Raleigh', 1789)}/>
        ];
        _this.toggleDirection = function () {
            if (_this.state.direction === react_core_1.SelectDirection.up) {
                _this.setState({
                    direction: react_core_1.SelectDirection.down
                });
            }
            else {
                _this.setState({
                    direction: react_core_1.SelectDirection.up
                });
            }
        };
        _this.toggleCreatable = function (checked) {
            _this.setState({
                typeaheadIsCreatable: checked
            });
        };
        _this.toggleNew = function (checked) {
            _this.setState({
                typeaheadNewOptions: checked
            });
        };
        _this.singleOnToggle = function (singleIsExpanded) {
            _this.setState({
                singleIsExpanded: singleIsExpanded
            });
        };
        _this.disabledSingleOnToggle = function (disabledSingleIsExpanded) {
            _this.setState({
                disabledSingleIsExpanded: disabledSingleIsExpanded
            });
        };
        _this.customSingleOnToggle = function (customSingleIsExpanded) {
            _this.setState({
                customSingleIsExpanded: customSingleIsExpanded
            });
        };
        _this.checkOnToggle = function (checkIsExpanded) {
            _this.setState({
                checkIsExpanded: checkIsExpanded
            });
        };
        _this.typeaheadOnToggle = function (typeaheadIsExpanded) {
            _this.setState({
                typeaheadIsExpanded: typeaheadIsExpanded
            });
        };
        _this.typeaheadMultiOnToggle = function (typeaheadMultiIsExpanded) {
            _this.setState({
                typeaheadMultiIsExpanded: typeaheadMultiIsExpanded
            });
        };
        _this.cdtypeaheadMultiOnToggle = function (cdtypeaheadMultiIsExpanded) {
            _this.setState({
                cdtypeaheadMultiIsExpanded: cdtypeaheadMultiIsExpanded
            });
        };
        _this.plainTypeaheadMultiOnToggle = function (plainTypeaheadMultiIsExpanded) {
            _this.setState({
                plainTypeaheadMultiIsExpanded: plainTypeaheadMultiIsExpanded
            });
        };
        _this.customTypeaheadMultiOnToggle = function (customTypeaheadMultiIsExpanded) {
            _this.setState({
                customTypeaheadMultiIsExpanded: customTypeaheadMultiIsExpanded
            });
        };
        _this.singleOnSelect = function (event, selection, isPlaceholder) {
            if (isPlaceholder) {
                _this.clearSelection();
            }
            else {
                _this.setState({
                    singleSelected: selection,
                    singleIsExpanded: false
                });
                console.log('selected:', selection.toString());
            }
        };
        _this.disabledSingleOnSelect = function (event, selection, isPlaceholder) {
            if (isPlaceholder) {
                _this.clearSelection();
            }
            else {
                _this.setState({
                    disabledSingleSelected: selection,
                    disabledSingleIsExpanded: false
                });
                console.log('selected:', selection.toString());
            }
        };
        _this.customSingleOnSelect = function (event, selection, isPlaceholder) {
            if (isPlaceholder) {
                _this.clearSelection();
            }
            else {
                _this.setState({
                    customSingleSelected: selection,
                    customSingleIsExpanded: false
                });
                console.log('selected:', selection.toString());
            }
        };
        _this.checkOnSelect = function (event, selection) {
            var checkSelected = _this.state.checkSelected;
            if (checkSelected.includes(selection)) {
                _this.setState(function (prevState) { return ({ checkSelected: prevState.checkSelected.filter(function (item) { return item !== selection; }) }); }, function () { return console.log('selections: ', _this.state.checkSelected); });
            }
            else {
                _this.setState(function (prevState) { return ({ checkSelected: __spreadArrays(prevState.checkSelected, [selection]) }); }, function () { return console.log('selections: ', _this.state.checkSelected); });
            }
        };
        _this.typeaheadOnSelect = function (event, selection, isPlaceholder) {
            if (isPlaceholder) {
                _this.clearSelection();
            }
            else {
                _this.setState({
                    typeaheadSelected: selection,
                    typeaheadIsExpanded: false
                });
                console.log('selected:', selection.toString());
            }
        };
        _this.typeaheadMultiOnSelect = function (event, selection) {
            var typeaheadMultiSelected = _this.state.typeaheadMultiSelected;
            if (typeaheadMultiSelected.includes(selection)) {
                _this.setState(function (prevState) { return ({ typeaheadMultiSelected: prevState.typeaheadMultiSelected.filter(function (item) { return item !== selection; }) }); }, function () { return console.log('selections: ', _this.state.typeaheadMultiSelected); });
            }
            else {
                _this.setState(function (prevState) { return ({ typeaheadMultiSelected: __spreadArrays(prevState.typeaheadMultiSelected, [selection]) }); }, function () { return console.log('selections: ', _this.state.typeaheadMultiSelected); });
            }
        };
        _this.cdtypeaheadMultiOnSelect = function (event, selection) {
            var cdtypeaheadMultiSelected = _this.state.cdtypeaheadMultiSelected;
            if (cdtypeaheadMultiSelected.includes(selection)) {
                _this.setState(function (prevState) { return ({ cdtypeaheadMultiSelected: prevState.cdtypeaheadMultiSelected.filter(function (item) { return item !== selection; }) }); }, function () { return console.log('selections: ', _this.state.cdtypeaheadMultiSelected); });
            }
            else {
                _this.setState(function (prevState) { return ({ cdtypeaheadMultiSelected: __spreadArrays(prevState.cdtypeaheadMultiSelected, [selection]) }); }, function () { return console.log('selections: ', _this.state.cdtypeaheadMultiSelected); });
            }
        };
        _this.plainTypeaheadMultiOnSelect = function (event, selection) {
            var plainTypeaheadMultiSelected = _this.state.plainTypeaheadMultiSelected;
            if (plainTypeaheadMultiSelected.includes(selection)) {
                _this.setState(function (prevState) { return ({ plainTypeaheadMultiSelected: prevState.plainTypeaheadMultiSelected.filter(function (item) { return item !== selection; }) }); }, function () { return console.log('selections: ', _this.state.plainTypeaheadMultiSelected); });
            }
            else {
                _this.setState(function (prevState) { return ({ plainTypeaheadMultiSelected: __spreadArrays(prevState.plainTypeaheadMultiSelected, [selection]) }); }, function () { return console.log('selections: ', _this.state.plainTypeaheadMultiSelected); });
            }
        };
        _this.customTypeaheadMultiOnSelect = function (event, selection) {
            var customTypeaheadMultiSelected = _this.state.customTypeaheadMultiSelected;
            if (customTypeaheadMultiSelected.includes(selection)) {
                _this.setState(function (prevState) { return ({ customTypeaheadMultiSelected: prevState.customTypeaheadMultiSelected.filter(function (item) { return item !== selection; }) }); }, function () { return console.log('selections: ', _this.state.customTypeaheadMultiSelected); });
            }
            else {
                _this.setState(function (prevState) { return ({ customTypeaheadMultiSelected: __spreadArrays(prevState.customTypeaheadMultiSelected, [selection]) }); }, function () { return console.log('selections: ', _this.state.customTypeaheadMultiSelected); });
            }
        };
        _this.typeaheadCreateNew = function (newValue) {
            _this.setState({
                typeaheadOptions: __spreadArrays(_this.state.typeaheadOptions, [{ value: newValue }])
            });
        };
        _this.clearSelection = function () {
            _this.setState({
                singleSelected: null,
                singleIsExpanded: false,
                disabledSingleIsExpanded: null,
                disabledSingleSelected: false,
                customSingleSelected: null,
                customSingleIsExpanded: false,
                checkSelected: [],
                checkIsExpanded: false,
                typeaheadSelected: null,
                typeaheadIsExpanded: false,
                typeaheadMultiSelected: [],
                typeaheadMultiIsExpanded: false,
                cdtypeaheadMultiIsExpanded: false,
                cdtypeaheadMultiSelected: [],
                plainTypeaheadMultiSelected: [],
                plainTypeaheadMultiIsExpanded: false,
                customTypeaheadMultiSelected: [],
                customTypeaheadMultiIsExpanded: false
            });
        };
        return _this;
    }
    SelectDemo.prototype.renderSingleSelect = function () {
        var _a = this.state, singleIsExpanded = _a.singleIsExpanded, singleSelected = _a.singleSelected;
        var titleId = 'title-id';
        return (<react_core_1.StackItem isFilled={false}>
        <react_core_1.Title size="2xl">Single Select</react_core_1.Title>
        <div>
          <span id={titleId} hidden>
            Title
          </span>
          <react_core_1.Select toggleId="single-select" variant={react_core_1.SelectVariant.single} aria-label="Select Input" onToggle={this.singleOnToggle} onSelect={this.singleOnSelect} selections={singleSelected} isExpanded={singleIsExpanded} ariaLabelledBy={titleId} direction={this.state.direction} maxHeight={200}>
            {this.singleOptions.map(function (option, index) { return (<react_core_1.SelectOption isDisabled={option.disabled} key={index} value={option.value} isPlaceholder={option.isPlaceholder}/>); })}
          </react_core_1.Select>
        </div>
        <react_core_1.Checkbox label="Expands up" isChecked={this.state.direction === react_core_1.SelectDirection.up} onChange={this.toggleDirection} aria-label="direction checkbox" id="toggle-direction" name="toggle-direction"/>
      </react_core_1.StackItem>);
    };
    SelectDemo.prototype.renderDisabledSingleSelect = function () {
        var _a = this.state, disabledSingleIsExpanded = _a.disabledSingleIsExpanded, disabledSingleSelected = _a.disabledSingleSelected;
        var titleId = 'title-id';
        return (<react_core_1.StackItem isFilled={false}>
        <react_core_1.Title size="2xl">Disabled Single Select</react_core_1.Title>
        <div>
          <span id={titleId} hidden>
            Title
          </span>
          <react_core_1.Select toggleId="disabled-single-select" variant={react_core_1.SelectVariant.single} aria-label="Select Input" onToggle={this.disabledSingleOnToggle} onSelect={this.disabledSingleOnSelect} selections={disabledSingleSelected} isExpanded={disabledSingleIsExpanded} ariaLabelledBy={titleId} isDisabled>
            {this.singleOptions.map(function (option, index) { return (<react_core_1.SelectOption isDisabled={option.disabled} key={index} value={option.value} isPlaceholder={option.isPlaceholder}/>); })}
          </react_core_1.Select>
        </div>
      </react_core_1.StackItem>);
    };
    SelectDemo.prototype.renderCustomSingleSelect = function () {
        var _a = this.state, customSingleIsExpanded = _a.customSingleIsExpanded, customSingleSelected = _a.customSingleSelected;
        var titleId = 'title-id';
        return (<react_core_1.StackItem isFilled={false}>
        <react_core_1.Title size="2xl">Custom Single Select</react_core_1.Title>
        <div>
          <span id={titleId} hidden>
            Title
          </span>
          <react_core_1.Select toggleId="custom-select" variant={react_core_1.SelectVariant.single} aria-label="CustomSelect Input" onToggle={this.customSingleOnToggle} onSelect={this.customSingleOnSelect} selections={customSingleSelected} isExpanded={customSingleIsExpanded} ariaLabelledBy={titleId}>
            <react_core_1.SelectOption key={0} value="Choose..." isPlaceholder>Choose...</react_core_1.SelectOption>
            <react_core_1.SelectOption key={1} value="Mr"><div>div-Mr</div><react_icons_1.CartArrowDownIcon /></react_core_1.SelectOption>
            <react_core_1.SelectOption key={2} value="Miss">text-Miss</react_core_1.SelectOption>
            <react_core_1.SelectOption key={3} value="Mrs"><div>div-Mrs</div><react_icons_1.CartArrowDownIcon /></react_core_1.SelectOption>
            <react_core_1.SelectOption key={4} value="Ms"><div><span>nested-Ms</span></div></react_core_1.SelectOption>
            <react_core_1.SelectOption key={5} value="Dr"><div>one</div><div>two<div>nested-three-dr</div></div></react_core_1.SelectOption>
            <react_core_1.SelectOption key={6} value="Other"><div>single-Other</div></react_core_1.SelectOption>
          </react_core_1.Select>
        </div>
      </react_core_1.StackItem>);
    };
    SelectDemo.prototype.renderCheckboxSelect = function () {
        var _a = this.state, checkIsExpanded = _a.checkIsExpanded, checkSelected = _a.checkSelected;
        var titleId = 'checkbox-select-id';
        return (<react_core_1.StackItem isFilled={false}>
        <react_core_1.Title size="2xl">Checkbox Select</react_core_1.Title>
        <div>
          <span id={titleId} hidden>
            Checkbox Title
          </span>
          <react_core_1.Select toggleId="check-select" variant={react_core_1.SelectVariant.checkbox} aria-label="Select Input" onToggle={this.checkOnToggle} onSelect={this.checkOnSelect} selections={checkSelected} isExpanded={checkIsExpanded} placeholderText="Filter by status" ariaLabelledBy={titleId}>
            {this.checkboxOptions}
          </react_core_1.Select>
        </div>
      </react_core_1.StackItem>);
    };
    SelectDemo.prototype.renderTypeaheadSelect = function () {
        var _a = this.state, typeaheadOptions = _a.typeaheadOptions, typeaheadIsExpanded = _a.typeaheadIsExpanded, typeaheadSelected = _a.typeaheadSelected, typeaheadIsCreatable = _a.typeaheadIsCreatable, typeaheadNewOptions = _a.typeaheadNewOptions;
        var titleId = 'typeahead-select-id';
        return (<react_core_1.StackItem isFilled={false}>
        <react_core_1.Title size="2xl">Typeahead Select</react_core_1.Title>
        <div>
          <span id={titleId} hidden>
            Select a state
          </span>
          <react_core_1.Select toggleId="typeahead-select" variant={react_core_1.SelectVariant.typeahead} aria-label="Select a state" onToggle={this.typeaheadOnToggle} onSelect={this.typeaheadOnSelect} onClear={this.clearSelection} selections={typeaheadSelected} isExpanded={typeaheadIsExpanded} ariaLabelledBy={titleId} placeholderText="Select a state" isCreatable={typeaheadIsCreatable} onCreateOption={typeaheadNewOptions && this.typeaheadCreateNew || undefined} createText="Create item" noResultsFoundText="Item not found">
            {typeaheadOptions.map(function (option, index) { return (<react_core_1.SelectOption isDisabled={option.disabled} key={index} value={option.value}/>); })}
          </react_core_1.Select>
        </div>
        <react_core_1.Checkbox label="isCreatable" isChecked={this.state.typeaheadIsCreatable} onChange={this.toggleCreatable} aria-label="toggle creatable checkbox" id="toggle-creatable-typeahead" name="toggle-creatable-typeahead"/>
        <react_core_1.Checkbox label="onCreateOption" isChecked={this.state.typeaheadNewOptions} onChange={this.toggleNew} aria-label="toggle new checkbox" id="toggle-new-typeahead" name="toggle-new-typeahead"/>
      </react_core_1.StackItem>);
    };
    SelectDemo.prototype.renderTypeaheadMultiSelect = function () {
        var _a = this.state, typeaheadMultiIsExpanded = _a.typeaheadMultiIsExpanded, typeaheadMultiSelected = _a.typeaheadMultiSelected;
        var titleId = 'multi-typeahead-select-id';
        return (<react_core_1.StackItem isFilled={false}>
        <react_core_1.Title size="2xl">Typeahead Multi Select</react_core_1.Title>
        <div>
          <span id={titleId} hidden>
            Select a state
          </span>
          <react_core_1.Select toggleId="typeahead-multi-select" variant={react_core_1.SelectVariant.typeaheadMulti} aria-label="Select a state" onToggle={this.typeaheadMultiOnToggle} onSelect={this.typeaheadMultiOnSelect} onClear={this.clearSelection} selections={typeaheadMultiSelected} isExpanded={typeaheadMultiIsExpanded} ariaLabelledBy={titleId} placeholderText="Select a state">
            {this.state.typeaheadOptions.map(function (option, index) { return (<react_core_1.SelectOption isDisabled={option.disabled} key={index} value={option.value}/>); })}
          </react_core_1.Select>
        </div>
      </react_core_1.StackItem>);
    };
    SelectDemo.prototype.renderCustomDataTypeaheadMultiSelect = function () {
        var _a = this.state, cdtypeaheadMultiIsExpanded = _a.cdtypeaheadMultiIsExpanded, cdtypeaheadMultiSelected = _a.cdtypeaheadMultiSelected;
        var titleId = 'multi-typeahead-select-id';
        return (<react_core_1.StackItem isFilled={false}>
        <react_core_1.Title size="2xl">Custom Data Typeahead Multi Select</react_core_1.Title>
        <div>
          <span id={titleId} hidden>
            Select a state
          </span>
          <react_core_1.Select toggleId="custom-data-typeahead-multi-select" variant={react_core_1.SelectVariant.typeaheadMulti} aria-label="Select a state" onToggle={this.cdtypeaheadMultiOnToggle} onSelect={this.cdtypeaheadMultiOnSelect} onClear={this.clearSelection} selections={cdtypeaheadMultiSelected} isExpanded={cdtypeaheadMultiIsExpanded} ariaLabelledBy={titleId} placeholderText="Select a state">
            {this.customTypeaheadOptions.map(function (option, index) { return (<react_core_1.SelectOption isDisabled={option.disabled} key={index} value={option.value}/>); })}
          </react_core_1.Select>
        </div>
      </react_core_1.StackItem>);
    };
    SelectDemo.prototype.renderCustomTypeaheadMultiSelect = function () {
        var _a = this.state, customTypeaheadMultiIsExpanded = _a.customTypeaheadMultiIsExpanded, customTypeaheadMultiSelected = _a.customTypeaheadMultiSelected;
        var titleId = 'custom-multi-typeahead-select-id';
        return (<react_core_1.StackItem isFilled={false}>
        <react_core_1.Title size="2xl">Custom Typeahead Multi Select</react_core_1.Title>
        <div>
          <span id={titleId} hidden>
            Select a state
          </span>
          <react_core_1.Select toggleId="custom-typeahead-multi-select" variant={react_core_1.SelectVariant.typeaheadMulti} aria-label="Select a state" onToggle={this.customTypeaheadMultiOnToggle} onSelect={this.customTypeaheadMultiOnSelect} onClear={this.clearSelection} selections={customTypeaheadMultiSelected} isExpanded={customTypeaheadMultiIsExpanded} ariaLabelledBy={titleId} placeholderText="Select a state">
            {this.state.typeaheadOptions.map(function (option, index) { return (<react_core_1.SelectOption isDisabled={option.disabled} key={index} value={option.value}>
                <div>div-{option.value.toString()}<span>-test_span</span><react_icons_1.CartArrowDownIcon /></div>
              </react_core_1.SelectOption>); })}
          </react_core_1.Select>
        </div>
      </react_core_1.StackItem>);
    };
    SelectDemo.prototype.renderPlainTypeaheadMultiSelect = function () {
        var _a = this.state, plainTypeaheadMultiIsExpanded = _a.plainTypeaheadMultiIsExpanded, plainTypeaheadMultiSelected = _a.plainTypeaheadMultiSelected, plainTypeaheadMultiIsPlain = _a.plainTypeaheadMultiIsPlain;
        var titleId = 'multi-typeahead-plain-id';
        return (<react_core_1.StackItem isFilled={false}>
        <react_core_1.Title size="2xl">Custom Typeahead Plain Multi Select</react_core_1.Title>
        <div>
          <span id={titleId} hidden>
            Select a state
          </span>
        <react_core_1.Select toggleId="custom-typeahead-plain-multi-select" variant={react_core_1.SelectVariant.typeaheadMulti} aria-label="Select a state" onToggle={this.plainTypeaheadMultiOnToggle} onSelect={this.plainTypeaheadMultiOnSelect} onClear={this.clearSelection} selections={plainTypeaheadMultiSelected} isExpanded={plainTypeaheadMultiIsExpanded} isPlain={plainTypeaheadMultiIsPlain} ariaLabelledBy={titleId} placeholderText="Select a state">
          {this.state.typeaheadOptions.map(function (option, index) { return (<react_core_1.SelectOption isDisabled={option.disabled} key={index} value={option.value}>
              <div>div-{option.value.toString()}<span>-test_span</span><react_icons_1.CartArrowDownIcon /></div>
            </react_core_1.SelectOption>); })}
        </react_core_1.Select>
        </div>
      </react_core_1.StackItem>);
    };
    SelectDemo.prototype.render = function () {
        return (<react_core_1.Stack gutter="md">
      {this.renderSingleSelect()}
      {this.renderCustomSingleSelect()}
      {this.renderDisabledSingleSelect()}
      {this.renderCheckboxSelect()}
      {this.renderTypeaheadSelect()}
      {this.renderTypeaheadMultiSelect()}
      {this.renderCustomDataTypeaheadMultiSelect()}
      {this.renderCustomTypeaheadMultiSelect()}
      {this.renderPlainTypeaheadMultiSelect()}
    </react_core_1.Stack>);
    };
    return SelectDemo;
}(react_1.Component));
exports.SelectDemo = SelectDemo;
