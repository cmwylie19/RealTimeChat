"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRowExpanded = void 0;

var hasCompoundParentsExpanded = function hasCompoundParentsExpanded(parentId, compoundParent, rows) {
  // max rows.length parents
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = rows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;

      if (rows[parentId].hasOwnProperty('parent')) {
        parentId = rows[parentId].parent;
      } else {
        return rows[parentId].cells[compoundParent].props.isOpen;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return false;
};

var hasParentsExpanded = function hasParentsExpanded(parentId, rows) {
  // max rows.length parents
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = rows[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var i = _step2.value;

      if (rows[parentId].hasOwnProperty('parent')) {
        parentId = rows[parentId].parent;
      } else {
        return rows[parentId].isOpen;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return false;
};

var isRowExpanded = function isRowExpanded(row, rows) {
  if (row.parent !== undefined) {
    if (row.hasOwnProperty('compoundParent')) {
      return hasCompoundParentsExpanded(row.parent, row.compoundParent, rows);
    }

    return hasParentsExpanded(row.parent, rows) && rows[row.parent].isOpen;
  }

  return undefined;
};

exports.isRowExpanded = isRowExpanded;
//# sourceMappingURL=utils.js.map