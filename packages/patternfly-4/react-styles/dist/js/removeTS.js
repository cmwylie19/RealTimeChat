"use strict";

/* eslint-disable global-require,import/no-dynamic-require */
var glob = require('glob');

var fs = require('fs');

glob.sync('css/**/*.ts', {
  ignore: ['**/*.d.ts']
}).forEach(function (file) {
  return fs.unlinkSync(file);
});
//# sourceMappingURL=removeTS.js.map