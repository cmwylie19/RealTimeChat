'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadFile = downloadFile;
exports.generateDescriptorFile = generateDescriptorFile;

require('blob-polyfill');

var _fileSaver = require('file-saver');

var _constants = require('../common/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VNC_CONSOLE_TYPE = _constants2.default.VNC_CONSOLE_TYPE,
    SPICE_CONSOLE_TYPE = _constants2.default.SPICE_CONSOLE_TYPE,
    RDP_CONSOLE_TYPE = _constants2.default.RDP_CONSOLE_TYPE,
    DEFAULT_VV_MIMETYPE = _constants2.default.DEFAULT_VV_MIMETYPE,
    DEFAULT_RDP_MIMETYPE = _constants2.default.DEFAULT_RDP_MIMETYPE,
    DEFAULT_RDP_PORT = _constants2.default.DEFAULT_RDP_PORT;
function downloadFile(fileName, content, mimeType) {
  var blob = new Blob([content], { type: mimeType });
  (0, _fileSaver.saveAs)(blob, fileName);
}

function generateVVFile(_ref) {
  var _TYPES;

  var console = _ref.console,
      type = _ref.type;

  var TYPES = (_TYPES = {}, _defineProperty(_TYPES, VNC_CONSOLE_TYPE, 'vnc'), _defineProperty(_TYPES, SPICE_CONSOLE_TYPE, 'spice'), _TYPES);

  var content = '[virt-viewer]\n' + ('type=' + (TYPES[type] || type) + '\n') + ( // vnc or spice
  'host=' + console.address + '\n') + ('port=' + console.port + '\n') + 'delete-this-file=1\n' + 'fullscreen=0\n';

  return {
    content: content,
    mimeType: DEFAULT_VV_MIMETYPE
  };
}

function generateRDPFile(_ref2) {
  var console = _ref2.console;

  var port = typeof console.port !== 'undefined' && console.port !== null ? console.port : DEFAULT_RDP_PORT;
  var content = ['full address:s:' + console.address + ':' + port, '\nusername:s:Administrator', '\nscreen mode id:i:2', // set 2 for full screen
  '\nprompt for credentials:i:1', '\ndesktopwidth:i:0', '\ndesktopheight:i:0', '\nauthentication level:i:2', '\nredirectclipboard:i:1', '\nsession bpp:i:32', '\ncompression:i:1', '\nkeyboardhook:i:2', '\naudiocapturemode:i:0', '\nvideoplaybackmode:i:1', '\nconnection type:i:2', '\ndisplayconnectionbar:i:1', '\ndisable wallpaper:i:1', '\nallow font smoothing:i:1', '\nallow desktop composition:i:0', '\ndisable full window drag:i:1', '\ndisable menu anims:i:1', '\ndisable themes:i:0', '\ndisable cursor setting:i:0', '\nbitmapcachepersistenable:i:1', '\naudiomode:i:0', '\nredirectcomports:i:0', '\nredirectposdevices:i:0', '\nredirectdirectx:i:1', '\nautoreconnection enabled:i:1', '\nnegotiate security layer:i:1', '\nremoteapplicationmode:i:0', '\nalternate shell:s:', '\nshell working directory:s:', '\ngatewayhostname:s:', '\ngatewayusagemethod:i:4', '\ngatewaycredentialssource:i:4', '\ngatewayprofileusagemethod:i:0', '\npromptcredentialonce:i:1', '\nuse redirection server name:i:0', '\n'].join('');

  return {
    content: content,
    mimeType: DEFAULT_RDP_MIMETYPE
  };
}

function generateDescriptorFile(_ref3) {
  var console = _ref3.console,
      type = _ref3.type;

  return type === RDP_CONSOLE_TYPE ? generateRDPFile({ console: console }) : generateVVFile({ console: console, type: type });
}