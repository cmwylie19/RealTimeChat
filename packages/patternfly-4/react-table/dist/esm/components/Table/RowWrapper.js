import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { debounce } from '@patternfly/react-core';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { css } from '@patternfly/react-styles'; // legacy export now, RowWrapperRow can simply be typed as IRow in the future

export class RowWrapper extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleScroll", event => {
      if (!this._unmounted) {
        this.props.onScroll(event);
      }
    });

    _defineProperty(this, "handleResize", event => {
      if (!this._unmounted) {
        this.props.onResize(event);
      }
    });

    if (props.onScroll) {
      this.handleScroll = debounce(this.handleScroll, 100);
    }

    if (props.onResize) {
      this.handleResize = debounce(this.handleResize, 100);
    }
  }

  componentDidMount() {
    this._unmounted = false;

    if (this.props.onScroll) {
      window.addEventListener('scroll', this.handleScroll);
    }

    if (this.props.onResize) {
      window.addEventListener('resize', this.handleResize);
    }
  }

  componentWillUnmount() {
    this._unmounted = true;

    if (this.props.onScroll) {
      window.removeEventListener('scroll', this.handleScroll);
    }

    if (this.props.onResize) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  render() {
    const _this$props = this.props,
          {
      trRef,
      className,
      onScroll,
      onResize,
      row: {
        isExpanded
      },
      rowProps
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["trRef", "className", "onScroll", "onResize", "row", "rowProps"]);

    return React.createElement("tr", _extends({}, props, {
      ref: trRef,
      className: css(className, isExpanded !== undefined && styles.tableExpandableRow, isExpanded && styles.modifiers.expanded),
      hidden: isExpanded !== undefined && !isExpanded
    }));
  }

}

_defineProperty(RowWrapper, "propTypes", {
  trRef: _pt.oneOfType([_pt.oneOfType([_pt.string, _pt.func, _pt.object]), _pt.any]),
  className: _pt.string,
  onScroll: _pt.func,
  onResize: _pt.func,
  row: _pt.shape({
    isOpen: _pt.any,
    isExpanded: _pt.any
  }),
  rowProps: _pt.any
});

_defineProperty(RowWrapper, "defaultProps", {
  className: '',
  row: {
    isOpen: undefined,
    isExpanded: undefined
  },
  rowProps: null
});
//# sourceMappingURL=RowWrapper.js.map