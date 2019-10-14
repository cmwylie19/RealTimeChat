"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createItemProps = exports.createItemProps = function createItemProps(item, selectedItem, className, onItemClick) {
  var key = item.id + "-" + item.name;
  var itemProps = {
    key: key,
    id: key,
    className: className,
    active: selectedItem.id === item.id
  };

  if (item.disabled) {
    return _extends({}, itemProps, { disabled: true });
  }
  return _extends({}, itemProps, { onClick: function onClick(e) {
      return onItemClick({ e: e, id: item.id, name: item.name });
    } });
};