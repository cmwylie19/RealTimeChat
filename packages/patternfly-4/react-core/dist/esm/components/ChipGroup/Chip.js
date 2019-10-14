import _pt from "prop-types";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { ChipButton } from './ChipButton';
import { Tooltip } from '../Tooltip';
import { TimesCircleIcon } from '@patternfly/react-icons';
import styles from '@patternfly/react-styles/css/components/Chip/chip';
import GenerateId from '../../helpers/GenerateId/GenerateId';
export class Chip extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "span", React.createRef());

    _defineProperty(this, "renderOverflowChip", () => {
      const {
        children,
        className,
        onClick
      } = this.props;
      const Component = this.props.component;
      return React.createElement(Component, {
        className: css(styles.chip, styles.modifiers.overflow, className)
      }, React.createElement(ChipButton, {
        onClick: onClick
      }, React.createElement("span", {
        className: css(styles.chipText)
      }, children)));
    });

    _defineProperty(this, "renderChip", randomId => {
      const {
        children,
        closeBtnAriaLabel,
        tooltipPosition,
        className,
        onClick,
        isReadOnly
      } = this.props;
      const Component = this.props.component;

      if (this.state.isTooltipVisible) {
        return React.createElement(Tooltip, {
          position: tooltipPosition,
          content: children
        }, React.createElement(Component, {
          className: css(styles.chip, isReadOnly && styles.modifiers.readOnly, className)
        }, React.createElement("span", {
          ref: this.span,
          className: css(styles.chipText),
          id: randomId
        }, children), !isReadOnly && React.createElement(ChipButton, {
          onClick: onClick,
          ariaLabel: closeBtnAriaLabel,
          id: `remove_${randomId}`,
          "aria-labelledby": `remove_${randomId} ${randomId}`
        }, React.createElement(TimesCircleIcon, {
          "aria-hidden": "true"
        }))));
      }

      return React.createElement(Component, {
        className: css(styles.chip, isReadOnly && styles.modifiers.readOnly, className)
      }, React.createElement("span", {
        ref: this.span,
        className: css(styles.chipText),
        id: randomId
      }, children), !isReadOnly && React.createElement(ChipButton, {
        onClick: onClick,
        ariaLabel: closeBtnAriaLabel,
        id: `remove_${randomId}`,
        "aria-labelledby": `remove_${randomId} ${randomId}`
      }, React.createElement(TimesCircleIcon, {
        "aria-hidden": "true"
      })));
    });

    this.state = {
      isTooltipVisible: false
    };
  }

  componentDidMount() {
    this.setState({
      isTooltipVisible: Boolean(this.span.current && this.span.current.offsetWidth < this.span.current.scrollWidth)
    });
  }

  render() {
    const {
      isOverflowChip
    } = this.props;
    return React.createElement(GenerateId, null, randomId => isOverflowChip ? this.renderOverflowChip() : this.renderChip(randomId));
  }

}

_defineProperty(Chip, "propTypes", {
  children: _pt.node,
  closeBtnAriaLabel: _pt.string,
  className: _pt.string,
  isOverflowChip: _pt.bool,
  isReadOnly: _pt.bool,
  onClick: _pt.func,
  component: _pt.node,
  tooltipPosition: _pt.oneOf(['auto', 'top', 'bottom', 'left', 'right'])
});

_defineProperty(Chip, "defaultProps", {
  closeBtnAriaLabel: 'close',
  className: '',
  isOverflowChip: false,
  isReadOnly: false,
  tooltipPosition: 'top',
  onClick: () => undefined,
  component: 'div'
});
//# sourceMappingURL=Chip.js.map