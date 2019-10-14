"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classNames = exports.Visibility = void 0;

var _reactStyles = require("@patternfly/react-styles");

var _table = _interopRequireDefault(require("@patternfly/react-styles/css/components/Table/table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Visibility = (0, _reactStyles.pickProperties)(_table["default"].modifiers, ['hidden', 'hiddenOnSm', 'hiddenOnMd', 'hiddenOnLg', 'hiddenOnXl', 'hiddenOn2Xl', 'visibleOnSm', 'visibleOnMd', 'visibleOnLg', 'visibleOnXl', 'visibleOn2Xl']); // tslint:disable-next-line:no-shadowed-variable

exports.Visibility = Visibility;

var classNames = function classNames() {
  for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }

  return function () {
    return {
      className: _reactStyles.css.apply(void 0, classNames)
    };
  };
};

exports.classNames = classNames;
//# sourceMappingURL=classNames.js.map