(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "prop-types", "react-emotion", "styled-system"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("prop-types"), require("react-emotion"), require("styled-system"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.propTypes, global.reactEmotion, global.styledSystem);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _reactStyles, _propTypes, _reactEmotion, _styledSystem) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.StyledBoxBase = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  // Custom additions
  const zIndex = (0, _styledSystem.style)({
    prop: 'zIndex',
    key: 'zIndices'
  });
  const StyledBoxBase = exports.StyledBoxBase = (0, _reactEmotion2.default)('div')( // theme key: space
  _styledSystem.space, // theme key: maxWidths
  _styledSystem.maxWidth, // theme key: minWidths
  _styledSystem.minWidth, // theme key: heights
  _styledSystem.height, // theme key: maxHeights
  _styledSystem.maxHeight, // theme key: minHeights
  _styledSystem.minHeight, // theme key: fontSizes
  _styledSystem.fontSize, // theme key: colors
  _styledSystem.color, // theme key: borders
  _styledSystem.borders, // theme key: colors
  _styledSystem.borderColor, // theme key: radii
  _styledSystem.borderRadius, // theme key: shadows
  _styledSystem.boxShadow, // no theme keys
  _styledSystem.display, _styledSystem.width, _styledSystem.verticalAlign, _styledSystem.opacity, _styledSystem.overflow, _styledSystem.ratio, // flex child props
  _styledSystem.flex, _styledSystem.flexBasis, _styledSystem.order, _styledSystem.alignSelf, // background props
  _styledSystem.background, _styledSystem.backgroundImage, _styledSystem.backgroundSize, _styledSystem.backgroundPosition, _styledSystem.backgroundRepeat, // position props
  _styledSystem.position, // theme key: zIndices
  zIndex, _styledSystem.left, _styledSystem.top, _styledSystem.right, _styledSystem.bottom);

  const StyledBox = _ref => {
    let {
      className,
      children,
      component
    } = _ref,
        props = _objectWithoutProperties(_ref, ["className", "children", "component"]);

    const StyledBoxBaseWithComponent = StyledBoxBase.withComponent(component);
    return _react2.default.createElement(StyledBoxBaseWithComponent, _extends({}, props, {
      className: (0, _reactStyles.css)(className)
    }), children);
  };

  StyledBox.propTypes = {
    /** Additional classes that are passed into the Styled component */
    className: _propTypes2.default.string,

    /** Anything that can be rendered inside the Styled component */
    children: _propTypes2.default.node,

    /** HTML element to render as */
    component: _propTypes2.default.string,
    // ...space.propTypes

    /** margin - Maps with StyledConstants.space */
    m: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** margin-bottom - Maps with StyledConstants.space */
    mb: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** margin-left - Maps with StyledConstants.space */
    ml: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** margin-right - Maps with StyledConstants.space */
    mr: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** margin-top - Maps with StyledConstants.space */
    mt: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** margin-left and margin-right - Maps with StyledConstants.space */
    mx: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** margin-top and margin-bottom - Maps with StyledConstants.space */
    my: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** padding - Maps with StyledConstants.space */
    p: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** padding-bottom - Maps with StyledConstants.space */
    pb: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** padding-left - Maps with StyledConstants.space */
    pl: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** padding-right - Maps with StyledConstants.space */
    pr: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** padding-top - Maps with StyledConstants.space */
    pt: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** padding-left and padding-right - Maps with StyledConstants.space */
    px: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** padding-top and padding-bottom - Maps with StyledConstants.space */
    py: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),
    // ...borders.propTypes

    /** border - Maps with StyledConstants.borders */
    border: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** border-bottom - Maps with StyledConstants.borders */
    borderBottom: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** border-left - Maps with StyledConstants.borders */
    borderLeft: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** border-right - Maps with StyledConstants.borders */
    borderRight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** border-top - Maps with StyledConstants.borders */
    borderTop: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),
    // ...color.propTypes

    /** background-color - Maps with StyledConstants.colors */
    bg: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** color: Maps with StyledConstants.colors */
    color: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** height */
    height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** width */
    width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** font-size */
    fontSize: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** flex */
    flex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** order */
    order: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** align-self */
    alignSelf: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** border-color */
    borderColor: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** border-radius */
    borderRadius: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** box-shadow */
    boxShadow: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** max-width */
    maxWidth: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** min-width */
    minWidth: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** max-height */
    maxHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** min-height */
    minHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** display */
    display: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** vertical-align */
    verticalAlign: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** opacity */
    opacity: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** overflow */
    overflow: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** ratio */
    ratio: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** flex-basis */
    flexBasis: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** background */
    background: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** background-image */
    backgroundImage: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** background-size */
    backgroundSize: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** background-position */
    backgroundPosition: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** background-repeat */
    backgroundRepeat: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** position */
    position: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** z-index */
    zIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** left */
    left: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** top */
    top: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** right */
    right: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** bottom */
    bottom: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array])
  };
  StyledBox.defaultProps = {
    className: '',
    children: null,
    component: 'div',
    m: null,
    mb: null,
    ml: null,
    mr: null,
    mt: null,
    mx: null,
    my: null,
    p: null,
    pb: null,
    pl: null,
    pr: null,
    pt: null,
    px: null,
    py: null,
    height: null,
    width: null,
    fontSize: null,
    bg: null,
    color: null,
    flex: null,
    order: null,
    alignSelf: null,
    border: null,
    borderBottom: null,
    borderLeft: null,
    borderRight: null,
    borderTop: null,
    borderColor: null,
    borderRadius: null,
    boxShadow: null,
    maxWidth: null,
    minWidth: null,
    maxHeight: null,
    minHeight: null,
    display: null,
    verticalAlign: null,
    opacity: null,
    overflow: null,
    ratio: null,
    flexBasis: null,
    background: null,
    backgroundImage: null,
    backgroundSize: null,
    backgroundPosition: null,
    backgroundRepeat: null,
    position: null,
    zIndex: null,
    left: null,
    top: null,
    right: null,
    bottom: null
  };
  exports.default = StyledBox;
});
//# sourceMappingURL=StyledBox.js.map