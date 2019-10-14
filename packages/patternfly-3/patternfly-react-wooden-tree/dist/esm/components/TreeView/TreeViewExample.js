var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _actionMapper;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import WoodenTreeView, { ActionTypes } from './index';

var data = [{
  text: 'Parent 1',
  icon: 'fa fa-folder',
  nodes: [{
    text: 'Child 1',
    nodes: [{ text: 'Grandchild 1' }, { text: 'Grandchild 2' }]
  }, {
    text: 'Child 2',
    nodes: [{ text: 'Grandchild 1' }, { text: 'Grandchild 2' }]
  }]
}, {
  text: 'Parent 2',
  icon: 'fa fa-folder',
  nodes: [{ text: 'Child 1' }]
}, {
  text: 'Parent 3',
  icon: 'fa fa-folder'
}, {
  text: 'Parent 4',
  icon: 'fa fa-folder'
}, {
  text: 'Parent 5',
  icon: 'fa fa-folder'
}];

var actionMapper = (_actionMapper = {}, _defineProperty(_actionMapper, ActionTypes.EXPANDED, WoodenTreeView.nodeExpanded), _defineProperty(_actionMapper, ActionTypes.CHECKED, WoodenTreeView.nodeChecked), _defineProperty(_actionMapper, ActionTypes.DISABLED, WoodenTreeView.nodeDisabled), _defineProperty(_actionMapper, ActionTypes.SELECTED, WoodenTreeView.nodeSelected), _defineProperty(_actionMapper, ActionTypes.CHILD_NODES, WoodenTreeView.nodeChildren), _defineProperty(_actionMapper, ActionTypes.LOADING, WoodenTreeView.nodeLoading), _actionMapper);

var TreeViewExample = function (_React$Component) {
  _inherits(TreeViewExample, _React$Component);

  function TreeViewExample() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TreeViewExample);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TreeViewExample.__proto__ || Object.getPrototypeOf(TreeViewExample)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      tree: WoodenTreeView.convertHierarchicalTree(WoodenTreeView.initHierarchicalTree(data))
    }, _this.onDataChange = function (commands) {
      var tree = _extends({}, _this.state.tree);
      for (var i = 0; i < commands.length; i++) {
        var command = commands[i];
        var node = WoodenTreeView.nodeSelector(tree, command.nodeId);
        if (node !== null) {
          if (actionMapper.hasOwnProperty(command.type)) {
            node = actionMapper[command.type](node, command.value);
            tree = WoodenTreeView.nodeUpdater(tree, node);
          } else if (command.type === ActionTypes.ADD_NODES) {
            tree = WoodenTreeView.addNodes(tree, command.value);
          }
        }
      }
      _this.setState({ tree: tree });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  /**
   * The callback function for changing data in the tree.
   *
   * @param {[string, string, any]} commands The array of node changing commands.
   */


  _createClass(TreeViewExample, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'App' },
        React.createElement(WoodenTreeView, _extends({
          nodeIcon: 'fa fa-file-o',
          data: this.state.tree,
          callbacks: {
            onDataChange: this.onDataChange
          }
        }, this.props))
      );
    }
  }]);

  return TreeViewExample;
}(React.Component);

export default TreeViewExample;