(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const requiredElements = ['INPUT', 'BUTTON'];
  let warningCompleted = false;

  const showIdWarnings = exports.showIdWarnings = (row, target) => {
    if ((row.isEditing || row.isTableEditing) && requiredElements.indexOf(target.tagName) >= 0 && !warningCompleted) {
      warningCompleted = true; // eslint-disable-next-line no-console

      console.warn(`${requiredElements.join(', ')} elements are required to have an id for editing to work properly.`);
    }
  };

  const combineFunctions = exports.combineFunctions = (...functions) => {
    const realFunctions = functions.filter(f => typeof f === 'function');

    if (realFunctions.length === 1) {
      return realFunctions[0];
    }

    if (realFunctions.length > 1) {
      return (...params) => {
        realFunctions.forEach(f => f(...params));
      };
    }

    return undefined;
  };

  const shallowLeftSideEquals = exports.shallowLeftSideEquals = (newObject, oldObject) => !Object.keys(newObject).find(key => newObject[key] !== oldObject[key]);

  const getBoundingClientRect = exports.getBoundingClientRect = element => {
    const {
      top,
      right,
      bottom,
      left,
      width,
      height,
      x,
      y
    } = element.getBoundingClientRect();
    return {
      top,
      right,
      bottom,
      left,
      width,
      height,
      x,
      y
    };
  };

  const getClientWindowDimensions = exports.getClientWindowDimensions = () => {
    const {
      clientWidth,
      clientHeight
    } = document.documentElement;
    return {
      width: clientWidth,
      height: clientHeight
    };
  };
});
//# sourceMappingURL=utils.js.map