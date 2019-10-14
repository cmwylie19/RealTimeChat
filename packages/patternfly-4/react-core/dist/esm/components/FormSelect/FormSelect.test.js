import React from 'react';
import { shallow } from 'enzyme';
import { FormSelect } from './FormSelect';
import { FormSelectOption } from './FormSelectOption';
import { FormSelectOptionGroup } from './FormSelectOptionGroup';
const props = {
  options: [{
    value: 'please choose',
    label: 'Please Choose',
    disabled: true
  }, {
    value: 'mr',
    label: 'Mr',
    disabled: false
  }, {
    value: 'miss',
    label: 'Miss',
    disabled: false
  }, {
    value: 'mrs',
    label: 'Mrs',
    disabled: false
  }, {
    value: 'ms',
    label: 'Ms',
    disabled: false
  }, {
    value: 'dr',
    label: 'Dr',
    disabled: false
  }, {
    value: 'other',
    label: 'Other',
    disabled: true
  }],
  value: 'mrs'
};
const groupedProps = {
  groups: [{
    groupLabel: 'Group1',
    disabled: false,
    options: [{
      value: '1',
      label: 'The First Option',
      disabled: false
    }, {
      value: '2',
      label: 'Second option is selected by default',
      disabled: false
    }]
  }, {
    groupLabel: 'Group2',
    disabled: false,
    options: [{
      value: '3',
      label: 'The Third Option',
      disabled: false
    }, {
      value: '4',
      label: 'The Fourth option',
      disabled: false
    }]
  }, {
    groupLabel: 'Group3',
    disabled: true,
    options: [{
      value: '5',
      label: 'The Fifth Option',
      disabled: false
    }, {
      value: '6',
      label: 'The Sixth option',
      disabled: false
    }]
  }],
  value: '2'
};
test('Simple FormSelect input', () => {
  const view = shallow(React.createElement(FormSelect, {
    value: props.value,
    "aria-label": "simple FormSelect"
  }, props.options.map((option, index) => React.createElement(FormSelectOption, {
    isDisabled: option.disabled,
    key: index,
    value: option.value,
    label: option.label
  }))));
  expect(view).toMatchSnapshot();
});
test('Grouped FormSelect input', () => {
  const view = shallow(React.createElement(FormSelect, {
    value: groupedProps.value,
    "aria-label": " grouped FormSelect"
  }, groupedProps.groups.map((group, index) => React.createElement(FormSelectOptionGroup, {
    isDisabled: group.disabled,
    key: index,
    label: group.groupLabel
  }, group.options.map((option, i) => React.createElement(FormSelectOption, {
    isDisabled: option.disabled,
    key: i,
    value: option.value,
    label: option.label
  }))))));
  expect(view).toMatchSnapshot();
});
test('Disabled FormSelect input ', () => {
  const view = shallow(React.createElement(FormSelect, {
    isDisabled: true,
    "aria-label": "disabled  FormSelect"
  }, React.createElement(FormSelectOption, {
    key: 1,
    value: props.options[1].value,
    label: props.options[1].label
  })));
  expect(view).toMatchSnapshot();
});
test('FormSelect input with aria-label does not generate console error', () => {
  const myMock = jest.fn();
  global.console = {
    error: myMock
  };
  const view = shallow(React.createElement(FormSelect, {
    "aria-label": "FormSelect with aria-label"
  }, React.createElement(FormSelectOption, {
    key: 1,
    value: props.options[1].value,
    label: props.options[1].label
  })));
  expect(view).toMatchSnapshot();
  expect(myMock).not.toBeCalled();
});
test('FormSelect input with id does not generate console error', () => {
  const myMock = jest.fn();
  global.console = {
    error: myMock
  };
  const view = shallow(React.createElement(FormSelect, {
    id: "id"
  }, React.createElement(FormSelectOption, {
    key: 1,
    value: props.options[1].value,
    label: props.options[1].label
  })));
  expect(view).toMatchSnapshot();
  expect(myMock).not.toBeCalled();
});
test('FormSelect input with no aria-label or id generates console error', () => {
  const myMock = jest.fn();
  global.console = {
    error: myMock
  };
  const view = shallow(React.createElement(FormSelect, null, React.createElement(FormSelectOption, {
    key: 1,
    value: props.options[1].value,
    label: props.options[1].label
  })));
  expect(view).toMatchSnapshot();
  expect(myMock).toBeCalled();
});
test('invalid FormSelect input', () => {
  const view = shallow(React.createElement(FormSelect, {
    isValid: false,
    "aria-label": "invalid FormSelect"
  }, React.createElement(FormSelectOption, {
    key: 1,
    value: props.options[1].value,
    label: props.options[1].label
  })));
  expect(view).toMatchSnapshot();
});
test('required FormSelect input', () => {
  const view = shallow(React.createElement(FormSelect, {
    required: true,
    "aria-label": "required FormSelect"
  }, React.createElement(FormSelectOption, {
    key: 1,
    value: props.options[1].value,
    label: props.options[1].label
  })));
  expect(view).toMatchSnapshot();
});
test('FormSelect passes value and event to onChange handler', () => {
  const myMock = jest.fn();
  const newValue = 1;
  const event = {
    currentTarget: {
      value: newValue
    }
  };
  const view = shallow(React.createElement(FormSelect, {
    onChange: myMock,
    "aria-label": "onchange FormSelect"
  }, React.createElement(FormSelectOption, {
    key: 1,
    value: props.options[1].value,
    label: props.options[1].label
  })));
  view.find('select').simulate('change', event);
  expect(myMock).toBeCalledWith(newValue, event);
});
//# sourceMappingURL=FormSelect.test.js.map