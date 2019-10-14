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

  const isOUIAEnvironment = exports.isOUIAEnvironment = () => typeof window !== 'undefined' && window.localStorage.ouia && window.localStorage.ouia.toLowerCase() === 'true' || false;

  const generateOUIAId = exports.generateOUIAId = () => typeof window !== 'undefined' && window.localStorage['ouia-generate-id'] && window.localStorage['ouia-generate-id'].toLowerCase() === 'true' || false;

  let id = 0;

  const getUniqueId = exports.getUniqueId = () => id++;
});
//# sourceMappingURL=ouia.js.map