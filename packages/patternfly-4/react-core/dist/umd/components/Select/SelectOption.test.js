(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./SelectOption", "./selectConstants"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./SelectOption"), require("./selectConstants"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.SelectOption, global.selectConstants);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _SelectOption, _selectConstants) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
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

  describe('select options', () => {
    test('renders with value parameter successfully', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_selectConstants.SelectProvider, {
        value: {
          onSelect: () => {},
          onClose: () => {},
          variant: 'single'
        }
      }, _react2.default.createElement(_SelectOption.SelectOption, {
        value: "test",
        sendRef: jest.fn()
      })));
      expect(view.instance().props).toHaveProperty('value', 'test');
      expect(view).toMatchSnapshot();
    });
    test('renders with custom display successfully', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_selectConstants.SelectProvider, {
        value: {
          onSelect: () => {},
          onClose: () => {},
          variant: 'single'
        }
      }, _react2.default.createElement(_SelectOption.SelectOption, {
        value: "test",
        sendRef: jest.fn()
      }, _react2.default.createElement("div", null, "test display"))));
      expect(view).toMatchSnapshot();
    });
    test('renders with custom user object successfully', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_selectConstants.SelectProvider, {
        value: {
          onSelect: () => {},
          onClose: () => {},
          variant: 'single'
        }
      }, _react2.default.createElement(_SelectOption.SelectOption, {
        value: new User('Mr.', 'Test', 'User'),
        sendRef: jest.fn()
      })));
      expect(view).toMatchSnapshot();
    });
    test('renders with custom display and custom user object successfully', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_selectConstants.SelectProvider, {
        value: {
          onSelect: () => {},
          onClose: () => {},
          variant: 'single'
        }
      }, _react2.default.createElement(_SelectOption.SelectOption, {
        value: new User('Mr.', 'Test', 'User'),
        sendRef: jest.fn()
      }, _react2.default.createElement("div", null, "test display"))));
      expect(view).toMatchSnapshot();
    });
    describe('disabled', () => {
      test('renders disabled successfully', () => {
        const view = (0, _enzyme.mount)(_react2.default.createElement(_selectConstants.SelectProvider, {
          value: {
            onSelect: () => {},
            onClose: () => {},
            variant: 'single'
          }
        }, _react2.default.createElement(_SelectOption.SelectOption, {
          isDisabled: true,
          value: "test",
          sendRef: jest.fn()
        })));
        expect(view.find('button').hasClass('pf-m-disabled')).toBe(true);
        expect(view).toMatchSnapshot();
      });
    });
    describe('is selected', () => {
      test('renders selected successfully', () => {
        const view = (0, _enzyme.shallow)(_react2.default.createElement(_SelectOption.SelectOption, {
          isSelected: true,
          value: "test",
          sendRef: jest.fn()
        }));
        expect(view).toMatchSnapshot();
      });
    });
    describe('checked', () => {
      test('renders with checked successfully', () => {
        const view = (0, _enzyme.shallow)(_react2.default.createElement(_SelectOption.SelectOption, {
          isChecked: true,
          value: "test",
          sendRef: jest.fn()
        }));
        expect(view).toMatchSnapshot();
      });
    });
  });
});
//# sourceMappingURL=SelectOption.test.js.map