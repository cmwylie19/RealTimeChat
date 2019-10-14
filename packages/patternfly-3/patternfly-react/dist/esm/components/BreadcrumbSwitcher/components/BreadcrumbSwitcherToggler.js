var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Button, Icon } from '../../../index';

// eslint-disable-next-line react/prefer-stateless-function

var BreadcrumbSwitcherToggler = function (_React$Component) {
  _inherits(BreadcrumbSwitcherToggler, _React$Component);

  function BreadcrumbSwitcherToggler() {
    _classCallCheck(this, BreadcrumbSwitcherToggler);

    return _possibleConstructorReturn(this, (BreadcrumbSwitcherToggler.__proto__ || Object.getPrototypeOf(BreadcrumbSwitcherToggler)).apply(this, arguments));
  }

  _createClass(BreadcrumbSwitcherToggler, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        Button,
        this.props,
        React.createElement(Icon, { type: 'fa', name: 'exchange' })
      );
    }
  }]);

  return BreadcrumbSwitcherToggler;
}(React.Component);

BreadcrumbSwitcherToggler.propTypes = _extends({}, Button.propTypes);

export default BreadcrumbSwitcherToggler;