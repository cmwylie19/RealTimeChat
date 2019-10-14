var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

var TodayButton = function (_React$Component) {
  _inherits(TodayButton, _React$Component);

  function TodayButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TodayButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TodayButton.__proto__ || Object.getPrototypeOf(TodayButton)).call.apply(_ref, [this].concat(args))), _this), _this.setToday = function () {
      var setSelected = _this.props.setSelected;

      if (setSelected) setSelected(new Date());
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TodayButton, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'table',
        { className: 'table-condensed' },
        React.createElement(
          'tbody',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              null,
              React.createElement(
                'button',
                { type: 'button', className: 'today-button', onClick: this.setToday },
                React.createElement('span', { className: 'today-button-pf' })
              )
            )
          )
        )
      );
    }
  }]);

  return TodayButton;
}(React.Component);

TodayButton.propTypes = {
  setSelected: PropTypes.func
};

TodayButton.defaultProps = {
  setSelected: null
};
export default TodayButton;