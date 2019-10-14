'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _OverlayTrigger = require('patternfly-react/dist/js/components/OverlayTrigger/OverlayTrigger');

var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);

var _Tooltip = require('patternfly-react/dist/js/components/Tooltip/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CatalogTileBadge = function CatalogTileBadge(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'id', 'title']);

  var classes = (0, _classnames2.default)('catalog-tile-pf-badge', className);

  if (title) {
    var tooltip = _react2.default.createElement(
      _Tooltip2.default,
      { id: id },
      title
    );
    return _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(
        _OverlayTrigger2.default,
        { overlay: tooltip, placement: 'top' },
        _react2.default.createElement(
          'span',
          _extends({ className: classes }, props),
          children,
          _react2.default.createElement(
            'span',
            { className: 'sr-only' },
            title
          )
        )
      )
    );
  }

  return _react2.default.createElement(
    'span',
    _extends({ className: classes }, props),
    children
  );
};

CatalogTileBadge.propTypes = {
  /** Children (typically an Icon) */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Id (necessary for tooltip) */
  id: _propTypes2.default.string,
  /** Tooltip String (also used for screen readers) */
  title: _propTypes2.default.string
};

CatalogTileBadge.defaultProps = {
  children: null,
  className: '',
  id: null,
  title: null
};

exports.default = CatalogTileBadge;