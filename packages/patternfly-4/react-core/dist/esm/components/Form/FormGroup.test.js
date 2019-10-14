import React from 'react';
import { FormGroup } from './FormGroup';
import { Form } from './Form';
import { mount } from 'enzyme';
describe('FormGroup component', () => {
  const returnFunction = () => React.createElement("div", null, "label");

  test('should render default form group variant', () => {
    const view = mount(React.createElement(FormGroup, {
      label: "label",
      fieldId: "label-id",
      helperText: "this is helper text"
    }, React.createElement("input", {
      id: "label-id"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should render inline form group variant', () => {
    const view = mount(React.createElement(FormGroup, {
      isInline: true,
      label: "label",
      fieldId: "label-id",
      helperText: "this is helper text"
    }, React.createElement("input", {
      id: "label-id"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should render form group variant with required label', () => {
    const view = mount(React.createElement(FormGroup, {
      label: "label",
      isRequired: true,
      fieldId: "label-id"
    }, React.createElement("input", {
      id: "label-id"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should render form group variant with node label', () => {
    const view = mount(React.createElement(FormGroup, {
      fieldId: "id",
      label: React.createElement("h1", null, "Header")
    }, React.createElement("input", {
      "aria-label": "input"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should render form group variant with function label', () => {
    const view = mount(React.createElement(FormGroup, {
      fieldId: "id",
      label: returnFunction()
    }, React.createElement("input", {
      "aria-label": "input"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should render form group variant with node helperText', () => {
    const view = mount(React.createElement(FormGroup, {
      label: "Label",
      fieldId: "label-id",
      helperText: React.createElement("h1", null, "Header")
    }, React.createElement("input", {
      id: "label-id"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should render form group variant with function helperText', () => {
    const view = mount(React.createElement(FormGroup, {
      label: "Label",
      fieldId: "label-id",
      helperText: returnFunction()
    }, React.createElement("input", {
      id: "label-id"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should render horizontal form group variant', () => {
    const view = mount(React.createElement(Form, {
      isHorizontal: true
    }, React.createElement(FormGroup, {
      label: "label",
      fieldId: "label-id",
      helperText: "this is helperText"
    }, React.createElement("input", {
      id: "label-id"
    }))));
    expect(view).toMatchSnapshot();
  });
  test('should render form group variant without label', () => {
    const view = mount(React.createElement(FormGroup, {
      fieldId: "id"
    }, React.createElement("input", {
      "aria-label": "input"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should render form group required variant', () => {
    const view = mount(React.createElement(FormGroup, {
      isRequired: true,
      label: "label",
      fieldId: "id"
    }, React.createElement("input", {
      id: "id"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should render form group invalid variant', () => {
    const view = mount(React.createElement(FormGroup, {
      label: "label",
      fieldId: "label-id",
      isValid: false,
      helperTextInvalid: "Invalid FormGroup"
    }, React.createElement("input", {
      id: "id"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should render correctly when label is not a string with Children = Array', () => {
    const view = mount(React.createElement(FormGroup, {
      fieldId: "id",
      label: returnFunction()
    }, React.createElement("input", {
      "aria-label": "label"
    }), React.createElement("input", {
      id: "id"
    }), React.createElement("input", null)));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=FormGroup.test.js.map