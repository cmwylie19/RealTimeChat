var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Button } from '../Button';
import { Icon } from '../Icon';

var ALIGN_LEFT = 'left';
var ALIGN_CENTER = 'center';

var ALIGN_TYPES = [ALIGN_LEFT, ALIGN_CENTER];

var ExpandCollapse = function (_React$Component) {
  _inherits(ExpandCollapse, _React$Component);

  function ExpandCollapse() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ExpandCollapse);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ExpandCollapse.__proto__ || Object.getPrototypeOf(ExpandCollapse)).call.apply(_ref, [this].concat(args))), _this), _this.state = { expanded: false, mirroredExpanded: false }, _this.onClick = function () {
      if (_this.props.onToggle) {
        _this.props.onToggle();
      } else {
        _this.setState(function (prevState) {
          return { expanded: !prevState.expanded };
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ExpandCollapse, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          textCollapsed = _props.textCollapsed,
          textExpanded = _props.textExpanded,
          align = _props.align,
          className = _props.className,
          bordered = _props.bordered;
      var expanded = this.state.expanded;


      var separatorClass = classNames('expand-collapse-pf-separator', { bordered: bordered });

      return React.createElement(
        'div',
        { className: classNames('expand-collapse-pf', className) },
        React.createElement(
          'div',
          { className: 'expand-collapse-pf-link-container' },
          align === ALIGN_CENTER && React.createElement('span', { className: separatorClass }),
          React.createElement(
            Button,
            { bsStyle: 'link', onClick: this.onClick },
            React.createElement(Icon, { type: 'fa', name: expanded ? 'angle-down' : 'angle-right' }),
            expanded ? textExpanded : textCollapsed
          ),
          React.createElement('span', { className: separatorClass })
        ),
        this.state.expanded && children
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.mirroredExpanded !== nextProps.expanded) {
        return {
          expanded: nextProps.expanded,
          mirroredExpanded: nextProps.expanded
        };
      }
      return null;
    }
  }]);

  return ExpandCollapse;
}(React.Component);

ExpandCollapse.propTypes = {
  children: PropTypes.any.isRequired,
  /** Top-level custom class */
  className: PropTypes.string,
  /** Text for the link in collapsed state */
  textCollapsed: PropTypes.string,
  /** Text for the link in expanded state */
  textExpanded: PropTypes.string,
  /** Align the link to the left or center. */
  align: PropTypes.oneOf(ALIGN_TYPES),
  /** Flag to show a separation border line */
  bordered: PropTypes.bool,
  /** Flag to control expansion state */
  expanded: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  /** Callback function to control externally stored expansion state */
  onToggle: PropTypes.func
};

ExpandCollapse.defaultProps = {
  className: '',
  textCollapsed: 'Show Advanced Options',
  textExpanded: 'Hide Advanced Options',
  align: ALIGN_LEFT,
  bordered: true,
  expanded: false,
  onToggle: undefined
};

ExpandCollapse.ALIGN_LEFT = ALIGN_LEFT;
ExpandCollapse.ALIGN_CENTER = ALIGN_CENTER;
ExpandCollapse.ALIGN_TYPES = ALIGN_TYPES;

export default ExpandCollapse;