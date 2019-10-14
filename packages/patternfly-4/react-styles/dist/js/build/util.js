"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssToJS = cssToJS;
exports.cssToJSNew = cssToJSNew;
exports.getFullCSS = getFullCSS;
exports.getCSS = getCSS;
exports.minifyCSS = minifyCSS;
exports.writeCSSFile = writeCSSFile;
exports.writeCSSJSFile = writeCSSJSFile;
exports.getRelativeImportPath = getRelativeImportPath;
exports.getCSSOutputPath = getCSSOutputPath;
exports.styleSheetToken = exports.packageName = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = require("fs");

var _css = _interopRequireDefault(require("css"));

var _fsExtra = require("fs-extra");

var _relative = _interopRequireDefault(require("relative"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var packageName = '@patternfly/react-styles';
exports.packageName = packageName;
var styleSheetToken = 'StyleSheet';
exports.styleSheetToken = styleSheetToken;

function cssToJS(cssString) {
  var cssOutputPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var useModules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var cssRequire = '';
  var cssImport = '';

  if (cssOutputPath) {
    cssRequire = "require('".concat(cssOutputPath, "');");
    cssImport = "import '".concat(cssOutputPath, "';");
  }

  if (useModules) {
    return "import { ".concat(styleSheetToken, " } from '").concat(packageName, "';\n").concat(cssImport, "\n\nexport default ").concat(styleSheetToken, ".parse(`").concat(cssString, "`);\n");
  }

  return "const { ".concat(styleSheetToken, " } = require('").concat(packageName, "');\n").concat(cssRequire, "\n\nmodule.exports = ").concat(styleSheetToken, ".parse(`").concat(cssString, "`);\n");
}

function cssToJSNew(cssString) {
  var cssOutputPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var useModules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var cssRequire = '';
  var cssImport = '';

  if (cssOutputPath) {
    cssRequire = "require('".concat(cssOutputPath, "');");
    cssImport = "import '".concat(cssOutputPath, "';");
  }

  var cssClasses = (0, _utils.getCSSClasses)(cssString);

  var distinctValues = _toConsumableArray(new Set(cssClasses));

  var classDeclaration = [];
  var modifiersDeclaration = [];
  distinctValues.forEach(function (className) {
    var key = (0, _utils.formatClassName)(className);
    var cleanClass = className.replace('.', '').trim();

    if ((0, _utils.isModifier)(className)) {
      modifiersDeclaration.push("'".concat(key, "': '").concat(cleanClass, "'"));
    } else {
      classDeclaration.push("".concat(key, ": '").concat(cleanClass, "'"));
    }
  });
  var classSection = classDeclaration.length > 0 ? "".concat(classDeclaration.join(',\n  '), ",") : '';

  if (useModules) {
    return "".concat(cssImport, "\n\nexport default {\n  ").concat(classSection, "\n  modifiers: {\n    ").concat(modifiersDeclaration.join(',\n    '), "\n  }\n}\n");
  }

  return "".concat(cssRequire, "\n\nmodule.exports = {\n  ").concat(classSection, "\n  modifiers: {\n    ").concat(modifiersDeclaration.join(',\n    '), "\n  }\n}\n\n");
}

function getFullCSS(pathToCSSFile) {
  var rawCss = (0, _fs.readFileSync)(pathToCSSFile, 'utf8').replace('@charset "UTF-8";', '');
  return rawCss;
}

function getCSS(pathToCSSFile) {
  var rawCss = (0, _fs.readFileSync)(pathToCSSFile, 'utf8').replace('@charset "UTF-8";', '');
  return minifyCSS(rawCss);
}

function minifyCSS(cssString) {
  return _css["default"].stringify(_css["default"].parse(cssString.replace('@charset "UTF-8";', '')), {
    compress: true
  });
}

function writeCSSFile(destinationPath, contents) {
  (0, _fsExtra.ensureDir)(_path["default"].dirname(destinationPath)).then(function () {
    var replacementString = contents.replace(/..\/..\/assets/g, '../../../../../styles/assets');
    (0, _fsExtra.outputFileSync)(destinationPath, replacementString);
  });
}

function writeCSSJSFile(rootPath, originalPath, destinationPath, contents) {
  (0, _fsExtra.outputFileSync)(destinationPath, contents);
}

function getRelativeImportPath(from, to) {
  var parsedTo = _path["default"].parse(to);

  var newImportPath = _path["default"].normalize(_path["default"].join((0, _relative["default"])(from, parsedTo.dir), parsedTo.base));

  return newImportPath.startsWith('.') ? newImportPath : "./".concat(newImportPath);
}

function getCSSOutputPath(outDir, rootPath, pathToCSSFile) {
  return _path["default"].join(_path["default"].resolve(rootPath, outDir), getFormattedCSSOutputPath(pathToCSSFile));
}

function getFormattedCSSOutputPath(pathToCSSFile) {
  var _path$parse = _path["default"].parse(pathToCSSFile),
      dir = _path$parse.dir,
      name = _path$parse.name;

  var formattedDir = dir;
  var nodeText = 'node_modules';
  var nodeIndex = formattedDir.lastIndexOf(nodeText);

  if (nodeIndex !== -1) {
    formattedDir = formattedDir.substring(nodeIndex + nodeText.length);
  }

  return _path["default"].join(formattedDir, "".concat(name, ".css"));
}
//# sourceMappingURL=util.js.map