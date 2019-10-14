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

require('patternfly/dist/js/patternfly-settings');

var _OverlayTrigger = require('patternfly-react/dist/js/components/OverlayTrigger/OverlayTrigger');

var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);

var _Tooltip = require('patternfly-react/dist/js/components/Tooltip/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _ResourceTypes = require('./ResourceTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _window = window,
    patternfly = _window.patternfly;


var BadgedResource = function BadgedResource(_ref) {
  var id = _ref.id,
      className = _ref.className,
      badgeColor = _ref.badgeColor,
      resourceKind = _ref.resourceKind,
      kindAbbr = _ref.kindAbbr,
      kindStr = _ref.kindStr,
      resourceName = _ref.resourceName,
      large = _ref.large,
      tipDelay = _ref.tipDelay,
      href = _ref.href,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ['id', 'className', 'badgeColor', 'resourceKind', 'kindAbbr', 'kindStr', 'resourceName', 'large', 'tipDelay', 'href', 'onClick']);

  var handleClick = function handleClick(e) {
    if (!href) {
      e.preventDefault();
    }
    if (onClick) {
      onClick(e);
    }
  };

  var renderBadge = function renderBadge(showTitle) {
    var classes = (0, _classnames2.default)('badged-resource-pf-icon', resourceKind);
    return _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(
        'span',
        { className: 'sr-only' },
        kindStr || _ResourceTypes.kindStrings[resourceKind]
      ),
      _react2.default.createElement(
        'span',
        {
          className: classes,
          title: showTitle && (kindStr || _ResourceTypes.kindStrings[resourceKind]),
          style: { backgroundColor: badgeColor }
        },
        kindAbbr || _ResourceTypes.kindAbbrs[resourceKind]
      )
    );
  };

  var renderResourceType = function renderResourceType() {
    var tipString = kindStr || _ResourceTypes.kindStrings[resourceKind];

    if (tipString && tipDelay >= 0) {
      var tooltip = _react2.default.createElement(
        _Tooltip2.default,
        { id: id + '-tooltip' },
        tipString
      );
      return _react2.default.createElement(
        _OverlayTrigger2.default,
        { overlay: tooltip, placement: 'top', delay: tipDelay },
        renderBadge()
      );
    }

    return renderBadge(true);
  };

  var renderResourceName = function renderResourceName() {
    if (href || onClick) {
      return _react2.default.createElement(
        'a',
        _extends({ className: 'badged-resource-pf-resource-name', href: href || '#' }, props, { onClick: function onClick(e) {
            return handleClick(e);
          } }),
        resourceName
      );
    }
    return _react2.default.createElement(
      'span',
      { className: 'badged-resource-pf-resource-name' },
      resourceName
    );
  };

  var classes = (0, _classnames2.default)('badged-resource-pf', { 'badged-resource-pf-lg': large }, className);

  return _react2.default.createElement(
    'span',
    _extends({ id: id, className: classes }, props),
    renderResourceType(),
    renderResourceName()
  );
};

BadgedResource.COLORS = patternfly.pfPaletteColors;
BadgedResource.KINDS = _ResourceTypes.resourceTypes;

BadgedResource.propTypes = {
  /** Id */
  id: _propTypes2.default.any,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Not Preferred: Background color for the badge (choose from ResourceBadge.COLORS) */
  badgeColor: _propTypes2.default.any,
  /** Preferred: css class for the badge (choose from BadgedResource.KINDS) */
  resourceKind: _propTypes2.default.string,
  /** Abbreviation for the resource kind to display in the badge (defaulted if valid resourceKind is given) */
  kindAbbr: _propTypes2.default.string,
  /** Full name of the resource kind to display in the badge tooltip and for screen readers (defaulted if valid resourceKind is given) */
  kindStr: _propTypes2.default.string,
  /** Name of the resource */
  resourceName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  /** Flag for large version */
  large: _propTypes2.default.bool,
  /** Delay in ms for the tooltip (-1 to use title rather than a tooltip) */
  tipDelay: _propTypes2.default.number,
  /** href for the item if used as a link */
  href: _propTypes2.default.string,
  /** Callback for a click on the item */
  onClick: _propTypes2.default.func
};

BadgedResource.defaultProps = {
  id: null,
  className: '',
  badgeColor: null,
  resourceKind: '',
  kindAbbr: '',
  kindStr: '',
  resourceName: '',
  large: false,
  tipDelay: 500,
  href: null,
  onClick: null
};

exports.default = BadgedResource;