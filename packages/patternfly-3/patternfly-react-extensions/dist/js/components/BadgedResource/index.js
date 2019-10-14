'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getResourceBadgeColor = exports.kindStrings = exports.kindAbbrs = exports.resourceTypes = exports.BadgedResource = undefined;

var _BadgedResource = require('./BadgedResource');

var _BadgedResource2 = _interopRequireDefault(_BadgedResource);

var _ResourceTypes = require('./ResourceTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BadgedResource = _BadgedResource2.default;
exports.resourceTypes = _ResourceTypes.resourceTypes;
exports.kindAbbrs = _ResourceTypes.kindAbbrs;
exports.kindStrings = _ResourceTypes.kindStrings;
exports.getResourceBadgeColor = _ResourceTypes.getResourceBadgeColor;