"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TableProvider = exports.withContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Table = require("../components/Table/Table");

var _Table2 = require("../components/Table");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var withContext = function withContext(_ref) {
  var _ref$context = _ref.context,
      context = _ref$context === void 0 ? {} : _ref$context,
      _ref$contextType = _ref.contextType,
      contextType = _ref$contextType === void 0 ? {} : _ref$contextType;
  return function (WrappedComponent) {
    var WithContext =
    /*#__PURE__*/
    function (_Component) {
      _inherits(WithContext, _Component);

      function WithContext() {
        _classCallCheck(this, WithContext);

        return _possibleConstructorReturn(this, _getPrototypeOf(WithContext).apply(this, arguments));
      }

      _createClass(WithContext, [{
        key: "getChildContext",
        value: function getChildContext() {
          return context;
        }
      }, {
        key: "render",
        value: function render() {
          return _react["default"].createElement(WrappedComponent, null, this.props.children);
        }
      }]);

      return WithContext;
    }(_react.Component);

    WithContext.propTypes = {
      children: _propTypes["default"].node
    };
    WithContext.defaultProps = {
      children: null
    };
    WithContext.WrappedComponent = WrappedComponent;
    WithContext.childContextTypes = contextType;
    return WithContext;
  };
};

exports.withContext = withContext;
var TableProvider = withContext({
  context: {
    columns: [],
    renderers: {
      header: {
        wrapper: 'thead',
        row: 'tr',
        cell: 'th'
      }
    }
  },
  contextType: {
    columns: _propTypes["default"].any,
    renderers: _propTypes["default"].any
  }
})('table');
exports.TableProvider = TableProvider;

var MockedTableChanges = function MockedTableChanges(_ref2) {
  var updateFunc = _ref2.updateFunc,
      columns = _ref2.columns;
  return _react["default"].createElement(_Table.TableContext.Provider, {
    value: {
      updateHeaderData: updateFunc
    }
  }, _react["default"].createElement(TableProvider, null, _react["default"].createElement(_Table2.TableHeader, {
    headerRows: columns
  })));
};

MockedTableChanges.propTypes = {
  updateFunc: _propTypes["default"].func,
  columns: _propTypes["default"].array
};
MockedTableChanges.defaultProps = {
  updateFunc: function updateFunc() {
    return undefined;
  },
  columns: []
};
var _default = MockedTableChanges;
exports["default"] = _default;
//# sourceMappingURL=MockedTableChanges.js.map