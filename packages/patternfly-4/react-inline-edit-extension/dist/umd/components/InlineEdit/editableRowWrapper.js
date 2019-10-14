(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "react-dom", "prop-types", "classnames", "@patternfly/react-styles", "./utils/utils", "./ConfirmButtons", "./constants", "./css/inline-edit-css", "@patternfly/react-styles/css/components/Table/inline-edit.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("react-dom"), require("prop-types"), require("classnames"), require("@patternfly/react-styles"), require("./utils/utils"), require("./ConfirmButtons"), require("./constants"), require("./css/inline-edit-css"), require("@patternfly/react-styles/css/components/Table/inline-edit.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.propTypes, global.classnames, global.reactStyles, global.utils, global.ConfirmButtons, global.constants, global.inlineEditCss, global.inlineEdit);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _propTypes, _classnames, _reactStyles, _utils, _ConfirmButtons, _constants, _inlineEditCss) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _ConfirmButtons2 = _interopRequireDefault(_ConfirmButtons);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
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

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
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

  const propTypes = {
    trRef: _propTypes2.default.func,
    className: _propTypes2.default.string,
    onScroll: _propTypes2.default.func,
    onResize: _propTypes2.default.func,
    row: _propTypes2.default.shape({
      isOpen: _propTypes2.default.bool,
      isExpanded: _propTypes2.default.bool,
      isEditing: _propTypes2.default.bool,
      isTableEditing: _propTypes2.default.bool,
      isFirstVisible: _propTypes2.default.bool,
      isLastVisible: _propTypes2.default.bool,
      isChildEditing: _propTypes2.default.bool,
      isParentEditing: _propTypes2.default.bool,
      isLastVisibleParent: _propTypes2.default.bool,
      editConfig: _propTypes2.default.object
    }),
    rowProps: _propTypes2.default.object
  };
  const defaultProps = {
    trRef: undefined,
    className: '',
    onScroll: undefined,
    onResize: undefined,
    row: {
      isOpen: undefined,
      isExpanded: undefined,
      isEditing: undefined,
      isTableEditing: undefined,
      isFirstVisible: undefined,
      isLastVisible: undefined,
      isChildEditing: undefined,
      isParentEditing: undefined,
      isLastVisibleParent: undefined,
      editConfig: undefined
    },
    rowProps: null
  }; // TableEditConfirmation constants like TABLE_TOP cannot be referenced but must be hardcoded due to this issue:
  // https://github.com/reactjs/react-docgen/issues/317#issue-393678795

  const tableConfirmationMapper = {
    TABLE_TOP: {
      hasConfirmationButtons: ({
        isTableEditing,
        isFirstVisible
      }) => isTableEditing && isFirstVisible,
      isTableConfirmation: () => true,
      areButtonsOnTop: () => true,
      hasBoldBorder: () => true,
      getEditStyles: ({
        isTableEditing,
        isFirstVisible
      }) => (0, _reactStyles.css)(_inlineEditCss.inlineEditStyles.tableEditableRow, isTableEditing && isFirstVisible && _inlineEditCss.inlineEditStyles.modifiers.tableEditingFirstRow)
    },
    TABLE_BOTTOM: {
      hasConfirmationButtons: ({
        isTableEditing,
        isLastVisible
      }) => isTableEditing && isLastVisible,
      isTableConfirmation: () => true,
      areButtonsOnTop: () => false,
      hasBoldBorder: () => true,
      getEditStyles: ({
        isTableEditing,
        isLastVisible
      }) => (0, _reactStyles.css)(_inlineEditCss.inlineEditStyles.tableEditableRow, isTableEditing && isLastVisible && _inlineEditCss.inlineEditStyles.modifiers.tableEditingLastRow)
    },
    ROW: {
      hasConfirmationButtons: ({
        isEditing,
        isParentEditing,
        isLastVisibleParent,
        isChildEditing,
        isLastVisible
      }) => isEditing && !(isChildEditing && isParentEditing) && // buttons can't appear in the middle
      !(isParentEditing && isLastVisible) && // parent will show the buttons on top
      !(isChildEditing && !isLastVisibleParent),
      // child will show the buttons on bottom
      isTableConfirmation: () => false,
      areButtonsOnTop: ({
        isLastVisible,
        isLastVisibleParent
      }) => isLastVisible || isLastVisibleParent,
      hasBoldBorder: () => false,
      getEditStyles: ({
        isEditing
      }) => (0, _reactStyles.css)(_inlineEditCss.inlineEditStyles.tableEditableRow, isEditing && _inlineEditCss.inlineEditStyles.modifiers.editing)
    },
    NO_CONFIRM_ROW: {
      hasConfirmationButtons: () => false,
      isTableConfirmation: () => false,
      areButtonsOnTop: () => false,
      hasBoldBorder: () => false,
      getEditStyles: ({
        isEditing
      }) => (0, _reactStyles.css)(_inlineEditCss.inlineEditStyles.tableEditableRow, isEditing && _inlineEditCss.inlineEditStyles.modifiers.editing)
    },
    NONE: {
      hasConfirmationButtons: () => false,
      isTableConfirmation: () => false,
      areButtonsOnTop: () => false,
      hasBoldBorder: () => false,
      getEditStyles: () => (0, _reactStyles.css)(_inlineEditCss.inlineEditStyles.tableEditableRow)
    }
  };

  const getTableConfirmation = ({
    editConfig
  }) => tableConfirmationMapper[editConfig && editConfig.editConfirmationType] || tableConfirmationMapper[_constants.TableEditConfirmation.NONE];

  const editableRowWrapper = RowWrapperComponent => {
    class RowWrapper extends _react2.default.Component {
      constructor(props) {
        super(props);

        _defineProperty(this, "setStateWith2dEquals", newState => {
          this.setState(oldState => Object.keys(newState).find(key => !(0, _utils.shallowLeftSideEquals)(newState[key], oldState[key])) ? newState : null);
        });

        _defineProperty(this, "saveRowDimensions", element => {
          if (element) {
            this.element = element;
            this.tableElem = element.closest('table');
          }

          this.updateRowDimensions();
        });

        _defineProperty(this, "updateRowDimensions", () => {
          if (this.element) {
            this.setStateWith2dEquals({
              rowDimensions: (0, _utils.getBoundingClientRect)(this.element)
            });
          }
        });

        _defineProperty(this, "handleScroll", event => {
          this.updateRowDimensions();
        });

        _defineProperty(this, "handleResize", event => {
          this.fetchClientDimensions();
          this.updateRowDimensions();
        });

        this.state = _objectSpread({
          rowDimensions: {},
          window: {}
        }, RowWrapper.getDerivedStateFromProps(props));
      }

      componentDidMount() {
        if (this.state.hasConfirmationButtons) {
          this.fetchClientDimensions();
        }
      }

      fetchClientDimensions() {
        this.setStateWith2dEquals({
          window: (0, _utils.getClientWindowDimensions)()
        });
      }

      getConfirmationButtons() {
        const _this$props = this.props,
              {
          row,
          rowProps
        } = _this$props,
              props = _objectWithoutProperties(_this$props, ["row", "rowProps"]);

        const {
          isLastVisible,
          isParentEditing,
          isLastVisibleParent,
          editConfig
        } = row;

        if (!editConfig) {
          return null;
        }

        const {
          onEditConfirmed,
          onEditCanceled
        } = editConfig;
        const tableConfirmation = getTableConfirmation(row);
        let confirmButtons;

        if (this.element && this.state.rowDimensions) {
          const options = tableConfirmation.isTableConfirmation() ? {} : rowProps;
          const actionObject = tableConfirmation.isTableConfirmation() ? null : row;
          confirmButtons = (0, _reactDom.createPortal)(_react2.default.createElement(_ConfirmButtons2.default, _extends({}, props, {
            onConfirm: event => onEditConfirmed(event, actionObject, options),
            onCancel: event => onEditCanceled(event, actionObject, options),
            buttonsOnTop: tableConfirmation.areButtonsOnTop({
              isLastVisible,
              isParentEditing,
              isLastVisibleParent
            }),
            boldBorder: tableConfirmation.hasBoldBorder(),
            environment: {
              window: this.state.window,
              row: (0, _utils.getBoundingClientRect)(this.element)
            }
          })), this.tableElem ? this.tableElem.parentNode : document.body);
        }

        return confirmButtons;
      }

      render() {
        const {
          trRef,
          className,
          onScroll,
          onResize,
          row: {
            isFirstVisible,
            isLastVisible,
            isEditing,
            isTableEditing,
            editConfig
          }
        } = this.props;
        const {
          hasConfirmationButtons
        } = this.state;
        const trClassName = getTableConfirmation({
          editConfig
        }).getEditStyles({
          isEditing,
          isTableEditing,
          isFirstVisible,
          isLastVisible
        });
        return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(RowWrapperComponent, _extends({}, this.props, {
          trRef: (0, _utils.combineFunctions)(this.saveRowDimensions, trRef),
          className: (0, _classnames2.default)(trClassName, className),
          onScroll: (0, _utils.combineFunctions)(hasConfirmationButtons && this.handleScroll, onScroll),
          onResize: (0, _utils.combineFunctions)(hasConfirmationButtons && this.handleResize, onResize)
        })), hasConfirmationButtons && this.getConfirmationButtons());
      }

    }

    _defineProperty(RowWrapper, "getDerivedStateFromProps", (props, state) => ({
      hasConfirmationButtons: getTableConfirmation(props.row).hasConfirmationButtons(props.row)
    }));

    RowWrapper.propTypes = propTypes;
    RowWrapper.defaultProps = defaultProps;
    return RowWrapper;
  };

  exports.default = editableRowWrapper;
});
//# sourceMappingURL=editableRowWrapper.js.map