"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactStyles = require("@patternfly/react-styles");

var _utils = require("./utils/utils");

var _ConfirmButtons = _interopRequireDefault(require("./ConfirmButtons"));

var _constants = require("./constants");

require("@patternfly/react-styles/css/components/Table/inline-edit.css");

var _inlineEditCss = require("./css/inline-edit-css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = {
  trRef: _propTypes["default"].func,
  className: _propTypes["default"].string,
  onScroll: _propTypes["default"].func,
  onResize: _propTypes["default"].func,
  row: _propTypes["default"].shape({
    isOpen: _propTypes["default"].bool,
    isExpanded: _propTypes["default"].bool,
    isEditing: _propTypes["default"].bool,
    isTableEditing: _propTypes["default"].bool,
    isFirstVisible: _propTypes["default"].bool,
    isLastVisible: _propTypes["default"].bool,
    isChildEditing: _propTypes["default"].bool,
    isParentEditing: _propTypes["default"].bool,
    isLastVisibleParent: _propTypes["default"].bool,
    editConfig: _propTypes["default"].object
  }),
  rowProps: _propTypes["default"].object
};
var defaultProps = {
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

var tableConfirmationMapper = {
  TABLE_TOP: {
    hasConfirmationButtons: function hasConfirmationButtons(_ref) {
      var isTableEditing = _ref.isTableEditing,
          isFirstVisible = _ref.isFirstVisible;
      return isTableEditing && isFirstVisible;
    },
    isTableConfirmation: function isTableConfirmation() {
      return true;
    },
    areButtonsOnTop: function areButtonsOnTop() {
      return true;
    },
    hasBoldBorder: function hasBoldBorder() {
      return true;
    },
    getEditStyles: function getEditStyles(_ref2) {
      var isTableEditing = _ref2.isTableEditing,
          isFirstVisible = _ref2.isFirstVisible;
      return (0, _reactStyles.css)(_inlineEditCss.inlineEditStyles.tableEditableRow, isTableEditing && isFirstVisible && _inlineEditCss.inlineEditStyles.modifiers.tableEditingFirstRow);
    }
  },
  TABLE_BOTTOM: {
    hasConfirmationButtons: function hasConfirmationButtons(_ref3) {
      var isTableEditing = _ref3.isTableEditing,
          isLastVisible = _ref3.isLastVisible;
      return isTableEditing && isLastVisible;
    },
    isTableConfirmation: function isTableConfirmation() {
      return true;
    },
    areButtonsOnTop: function areButtonsOnTop() {
      return false;
    },
    hasBoldBorder: function hasBoldBorder() {
      return true;
    },
    getEditStyles: function getEditStyles(_ref4) {
      var isTableEditing = _ref4.isTableEditing,
          isLastVisible = _ref4.isLastVisible;
      return (0, _reactStyles.css)(_inlineEditCss.inlineEditStyles.tableEditableRow, isTableEditing && isLastVisible && _inlineEditCss.inlineEditStyles.modifiers.tableEditingLastRow);
    }
  },
  ROW: {
    hasConfirmationButtons: function hasConfirmationButtons(_ref5) {
      var isEditing = _ref5.isEditing,
          isParentEditing = _ref5.isParentEditing,
          isLastVisibleParent = _ref5.isLastVisibleParent,
          isChildEditing = _ref5.isChildEditing,
          isLastVisible = _ref5.isLastVisible;
      return isEditing && !(isChildEditing && isParentEditing) && // buttons can't appear in the middle
      !(isParentEditing && isLastVisible) && // parent will show the buttons on top
      !(isChildEditing && !isLastVisibleParent);
    },
    // child will show the buttons on bottom
    isTableConfirmation: function isTableConfirmation() {
      return false;
    },
    areButtonsOnTop: function areButtonsOnTop(_ref6) {
      var isLastVisible = _ref6.isLastVisible,
          isLastVisibleParent = _ref6.isLastVisibleParent;
      return isLastVisible || isLastVisibleParent;
    },
    hasBoldBorder: function hasBoldBorder() {
      return false;
    },
    getEditStyles: function getEditStyles(_ref7) {
      var isEditing = _ref7.isEditing;
      return (0, _reactStyles.css)(_inlineEditCss.inlineEditStyles.tableEditableRow, isEditing && _inlineEditCss.inlineEditStyles.modifiers.editing);
    }
  },
  NO_CONFIRM_ROW: {
    hasConfirmationButtons: function hasConfirmationButtons() {
      return false;
    },
    isTableConfirmation: function isTableConfirmation() {
      return false;
    },
    areButtonsOnTop: function areButtonsOnTop() {
      return false;
    },
    hasBoldBorder: function hasBoldBorder() {
      return false;
    },
    getEditStyles: function getEditStyles(_ref8) {
      var isEditing = _ref8.isEditing;
      return (0, _reactStyles.css)(_inlineEditCss.inlineEditStyles.tableEditableRow, isEditing && _inlineEditCss.inlineEditStyles.modifiers.editing);
    }
  },
  NONE: {
    hasConfirmationButtons: function hasConfirmationButtons() {
      return false;
    },
    isTableConfirmation: function isTableConfirmation() {
      return false;
    },
    areButtonsOnTop: function areButtonsOnTop() {
      return false;
    },
    hasBoldBorder: function hasBoldBorder() {
      return false;
    },
    getEditStyles: function getEditStyles() {
      return (0, _reactStyles.css)(_inlineEditCss.inlineEditStyles.tableEditableRow);
    }
  }
};

var getTableConfirmation = function getTableConfirmation(_ref9) {
  var editConfig = _ref9.editConfig;
  return tableConfirmationMapper[editConfig && editConfig.editConfirmationType] || tableConfirmationMapper[_constants.TableEditConfirmation.NONE];
};

var editableRowWrapper = function editableRowWrapper(RowWrapperComponent) {
  var RowWrapper =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(RowWrapper, _React$Component);

    function RowWrapper(props) {
      var _this;

      _classCallCheck(this, RowWrapper);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(RowWrapper).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "setStateWith2dEquals", function (newState) {
        _this.setState(function (oldState) {
          return Object.keys(newState).find(function (key) {
            return !(0, _utils.shallowLeftSideEquals)(newState[key], oldState[key]);
          }) ? newState : null;
        });
      });

      _defineProperty(_assertThisInitialized(_this), "saveRowDimensions", function (element) {
        if (element) {
          _this.element = element;
          _this.tableElem = element.closest('table');
        }

        _this.updateRowDimensions();
      });

      _defineProperty(_assertThisInitialized(_this), "updateRowDimensions", function () {
        if (_this.element) {
          _this.setStateWith2dEquals({
            rowDimensions: (0, _utils.getBoundingClientRect)(_this.element)
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "handleScroll", function (event) {
        _this.updateRowDimensions();
      });

      _defineProperty(_assertThisInitialized(_this), "handleResize", function (event) {
        _this.fetchClientDimensions();

        _this.updateRowDimensions();
      });

      _this.state = _objectSpread({
        rowDimensions: {},
        window: {}
      }, RowWrapper.getDerivedStateFromProps(props));
      return _this;
    }

    _createClass(RowWrapper, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.state.hasConfirmationButtons) {
          this.fetchClientDimensions();
        }
      }
    }, {
      key: "fetchClientDimensions",
      value: function fetchClientDimensions() {
        this.setStateWith2dEquals({
          window: (0, _utils.getClientWindowDimensions)()
        });
      }
    }, {
      key: "getConfirmationButtons",
      value: function getConfirmationButtons() {
        var _this$props = this.props,
            row = _this$props.row,
            rowProps = _this$props.rowProps,
            props = _objectWithoutProperties(_this$props, ["row", "rowProps"]);

        var isLastVisible = row.isLastVisible,
            isParentEditing = row.isParentEditing,
            isLastVisibleParent = row.isLastVisibleParent,
            editConfig = row.editConfig;

        if (!editConfig) {
          return null;
        }

        var onEditConfirmed = editConfig.onEditConfirmed,
            onEditCanceled = editConfig.onEditCanceled;
        var tableConfirmation = getTableConfirmation(row);
        var confirmButtons;

        if (this.element && this.state.rowDimensions) {
          var options = tableConfirmation.isTableConfirmation() ? {} : rowProps;
          var actionObject = tableConfirmation.isTableConfirmation() ? null : row;
          confirmButtons = (0, _reactDom.createPortal)(_react["default"].createElement(_ConfirmButtons["default"], _extends({}, props, {
            onConfirm: function onConfirm(event) {
              return onEditConfirmed(event, actionObject, options);
            },
            onCancel: function onCancel(event) {
              return onEditCanceled(event, actionObject, options);
            },
            buttonsOnTop: tableConfirmation.areButtonsOnTop({
              isLastVisible: isLastVisible,
              isParentEditing: isParentEditing,
              isLastVisibleParent: isLastVisibleParent
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
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            trRef = _this$props2.trRef,
            className = _this$props2.className,
            onScroll = _this$props2.onScroll,
            onResize = _this$props2.onResize,
            _this$props2$row = _this$props2.row,
            isFirstVisible = _this$props2$row.isFirstVisible,
            isLastVisible = _this$props2$row.isLastVisible,
            isEditing = _this$props2$row.isEditing,
            isTableEditing = _this$props2$row.isTableEditing,
            editConfig = _this$props2$row.editConfig;
        var hasConfirmationButtons = this.state.hasConfirmationButtons;
        var trClassName = getTableConfirmation({
          editConfig: editConfig
        }).getEditStyles({
          isEditing: isEditing,
          isTableEditing: isTableEditing,
          isFirstVisible: isFirstVisible,
          isLastVisible: isLastVisible
        });
        return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(RowWrapperComponent, _extends({}, this.props, {
          trRef: (0, _utils.combineFunctions)(this.saveRowDimensions, trRef),
          className: (0, _classnames["default"])(trClassName, className),
          onScroll: (0, _utils.combineFunctions)(hasConfirmationButtons && this.handleScroll, onScroll),
          onResize: (0, _utils.combineFunctions)(hasConfirmationButtons && this.handleResize, onResize)
        })), hasConfirmationButtons && this.getConfirmationButtons());
      }
    }]);

    return RowWrapper;
  }(_react["default"].Component);

  _defineProperty(RowWrapper, "getDerivedStateFromProps", function (props, state) {
    return {
      hasConfirmationButtons: getTableConfirmation(props.row).hasConfirmationButtons(props.row)
    };
  });

  RowWrapper.propTypes = propTypes;
  RowWrapper.defaultProps = defaultProps;
  return RowWrapper;
};

var _default = editableRowWrapper;
exports["default"] = _default;
//# sourceMappingURL=editableRowWrapper.js.map