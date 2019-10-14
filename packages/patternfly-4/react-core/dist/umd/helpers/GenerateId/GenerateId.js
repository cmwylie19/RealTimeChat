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
  /** This Component can be used to wrap a functional component in order to generate a random ID
   * Example of how to use this component
   *
   * const Component = ({id}) => (
   *  <GenerateId>{randomId => (
   *     <div id={id || randomId}>
   *       div with random ID
   *     </div>
   *   )}
   *  </GenerateId>
   *  );
   *
   * Component.propTypes = {
   *  id: PropTypes.string
   * }
   */


  let currentId = 0;
  const propTypes = {
    /** String to prefix the random id with */
    prefix: _propTypes2.default.string,

    /** Component to be rendered with the generated id */
    children: _propTypes2.default.func.isRequired
  };

  class GenerateId extends _react2.default.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "id", `${this.props.prefix}${currentId++}`);
    }

    render() {
      return this.props.children(this.id);
    }

  }

  _defineProperty(GenerateId, "defaultProps", {
    prefix: 'pf-random-id-'
  });

  _defineProperty(GenerateId, "propTypes", propTypes);

  exports.default = GenerateId;
});
//# sourceMappingURL=GenerateId.js.map