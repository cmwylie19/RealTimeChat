"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var propTypes = {
  onClose: _propTypes["default"].func.isRequired
};

var FinishedStep =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FinishedStep, _React$Component);

  function FinishedStep(props) {
    var _this;

    _classCallCheck(this, FinishedStep);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FinishedStep).call(this, props));
    _this.state = {
      percent: 0
    };
    return _this;
  }

  _createClass(FinishedStep, [{
    key: "tick",
    value: function tick() {
      if (this.state.percent < 100) {
        this.setState(function (prevState) {
          return {
            percent: prevState.percent + 20
          };
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        return _this2.tick();
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      var percent = this.state.percent;
      return _react["default"].createElement("div", {
        className: "pf-l-bullseye"
      }, _react["default"].createElement("div", {
        className: "pf-c-empty-state pf-m-lg"
      }, _react["default"].createElement("i", {
        className: "fas fa- fa-cogs pf-c-empty-state__icon",
        "aria-hidden": "true"
      }), _react["default"].createElement("h1", {
        className: "pf-c-title pf-m-lg"
      }, percent === 100 ? 'Configuration Complete' : 'Configuration in progress'), _react["default"].createElement("div", {
        className: "pf-c-empty-state__body"
      }, _react["default"].createElement("div", {
        className: "pf-c-progress pf-m-singleline",
        id: "progress-singleline-example"
      }, _react["default"].createElement("div", {
        className: "pf-c-progress__description",
        id: "progress-singleline-example-description"
      }), _react["default"].createElement("div", {
        className: "pf-c-progress__status",
        "aria-hidden": "true"
      }, _react["default"].createElement("span", {
        className: "pf-c-progress__measure"
      }, percent, "%")), _react["default"].createElement("div", {
        className: "pf-c-progress__bar",
        role: "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-valuenow": percent,
        "aria-describedby": "progress-singleline-example-description"
      }, _react["default"].createElement("div", {
        className: "pf-c-progress__indicator",
        style: {
          width: "".concat(percent, "%")
        }
      })))), _react["default"].createElement("div", {
        className: "pf-c-empty-state__body"
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non pulvinar tortor. Maecenas sit amet pellentesque velit, eu eleifend mauris."), _react["default"].createElement("div", {
        className: "pf-c-empty-state__secondary"
      }, _react["default"].createElement("button", {
        className: percent === 100 ? 'pf-c-button pf-m-primary' : 'pf-c-button pf-m-link',
        onClick: this.props.onClose
      }, percent === 100 ? 'Close' : 'Cancel'))));
    }
  }]);

  return FinishedStep;
}(_react["default"].Component);

FinishedStep.propTypes = propTypes;
var _default = FinishedStep;
exports["default"] = _default;
//# sourceMappingURL=FinishedStep.js.map