'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionTypes = undefined;

var _reactWoodenTree = require('react-wooden-tree');

Object.defineProperty(exports, 'ActionTypes', {
  enumerable: true,
  get: function get() {
    return _reactWoodenTree.ActionTypes;
  }
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./style.css');

var WoodenTreeView = function (_Tree) {
  _inherits(WoodenTreeView, _Tree);

  function WoodenTreeView() {
    _classCallCheck(this, WoodenTreeView);

    return _possibleConstructorReturn(this, (WoodenTreeView.__proto__ || Object.getPrototypeOf(WoodenTreeView)).apply(this, arguments));
  }

  return WoodenTreeView;
}(_reactWoodenTree.Tree);

exports.default = WoodenTreeView;