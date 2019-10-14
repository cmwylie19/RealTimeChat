import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css } from '@patternfly/react-styles';
import { DataToolbarExpandableContent } from './DataToolbarExpandableContent';
import { DataToolbarContext } from './DataToolbarUtils';
export class DataToolbar extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "expandableContentRef", React.createRef());

    _defineProperty(this, "toggleIsExpanded", () => {
      this.setState(prevState => ({
        componentManagedIsExpanded: !prevState.componentManagedIsExpanded
      }));
    });

    _defineProperty(this, "closeExpandableContent", () => {
      this.setState(() => ({
        componentManagedIsExpanded: false
      }));
    });

    this.state = {
      isConsumerManagedToggleGroup: props.isExpanded || !!props.toggleIsExpanded,
      componentManagedIsExpanded: false
    };
  }

  componentDidMount() {
    const {
      isConsumerManagedToggleGroup
    } = this.state;

    if (!isConsumerManagedToggleGroup) {
      window.addEventListener('resize', this.closeExpandableContent);
    }
  }

  componentWillUnmount() {
    const {
      isConsumerManagedToggleGroup
    } = this.state;

    if (isConsumerManagedToggleGroup) {
      window.removeEventListener('resize', this.closeExpandableContent);
    }
  }

  render() {
    const _this$props = this.props,
          {
      className,
      children,
      isExpanded,
      toggleIsExpanded,
      id
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["className", "children", "isExpanded", "toggleIsExpanded", "id"]);

    const {
      isConsumerManagedToggleGroup,
      componentManagedIsExpanded
    } = this.state;
    const expandableContentId = `${id}-expandable-content`;
    return React.createElement("div", _extends({
      className: css(styles.dataToolbar, className),
      id: id
    }, props), React.createElement(DataToolbarContext.Provider, {
      value: {
        isExpanded: isConsumerManagedToggleGroup ? isExpanded : componentManagedIsExpanded,
        toggleIsExpanded: isConsumerManagedToggleGroup ? toggleIsExpanded : this.toggleIsExpanded,
        expandableContentRef: this.expandableContentRef,
        expandableContentId
      }
    }, children), React.createElement(DataToolbarExpandableContent, {
      id: expandableContentId,
      isExpanded: isConsumerManagedToggleGroup ? isExpanded : componentManagedIsExpanded,
      expandableContentRef: this.expandableContentRef
    }));
  }

}

_defineProperty(DataToolbar, "propTypes", {
  className: _pt.string,
  children: _pt.node,
  isExpanded: _pt.bool,
  toggleIsExpanded: _pt.func,
  id: _pt.string.isRequired
});

_defineProperty(DataToolbar, "defaultProps", {
  isExpanded: false
});
//# sourceMappingURL=DataToolbar.js.map