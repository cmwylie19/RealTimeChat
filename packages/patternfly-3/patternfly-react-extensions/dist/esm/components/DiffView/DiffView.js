var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { parseDiff, Diff, markCharacterEdits, markWordEdits } from 'react-diff-view';
import { formatLines, diffLines } from 'unidiff';

var getDiff = function getDiff(oldText, newText) {
  var diffText = formatLines(diffLines(oldText, newText));
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
  var markEdits = markEditsByWord ? markWordEdits(markEditProps) : markCharacterEdits(markEditProps);
  var classes = classNames('diff-pf', className);

  // Old, New Text
  if (!patch) {
    var gitDiff = getDiff(oldText, newText);
    var _files = parseDiff(gitDiff);
    var hunk = _files[0].hunks;

    if (hunk.length === 0) {
      return emptyState;
    }
    return hunk && React.createElement(Diff, _extends({ className: classes, hunks: hunk, markEdits: markEdits, viewType: viewType }, props));
  }

  // Patch
  var files = parseDiff(patch);
  // eslint-disable-next-line react/prop-types
  var renderFile = function renderFile(_ref2) {
    var oldRevision = _ref2.oldRevision,
        newRevision = _ref2.newRevision,
        type = _ref2.type,
        hunks = _ref2.hunks;
    return React.createElement(Diff, _extends({
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
  return React.createElement(
    'div',
    null,
    files.map(renderFile)
  );
};

DiffView.propTypes = {
  /** className */
  className: PropTypes.string,
  /** oldText to compare */
  oldText: PropTypes.string,
  /** newText to compare */
  newText: PropTypes.string,
  /** viewType of the DiffView (Unified, Split) */
  viewType: PropTypes.string.isRequired,
  /** git diff output */
  patch: PropTypes.string,
  /** mark Diff by Words instead of Characters */
  markEditsByWord: PropTypes.bool,
  /** emptyState node when there is no diff */
  emptyState: PropTypes.node.isRequired,
  /** The maximum string distance when this function should try to mark edits */
  markThreshold: PropTypes.number,
  /**  If true, two strings with distance greater than threshold will create an edit containing the whole string */
  markLongDistanceDiff: PropTypes.bool
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

export default DiffView;