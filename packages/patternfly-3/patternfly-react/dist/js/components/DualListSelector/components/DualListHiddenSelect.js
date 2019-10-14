'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DualListHiddenSelect = function DualListHiddenSelect(_ref) {
  var items = _ref.items,
      props = _objectWithoutProperties(_ref, ['items']);

  var selectedValues = [];
  var options = _react2.default.createElement(
    _react2.default.Fragment,
    null,
    items ? items.map(function (_ref2, index) {
      var value = _ref2.value,
          children = _ref2.children,
          label = _ref2.label;

      if (children) {
        return children.map(function (_ref3, childIndex) {
          var childValue = _ref3.value,
              childLabel = _ref3.label;

          selectedValues.push(childValue);
          return _react2.default.createElement(
            'option',
            { key: index + '-' + childIndex, value: childValue },
            childLabel
          );
        });
      }
      selectedValues.push(value);
      return _react2.default.createElement(
        'option',
        { key: index, value: value },
        label
      );
    }) : _react2.default.createElement('option', null)
  );
  return (
    // Added 'onChange' after the browser threw a warning of using the value attribute without it.
    _react2.default.createElement(
      'select',
      _extends({}, props, { multiple: true, hidden: true, value: selectedValues, onChange: _helpers.noop }),
      options
    )
  );
};

DualListHiddenSelect.propTypes = {
  /** An array of items */
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
    children: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      label: _propTypes2.default.string,
      value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
    }))
  }))
};

DualListHiddenSelect.defaultProps = {
  items: []
};

exports.default = DualListHiddenSelect;