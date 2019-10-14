"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var FormSelect_1 = require("./FormSelect");
var FormSelectOption_1 = require("./FormSelectOption");
var FormSelectOptionGroup_1 = require("./FormSelectOptionGroup");
var props = {
    options: [
        { value: 'please choose', label: 'Please Choose', disabled: true },
        { value: 'mr', label: 'Mr', disabled: false },
        { value: 'miss', label: 'Miss', disabled: false },
        { value: 'mrs', label: 'Mrs', disabled: false },
        { value: 'ms', label: 'Ms', disabled: false },
        { value: 'dr', label: 'Dr', disabled: false },
        { value: 'other', label: 'Other', disabled: true }
    ],
    value: 'mrs'
};
var groupedProps = {
    groups: [
        {
            groupLabel: 'Group1',
            disabled: false,
            options: [
                { value: '1', label: 'The First Option', disabled: false },
                { value: '2', label: 'Second option is selected by default', disabled: false }
            ]
        },
        {
            groupLabel: 'Group2',
            disabled: false,
            options: [
                { value: '3', label: 'The Third Option', disabled: false },
                { value: '4', label: 'The Fourth option', disabled: false }
            ]
        },
        {
            groupLabel: 'Group3',
            disabled: true,
            options: [
                { value: '5', label: 'The Fifth Option', disabled: false },
                { value: '6', label: 'The Sixth option', disabled: false }
            ]
        }
    ],
    value: '2'
};
test('Simple FormSelect input', function () {
    var view = enzyme_1.shallow(<FormSelect_1.FormSelect value={props.value} aria-label="simple FormSelect">
      {props.options.map(function (option, index) { return (<FormSelectOption_1.FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label}/>); })}
    </FormSelect_1.FormSelect>);
    expect(view).toMatchSnapshot();
});
test('Grouped FormSelect input', function () {
    var view = enzyme_1.shallow(<FormSelect_1.FormSelect value={groupedProps.value} aria-label=" grouped FormSelect">
      {groupedProps.groups.map(function (group, index) { return (<FormSelectOptionGroup_1.FormSelectOptionGroup isDisabled={group.disabled} key={index} label={group.groupLabel}>
          {group.options.map(function (option, i) { return (<FormSelectOption_1.FormSelectOption isDisabled={option.disabled} key={i} value={option.value} label={option.label}/>); })}
        </FormSelectOptionGroup_1.FormSelectOptionGroup>); })}
    </FormSelect_1.FormSelect>);
    expect(view).toMatchSnapshot();
});
test('Disabled FormSelect input ', function () {
    var view = enzyme_1.shallow(<FormSelect_1.FormSelect isDisabled aria-label="disabled  FormSelect">
      <FormSelectOption_1.FormSelectOption key={1} value={props.options[1].value} label={props.options[1].label}/>
    </FormSelect_1.FormSelect>);
    expect(view).toMatchSnapshot();
});
test('FormSelect input with aria-label does not generate console error', function () {
    var myMock = jest.fn();
    global.console = { error: myMock };
    var view = enzyme_1.shallow(<FormSelect_1.FormSelect aria-label="FormSelect with aria-label">
      <FormSelectOption_1.FormSelectOption key={1} value={props.options[1].value} label={props.options[1].label}/>
    </FormSelect_1.FormSelect>);
    expect(view).toMatchSnapshot();
    expect(myMock).not.toBeCalled();
});
test('FormSelect input with id does not generate console error', function () {
    var myMock = jest.fn();
    global.console = { error: myMock };
    var view = enzyme_1.shallow(<FormSelect_1.FormSelect id="id">
      <FormSelectOption_1.FormSelectOption key={1} value={props.options[1].value} label={props.options[1].label}/>
    </FormSelect_1.FormSelect>);
    expect(view).toMatchSnapshot();
    expect(myMock).not.toBeCalled();
});
test('FormSelect input with no aria-label or id generates console error', function () {
    var myMock = jest.fn();
    global.console = { error: myMock };
    var view = enzyme_1.shallow(<FormSelect_1.FormSelect>
      <FormSelectOption_1.FormSelectOption key={1} value={props.options[1].value} label={props.options[1].label}/>
    </FormSelect_1.FormSelect>);
    expect(view).toMatchSnapshot();
    expect(myMock).toBeCalled();
});
test('invalid FormSelect input', function () {
    var view = enzyme_1.shallow(<FormSelect_1.FormSelect isValid={false} aria-label="invalid FormSelect">
      <FormSelectOption_1.FormSelectOption key={1} value={props.options[1].value} label={props.options[1].label}/>
    </FormSelect_1.FormSelect>);
    expect(view).toMatchSnapshot();
});
test('required FormSelect input', function () {
    var view = enzyme_1.shallow(<FormSelect_1.FormSelect required aria-label="required FormSelect">
      <FormSelectOption_1.FormSelectOption key={1} value={props.options[1].value} label={props.options[1].label}/>
    </FormSelect_1.FormSelect>);
    expect(view).toMatchSnapshot();
});
test('FormSelect passes value and event to onChange handler', function () {
    var myMock = jest.fn();
    var newValue = 1;
    var event = {
        currentTarget: { value: newValue }
    };
    var view = enzyme_1.shallow(<FormSelect_1.FormSelect onChange={myMock} aria-label="onchange FormSelect">
      <FormSelectOption_1.FormSelectOption key={1} value={props.options[1].value} label={props.options[1].label}/>
    </FormSelect_1.FormSelect>);
    view.find('select').simulate('change', event);
    expect(myMock).toBeCalledWith(newValue, event);
});
