"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SelectOption = require("./SelectOption");

var _selectConstants = require("./selectConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var User = function User(title, firstName, lastName) {
  var _this = this;

  _classCallCheck(this, User);

  _defineProperty(this, "toString", function () {
    return "".concat(_this.title, ": ").concat(_this.firstName, " ").concat(_this.lastName);
  });

  this.title = title;
  this.firstName = firstName;
  this.lastName = lastName;
};

describe('select options', function () {
  test('renders with value parameter successfully', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_selectConstants.SelectProvider, {
      value: {
        onSelect: function onSelect() {},
        onClose: function onClose() {},
        variant: 'single'
      }
    }, _react["default"].createElement(_SelectOption.SelectOption, {
      value: "test",
      sendRef: jest.fn()
    })));
    expect(view.instance().props).toHaveProperty('value', 'test');
    expect(view).toMatchSnapshot();
  });
  test('renders with custom display successfully', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_selectConstants.SelectProvider, {
      value: {
        onSelect: function onSelect() {},
        onClose: function onClose() {},
        variant: 'single'
      }
    }, _react["default"].createElement(_SelectOption.SelectOption, {
      value: "test",
      sendRef: jest.fn()
    }, _react["default"].createElement("div", null, "test display"))));
    expect(view).toMatchSnapshot();
  });
  test('renders with custom user object successfully', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_selectConstants.SelectProvider, {
      value: {
        onSelect: function onSelect() {},
        onClose: function onClose() {},
        variant: 'single'
      }
    }, _react["default"].createElement(_SelectOption.SelectOption, {
      value: new User('Mr.', 'Test', 'User'),
      sendRef: jest.fn()
    })));
    expect(view).toMatchSnapshot();
  });
  test('renders with custom display and custom user object successfully', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_selectConstants.SelectProvider, {
      value: {
        onSelect: function onSelect() {},
        onClose: function onClose() {},
        variant: 'single'
      }
    }, _react["default"].createElement(_SelectOption.SelectOption, {
      value: new User('Mr.', 'Test', 'User'),
      sendRef: jest.fn()
    }, _react["default"].createElement("div", null, "test display"))));
    expect(view).toMatchSnapshot();
  });
  describe('disabled', function () {
    test('renders disabled successfully', function () {
      var view = (0, _enzyme.mount)(_react["default"].createElement(_selectConstants.SelectProvider, {
        value: {
          onSelect: function onSelect() {},
          onClose: function onClose() {},
          variant: 'single'
        }
      }, _react["default"].createElement(_SelectOption.SelectOption, {
        isDisabled: true,
        value: "test",
        sendRef: jest.fn()
      })));
      expect(view.find('button').hasClass('pf-m-disabled')).toBe(true);
      expect(view).toMatchSnapshot();
    });
  });
  describe('is selected', function () {
    test('renders selected successfully', function () {
      var view = (0, _enzyme.shallow)(_react["default"].createElement(_SelectOption.SelectOption, {
        isSelected: true,
        value: "test",
        sendRef: jest.fn()
      }));
      expect(view).toMatchSnapshot();
    });
  });
  describe('checked', function () {
    test('renders with checked successfully', function () {
      var view = (0, _enzyme.shallow)(_react["default"].createElement(_SelectOption.SelectOption, {
        isChecked: true,
        value: "test",
        sendRef: jest.fn()
      }));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=SelectOption.test.js.map