(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.actions = exports.rows = exports.columns = undefined;

  var React = _interopRequireWildcard(_react);

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};

    if (obj != null) {
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  /* eslint-disable no-console */
  const columns = exports.columns = [{
    title: 'Header cell'
  }, 'Branches', {
    title: 'Pull requests'
  }, 'Workspaces', {
    title: 'Last Commit'
  }];
  const rows = exports.rows = [{
    cells: ['one', 'two', 'three', 'four', 'five']
  }, {
    cells: ['one', 'two', 'three', 'four', 'five']
  }, {
    cells: ['one', 'two', 'three', 'four', 'five']
  }, {
    cells: ['one', 'two', 'three', 'four', 'five']
  }, {
    cells: ['one', 'two', 'three', 'four', 'five']
  }, {
    cells: ['one', 'two', 'three', 'four', 'five']
  }, {
    cells: ['one', 'two', 'three', 'four', 'five']
  }, {
    cells: ['one', 'two', 'three', 'four', 'five']
  }, {
    cells: ['one', 'two', 'three', 'four', 'five']
  }];
  const actions = exports.actions = [{
    title: 'Some action',
    onClick: ({
      event
    }, {
      rowId
    }) => // tslint:disable-next-line:no-console
    console.log('clicked on Some action, on row: ', rowId)
  }, {
    title: React.createElement("div", null, "Another action"),
    onClick: ({
      event
    }, {
      rowId
    }) => // tslint:disable-next-line:no-console
    console.log('clicked on Another action, on row: ', rowId)
  }, {
    isSeparator: true
  }, {
    title: 'Third action',
    onClick: ({
      event
    }, {
      rowId
    }) => // tslint:disable-next-line:no-console
    console.log('clicked on Third action, on row: ', rowId)
  }];
});
//# sourceMappingURL=data-sets.js.map