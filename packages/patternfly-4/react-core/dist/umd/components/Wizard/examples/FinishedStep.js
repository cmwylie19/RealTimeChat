(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const propTypes = {
    onClose: _propTypes2.default.func.isRequired
  };

  class FinishedStep extends _react2.default.Component {
    constructor(props) {
      super(props);
      this.state = {
        percent: 0
      };
    }

    tick() {
      if (this.state.percent < 100) {
        this.setState(prevState => ({
          percent: prevState.percent + 20
        }));
      }
    }

    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      const {
        percent
      } = this.state;
      return _react2.default.createElement("div", {
        className: "pf-l-bullseye"
      }, _react2.default.createElement("div", {
        className: "pf-c-empty-state pf-m-lg"
      }, _react2.default.createElement("i", {
        className: "fas fa- fa-cogs pf-c-empty-state__icon",
        "aria-hidden": "true"
      }), _react2.default.createElement("h1", {
        className: "pf-c-title pf-m-lg"
      }, percent === 100 ? 'Configuration Complete' : 'Configuration in progress'), _react2.default.createElement("div", {
        className: "pf-c-empty-state__body"
      }, _react2.default.createElement("div", {
        className: "pf-c-progress pf-m-singleline",
        id: "progress-singleline-example"
      }, _react2.default.createElement("div", {
        className: "pf-c-progress__description",
        id: "progress-singleline-example-description"
      }), _react2.default.createElement("div", {
        className: "pf-c-progress__status",
        "aria-hidden": "true"
      }, _react2.default.createElement("span", {
        className: "pf-c-progress__measure"
      }, percent, "%")), _react2.default.createElement("div", {
        className: "pf-c-progress__bar",
        role: "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-valuenow": percent,
        "aria-describedby": "progress-singleline-example-description"
      }, _react2.default.createElement("div", {
        className: "pf-c-progress__indicator",
        style: {
          width: `${percent}%`
        }
      })))), _react2.default.createElement("div", {
        className: "pf-c-empty-state__body"
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non pulvinar tortor. Maecenas sit amet pellentesque velit, eu eleifend mauris."), _react2.default.createElement("div", {
        className: "pf-c-empty-state__secondary"
      }, _react2.default.createElement("button", {
        className: percent === 100 ? 'pf-c-button pf-m-primary' : 'pf-c-button pf-m-link',
        onClick: this.props.onClose
      }, percent === 100 ? 'Close' : 'Cancel'))));
    }

  }

  FinishedStep.propTypes = propTypes;
  exports.default = FinishedStep;
});
//# sourceMappingURL=FinishedStep.js.map