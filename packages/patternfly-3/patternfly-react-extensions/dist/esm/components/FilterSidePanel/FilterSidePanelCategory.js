var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'patternfly-react/dist/esm/components/Button/Button';

import { helpers } from '../../common/helpers';

var FilterSidePanelCategory = function FilterSidePanelCategory(_ref) {
  var children = _ref.children,
      className = _ref.className,
      title = _ref.title,
      maxShowCount = _ref.maxShowCount,
      leeway = _ref.leeway,
      showAll = _ref.showAll,
      onShowAllToggle = _ref.onShowAllToggle,
      showText = _ref.showText,
      hideText = _ref.hideText,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'title', 'maxShowCount', 'leeway', 'showAll', 'onShowAllToggle', 'showText', 'hideText']);

  var classes = classNames('filter-panel-pf-category', className);
  var childrenArray = helpers.childrenToArray(children);
  var itemCount = childrenArray.length;
  var hiddenCount = itemCount - maxShowCount;
  var shownChildren = void 0;
  var showAllToggle = null;

  if (hiddenCount <= leeway || showAll) {
    shownChildren = children;
    if (hiddenCount > leeway) {
      showAllToggle = React.createElement(
        Button,
        { bsStyle: 'link', onClick: onShowAllToggle },
        hideText || 'Show less'
      );
    }
  } else {
    shownChildren = children.slice(0, maxShowCount);
    if (hiddenCount > leeway) {
      showAllToggle = React.createElement(
        Button,
        { bsStyle: 'link', onClick: onShowAllToggle },
        showText || 'Show ' + hiddenCount + ' more'
      );
    }
  }

  return React.createElement(
    'form',
    _extends({ className: classes }, props),
    React.createElement(
      'fieldset',
      { className: 'checkbox filter-panel-pf-category-items' },
      title && React.createElement(
        'legend',
        { className: 'filter-panel-pf-category-title' },
        title
      ),
      shownChildren,
      showAllToggle
    )
  );
};

FilterSidePanelCategory.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Title for the category */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Number of items (max) to show before adding Show More link button */
  maxShowCount: PropTypes.number,
  /** Leeway to add to maxShowCount, minimum X for the 'Show X more' */
  leeway: PropTypes.number,
  /** Flag to show all items (ie. set to true after Show X more link is clicked) */
  showAll: PropTypes.bool,
  /** Callback function when the Show/Hide link button is clicked */
  onShowAllToggle: PropTypes.func,
  /** Text for the link to show all items, default 'Show <x> more' */
  showText: PropTypes.string,
  /** Text for the link to hide overflow items, default 'Show less' */
  hideText: PropTypes.string
};

FilterSidePanelCategory.defaultProps = {
  children: null,
  className: '',
  title: null,
  maxShowCount: 5,
  leeway: 2,
  showAll: false,
  onShowAllToggle: helpers.noop,
  showText: null,
  hideText: null
};

export default FilterSidePanelCategory;