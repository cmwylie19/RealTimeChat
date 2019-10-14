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
  const DEFAULT_MAX_ELEMENT_SIZE = 1500000;
  const CHROME_MAX_ELEMENT_SIZE = 1.67771e7;

  const isBrowser = () => typeof window !== 'undefined';

  const isChrome = () => !!window.chrome && !!window.chrome.webstore;

  const getMaxElementSize = exports.getMaxElementSize = () => {
    if (isBrowser()) {
      if (isChrome()) {
        return CHROME_MAX_ELEMENT_SIZE;
      }
    }

    return DEFAULT_MAX_ELEMENT_SIZE;
  };
});
//# sourceMappingURL=maxElementSize.js.map