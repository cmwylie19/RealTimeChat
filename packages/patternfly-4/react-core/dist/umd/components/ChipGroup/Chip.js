(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "@patternfly/react-styles", "./ChipButton", "../Tooltip", "@patternfly/react-icons", "@patternfly/react-styles/css/components/Chip/chip", "../../helpers/GenerateId/GenerateId"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("@patternfly/react-styles"), require("./ChipButton"), require("../Tooltip"), require("@patternfly/react-icons"), require("@patternfly/react-styles/css/components/Chip/chip"), require("../../helpers/GenerateId/GenerateId"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.reactStyles, global.ChipButton, global.Tooltip, global.reactIcons, global.chip, global.GenerateId);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _reactStyles, _ChipButton, _Tooltip, _reactIcons, _chip, _GenerateId) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Chip = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var _chip2 = _interopRequireDefault(_chip);

  var _GenerateId2 = _interopRequireDefault(_GenerateId);

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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  class Chip extends React.Component {
    constructor(props) {
      super(props);

      _defineProperty(this, "span", React.createRef());

      _defineProperty(this, "renderOverflowChip", () => {
        const {
          children,
          className,
          onClick
        } = this.props;
        const Component = this.props.component;
        return React.createElement(Component, {
          className: (0, _reactStyles.css)(_chip2.default.chip, _chip2.default.modifiers.overflow, className)
        }, React.createElement(_ChipButton.ChipButton, {
          onClick: onClick
        }, React.createElement("span", {
          className: (0, _reactStyles.css)(_chip2.default.chipText)
        }, children)));
      });

      _defineProperty(this, "renderChip", randomId => {
        const {
          children,
          closeBtnAriaLabel,
          tooltipPosition,
          className,
          onClick,
          isReadOnly
        } = this.props;
        const Component = this.props.component;

        if (this.state.isTooltipVisible) {
          return React.createElement(_Tooltip.Tooltip, {
            position: tooltipPosition,
            content: children
          }, React.createElement(Component, {
            className: (0, _reactStyles.css)(_chip2.default.chip, isReadOnly && _chip2.default.modifiers.readOnly, className)
          }, React.createElement("span", {
            ref: this.span,
            className: (0, _reactStyles.css)(_chip2.default.chipText),
            id: randomId
          }, children), !isReadOnly && React.createElement(_ChipButton.ChipButton, {
            onClick: onClick,
            ariaLabel: closeBtnAriaLabel,
            id: `remove_${randomId}`,
            "aria-labelledby": `remove_${randomId} ${randomId}`
          }, React.createElement(_reactIcons.TimesCircleIcon, {
            "aria-hidden": "true"
          }))));
        }

        return React.createElement(Component, {
          className: (0, _reactStyles.css)(_chip2.default.chip, isReadOnly && _chip2.default.modifiers.readOnly, className)
        }, React.createElement("span", {
          ref: this.span,
          className: (0, _reactStyles.css)(_chip2.default.chipText),
          id: randomId
        }, children), !isReadOnly && React.createElement(_ChipButton.ChipButton, {
          onClick: onClick,
          ariaLabel: closeBtnAriaLabel,
          id: `remove_${randomId}`,
          "aria-labelledby": `remove_${randomId} ${randomId}`
        }, React.createElement(_reactIcons.TimesCircleIcon, {
          "aria-hidden": "true"
        })));
      });

      this.state = {
        isTooltipVisible: false
      };
    }

    componentDidMount() {
      this.setState({
        isTooltipVisible: Boolean(this.span.current && this.span.current.offsetWidth < this.span.current.scrollWidth)
      });
    }

    render() {
      const {
        isOverflowChip
      } = this.props;
      return React.createElement(_GenerateId2.default, null, randomId => isOverflowChip ? this.renderOverflowChip() : this.renderChip(randomId));
    }

  }

  exports.Chip = Chip;

  _defineProperty(Chip, "propTypes", {
    children: _propTypes2.default.node,
    closeBtnAriaLabel: _propTypes2.default.string,
    className: _propTypes2.default.string,
    isOverflowChip: _propTypes2.default.bool,
    isReadOnly: _propTypes2.default.bool,
    onClick: _propTypes2.default.func,
    component: _propTypes2.default.node,
    tooltipPosition: _propTypes2.default.oneOf(['auto', 'top', 'bottom', 'left', 'right'])
  });

  _defineProperty(Chip, "defaultProps", {
    closeBtnAriaLabel: 'close',
    className: '',
    isOverflowChip: false,
    isReadOnly: false,
    tooltipPosition: 'top',
    onClick: () => undefined,
    component: 'div'
  });
});
//# sourceMappingURL=Chip.js.map