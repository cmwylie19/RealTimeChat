'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DecadeViewHeader = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DecadeViewHeader = exports.DecadeViewHeader = function DecadeViewHeader(_ref) {
  var currDecade = _ref.currDecade,
      getPrevDecade = _ref.getPrevDecade,
      getNextDecade = _ref.getNextDecade;
  return _react2.default.createElement(
    'thead',
    null,
    _react2.default.createElement(
      'tr',
      null,
      _react2.default.createElement(
        'th',
        { className: 'prev', onClick: getPrevDecade },
        _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-left' })
      ),
      _react2.default.createElement(
        'th',
        { className: 'picker-switch', 'data-action': 'pickerSwitch', colSpan: '5' },
        currDecade + '-' + (currDecade + 11)
      ),
      _react2.default.createElement(
        'th',
        { className: 'next', onClick: getNextDecade },
        _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-right' })
      )
    )
  );
};

DecadeViewHeader.propTypes = {
  currDecade: _propTypes2.default.number,
  getPrevDecade: _propTypes2.default.func,
  getNextDecade: _propTypes2.default.func
};
DecadeViewHeader.defaultProps = {
  currDecade: 20,
  getPrevDecade: _helpers.noop,
  getNextDecade: _helpers.noop
};
exports.default = DecadeViewHeader;