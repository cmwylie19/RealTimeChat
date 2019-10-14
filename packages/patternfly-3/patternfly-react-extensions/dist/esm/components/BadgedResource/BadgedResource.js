var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'patternfly/dist/js/patternfly-settings';
import OverlayTrigger from 'patternfly-react/dist/esm/components/OverlayTrigger/OverlayTrigger';
import Tooltip from 'patternfly-react/dist/esm/components/Tooltip/Tooltip';

import { resourceTypes, kindAbbrs, kindStrings } from './ResourceTypes';

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
    var classes = classNames('badged-resource-pf-icon', resourceKind);
    return React.createElement(
      'span',
      null,
      React.createElement(
        'span',
        { className: 'sr-only' },
        kindStr || kindStrings[resourceKind]
      ),
      React.createElement(
        'span',
        {
          className: classes,
          title: showTitle && (kindStr || kindStrings[resourceKind]),
          style: { backgroundColor: badgeColor }
        },
        kindAbbr || kindAbbrs[resourceKind]
      )
    );
  };

  var renderResourceType = function renderResourceType() {
    var tipString = kindStr || kindStrings[resourceKind];

    if (tipString && tipDelay >= 0) {
      var tooltip = React.createElement(
        Tooltip,
        { id: id + '-tooltip' },
        tipString
      );
      return React.createElement(
        OverlayTrigger,
        { overlay: tooltip, placement: 'top', delay: tipDelay },
        renderBadge()
      );
    }

    return renderBadge(true);
  };

  var renderResourceName = function renderResourceName() {
    if (href || onClick) {
      return React.createElement(
        'a',
        _extends({ className: 'badged-resource-pf-resource-name', href: href || '#' }, props, { onClick: function onClick(e) {
            return handleClick(e);
          } }),
        resourceName
      );
    }
    return React.createElement(
      'span',
      { className: 'badged-resource-pf-resource-name' },
      resourceName
    );
  };

  var classes = classNames('badged-resource-pf', { 'badged-resource-pf-lg': large }, className);

  return React.createElement(
    'span',
    _extends({ id: id, className: classes }, props),
    renderResourceType(),
    renderResourceName()
  );
};

BadgedResource.COLORS = patternfly.pfPaletteColors;
BadgedResource.KINDS = resourceTypes;

BadgedResource.propTypes = {
  /** Id */
  id: PropTypes.any,
  /** Additional css classes */
  className: PropTypes.string,
  /** Not Preferred: Background color for the badge (choose from ResourceBadge.COLORS) */
  badgeColor: PropTypes.any,
  /** Preferred: css class for the badge (choose from BadgedResource.KINDS) */
  resourceKind: PropTypes.string,
  /** Abbreviation for the resource kind to display in the badge (defaulted if valid resourceKind is given) */
  kindAbbr: PropTypes.string,
  /** Full name of the resource kind to display in the badge tooltip and for screen readers (defaulted if valid resourceKind is given) */
  kindStr: PropTypes.string,
  /** Name of the resource */
  resourceName: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Flag for large version */
  large: PropTypes.bool,
  /** Delay in ms for the tooltip (-1 to use title rather than a tooltip) */
  tipDelay: PropTypes.number,
  /** href for the item if used as a link */
  href: PropTypes.string,
  /** Callback for a click on the item */
  onClick: PropTypes.func
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

export default BadgedResource;