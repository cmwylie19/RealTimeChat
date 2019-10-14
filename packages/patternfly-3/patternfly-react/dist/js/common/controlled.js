'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
  controlled(stateTypes, defaults)(WrappedComponent)

  *** NOTE / BEWARE! *******************************************************************************
  This is already deprecated, even as new as it is, because we now have getDerivedStateFromProps!
  It remains here for now because of its additional "persist" feature, which we should factor out.
  **************************************************************************************************

  This Higher Order Component provides the controlled component pattern on a prop-by-prop basis.
  It's a nice way for components to implement internal state so they "just work" out of the box,
  but also give users the option of lifting some or all of that state up into their application.

  controlled() takes arguments as an object with three options:
   * types - an object of PropTypes for the state that will be contained here
   * defaults - an optional object with default values for stateTypes
   * persist - an optional array of names from stateTypes which will be persisted to sessionStorage

  The WrappedComponent will be rendered with special props:
   * setControlledState - a reference to this state wrapper's this.setState.
   * Props for all the stateTypes, from this.props if present or from this.state otherwise.
   * All other props passed to the controlled component HoC.

  The idea is that the values in stateTypes could be stored in state, or passed in via props.
  The WrappedComponent doesn't have to care which is being used, and can manage the state
  contained here. When present, props are used instead. If you provide these special props,
  be sure to also provide corresponding callbacks/handlers to keep them updated.

  If you are using the persist option, you can optionally pass a sessionKey prop to the component
  to ensure multiple instances of the component store their data separately. If you don't pass
  a sessionKey, a stringified list of the persisted keys will be used (not unique to the instance).
*/
var controlled = function controlled(_ref) {
  var types = _ref.types,
      _ref$defaults = _ref.defaults,
      defaults = _ref$defaults === undefined ? {} : _ref$defaults,
      persist = _ref.persist;
  return function (WrappedComponent) {
    var ControlledComponent = function (_React$Component) {
      _inherits(ControlledComponent, _React$Component);

      function ControlledComponent() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, ControlledComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = ControlledComponent.__proto__ || Object.getPrototypeOf(ControlledComponent)).call.apply(_ref2, [this].concat(args))), _this), _this.state = _extends({}, (0, _helpers.nullValues)(types), defaults), _this.setControlledState = function (updater) {
          _this.setState(updater);
        }, _this.loadPersistent = function () {
          if (persist && persist.length > 0) {
            var fromPersisted = window && window.sessionStorage && window.sessionStorage.getItem(_this.sessionKey());
            fromPersisted && _this.setState(JSON.parse(fromPersisted));
          }
        }, _this.savePersistent = function () {
          if (persist && persist.length > 0) {
            var toPersist = (0, _helpers.selectKeys)(_this.state, persist);
            window && window.sessionStorage && window.sessionStorage.setItem(_this.sessionKey(), JSON.stringify(toPersist));
          }
        }, _this.sessionKey = function () {
          return _this.props.sessionKey || JSON.stringify(persist);
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(ControlledComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.loadPersistent();
          window && window.addEventListener && window.addEventListener('beforeunload', this.savePersistent);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.savePersistent();
          window && window.removeEventListener && window.removeEventListener('beforeunload', this.savePersistent);
        }
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;

          var controlledStateProps = (0, _helpers.filterKeys)(this.props, function (key) {
            return types.hasOwnProperty(key) && _this2.props[key] !== null;
          });
          var otherProps = (0, _helpers.filterKeys)(this.props, function (key) {
            return !types.hasOwnProperty(key);
          });
          return _react2.default.createElement(WrappedComponent, _extends({
            setControlledState: this.setControlledState
          }, this.state, controlledStateProps, otherProps));
        }
      }]);

      return ControlledComponent;
    }(_react2.default.Component);

    ControlledComponent.displayName = WrappedComponent.displayName;
    ControlledComponent.propTypes = _extends({}, WrappedComponent.propTypes, types, {
      sessionKey: _propTypes2.default.string
    });

    ControlledComponent.defaultProps = _extends({}, WrappedComponent.defaultProps);

    return ControlledComponent; // TODO use recompose withState or withStateHandlers here instead of component state above
  };
};

exports.default = controlled;