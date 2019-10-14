import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css, getModifier } from '@patternfly/react-styles';
import { DataToolbarContext } from './DataToolbarUtils';
import { Button } from '../../../components/Button';
import { global_breakpoint_lg as globalBreakpointLg } from '@patternfly/react-tokens';
import { formatSpacers } from './DataToolbarUtils';
import { formatBreakpointMods } from '../../../helpers/util';
export class DataToolbarToggleGroup extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "isContentPopup", () => {
      const viewportSize = window.innerWidth;
      const lgBreakpointValue = parseInt(globalBreakpointLg.value);
      return viewportSize < lgBreakpointValue;
    });
  }

  render() {
    const _this$props = this.props,
          {
      toggleIcon,
      breakpoint,
      variant,
      breakpointMods,
      spacers,
      className,
      children
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["toggleIcon", "breakpoint", "variant", "breakpointMods", "spacers", "className", "children"]);

    return React.createElement(DataToolbarContext.Consumer, null, ({
      isExpanded,
      toggleIsExpanded,
      expandableContentRef,
      expandableContentId
    }) => {
      return React.createElement("div", _extends({
        className: css(styles.dataToolbarGroup, variant && getModifier(styles, variant), formatBreakpointMods(breakpointMods, styles), formatSpacers(spacers, 'pf-m-space-items'), getModifier(styles, 'toggle-group'), getModifier(styles, `reveal-on-${breakpoint}`), className)
      }, props), React.createElement("div", {
        className: css(styles.dataToolbarToggle)
      }, React.createElement(Button, _extends({
        variant: "plain",
        onClick: toggleIsExpanded
      }, isExpanded && {
        'aria-expanded': true
      }, {
        "aria-haspopup": isExpanded && this.isContentPopup(),
        "aria-controls": expandableContentId
      }), toggleIcon)), isExpanded ? ReactDOM.createPortal(children, expandableContentRef.current) : children);
    });
  }

}

_defineProperty(DataToolbarToggleGroup, "propTypes", {
  toggleIcon: _pt.node.isRequired,
  breakpoint: _pt.oneOf(['md', 'lg', 'xl', '2xl']).isRequired
});

_defineProperty(DataToolbarToggleGroup, "defaultProps", {
  breakpointMods: [],
  spacers: []
});
//# sourceMappingURL=DataToolbarToggleGroup.js.map