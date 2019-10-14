'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoreInformationInstallVariant = function MoreInformationInstallVariant(_ref) {
  var os = _ref.os,
      content = _ref.content,
      children = _ref.children;
  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      'div',
      { className: 'more-information-pf-install' },
      _react2.default.createElement(
        'b',
        null,
        os,
        ':'
      ),
      content || children
    )
  );
};
MoreInformationInstallVariant.propTypes = {
  children: _propTypes2.default.any,

  os: _propTypes2.default.string.isRequired,
  content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node])
};
MoreInformationInstallVariant.defaultProps = {
  children: null,
  content: null
};

exports.default = MoreInformationInstallVariant;