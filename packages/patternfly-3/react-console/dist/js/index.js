'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SerialConsole = require('./SerialConsole');

Object.keys(_SerialConsole).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SerialConsole[key];
    }
  });
});

var _SpiceConsole = require('./SpiceConsole');

Object.keys(_SpiceConsole).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SpiceConsole[key];
    }
  });
});

var _VncConsole = require('./VncConsole');

Object.keys(_VncConsole).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _VncConsole[key];
    }
  });
});

var _AccessConsoles = require('./AccessConsoles');

Object.keys(_AccessConsoles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AccessConsoles[key];
    }
  });
});

var _DesktopViewer = require('./DesktopViewer');

Object.keys(_DesktopViewer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DesktopViewer[key];
    }
  });
});