import React from 'react';

/** Implementation of the debounce function */
export var debounce = function debounce(func, wait) {
  var timeout = void 0;
  function innerFunc() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return func.apply(context, args);
    }, wait);
  }
  return innerFunc;
};

export var child = function child(children, index) {
  var childrenArray = React.Children.toArray(children);
  return childrenArray && childrenArray.length > index && childrenArray[index] || null;
};