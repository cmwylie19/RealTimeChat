"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var InputGroup_1 = require("./InputGroup");
var InputGroupText_1 = require("./InputGroupText");
var Button_1 = require("../Button");
var TextInput_1 = require("../TextInput");
test('InputGroupText', function () {
    var view = enzyme_1.shallow(<InputGroupText_1.InputGroupText className="inpt-grp-text" id="email-npt-grp">
      @
    </InputGroupText_1.InputGroupText>);
    expect(view.find('span')).toHaveLength(1);
    var spanProps = view.find('span').props();
    expect(spanProps.className).toEqual(expect.stringContaining('inpt-grp-text'));
    expect(spanProps.id).toBe('email-npt-grp');
    expect(view.text()).toBe('@');
});
test('InputGroup', function () {
    var view = enzyme_1.shallow(<InputGroup_1.InputGroup className="text-verify-cls" id="text-1">
      <TextInput_1.TextInput value="this is text" aria-label="data text"/>
    </InputGroup_1.InputGroup>);
    expect(view.find('div')).toHaveLength(1);
    var divProps = view.find('div').props();
    expect(divProps.className).toEqual(expect.stringContaining('text-verify-cls'));
    expect(divProps.id).toBe('text-1');
});
test('add aria-describedby to form-control if one of the non form-controls has id', function () {
    // In this test, TextInput is a form-control component and Button is not.
    // If Button has an id props, this should be used in aria-describedby.
    var view = enzyme_1.shallow(<InputGroup_1.InputGroup>
      <TextInput_1.TextInput value="some data" aria-label="some text"/>
      <Button_1.Button variant="primary" id="button-id">
        hello
      </Button_1.Button>
    </InputGroup_1.InputGroup>);
    expect(view.find(TextInput_1.TextInput).props()['aria-describedby']).toBe('button-id');
});
