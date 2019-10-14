var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import ModalPattern from './ModalPattern';
import { propOrState, excludeKeys } from '../../../index';

/**
 * Stateful Modal Pattern component.
 */

var StatefulModalPattern = function (_React$Component) {
  _inherits(StatefulModalPattern, _React$Component);

  _createClass(StatefulModalPattern, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return {
        show: propOrState(nextProps, prevState, 'show')
      };
    }
  }]);

  function StatefulModalPattern(props) {
    _classCallCheck(this, StatefulModalPattern);

    var _this = _possibleConstructorReturn(this, (StatefulModalPattern.__proto__ || Object.getPrototypeOf(StatefulModalPattern)).call(this, props));

    _this.open = function () {
      _this.setState({ show: true });
    };

    _this.close = function () {
      _this.setState({ show: false });
    };

    _this.getModalPatternProps = function () {
      return _this.props;
    };

    _this.state = { show: false };
    return _this;
  }

  _createClass(StatefulModalPattern, [{
    key: 'render',
    value: function render() {
      return React.createElement(ModalPattern, _extends({}, this.getModalPatternProps(), { show: this.state.show, onClose: this.close }));
    }
  }]);

  return StatefulModalPattern;
}(React.Component);

StatefulModalPattern.propTypes = _extends({}, excludeKeys(ModalPattern.propTypes, ['onClose']));

StatefulModalPattern.defaultProps = _extends({}, excludeKeys(ModalPattern.defaultProps, ['onClose', 'show']));

StatefulModalPattern.displayName = 'StatefulModalPattern';

export default StatefulModalPattern;