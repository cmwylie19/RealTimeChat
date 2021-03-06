(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../createIcon"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../createIcon"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.createIcon);
    global.undefined = mod.exports;
  }
})(this, function (exports, _createIcon) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ProjectIconConfig = undefined;

  var _createIcon2 = _interopRequireDefault(_createIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /* This file is generated by createIcons.js any changes will be lost. */
  const ProjectIconConfig = exports.ProjectIconConfig = {
    name: 'ProjectIcon',
    height: 1024,
    width: 1024,
    svgPath: 'M367.982-71.022l-2.267 217.307c-47.47 43.447-72.411 89.673-72.411 181.175v0 0c-0.805 110.665 38.107 257.682 183.223 257.682h71.461c146.651 0.219 182.199-146.286 183.15-257.17v0c0-91.721-20.846-136.85-70.656-182.418v0l-2.267-216.137zM658.286 768c0-80.823-65.536-146.359-146.359-146.359s-146.359 65.536-146.359 146.359c0 80.823 65.536 146.359 146.359 146.359s146.359-65.536 146.359-146.359zM292.571 695.15c0-60.709-49.225-109.861-109.861-109.861s-109.861 49.225-109.861 109.861c0 60.709 49.225 109.861 109.861 109.861s109.861-49.225 109.861-109.861zM292.864-0.293l0.439 146.871c0 0-74.825 41.326-75.922 183.223v0 0 0 0c-1.024 79.36 14.19 151.040 75.776 218.917h-89.673c-203.483-0.146-199.461-114.395-200.997-193.024 1.317-65.902-0.805-136.558-0.805-136.558l1.682-219.136zM951.223 695.15c0-60.709-49.225-109.861-109.861-109.861s-109.861 49.225-109.861 109.861c0 60.709 49.225 109.861 109.861 109.861s109.861-49.225 109.861-109.861zM733.403-0.293l-0.439 146.871c0 0 71.826 63.781 73.582 183.223v0 0 0 0c1.024 79.36-11.922 151.040-73.509 218.917v0h87.406c203.483-0.146 201.728-114.395 203.337-193.024-1.317-65.902-0.439-136.558-0.439-136.558l0.658-219.136z',
    yOffset: '64',
    xOffset: '',
    transform: 'rotate(180 0 512) scale(-1 1)'
  };
  exports.default = (0, _createIcon2.default)(ProjectIconConfig);
});
//# sourceMappingURL=project-icon.js.map