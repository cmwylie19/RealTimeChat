function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Tree } from 'react-wooden-tree';

export { ActionTypes } from 'react-wooden-tree';

require('./style.css');

var WoodenTreeView = function (_Tree) {
  _inherits(WoodenTreeView, _Tree);

  function WoodenTreeView() {
    _classCallCheck(this, WoodenTreeView);

    return _possibleConstructorReturn(this, (WoodenTreeView.__proto__ || Object.getPrototypeOf(WoodenTreeView)).apply(this, arguments));
  }

  return WoodenTreeView;
}(Tree);

export default WoodenTreeView;