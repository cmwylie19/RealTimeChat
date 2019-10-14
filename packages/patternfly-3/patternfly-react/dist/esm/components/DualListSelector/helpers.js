var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

export var filterByHiding = function filterByHiding(list, value) {
  var filterValue = value.toLowerCase();
  return list.map(function (item) {
    var itemLabel = item.label.toLowerCase();
    var included = itemLabel.includes(filterValue);
    // if the item label matches the filter value.
    item.hiddenByFilter = !included;
    // if it is a parent and its label doesn't match the filter value.
    if (itemHasChildren(item)) {
      if (isItemHiddenByFilter(item)) {
        var childrenIncludedAmount = 0;
        item.children.forEach(function (childItem) {
          if (childItem.hidden) {
            return;
          }
          var childLabel = childItem.label.toLowerCase();
          var childIncluded = childLabel.includes(filterValue);
          childItem.hiddenByFilter = !childIncluded;
          childrenIncludedAmount += childIncluded ? 1 : 0;
        });
        item.hiddenByFilter = childrenIncludedAmount === 0;
      } else {
        item.children = makeAllHiddenFilteredItemsVisible(item.children);
      }
    }
    return item;
  });
};

// We don't want to touch default hidden items that the consumer set to hidden.
export var makeAllHiddenFilteredItemsVisible = function makeAllHiddenFilteredItemsVisible(list) {
  return list.map(function (item) {
    item.hiddenByFilter = false;
    if (itemHasChildren(item)) {
      item.children.forEach(function (childItem) {
        childItem.hiddenByFilter = false;
      });
    }
    return item;
  });
};

export var sortItems = function sortItems(items) {
  var sortFactor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'label';
  return items.sort(function (a, b) {
    return a[sortFactor].toLowerCase() > b[sortFactor].toLowerCase() ? 1 : -1;
  });
};

export var shouldItemBeChecked = function shouldItemBeChecked(item, isMainChecked, resetAllSelected) {
  var checked = item.checked || false;
  var isItemEditable = !item.disabled || !item.hidden || !item.isItemHiddenByFilter;
  if (!isItemEditable) {
    return checked;
  }
  if (resetAllSelected) {
    checked = false;
  } else if (isMainChecked) {
    checked = isMainChecked;
  }
  return checked;
};

export var arrangeArray = function arrangeArray(_ref) {
  var items = _ref.items,
      sortBy = _ref.sortBy,
      _ref$isSortAsc = _ref.isSortAsc,
      isSortAsc = _ref$isSortAsc === undefined ? true : _ref$isSortAsc,
      _ref$isMainChecked = _ref.isMainChecked,
      isMainChecked = _ref$isMainChecked === undefined ? false : _ref$isMainChecked,
      _ref$resetAllSelected = _ref.resetAllSelected,
      resetAllSelected = _ref$resetAllSelected === undefined ? false : _ref$resetAllSelected;

  // sort the items
  var itemsCopy = sortItems(items, sortBy).map(function (item, index) {
    // add position to the item and update if the main checkbox is initialy checked.
    var modifiedItem = _extends({}, item, {
      position: index,
      checked: shouldItemBeChecked(item, isMainChecked, resetAllSelected)
    });
    if (itemHasChildren(item)) {
      // sort the children array and add a position, parentPosition and update check state.
      modifiedItem.children = sortItems(item.children, sortBy).map(function (child, childIndex) {
        return _extends({}, child, {
          position: childIndex,
          parentPosition: index,
          checked: shouldItemBeChecked(child, isMainChecked, resetAllSelected)
        });
      });
    }
    return modifiedItem;
  });

  itemsCopy = isSortAsc ? itemsCopy : reverseAllItemsOrder(itemsCopy);

  return itemsCopy;
};

export var getDefaultProps = function getDefaultProps() {
  return {
    items: [],
    options: null,
    isSortAsc: true,
    sortBy: 'label',
    filterTerm: '',
    isMainChecked: false
  };
};

export var getCheckedAmount = function getCheckedAmount(items) {
  var checkedAmount = 0;
  items.forEach(function (item) {
    if (isItemSelected(item)) {
      checkedAmount += 1;
      if (itemHasChildren(item)) {
        checkedAmount += item.children.length;
      }
    } else if (itemHasChildren(item)) {
      item.children.forEach(function (child) {
        if (isItemSelected(child)) {
          checkedAmount += 1;
        }
      });
    }
  });
  return checkedAmount;
};
export var getCounterMessage = function getCounterMessage(selected, total) {
  return selected + ' of ' + total + ' items selected';
};

var adjustProps = function adjustProps(_ref2) {
  var left = _ref2.left,
      right = _ref2.right,
      props = _objectWithoutProperties(_ref2, ['left', 'right']);

  var defaultProps = getDefaultProps();
  var leftItems = arrangeArray(_extends({}, left));
  var rightItems = arrangeArray(_extends({}, right));
  return _extends({}, props, {
    left: _extends({}, defaultProps, left, {
      items: leftItems,
      selectCount: getCheckedAmount(leftItems)
    }),
    right: _extends({}, defaultProps, right, {
      items: rightItems,
      selectCount: getCheckedAmount(rightItems)
    })
  });
};

export { adjustProps };
export var isAllChildrenChecked = function isAllChildrenChecked(_ref3) {
  var children = _ref3.children;
  return children && children.filter(function (_ref4) {
    var checked = _ref4.checked;
    return checked;
  }).length === children.length;
};

export var getItemsLength = function getItemsLength(items) {
  var length = items.length;

  var hiddenItemsAmount = 0;
  if (length === 0) {
    return 0;
  }
  items.forEach(function (_ref5) {
    var hidden = _ref5.hidden,
        children = _ref5.children;

    if (hidden) {
      hiddenItemsAmount += 1;
    }
    if (children) {
      length -= 1;
      children.forEach(function (child) {
        if (!child.hidden) {
          length += 1;
        }
      });
    }
  });
  return length - hiddenItemsAmount;
};

export var reverseAllItemsOrder = function reverseAllItemsOrder(items) {
  var reversedItems = [].concat(_toConsumableArray(items)).reverse();
  return reversedItems.map(function (item) {
    return item.children ? _extends({}, item, { children: item.children.reverse() }) : item;
  });
};

export var getItem = function getItem(isSortAsc, items, position, parentPosition) {
  // if item is a child.
  if (parentPosition !== undefined) {
    var parent = items[getItemPosition(items, parentPosition, isSortAsc)];
    return parent.children[getItemPosition(parent.children, position, isSortAsc)];
  }
  return items[getItemPosition(items, position, isSortAsc)];
};

export var getUpdatedSelectCount = function getUpdatedSelectCount(selectCount, checked) {
  var amount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return selectCount + (checked ? amount : -1 * amount);
};

export var itemHasParent = function itemHasParent(item) {
  return item.parentPosition !== undefined;
};

export var itemHasChildren = function itemHasChildren(item) {
  return item.children !== undefined;
};

export var getItemPosition = function getItemPosition(array, position, isSortAsc) {
  return isSortAsc ? position : array.length - position - 1;
};

export var toggleAllItems = function toggleAllItems(list, checked) {
  var toggleCount = 0;
  list.forEach(function (item) {
    if (item.disabled || item.hidden) {
      return;
    }
    if (item.checked !== checked) {
      item.checked = checked;
      toggleCount += 1;
    }
    if (itemHasChildren(item)) {
      var childrenToggleCount = 0;
      item.children.forEach(function (childItem) {
        if (childItem.disabled || childItem.hidden) {
          return;
        }
        if (childItem.checked !== checked) {
          childItem.checked = checked;
          childrenToggleCount += 1;
        }
      });
      if (childrenToggleCount > 0) {
        toggleCount += childrenToggleCount - 1;
      }
    }
  });
  return toggleCount;
};

export var isAllItemsChecked = function isAllItemsChecked(items, selectCount) {
  return selectCount > 0 && selectCount === getItemsLength(items);
};

export var isItemExistOnList = function isItemExistOnList(list, itemLabel) {
  var parentIndex = null;
  // find if the parent already exist on the list.
  list.forEach(function (listItem, index) {
    if (listItem.label === itemLabel) {
      parentIndex = index;
    }
  });
  return { isParentExist: parentIndex !== null, parentIndex: parentIndex };
};

export var getFilterredItems = function getFilterredItems(list) {
  var filteredItems = [];
  list.forEach(function (item) {
    if (!isItemHiddenByFilter(item)) {
      filteredItems.push(item);
    } else if (itemHasChildren(item)) {
      var filteredChildren = [];
      item.children.forEach(function (childItem) {
        if (!isItemHiddenByFilter(childItem)) {
          filteredChildren.push(childItem);
        }
      });
      if (filteredChildren.length > 0) {
        filteredItems.push(_extends({}, item, { children: filteredChildren }));
      }
    }
  });

  return filteredItems;
};

export var getFilterredItemsLength = function getFilterredItemsLength(list) {
  return getItemsLength(getFilterredItems(list));
};

export var getSelectedFilterredItemsLength = function getSelectedFilterredItemsLength(list) {
  var filteredItems = getFilterredItems(list);
  var selectedAmount = 0;
  filteredItems.forEach(function (item) {
    if (isItemSelected(item)) {
      selectedAmount += 1;
      if (itemHasChildren(item)) {
        var selectedChildrenAmount = 0;
        item.children.forEach(function (childItem) {
          if (isItemSelected(childItem)) {
            selectedChildrenAmount += 1;
          }
        });
        if (selectedChildrenAmount) {
          selectedAmount += selectedChildrenAmount - 1;
        }
      }
    }
  });
  return selectedAmount;
};

export var isItemSelected = function isItemSelected(item) {
  return item.checked;
};

export var isItemHiddenByFilter = function isItemHiddenByFilter(item) {
  return item.hiddenByFilter;
};

export var isItemDisabled = function isItemDisabled(item) {
  return item.disabled;
};