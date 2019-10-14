import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { Dropdown, DropdownPosition, DropdownDirection, KebabToggle, DropdownItem, DropdownSeparator } from '@patternfly/react-core';
export class ActionsColumn extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onToggle", isOpen => {
      this.setState({
        isOpen
      });
    });

    _defineProperty(this, "onSelect", (event, onClick) => {
      const {
        rowData,
        extraData
      } = this.props;
      event.preventDefault(); // tslint:disable-next-line:no-unused-expression

      onClick && onClick(event, extraData && extraData.rowIndex, rowData, extraData);
      this.setState({
        isOpen: !this.state.isOpen
      });
    });

    this.state = {
      isOpen: false
    };
  }

  render() {
    const {
      isOpen
    } = this.state;
    const {
      items,
      children,
      dropdownPosition,
      dropdownDirection,
      isDisabled
    } = this.props;
    return React.createElement(React.Fragment, null, React.createElement(Dropdown, {
      toggle: React.createElement(KebabToggle, {
        isDisabled: isDisabled,
        onToggle: this.onToggle
      }),
      position: dropdownPosition,
      direction: dropdownDirection,
      isOpen: isOpen,
      dropdownItems: items.map((_ref, key) => {
        let {
          title,
          itemKey,
          onClick,
          isSeparator
        } = _ref,
            props = _objectWithoutProperties(_ref, ["title", "itemKey", "onClick", "isSeparator"]);

        return isSeparator ? React.createElement(DropdownSeparator, _extends({}, props, {
          key: itemKey || key,
          "data-key": itemKey || key
        })) : React.createElement(DropdownItem, _extends({
          onClick: event => this.onSelect(event, onClick)
        }, props, {
          key: itemKey || key,
          "data-key": itemKey || key
        }), title);
      }),
      isPlain: true
    }), children);
  }

}

_defineProperty(ActionsColumn, "propTypes", {
  children: _pt.node,
  items: _pt.arrayOf(_pt.any),
  isDisabled: _pt.bool,
  dropdownPosition: _pt.any,
  dropdownDirection: _pt.any,
  rowData: _pt.any,
  extraData: _pt.any
});

_defineProperty(ActionsColumn, "defaultProps", {
  children: null,
  items: [],
  dropdownPosition: DropdownPosition.right,
  dropdownDirection: DropdownDirection.down,
  rowData: {},
  extraData: {}
});
//# sourceMappingURL=ActionsColumn.js.map