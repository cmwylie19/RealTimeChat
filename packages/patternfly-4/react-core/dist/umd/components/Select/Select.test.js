(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Select", "./SelectOption", "./CheckboxSelectOption", "./SelectGroup", "./CheckboxSelectGroup", "./selectConstants"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Select"), require("./SelectOption"), require("./CheckboxSelectOption"), require("./SelectGroup"), require("./CheckboxSelectGroup"), require("./selectConstants"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Select, global.SelectOption, global.CheckboxSelectOption, global.SelectGroup, global.CheckboxSelectGroup, global.selectConstants);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _Select, _SelectOption, _CheckboxSelectOption, _SelectGroup, _CheckboxSelectGroup, _selectConstants) {
  "use strict";

  var React = _interopRequireWildcard(_react);

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};

    if (obj != null) {
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  class User {
    constructor(title, firstName, lastName) {
      _defineProperty(this, "toString", () => `${this.title}: ${this.firstName} ${this.lastName}`);

      this.title = title;
      this.firstName = firstName;
      this.lastName = lastName;
    }

  }

  const selectOptions = [React.createElement(_SelectOption.SelectOption, {
    value: "Mr",
    key: "0"
  }), React.createElement(_SelectOption.SelectOption, {
    value: "Mrs",
    key: "1"
  }), React.createElement(_SelectOption.SelectOption, {
    value: "Ms",
    key: "2"
  }), React.createElement(_SelectOption.SelectOption, {
    value: "Other",
    key: "3"
  })];
  const checkboxSelectOptions = [React.createElement(_CheckboxSelectOption.CheckboxSelectOption, {
    value: "Mr",
    key: "0"
  }), React.createElement(_CheckboxSelectOption.CheckboxSelectOption, {
    value: "Mrs",
    key: "1"
  }), React.createElement(_CheckboxSelectOption.CheckboxSelectOption, {
    value: "Ms",
    key: "2"
  }), React.createElement(_CheckboxSelectOption.CheckboxSelectOption, {
    value: "Other",
    key: "3"
  })];
  const selectOptionsCustom = [React.createElement(_SelectOption.SelectOption, {
    value: new User('Mr', 'User', 'One'),
    key: "0"
  }), React.createElement(_SelectOption.SelectOption, {
    value: new User('Mrs', 'New', 'User'),
    key: "1"
  }), React.createElement(_SelectOption.SelectOption, {
    value: new User('Ms', 'Test', 'Three'),
    key: "2"
  })];
  describe('select', () => {
    describe('single select', () => {
      test('renders closed successfully', () => {
        const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
          variant: _selectConstants.SelectVariant.single,
          onSelect: jest.fn(),
          onToggle: jest.fn()
        }, selectOptions));
        expect(view).toMatchSnapshot();
      });
      test('renders disabled successfully', () => {
        const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
          variant: _selectConstants.SelectVariant.single,
          onSelect: jest.fn(),
          onToggle: jest.fn(),
          isDisabled: true
        }, selectOptions));
        expect(view).toMatchSnapshot();
      });
      test('renders expanded successfully', () => {
        const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
          variant: _selectConstants.SelectVariant.single,
          onSelect: jest.fn(),
          onToggle: jest.fn(),
          isExpanded: true
        }, selectOptions));
        expect(view).toMatchSnapshot();
      });
      test('renders expanded successfully with custom objects', () => {
        const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
          variant: _selectConstants.SelectVariant.single,
          onSelect: jest.fn(),
          onToggle: jest.fn(),
          isExpanded: true
        }, selectOptionsCustom));
        expect(view).toMatchSnapshot();
      });
    });
    test('renders up drection successfully', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        variant: _selectConstants.SelectVariant.single,
        direction: _selectConstants.SelectDirection.up,
        onSelect: jest.fn(),
        onToggle: jest.fn()
      }, selectOptions));
      expect(view).toMatchSnapshot();
    });
    describe('custom select filter', () => {
      test('filters properly', () => {
        const customFilter = e => {
          let input;

          try {
            input = new RegExp(e.target.value, 'i');
          } catch (err) {
            input = new RegExp(e.target.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
          }

          const typeaheadFilteredChildren = e.target.value !== '' ? selectOptions.filter(child => input.test(child.props.value)) : selectOptions;
          return typeaheadFilteredChildren;
        };

        const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
          variant: _selectConstants.SelectVariant.typeahead,
          onSelect: jest.fn(),
          onToggle: jest.fn(),
          onFilter: customFilter,
          isExpanded: true
        }, selectOptions));
        view.find('input').simulate('change', {
          target: {
            value: 'r'
          }
        });
        view.update();
        expect(view.state('typeaheadFilteredChildren').length).toBe(3);
        expect(view).toMatchSnapshot();
      });
    });
    test('renders select groups successfully', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        variant: _selectConstants.SelectVariant.single,
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        isExpanded: true,
        isGrouped: true
      }, React.createElement(_SelectGroup.SelectGroup, {
        label: "group 1"
      }, selectOptions), React.createElement(_SelectGroup.SelectGroup, {
        label: "group 2"
      }, selectOptions)));
      expect(view).toMatchSnapshot();
    });
  });
  describe('checkbox select', () => {
    test('renders closed successfully', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        variant: _selectConstants.SelectVariant.checkbox,
        onSelect: jest.fn(),
        onToggle: jest.fn()
      }, selectOptions));
      expect(view).toMatchSnapshot();
    });
    test('renders closed successfully - old classes', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        variant: _selectConstants.SelectVariant.checkbox,
        onSelect: jest.fn(),
        onToggle: jest.fn()
      }, checkboxSelectOptions));
      expect(view).toMatchSnapshot();
    });
    test('renders expanded successfully', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        variant: _selectConstants.SelectVariant.checkbox,
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        isExpanded: true
      }, selectOptions));
      expect(view).toMatchSnapshot();
    });
    test('renders expanded successfully - old classes', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        variant: _selectConstants.SelectVariant.checkbox,
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        isExpanded: true
      }, checkboxSelectOptions));
      expect(view).toMatchSnapshot();
    });
    test('renders expanded successfully with custom objects', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        variant: _selectConstants.SelectVariant.checkbox,
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        isExpanded: true
      }, selectOptionsCustom));
      expect(view).toMatchSnapshot();
    });
    test('renders checkbox select groups successfully', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        variant: _selectConstants.SelectVariant.checkbox,
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        isExpanded: true,
        isGrouped: true
      }, React.createElement(_SelectGroup.SelectGroup, {
        label: "group 1"
      }, selectOptions), React.createElement(_SelectGroup.SelectGroup, {
        label: "group 2"
      }, selectOptions)));
      expect(view).toMatchSnapshot();
    });
    test('renders checkbox select groups successfully - old classes', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        variant: _selectConstants.SelectVariant.checkbox,
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        isExpanded: true,
        isGrouped: true
      }, React.createElement(_CheckboxSelectGroup.CheckboxSelectGroup, {
        label: "group 1"
      }, checkboxSelectOptions), React.createElement(_CheckboxSelectGroup.CheckboxSelectGroup, {
        label: "group 2"
      }, checkboxSelectOptions)));
      expect(view).toMatchSnapshot();
    });
  });
  describe('typeahead select', () => {
    test('renders closed successfully', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        variant: _selectConstants.SelectVariant.typeahead,
        onSelect: jest.fn(),
        onToggle: jest.fn()
      }, selectOptions));
      expect(view).toMatchSnapshot();
    });
    test('renders expanded successfully', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        variant: _selectConstants.SelectVariant.typeahead,
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        isExpanded: true
      }, selectOptions));
      expect(view).toMatchSnapshot();
    });
    test('renders selected successfully', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        variant: _selectConstants.SelectVariant.typeahead,
        selections: "Mr",
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        isExpanded: true
      }, selectOptions));
      expect(view).toMatchSnapshot();
    });
    test('test onChange', () => {
      const mockEvent = {
        target: {
          value: 'test'
        }
      };
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        variant: _selectConstants.SelectVariant.typeahead,
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        onClear: jest.fn(),
        isExpanded: true
      }, selectOptions));
      const inst = view.instance();
      inst.onChange(mockEvent);
      view.update();
      expect(view).toMatchSnapshot();
    });
    test('test creatable option', () => {
      const mockEvent = {
        target: {
          value: 'test'
        }
      };
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        variant: _selectConstants.SelectVariant.typeahead,
        onToggle: jest.fn(),
        isExpanded: true,
        isCreatable: true
      }, selectOptions));
      const inst = view.instance();
      inst.onChange(mockEvent);
      view.update();
      expect(view).toMatchSnapshot();
    });
  });
  describe('typeahead multi select', () => {
    test('renders closed successfully', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        variant: _selectConstants.SelectVariant.typeaheadMulti,
        onSelect: jest.fn(),
        onToggle: jest.fn()
      }, selectOptions));
      expect(view).toMatchSnapshot();
    });
    test('renders expanded successfully', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        variant: _selectConstants.SelectVariant.typeaheadMulti,
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        isExpanded: true
      }, selectOptions));
      expect(view).toMatchSnapshot();
    });
    test('renders selected successfully', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        variant: _selectConstants.SelectVariant.typeaheadMulti,
        selections: ['Mr', 'Mrs'],
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        isExpanded: true
      }, selectOptions));
      expect(view).toMatchSnapshot();
    });
    test('test onChange', () => {
      const mockEvent = {
        target: {
          value: 'test'
        }
      };
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        variant: _selectConstants.SelectVariant.typeahead,
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        onClear: jest.fn(),
        isExpanded: true
      }, selectOptions));
      const inst = view.instance();
      inst.onChange(mockEvent);
      view.update();
      expect(view).toMatchSnapshot();
    });
  });
  describe('API', () => {
    test('click on item', () => {
      const mockToggle = jest.fn();
      const mockSelect = jest.fn();
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        variant: "single",
        onToggle: mockToggle,
        onSelect: mockSelect,
        isExpanded: true
      }, selectOptions));
      view.find('button').at(1).simulate('click');
      expect(mockToggle.mock.calls).toHaveLength(0);
      expect(mockSelect.mock.calls).toHaveLength(1);
    });
    test('children only, no console error', () => {
      const myMock = jest.fn();
      global.console = _objectSpread({}, global.console, {
        error: myMock
      });
      (0, _enzyme.mount)(React.createElement(_Select.Select, {
        variant: "single",
        onSelect: jest.fn(),
        onToggle: jest.fn(),
        isExpanded: true
      }, selectOptions));
      expect(myMock).not.toBeCalled();
    });
  });
  describe('toggle icon', () => {
    const ToggleIcon = React.createElement("div", null, "Icon");
    test('select single', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        toggleIcon: ToggleIcon,
        variant: _selectConstants.SelectVariant.single,
        onSelect: jest.fn(),
        onToggle: jest.fn()
      }, selectOptions));
      expect(view.find('span.pf-c-select__toggle-icon')).toMatchSnapshot();
    });
    test('select checkbox', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        toggleIcon: ToggleIcon,
        variant: _selectConstants.SelectVariant.checkbox,
        onSelect: jest.fn(),
        onToggle: jest.fn()
      }, selectOptions));
      expect(view.find('span.pf-c-select__toggle-icon')).toMatchSnapshot();
    });
    test('typeahead select', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        toggleIcon: ToggleIcon,
        variant: _selectConstants.SelectVariant.typeahead,
        onSelect: jest.fn(),
        onToggle: jest.fn()
      }, selectOptions));
      expect(view.find('span.pf-c-select__toggle-icon')).toMatchSnapshot();
    });
    test('typeahead multi select', () => {
      const view = (0, _enzyme.mount)(React.createElement(_Select.Select, {
        toggleIcon: ToggleIcon,
        variant: _selectConstants.SelectVariant.typeaheadMulti,
        onSelect: jest.fn(),
        onToggle: jest.fn()
      }, selectOptions));
      expect(view.find('span.pf-c-select__toggle-icon')).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=Select.test.js.map