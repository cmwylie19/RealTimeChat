(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "path", "fs", "css", "fs-extra", "relative", "../utils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("path"), require("fs"), require("css"), require("fs-extra"), require("relative"), require("../utils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.path, global.fs, global.css, global.fsExtra, global.relative, global.utils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _path, _fs, _css, _fsExtra, _relative, _utils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.styleSheetToken = exports.packageName = undefined;
  exports.cssToJS = cssToJS;
  exports.cssToJSNew = cssToJSNew;
  exports.getFullCSS = getFullCSS;
  exports.getCSS = getCSS;
  exports.minifyCSS = minifyCSS;
  exports.writeCSSFile = writeCSSFile;
  exports.writeCSSJSFile = writeCSSJSFile;
  exports.getRelativeImportPath = getRelativeImportPath;
  exports.getCSSOutputPath = getCSSOutputPath;

  var _path2 = _interopRequireDefault(_path);

  var _css2 = _interopRequireDefault(_css);

  var _relative2 = _interopRequireDefault(_relative);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const packageName = exports.packageName = '@patternfly/react-styles';
  const styleSheetToken = exports.styleSheetToken = 'StyleSheet';

  function cssToJS(cssString, cssOutputPath = '', useModules = false) {
    let cssRequire = '';
    let cssImport = '';

    if (cssOutputPath) {
      cssRequire = `require('${cssOutputPath}');`;
      cssImport = `import '${cssOutputPath}';`;
    }

    if (useModules) {
      return `import { ${styleSheetToken} } from '${packageName}';
${cssImport}

export default ${styleSheetToken}.parse(\`${cssString}\`);
`;
    }

    return `const { ${styleSheetToken} } = require('${packageName}');
${cssRequire}

module.exports = ${styleSheetToken}.parse(\`${cssString}\`);
`;
  }

  function cssToJSNew(cssString, cssOutputPath = '', useModules = false) {
    let cssRequire = '';
    let cssImport = '';

    if (cssOutputPath) {
      cssRequire = `require('${cssOutputPath}');`;
      cssImport = `import '${cssOutputPath}';`;
    }

    const cssClasses = (0, _utils.getCSSClasses)(cssString);
    const distinctValues = [...new Set(cssClasses)];
    const classDeclaration = [];
    const modifiersDeclaration = [];
    distinctValues.forEach(className => {
      const key = (0, _utils.formatClassName)(className);
      const cleanClass = className.replace('.', '').trim();

      if ((0, _utils.isModifier)(className)) {
        modifiersDeclaration.push(`'${key}': '${cleanClass}'`);
      } else {
        classDeclaration.push(`${key}: '${cleanClass}'`);
      }
    });
    const classSection = classDeclaration.length > 0 ? `${classDeclaration.join(',\n  ')},` : '';

    if (useModules) {
      return `${cssImport}

export default {
  ${classSection}
  modifiers: {
    ${modifiersDeclaration.join(',\n    ')}
  }
}
`;
    }

    return `${cssRequire}

module.exports = {
  ${classSection}
  modifiers: {
    ${modifiersDeclaration.join(',\n    ')}
  }
}

`;
  }

  function getFullCSS(pathToCSSFile) {
    const rawCss = (0, _fs.readFileSync)(pathToCSSFile, 'utf8').replace('@charset "UTF-8";', '');
    return rawCss;
  }

  function getCSS(pathToCSSFile) {
    const rawCss = (0, _fs.readFileSync)(pathToCSSFile, 'utf8').replace('@charset "UTF-8";', '');
    return minifyCSS(rawCss);
  }

  function minifyCSS(cssString) {
    return _css2.default.stringify(_css2.default.parse(cssString.replace('@charset "UTF-8";', '')), {
      compress: true
    });
  }

  function writeCSSFile(destinationPath, contents) {
    (0, _fsExtra.ensureDir)(_path2.default.dirname(destinationPath)).then(() => {
      const replacementString = contents.replace(/..\/..\/assets/g, '../../../../../styles/assets');
      (0, _fsExtra.outputFileSync)(destinationPath, replacementString);
    });
  }

  function writeCSSJSFile(rootPath, originalPath, destinationPath, contents) {
    (0, _fsExtra.outputFileSync)(destinationPath, contents);
  }

  function getRelativeImportPath(from, to) {
    const parsedTo = _path2.default.parse(to);

    const newImportPath = _path2.default.normalize(_path2.default.join((0, _relative2.default)(from, parsedTo.dir), parsedTo.base));

    return newImportPath.startsWith('.') ? newImportPath : `./${newImportPath}`;
  }

  function getCSSOutputPath(outDir, rootPath, pathToCSSFile) {
    return _path2.default.join(_path2.default.resolve(rootPath, outDir), getFormattedCSSOutputPath(pathToCSSFile));
  }

  function getFormattedCSSOutputPath(pathToCSSFile) {
    const {
      dir,
      name
    } = _path2.default.parse(pathToCSSFile);

    let formattedDir = dir;
    const nodeText = 'node_modules';
    const nodeIndex = formattedDir.lastIndexOf(nodeText);

    if (nodeIndex !== -1) {
      formattedDir = formattedDir.substring(nodeIndex + nodeText.length);
    }

    return _path2.default.join(formattedDir, `${name}.css`);
  }
});
//# sourceMappingURL=util.js.map