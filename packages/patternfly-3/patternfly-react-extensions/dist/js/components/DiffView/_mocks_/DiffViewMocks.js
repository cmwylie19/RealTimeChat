'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emptyState = exports.patchMock = exports.diffMock = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var diffMock = exports.diffMock = {
  oldText: 'hello friend',
  newText: 'hello there friend',
  viewType: 'split',
  emptyState: _react2.default.createElement(
    'div',
    null,
    'empty'
  )
};

var patchMock = exports.patchMock = {
  viewType: 'unified',
  patch: '---',
  emptyState: _react2.default.createElement(
    'div',
    null,
    'empty'
  )
};

var emptyState = exports.emptyState = {
  oldText: 'hello friend',
  newText: 'hello friend',
  viewType: 'split',
  emptyState: _react2.default.createElement(
    'div',
    null,
    'empty'
  )
};