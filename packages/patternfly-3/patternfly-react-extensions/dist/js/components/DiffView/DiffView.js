'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDiffView = require('react-diff-view');

var _unidiff = require('unidiff');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getDiff = function getDiff(oldText, newText) {
  var diffText = (0, _unidiff.formatLines)((0, _unidiff.diffLines)(oldText, newText));
  // these two lines are faked to mock git diff output
  var header = ['diff --git a/a b/b', 'index 0000000..1111111 100644'];
  return header.join('\n') + '\n' + diffText;
};

var DiffView = function DiffView(_ref) {
  var oldText = _ref.oldText,
      newText = _ref.newText,
      className = _ref.className,
      viewType = _ref.viewType,
      patch = _ref.patch,
      markEditsByWord = _ref.markEditsByWord,
      emptyState = _ref.emptyState,
      markThreshold = _ref.markThreshold,
      markLongDistanceDiff = _ref.markLongDistanceDiff,
      props = _objectWithoutProperties(_ref, ['oldText', 'newText', 'className', 'viewType', 'patch', 'markEditsByWord', 'emptyState', 'markThreshold', 'markLongDistanceDiff']);

  var markEditProps = { markThreshold: markThreshold, markLongDistanceDiff: markLongDistanceDiff };
  var markEdits = markEditsByWord ? (0, _reactDiffView.markWordEdits)(markEditProps) : (0, _reactDiffView.markCharacterEdits)(markEditProps);
  var classes = (0, _classnames2.default)('diff-pf', className);

  // Old, New Text
  if (!patch) {
    var gitDiff = getDiff(oldText, newText);
    var _files = (0, _reactDiffView.parseDiff)(gitDiff);
    var hunk = _files[0].hunks;

    if (hunk.length === 0) {
      return emptyState;
    }
    return hunk && _react2.default.createElement(_reactDiffView.Diff, _extends({ className: classes, hunks: hunk, markEdits: markEdits, viewType: viewType }, props));
  }

  // Patch
  var files = (0, _reactDiffView.parseDiff)(patch);
  // eslint-disable-next-line react/prop-types
  var renderFile = function renderFile(_ref2) {
    var oldRevision = _ref2.oldRevision,
        newRevision = _ref2.newRevision,
        type = _ref2.type,
        hunks = _ref2.hunks;
    return _react2.default.createElement(_reactDiffView.Diff, _extends({
      className: classes,
      key: oldRevision + '-' + newRevision,
      viewType: viewType,
      diffType: type,
      hunks: hunks,
      markEdits: markEdits
    }, props));
  };

  if (patch === '') {
    return emptyState;
  }
  return _react2.default.createElement(
    'div',
    null,
    files.map(renderFile)
  );
};

DiffView.propTypes = {
  /** className */
  className: _propTypes2.default.string,
  /** oldText to compare */
  oldText: _propTypes2.default.string,
  /** newText to compare */
  newText: _propTypes2.default.string,
  /** viewType of the DiffView (Unified, Split) */
  viewType: _propTypes2.default.string.isRequired,
  /** git diff output */
  patch: _propTypes2.default.string,
  /** mark Diff by Words instead of Characters */
  markEditsByWord: _propTypes2.default.bool,
  /** emptyState node when there is no diff */
  emptyState: _propTypes2.default.node.isRequired,
  /** The maximum string distance when this function should try to mark edits */
  markThreshold: _propTypes2.default.number,
  /**  If true, two strings with distance greater than threshold will create an edit containing the whole string */
  markLongDistanceDiff: _propTypes2.default.bool
};

DiffView.defaultProps = {
  oldText: null,
  newText: null,
  patch: null,
  markEditsByWord: false,
  markThreshold: 30,
  markLongDistanceDiff: true,
  className: ''
};

exports.default = DiffView;