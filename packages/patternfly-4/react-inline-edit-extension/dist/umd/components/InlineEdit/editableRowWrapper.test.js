(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "prop-types", "enzyme/build", "./editableRowWrapper", "./constants", "../../test-helpers/helpers"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("prop-types"), require("enzyme/build"), require("./editableRowWrapper"), require("./constants"), require("../../test-helpers/helpers"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.propTypes, global.build, global.editableRowWrapper, global.constants, global.helpers);
    global.undefined = mod.exports;
  }
})(this, function (_react, _propTypes, _build, _editableRowWrapper, _constants, _helpers) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _editableRowWrapper2 = _interopRequireDefault(_editableRowWrapper);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
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

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  const TestRow = ({
    trRef
  }) => _react2.default.createElement("tr", {
    ref: trRef
  });

  TestRow.propTypes = {
    trRef: _propTypes2.default.func
  };
  TestRow.defaultProps = {
    trRef: null
  };

  const getRowWrapper = (row, props) => {
    const RowWrapper = (0, _editableRowWrapper2.default)(TestRow);
    return _react2.default.createElement(RowWrapper, _extends({}, props, {
      row: row
    }));
  };

  const buildRow = (row = {}, editConfirmationType = _constants.TableEditConfirmation.ROW) => _objectSpread({}, row, {
    editConfig: {
      editConfirmationType
    }
  });

  describe('editableRowWrapper', () => {
    let mountOptions;
    let container;
    beforeEach(() => {
      container = (0, _build.mount)(_react2.default.createElement("table", null, _react2.default.createElement("tbody", null)));
      mountOptions = {
        attachTo: container.find('tbody').getDOMNode()
      };
      (0, _helpers.mockClosest)(null, selector => selector === 'table' ? container.getDOMNode() : undefined, true);
    });
    afterEach(() => {
      container.unmount();
    });
    test('renders correctly', () => {
      const trRef = jest.fn();
      const view = (0, _build.mount)(getRowWrapper(buildRow({}, null), {
        onResize: jest.fn(),
        onScroll: jest.fn(),
        trRef
      }), mountOptions);
      expect(view).toMatchSnapshot();
      expect(trRef).toHaveBeenCalled();
    });
    test('sets editable row classname', () => {
      [...Object.keys(_constants.TableEditConfirmation), null].forEach(confirmationType => {
        const view = (0, _build.mount)(getRowWrapper(buildRow({}, confirmationType)), mountOptions);
        expect(view.find('.pf-c-table__editable-row')).toHaveLength(1);
        view.detach();
      });
    });
    test('has inline edit buttons', () => {
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
      }, _constants.TableEditConfirmation.TABLE_BOTTOM)].forEach(row => {
        const view = (0, _build.mount)(getRowWrapper(row), mountOptions);
        expect(view.find('.pf-c-table__inline-edit-buttons')).toHaveLength(1);
        view.detach();
      });
    });
    test('does not have inline edit buttons', () => {
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
      }, _constants.TableEditConfirmation.TABLE_BOTTOM)].forEach(row => {
        const view = (0, _build.mount)(getRowWrapper(row), mountOptions);
        expect(view.find('.pf-c-table__inline-edit-buttons')).toHaveLength(0);
        view.detach();
      });
    });
    test('onEditConfirmed and onEditCanceled called', () => {
      const onEditConfirmed = jest.fn();
      const onEditCanceled = jest.fn();
      const row = {
        isEditing: true,
        editConfig: {
          editConfirmationType: _constants.TableEditConfirmation.ROW,
          onEditConfirmed,
          onEditCanceled
        }
      };
      const view = (0, _build.mount)(getRowWrapper(row, null, _react2.default.Fragment), mountOptions);
      view.find('.pf-c-table__inline-edit-buttons button.pf-c-button.pf-m-primary').simulate('mouseup');
      expect(onEditConfirmed).toHaveBeenCalled();
      view.find('.pf-c-table__inline-edit-buttons button.pf-c-button.pf-m-plain').simulate('mouseup');
      expect(onEditCanceled).toHaveBeenCalled();
    });
  });
});
//# sourceMappingURL=editableRowWrapper.test.js.map