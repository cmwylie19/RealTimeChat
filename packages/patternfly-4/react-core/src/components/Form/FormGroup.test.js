"use strict";
exports.__esModule = true;
var react_1 = require("react");
var FormGroup_1 = require("./FormGroup");
var Form_1 = require("./Form");
var enzyme_1 = require("enzyme");
describe('FormGroup component', function () {
    var returnFunction = function () { return <div>label</div>; };
    test('should render default form group variant', function () {
        var view = enzyme_1.mount(<FormGroup_1.FormGroup label="label" fieldId="label-id" helperText="this is helper text">
        <input id="label-id"/>
      </FormGroup_1.FormGroup>);
        expect(view).toMatchSnapshot();
    });
    test('should render inline form group variant', function () {
        var view = enzyme_1.mount(<FormGroup_1.FormGroup isInline label="label" fieldId="label-id" helperText="this is helper text">
        <input id="label-id"/>
      </FormGroup_1.FormGroup>);
        expect(view).toMatchSnapshot();
    });
    test('should render form group variant with required label', function () {
        var view = enzyme_1.mount(<FormGroup_1.FormGroup label="label" isRequired fieldId="label-id">
        <input id="label-id"/>
      </FormGroup_1.FormGroup>);
        expect(view).toMatchSnapshot();
    });
    test('should render form group variant with node label', function () {
        var view = enzyme_1.mount(<FormGroup_1.FormGroup fieldId="id" label={<h1>Header</h1>}>
        <input aria-label="input"/>
      </FormGroup_1.FormGroup>);
        expect(view).toMatchSnapshot();
    });
    test('should render form group variant with function label', function () {
        var view = enzyme_1.mount(<FormGroup_1.FormGroup fieldId="id" label={returnFunction()}>
        <input aria-label="input"/>
      </FormGroup_1.FormGroup>);
        expect(view).toMatchSnapshot();
    });
    test('should render form group variant with node helperText', function () {
        var view = enzyme_1.mount(<FormGroup_1.FormGroup label="Label" fieldId="label-id" helperText={<h1>Header</h1>}>
        <input id="label-id"/>
      </FormGroup_1.FormGroup>);
        expect(view).toMatchSnapshot();
    });
    test('should render form group variant with function helperText', function () {
        var view = enzyme_1.mount(<FormGroup_1.FormGroup label="Label" fieldId="label-id" helperText={returnFunction()}>
        <input id="label-id"/>
      </FormGroup_1.FormGroup>);
        expect(view).toMatchSnapshot();
    });
    test('should render horizontal form group variant', function () {
        var view = enzyme_1.mount(<Form_1.Form isHorizontal>
        <FormGroup_1.FormGroup label="label" fieldId="label-id" helperText="this is helperText">
          <input id="label-id"/>
        </FormGroup_1.FormGroup>
      </Form_1.Form>);
        expect(view).toMatchSnapshot();
    });
    test('should render form group variant without label', function () {
        var view = enzyme_1.mount(<FormGroup_1.FormGroup fieldId="id">
        <input aria-label="input"/>
      </FormGroup_1.FormGroup>);
        expect(view).toMatchSnapshot();
    });
    test('should render form group required variant', function () {
        var view = enzyme_1.mount(<FormGroup_1.FormGroup isRequired label="label" fieldId="id">
        <input id="id"/>
      </FormGroup_1.FormGroup>);
        expect(view).toMatchSnapshot();
    });
    test('should render form group invalid variant', function () {
        var view = enzyme_1.mount(<FormGroup_1.FormGroup label="label" fieldId="label-id" isValid={false} helperTextInvalid="Invalid FormGroup">
        <input id="id"/>
      </FormGroup_1.FormGroup>);
        expect(view).toMatchSnapshot();
    });
    test('should render correctly when label is not a string with Children = Array', function () {
        var view = enzyme_1.mount(<FormGroup_1.FormGroup fieldId="id" label={returnFunction()}>
        <input aria-label="label"/>
        <input id="id"/>
        <input />
      </FormGroup_1.FormGroup>);
        expect(view).toMatchSnapshot();
    });
});
