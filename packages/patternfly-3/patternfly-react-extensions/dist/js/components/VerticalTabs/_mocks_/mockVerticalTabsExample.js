'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MockVerticalTabsExampleSource = exports.MockVerticalTabsExample = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _VerticalTabs = require('../VerticalTabs');

var _VerticalTabs2 = _interopRequireDefault(_VerticalTabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MockVerticalTabsExample = function (_React$Component) {
  _inherits(MockVerticalTabsExample, _React$Component);

  function MockVerticalTabsExample() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MockVerticalTabsExample);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MockVerticalTabsExample.__proto__ || Object.getPrototypeOf(MockVerticalTabsExample)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      activeTabId: 'all'
    }, _this.onActivateTab = function (id) {
      _this.setState({ activeTabId: id });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MockVerticalTabsExample, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          restrictTabs = _props.restrictTabs,
          wrapStyle = _props.wrapStyle;
      var activeTabId = this.state.activeTabId;


      var topLevelIds = ['all', 'one', 'two', 'three', 'four', 'five', 'six', 'seven'];

      var renderTab = function renderTab(id, title, children, props) {
        var childIds = _react2.default.Children.map(children, function (child) {
          return child.props.id;
        });

        return _react2.default.createElement(
          _VerticalTabs2.default.Tab,
          _extends({
            id: id,
            key: id,
            title: title,
            wrapStyle: wrapStyle,
            onActivate: function onActivate() {
              return _this2.onActivateTab(id);
            },
            active: activeTabId === id,
            hasActiveDescendant: activeTabId.startsWith(id)
          }, props),
          children && _react2.default.createElement(
            _VerticalTabs2.default,
            { restrictTabs: restrictTabs, activeTab: childIds.includes(activeTabId) },
            children
          )
        );
      };

      return _react2.default.createElement(
        _VerticalTabs2.default,
        { id: 'vertical-tabs', restrictTabs: restrictTabs, activeTab: topLevelIds.includes(activeTabId) },
        renderTab('all', 'All', null, { shown: true }),
        renderTab('one', 'Tab One', [renderTab('one-one', 'Tab One-One', [renderTab('one-one-one', 'Tab One-One-One'), renderTab('one-one-two', 'Tab One-One-Two'), renderTab('one-one-three', 'Tab One-One-Three')]), renderTab('one-two', 'Tab One-Two', [renderTab('one-two-one', 'Tab One-Two-One'), renderTab('one-two-two', 'Tab One-Two-Two'), renderTab('one-two-three', 'Tab One-Two-Three')]), renderTab('one-three', 'Tab One-Thee')]),
        renderTab('two', 'Tab Two', [renderTab('two-one', 'Tab Two-One'), renderTab('two-two', 'Tab Two-Two'), renderTab('two-three', 'Tab Two-Three')]),
        renderTab('three', 'Tab Three - Donec id elit non mi porta gravida at eget metus'),
        renderTab('four', 'Tab Four'),
        renderTab('five', 'Tab Five'),
        renderTab('six', 'Tab Six'),
        renderTab('seven', 'Tab Seven')
      );
    }
  }]);

  return MockVerticalTabsExample;
}(_react2.default.Component);

MockVerticalTabsExample.propTypes = {
  restrictTabs: _propTypes2.default.bool,
  wrapStyle: _propTypes2.default.oneOf(['wrap', 'truncate', 'nowrap'])
};

MockVerticalTabsExample.defaultProps = {
  restrictTabs: false,
  wrapStyle: 'word'
};

exports.MockVerticalTabsExample = MockVerticalTabsExample;
var MockVerticalTabsExampleSource = exports.MockVerticalTabsExampleSource = '\nimport React from \'react\';\nimport PropTypes from \'prop-types\';\nimport VerticalTabs from \'../VerticalTabs\';\n\nclass MockVerticalTabsExample extends React.Component {\n  state = {\n    activeTabId: \'all\'\n  };\n\n  onActivateTab = id => {\n    this.setState({ activeTabId: id });\n  };\n\n  render() {\n    const { restrictTabs, wrapStyle } = this.props;\n    const { activeTabId } = this.state;\n\n    const topLevelIds = [\'all\', \'one\', \'two\', \'three\', \'four\', \'five\', \'six\', \'seven\'];\n\n    const renderTab = (id, title, children, props) => {\n      const childIds = React.Children.map(children, child => child.props.id);\n\n      return (\n        <VerticalTabs.Tab\n          id={id}\n          key={id}\n          title={title}\n          wrapStyle={wrapStyle}\n          onActivate={() => this.onActivateTab(id)}\n          active={activeTabId === id}\n          hasActiveDescendant={activeTabId.startsWith(id)}\n          {...props}\n        >\n          {children && (\n            <VerticalTabs restrictTabs={restrictTabs} activeTab={childIds.includes(activeTabId)}>\n              {children}\n            </VerticalTabs>\n          )}\n        </VerticalTabs.Tab>\n      );\n    };\n\n    return (\n      <VerticalTabs id="vertical-tabs" restrictTabs={restrictTabs} activeTab={topLevelIds.includes(activeTabId)}>\n        {renderTab(\'all\', \'All\', null, { shown: true })}\n        {renderTab(\'one\', \'Tab One\', [\n          renderTab(\'one-one\', \'Tab One-One\', [\n            renderTab(\'one-one-one\', \'Tab One-One-One\'),\n            renderTab(\'one-one-two\', \'Tab One-One-Two\'),\n            renderTab(\'one-one-three\', \'Tab One-One-Three\')\n          ]),\n          renderTab(\'one-two\', \'Tab One-Two\', [\n            renderTab(\'one-two-one\', \'Tab One-Two-One\'),\n            renderTab(\'one-two-two\', \'Tab One-Two-Two\'),\n            renderTab(\'one-two-three\', \'Tab One-Two-Three\')\n          ]),\n          renderTab(\'one-three\', \'Tab One-Thee\')\n        ])}\n        {renderTab(\'two\', \'Tab Two\', [\n          renderTab(\'two-one\', \'Tab Two-One\'),\n          renderTab(\'two-two\', \'Tab Two-Two\'),\n          renderTab(\'two-three\', \'Tab Two-Three\')\n        ])}\n        {renderTab(\'three\', \'Tab Three - Donec id elit non mi porta gravida at eget metus\')}\n        {renderTab(\'four\', \'Tab Four\')}\n        {renderTab(\'five\', \'Tab Five\')}\n        {renderTab(\'six\', \'Tab Six\')}\n        {renderTab(\'seven\', \'Tab Seven\')}\n      </VerticalTabs>\n    );\n  }\n}\n\nMockVerticalTabsExample.propTypes = {\n  restrictTabs: PropTypes.bool,\n  wrapStyle: PropTypes.oneOf([\'wrap\', \'truncate\', \'nowrap\'])\n};\n\nMockVerticalTabsExample.defaultProps = {\n  restrictTabs: false,\n  wrapStyle: \'word\'\n};\n\nexport { MockVerticalTabsExample };\n';