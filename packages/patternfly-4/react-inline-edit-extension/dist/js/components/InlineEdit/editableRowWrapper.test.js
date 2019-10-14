"use strict";

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _build = require("enzyme/build");

var _editableRowWrapper = _interopRequireDefault(require("./editableRowWrapper"));

var _constants = require("./constants");

var _helpers = require("../../test-helpers/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TestRow = function TestRow(_ref) {
  var trRef = _ref.trRef;
  return _react["default"].createElement("tr", {
    ref: trRef
  });
};

TestRow.propTypes = {
  trRef: _propTypes["default"].func
};
TestRow.defaultProps = {
  trRef: null
};

var getRowWrapper = function getRowWrapper(row, props) {
  var RowWrapper = (0, _editableRowWrapper["default"])(TestRow);
  return _react["default"].createElement(RowWrapper, _extends({}, props, {
    row: row
  }));
};

var buildRow = function buildRow() {
  var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var editConfirmationType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.TableEditConfirmation.ROW;
  return _objectSpread({}, row, {
    editConfig: {
      editConfirmationType: editConfirmationType
    }
  });
};

describe('editableRowWrapper', function () {
  var mountOptions;
  var container;
  beforeEach(function () {
    container = (0, _build.mount)(_react["default"].createElement("table", null, _react["default"].createElement("tbody", null)));
    mountOptions = {
      attachTo: container.find('tbody').getDOMNode()
    };
    (0, _helpers.mockClosest)(null, function (selector) {
      return selector === 'table' ? container.getDOMNode() : undefined;
    }, true);
  });
  afterEach(function () {
    container.unmount();
  });
  test('renders correctly', function () {
    var trRef = jest.fn();
    var view = (0, _build.mount)(getRowWrapper(buildRow({}, null), {
      onResize: jest.fn(),
      onScroll: jest.fn(),
      trRef: trRef
    }), mountOptions);
    expect(view).toMatchSnapshot();
    expect(trRef).toHaveBeenCalled();
  });
  test('sets editable row classname', function () {
    [].concat(_toConsumableArray(Object.keys(_constants.TableEditConfirmation)), [null]).forEach(function (confirmationType) {
      var view = (0, _build.mount)(getRowWrapper(buildRow({}, confirmationType)), mountOptions);
      expect(view.find('.pf-c-table__editable-row')).toHaveLength(1);
      view.detach();
    });
  });
  test('has inline edit buttons', function () {
    [buildRow({
      isEditing: true
    }), buildRow({
      isEditing: true,
      isParentEditing: true
    }), // expandable
    buildRow({
      isEditing: true,
      isChildEditing: true,
      isLastVisibleParent: true
    }), // expandable
    buildRow({
      isTableEditing: true,
      isFirstVisible: true
    }, _constants.TableEditConfirmation.TABLE_TOP), buildRow({
      isTableEditing: true,
      isLastVisible: true
    }, _constants.TableEditConfirmation.TABLE_BOTTOM)].forEach(function (row) {
      var view = (0, _build.mount)(getRowWrapper(row), mountOptions);
      expect(view.find('.pf-c-table__inline-edit-buttons')).toHaveLength(1);
      view.detach();
    });
  });
  test('does not have inline edit buttons', function () {
    [buildRow({
      isEditing: true
    }, _constants.TableEditConfirmation.NONE), buildRow({
      isEditing: true
    }, _constants.TableEditConfirmation.TABLE_TOP), buildRow({
      isEditing: true
    }, _constants.TableEditConfirmation.TABLE_BOTTOM), buildRow({
      isEditing: true,
      isParentEditing: true,
      isLastVisible: true
    }), // expandable
    buildRow({
      isEditing: true,
      isChildEditing: true
    }), // expandable
    buildRow({
      isTableEditing: true,
      isLastVisible: true
    }, _constants.TableEditConfirmation.NONE), buildRow({
      isTableEditing: true,
      isLastVisible: true
    }), buildRow({
      isTableEditing: true
    }, _constants.TableEditConfirmation.TABLE_TOP), buildRow({
      isTableEditing: true
    }, _constants.TableEditConfirmation.TABLE_BOTTOM), buildRow({
      isTableEditing: true,
      isLastVisible: true
    }, _constants.TableEditConfirmation.TABLE_TOP), buildRow({
      isTableEditing: true,
      isFirstVisible: true
    }, _constants.TableEditConfirmation.TABLE_BOTTOM)].forEach(function (row) {
      var view = (0, _build.mount)(getRowWrapper(row), mountOptions);
      expect(view.find('.pf-c-table__inline-edit-buttons')).toHaveLength(0);
      view.detach();
    });
  });
  test('onEditConfirmed and onEditCanceled called', function () {
    var onEditConfirmed = jest.fn();
    var onEditCanceled = jest.fn();
    var row = {
      isEditing: true,
      editConfig: {
        editConfirmationType: _constants.TableEditConfirmation.ROW,
        onEditConfirmed: onEditConfirmed,
        onEditCanceled: onEditCanceled
      }
    };
    var view = (0, _build.mount)(getRowWrapper(row, null, _react["default"].Fragment), mountOptions);
    view.find('.pf-c-table__inline-edit-buttons button.pf-c-button.pf-m-primary').simulate('mouseup');
    expect(onEditConfirmed).toHaveBeenCalled();
    view.find('.pf-c-table__inline-edit-buttons button.pf-c-button.pf-m-plain').simulate('mouseup');
    expect(onEditCanceled).toHaveBeenCalled();
  });
});
//# sourceMappingURL=editableRowWrapper.test.js.map