var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import { DualList } from './index';
import { adjustProps } from './helpers';
import { noop } from '../../common/helpers';

var DualListControlled = function (_React$Component) {
  _inherits(DualListControlled, _React$Component);

  function DualListControlled(props) {
    _classCallCheck(this, DualListControlled);

    var _this = _possibleConstructorReturn(this, (DualListControlled.__proto__ || Object.getPrototypeOf(DualListControlled)).call(this, props));

    _this.onItemChange = function (_ref) {
      var side = _ref.side,
          items = _ref.items,
          selectCount = _ref.selectCount,
          isMainChecked = _ref.isMainChecked;
      var onItemChange = _this.props.onItemChange;

      _this.setState(_defineProperty({}, side, _extends({}, _this.state[side], {
        items: items,
        selectCount: selectCount,
        isMainChecked: isMainChecked
      })), function () {
        return onItemChange(_this.state);
      });
    };

    _this.onMainCheckboxChange = function (_ref2) {
      var side = _ref2.side,
          checked = _ref2.checked,
          items = _ref2.items,
          selectCount = _ref2.selectCount;
      var onMainCheckboxChange = _this.props.onMainCheckboxChange;

      _this.setState(_defineProperty({}, side, _extends({}, _this.state[side], {
        items: items,
        selectCount: selectCount,
        isMainChecked: checked
      })), function () {
        return onMainCheckboxChange(_this.state);
      });
    };

    _this.onSortClick = function (_ref3) {
      var side = _ref3.side,
          items = _ref3.items,
          isSortAsc = _ref3.isSortAsc;
      var onSortClick = _this.props.onSortClick;

      _this.setState(_defineProperty({}, side, _extends({}, _this.state[side], {
        items: items,
        isSortAsc: isSortAsc
      })), function () {
        return onSortClick(_this.state);
      });
    };

    _this.onFilterChange = function (_ref4) {
      var side = _ref4.side,
          filterTerm = _ref4.filterTerm,
          items = _ref4.items,
          isMainChecked = _ref4.isMainChecked;
      var onFilterChange = _this.props.onFilterChange;

      _this.setState(_defineProperty({}, side, _extends({}, _this.state[side], {
        filterTerm: filterTerm,
        items: items,
        isMainChecked: isMainChecked
      })), function () {
        return onFilterChange(_this.state);
      });
    };

    _this.onChange = function (_ref5) {
      var left = _ref5.left,
          right = _ref5.right;
      var onChange = _this.props.onChange;

      _this.setState({ left: left, right: right }, function () {
        return onChange(_this.state);
      });
    };

    _this.state = _extends({
      prevProps: props
    }, adjustProps(props));
    return _this;
  }

  _createClass(DualListControlled, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var onComponentInit = this.props.onComponentInit;

      onComponentInit(this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          left = _state.left,
          right = _state.right,
          allowHiddenInputs = _state.allowHiddenInputs;

      return React.createElement(DualList, {
        left: _extends({}, left),
        right: _extends({}, right),
        onItemChange: this.onItemChange,
        onSortClick: this.onSortClick,
        onFilterChange: this.onFilterChange,
        onMainCheckboxChange: this.onMainCheckboxChange,
        onChange: this.onChange,
        allowHiddenInputs: allowHiddenInputs
      });
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return !isEqual(nextProps, prevState.prevProps) ? _extends({
        prevProps: nextProps
      }, adjustProps(nextProps)) : null;
    }
  }]);

  return DualListControlled;
}(React.Component);

DualListControlled.propTypes = {
  /**
   * Function that runs after items have been moved between the lists.
   * Receives the updated state as a callback.
   */
  onChange: PropTypes.func,
  /**
   * Function that runs after an item was clicked.
   * Receives the updated state as a callback.
   */
  onItemChange: PropTypes.func,
  /**
   * Function that runs after the main checkbox was clicked.
   * Receives the updated state as a callback.
   */
  onMainCheckboxChange: PropTypes.func,
  /**
   * Function that runs after the sort icon was clicked.
   * Receives the updated state as a callback.
   */
  onSortClick: PropTypes.func,
  /**
   * Function that runs after the filter input has changed.
   * Receives the updated state as a callback.
   */
  onFilterChange: PropTypes.func,
  /**
   * Function that runs after the component had mounted.
   * Receives the updated state as a callback.
   */
  onComponentInit: PropTypes.func
};

DualListControlled.defaultProps = {
  onChange: noop,
  onItemChange: noop,
  onMainCheckboxChange: noop,
  onSortClick: noop,
  onFilterChange: noop,
  onComponentInit: noop
};

export default DualListControlled;