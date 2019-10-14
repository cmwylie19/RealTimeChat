"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _FormSelect = require("./FormSelect");

var _FormSelectOption = require("./FormSelectOption");

var _FormSelectOptionGroup = require("./FormSelectOptionGroup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var props = {
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
var groupedProps = {
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
test('Simple FormSelect input', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_FormSelect.FormSelect, {
    value: props.value,
    "aria-label": "simple FormSelect"
  }, props.options.map(function (option, index) {
    return _react["default"].createElement(_FormSelectOption.FormSelectOption, {
      isDisabled: option.disabled,
      key: index,
      value: option.value,
      label: option.label
    });
  })));
  expect(view).toMatchSnapshot();
});
test('Grouped FormSelect input', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_FormSelect.FormSelect, {
    value: groupedProps.value,
    "aria-label": " grouped FormSelect"
  }, groupedProps.groups.map(function (group, index) {
    return _react["default"].createElement(_FormSelectOptionGroup.FormSelectOptionGroup, {
      isDisabled: group.disabled,
      key: index,
      label: group.groupLabel
    }, group.options.map(function (option, i) {
      return _react["default"].createElement(_FormSelectOption.FormSelectOption, {
        isDisabled: option.disabled,
        key: i,
        value: option.value,
        label: option.label
      });
    }));
  })));
  expect(view).toMatchSnapshot();
});
test('Disabled FormSelect input ', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_FormSelect.FormSelect, {
    isDisabled: true,
    "aria-label": "disabled  FormSelect"
  }, _react["default"].createElement(_FormSelectOption.FormSelectOption, {
    key: 1,
    value: props.options[1].value,
    label: props.options[1].label
  })));
  expect(view).toMatchSnapshot();
});
test('FormSelect input with aria-label does not generate console error', function () {
  var myMock = jest.fn();
  global.console = {
    error: myMock
  };
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_FormSelect.FormSelect, {
    "aria-label": "FormSelect with aria-label"
  }, _react["default"].createElement(_FormSelectOption.FormSelectOption, {
    key: 1,
    value: props.options[1].value,
    label: props.options[1].label
  })));
  expect(view).toMatchSnapshot();
  expect(myMock).not.toBeCalled();
});
test('FormSelect input with id does not generate console error', function () {
  var myMock = jest.fn();
  global.console = {
    error: myMock
  };
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_FormSelect.FormSelect, {
    id: "id"
  }, _react["default"].createElement(_FormSelectOption.FormSelectOption, {
    key: 1,
    value: props.options[1].value,
    label: props.options[1].label
  })));
  expect(view).toMatchSnapshot();
  expect(myMock).not.toBeCalled();
});
test('FormSelect input with no aria-label or id generates console error', function () {
  var myMock = jest.fn();
  global.console = {
    error: myMock
  };
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_FormSelect.FormSelect, null, _react["default"].createElement(_FormSelectOption.FormSelectOption, {
    key: 1,
    value: props.options[1].value,
    label: props.options[1].label
  })));
  expect(view).toMatchSnapshot();
  expect(myMock).toBeCalled();
});
test('invalid FormSelect input', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_FormSelect.FormSelect, {
    isValid: false,
    "aria-label": "invalid FormSelect"
  }, _react["default"].createElement(_FormSelectOption.FormSelectOption, {
    key: 1,
    value: props.options[1].value,
    label: props.options[1].label
  })));
  expect(view).toMatchSnapshot();
});
test('required FormSelect input', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_FormSelect.FormSelect, {
    required: true,
    "aria-label": "required FormSelect"
  }, _react["default"].createElement(_FormSelectOption.FormSelectOption, {
    key: 1,
    value: props.options[1].value,
    label: props.options[1].label
  })));
  expect(view).toMatchSnapshot();
});
test('FormSelect passes value and event to onChange handler', function () {
  var myMock = jest.fn();
  var newValue = 1;
  var event = {
    currentTarget: {
      value: newValue
    }
  };
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_FormSelect.FormSelect, {
    onChange: myMock,
    "aria-label": "onchange FormSelect"
  }, _react["default"].createElement(_FormSelectOption.FormSelectOption, {
    key: 1,
    value: props.options[1].value,
    label: props.options[1].label
  })));
  view.find('select').simulate('change', event);
  expect(myMock).toBeCalledWith(newValue, event);
});
//# sourceMappingURL=FormSelect.test.js.map