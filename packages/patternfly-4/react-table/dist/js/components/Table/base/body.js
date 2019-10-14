"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Body = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

var _resolveRowKey = require("./resolve-row-key");

var _bodyRow = require("./body-row");

var _provider = require("./provider");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BaseBody =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseBody, _React$Component);

  function BaseBody() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseBody);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseBody)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "omitOnRow", function (props) {
      var onRow = props.onRow,
          ret = _objectWithoutProperties(props, ["onRow"]);

      return ret;
    });

    return _this;
  }

  _createClass(BaseBody, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      // Skip checking props against `onRow` since that can be bound at render().
      // That's not particularly good practice but you never know how the users
      // prefer to define the handler.
      // Check for wrapper based override.
      var renderers = nextProps.renderers;

      if (renderers && renderers.body && renderers.body.wrapper && renderers.body.wrapper.shouldComponentUpdate) {
        if ((0, _lodash.isFunction)(renderers.body.wrapper.shouldComponentUpdate)) {
          return renderers.body.wrapper.shouldComponentUpdate.call(this, nextProps, {}, {});
        }

        return true;
      }

      return !(0, _lodash.isEqual)(this.omitOnRow(this.props), this.omitOnRow(nextProps));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onRow = _this$props.onRow,
          rows = _this$props.rows,
          rowKey = _this$props.rowKey,
          columns = _this$props.columns,
          renderers = _this$props.renderers,
          props = _objectWithoutProperties(_this$props, ["onRow", "rows", "rowKey", "columns", "renderers"]);

      var children = rows.map(function (rowData, index) {
        var key = (0, _resolveRowKey.resolveRowKey)({
          rowData: rowData,
          rowIndex: index,
          rowKey: rowKey
        });
        return React.createElement(_bodyRow.BodyRow, {
          key: key,
          renderers: renderers.body,
          onRow: onRow,
          rowKey: key,
          rowIndex: index,
          rowData: rowData,
          columns: columns
        });
      });
      return React.createElement(renderers.body.wrapper, props, children);
    }
  }]);

  return BaseBody;
}(React.Component);

_defineProperty(BaseBody, "propTypes", {
  onRow: _propTypes["default"].any,
  rows: _propTypes["default"].any.isRequired,
  rowKey: _propTypes["default"].any,
  columns: _propTypes["default"].any,
  mappedRows: _propTypes["default"].any,
  className: _propTypes["default"].string
});

_defineProperty(BaseBody, "defaultProps", {
  onRow: function onRow() {
    return Object;
  }
});

var Body = function Body(props) {
  return React.createElement(_provider.ProviderContext.Consumer, null, function (_ref) {
    var columns = _ref.columns,
        renderers = _ref.renderers;
    return React.createElement(BaseBody, _extends({
      columns: columns,
      renderers: renderers
    }, props));
  });
};

exports.Body = Body;
Body.propTypes = {
  onRow: _propTypes["default"].any,
  rows: _propTypes["default"].any.isRequired,
  rowKey: _propTypes["default"].any,
  columns: _propTypes["default"].any,
  mappedRows: _propTypes["default"].any,
  className: _propTypes["default"].string
};
//# sourceMappingURL=body.js.map