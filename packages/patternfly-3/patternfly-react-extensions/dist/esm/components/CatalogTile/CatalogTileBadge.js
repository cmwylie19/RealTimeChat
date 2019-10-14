var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OverlayTrigger from 'patternfly-react/dist/esm/components/OverlayTrigger/OverlayTrigger';
import Tooltip from 'patternfly-react/dist/esm/components/Tooltip/Tooltip';


var CatalogTileBadge = function CatalogTileBadge(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'id', 'title']);

  var classes = classNames('catalog-tile-pf-badge', className);

  if (title) {
    var tooltip = React.createElement(
      Tooltip,
      { id: id },
      title
    );
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        OverlayTrigger,
        { overlay: tooltip, placement: 'top' },
        React.createElement(
          'span',
          _extends({ className: classes }, props),
          children,
          React.createElement(
            'span',
            { className: 'sr-only' },
            title
          )
        )
      )
    );
  }

  return React.createElement(
    'span',
    _extends({ className: classes }, props),
    children
  );
};

CatalogTileBadge.propTypes = {
  /** Children (typically an Icon) */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Id (necessary for tooltip) */
  id: PropTypes.string,
  /** Tooltip String (also used for screen readers) */
  title: PropTypes.string
};

CatalogTileBadge.defaultProps = {
  children: null,
  className: '',
  id: null,
  title: null
};

export default CatalogTileBadge;