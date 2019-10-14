"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StyledTheme = exports.StyledConstants = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emotionTheming = require("emotion-theming");

var _reactTokens = require("@patternfly/react-tokens");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable camelcase */

/**
 * Maps to keys or array positions in the StyledTheme
 */
var StyledConstants = {
  space: {
    xs: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
    xxl: 5,
    xxxl: 6,
    neg_sm: -1,
    neg_md: -2,
    neg_lg: -3,
    neg_xl: -4,
    neg_xxl: -5,
    neg_xxxl: -6,
    // gutter does not fit into the spacing scale theme, add values directly
    gutter: _reactTokens.global_gutter && _reactTokens.global_gutter["var"],
    neg_gutter: _reactTokens.global_gutter && "-".concat(_reactTokens.global_gutter["var"])
  },
  fonts: {
    sans_serif: 'sans_serif',
    monospace: 'monospace'
  },
  fontWeights: {
    light: 'light',
    normal: 'normal',
    semi_bold: 'semi_bold',
    bold: 'bold',
    link: 'link'
  },
  lineHeights: {
    sm: 'sm',
    md: 'md'
  },
  fontSizes: {
    xs: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
    xxl: 5,
    xxxl: 6,
    xxxxl: 7
  },
  radii: {
    sm: 'sm',
    lg: 'lg'
  },
  borders: {
    sm: 'sm',
    md: 'md',
    lg: 'lg'
  },
  colors: {
    bg_100: 'bg_100',
    bg_200: 'bg_200',
    bg_300: 'bg_300',
    bg_light_100: 'bg_light_100',
    bg_light_200: 'bg_light_200',
    bg_light_300: 'bg_light_300',
    bg_dark_100: 'bg_dark_100',
    bg_dark_200: 'bg_dark_200',
    bg_dark_transparent_100: 'bg_dark_transparent_100',
    bg_dark_transparent_200: 'bg_dark_transparent_200',
    color_100: 'color_100',
    color_200: 'color_200',
    light_100: 'light_100',
    light_200: 'light_200',
    dark_100: 'dark_100',
    dark_200: 'dark_200',
    active_100: 'active_100',
    active_200: 'active_200',
    active_300: 'active_300',
    disabled_100: 'disabled_100',
    disabled_200: 'disabled_200',
    primary_100: 'primary_100',
    primary_200: 'primary_200',
    primary_light_100: 'primary_light_100',
    primary_dark_100: 'primary_dark_100',
    secondary_100: 'secondary_100',
    success_100: 'success_100',
    success_200: 'success_200',
    info_100: 'info_100',
    info_200: 'info_200',
    warning_100: 'warning_100',
    warning_200: 'warning_200',
    danger_100: 'danger_100',
    danger_200: 'danger_200',
    danger_300: 'danger_300',
    link: 'link',
    link_hover: 'link_hover',
    link_light_hover: 'link_light_hover',
    border: 'border',
    border_light: 'border_light',
    border_light_200: 'border_light_200',
    border_dark: 'border_dark'
  },
  zIndices: {
    xs: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
    xxl: 5
  },
  // Need to use value here so it can be used for calculations
  ratio: {
    golden: _reactTokens.global_golden_ratio && _reactTokens.global_golden_ratio.value
  },
  // use values directly so that the user can concatenate multiple shadows
  // e.g. boxShadow={`${StyledConstants.sm_right}, ${StyledConstants.sm_bottom}`}
  shadows: {
    sm: _reactTokens.global_BoxShadow_sm && _reactTokens.global_BoxShadow_sm["var"],
    sm_left: _reactTokens.global_BoxShadow_sm_left && _reactTokens.global_BoxShadow_sm_left["var"],
    sm_right: _reactTokens.global_BoxShadow_sm_right && _reactTokens.global_BoxShadow_sm_right["var"],
    sm_bottom: _reactTokens.global_BoxShadow_sm_bottom && _reactTokens.global_BoxShadow_sm_bottom["var"],
    sm_top: _reactTokens.global_BoxShadow_sm_top && _reactTokens.global_BoxShadow_sm_top["var"],
    md: _reactTokens.global_BoxShadow_md && _reactTokens.global_BoxShadow_md["var"],
    md_left: _reactTokens.global_BoxShadow_md_left && _reactTokens.global_BoxShadow_md_left["var"],
    md_right: _reactTokens.global_BoxShadow_md_right && _reactTokens.global_BoxShadow_md_right["var"],
    md_bottom: _reactTokens.global_BoxShadow_md_bottom && _reactTokens.global_BoxShadow_md_bottom["var"],
    md_top: _reactTokens.global_BoxShadow_md_top && _reactTokens.global_BoxShadow_md_top["var"],
    lg: _reactTokens.global_BoxShadow_lg && _reactTokens.global_BoxShadow_lg["var"],
    lg_left: _reactTokens.global_BoxShadow_lg_left && _reactTokens.global_BoxShadow_lg_left["var"],
    lg_right: _reactTokens.global_BoxShadow_lg_right && _reactTokens.global_BoxShadow_lg_right["var"],
    lg_bottom: _reactTokens.global_BoxShadow_lg_bottom && _reactTokens.global_BoxShadow_lg_bottom["var"],
    lg_top: _reactTokens.global_BoxShadow_lg_top && _reactTokens.global_BoxShadow_lg_top["var"],
    inset: _reactTokens.global_BoxShadow_inset && _reactTokens.global_BoxShadow_inset["var"]
  }
};
exports.StyledConstants = StyledConstants;
var StyledTheme = {
  // Array of viewport widths to use for min-width media queries
  // Need to use values here as it won't work otherwise. Can still be overridden by defining own theme with breakpoints.
  breakpoints: [_reactTokens.global_breakpoint_sm && _reactTokens.global_breakpoint_sm.value, // min-width 576px
  _reactTokens.global_breakpoint_md && _reactTokens.global_breakpoint_md.value, // min-width 768px
  _reactTokens.global_breakpoint_lg && _reactTokens.global_breakpoint_lg.value, // min-width 992px
  _reactTokens.global_breakpoint_xl && _reactTokens.global_breakpoint_xl.value // min-width 1200px
  ],
  // Array or Object: Values for borderRadius props
  radii: {
    sm: _reactTokens.global_BorderRadius_sm && _reactTokens.global_BorderRadius_sm["var"],
    lg: _reactTokens.global_BorderRadius_lg && _reactTokens.global_BorderRadius_lg["var"]
  },
  // 	Array of numbers to use as a typographic scale
  fontSizes: [_reactTokens.global_FontSize_xs && _reactTokens.global_FontSize_xs["var"], _reactTokens.global_FontSize_sm && _reactTokens.global_FontSize_sm["var"], _reactTokens.global_FontSize_md && _reactTokens.global_FontSize_md["var"], _reactTokens.global_FontSize_lg && _reactTokens.global_FontSize_lg["var"], _reactTokens.global_FontSize_xl && _reactTokens.global_FontSize_xl["var"], _reactTokens.global_FontSize_2xl && _reactTokens.global_FontSize_2xl["var"], _reactTokens.global_FontSize_3xl && _reactTokens.global_FontSize_3xl["var"], _reactTokens.global_FontSize_4xl && _reactTokens.global_FontSize_4xl["var"]],
  // Array of numbers for use as margin and pixel values
  // TODO: See if we can use .var instead of .value
  space: [_reactTokens.global_spacer_xs && _reactTokens.global_spacer_xs.value, _reactTokens.global_spacer_sm && _reactTokens.global_spacer_sm.value, _reactTokens.global_spacer_md && _reactTokens.global_spacer_md.value, _reactTokens.global_spacer_lg && _reactTokens.global_spacer_lg.value, _reactTokens.global_spacer_xl && _reactTokens.global_spacer_xl.value, _reactTokens.global_spacer_2xl && _reactTokens.global_spacer_2xl.value, _reactTokens.global_spacer_3xl && _reactTokens.global_spacer_3xl.value],
  // Color names that can be used in color, bg, and borderColor props
  colors: {
    bg_100: _reactTokens.global_BackgroundColor_100 && _reactTokens.global_BackgroundColor_100["var"],
    bg_200: _reactTokens.global_BackgroundColor_200 && _reactTokens.global_BackgroundColor_200["var"],
    bg_300: _reactTokens.global_BackgroundColor_300 && _reactTokens.global_BackgroundColor_300["var"],
    bg_light_100: _reactTokens.global_BackgroundColor_light_100 && _reactTokens.global_BackgroundColor_light_100["var"],
    bg_light_200: _reactTokens.global_BackgroundColor_light_200 && _reactTokens.global_BackgroundColor_light_200["var"],
    bg_light_300: _reactTokens.global_BackgroundColor_light_300 && _reactTokens.global_BackgroundColor_light_300["var"],
    bg_dark_100: _reactTokens.global_BackgroundColor_dark_100 && _reactTokens.global_BackgroundColor_dark_100["var"],
    bg_dark_200: _reactTokens.global_BackgroundColor_dark_200 && _reactTokens.global_BackgroundColor_dark_200["var"],
    bg_dark_transparent_100: _reactTokens.global_BackgroundColor_dark_transparent_100 && _reactTokens.global_BackgroundColor_dark_transparent_100["var"],
    bg_dark_transparent_200: _reactTokens.global_BackgroundColor_dark_transparent_200 && _reactTokens.global_BackgroundColor_dark_transparent_200["var"],
    color_100: _reactTokens.global_Color_100 && _reactTokens.global_Color_100["var"],
    color_200: _reactTokens.global_Color_200 && _reactTokens.global_Color_200["var"],
    light_100: _reactTokens.global_Color_light_100 && _reactTokens.global_Color_light_100["var"],
    light_200: _reactTokens.global_Color_light_200 && _reactTokens.global_Color_light_200["var"],
    dark_100: _reactTokens.global_Color_dark_100 && _reactTokens.global_Color_dark_100["var"],
    dark_200: _reactTokens.global_Color_dark_200 && _reactTokens.global_Color_dark_200["var"],
    active_100: _reactTokens.global_active_color_100 && _reactTokens.global_active_color_100["var"],
    active_200: _reactTokens.global_active_color_200 && _reactTokens.global_active_color_200["var"],
    active_300: _reactTokens.global_active_color_300 && _reactTokens.global_active_color_300["var"],
    disabled_100: _reactTokens.global_disabled_color_100 && _reactTokens.global_disabled_color_100["var"],
    disabled_200: _reactTokens.global_disabled_color_200 && _reactTokens.global_disabled_color_200["var"],
    primary_100: _reactTokens.global_primary_color_100 && _reactTokens.global_primary_color_100["var"],
    primary_200: _reactTokens.global_primary_color_200 && _reactTokens.global_primary_color_200["var"],
    primary_light_100: _reactTokens.global_primary_color_light_100 && _reactTokens.global_primary_color_light_100["var"],
    primary_dark_100: _reactTokens.global_primary_color_dark_100 && _reactTokens.global_primary_color_dark_100["var"],
    secondary_100: _reactTokens.global_secondary_color_100 && _reactTokens.global_secondary_color_100["var"],
    success_100: _reactTokens.global_success_color_100 && _reactTokens.global_success_color_100["var"],
    success_200: _reactTokens.global_success_color_200 && _reactTokens.global_success_color_200["var"],
    info_100: _reactTokens.global_info_color_100 && _reactTokens.global_info_color_100["var"],
    info_200: _reactTokens.global_info_color_200 && _reactTokens.global_info_color_200["var"],
    warning_100: _reactTokens.global_warning_color_100 && _reactTokens.global_warning_color_100["var"],
    warning_200: _reactTokens.global_warning_color_200 && _reactTokens.global_warning_color_200["var"],
    danger_100: _reactTokens.global_danger_color_100 && _reactTokens.global_danger_color_100["var"],
    danger_200: _reactTokens.global_danger_color_200 && _reactTokens.global_danger_color_200["var"],
    danger_300: _reactTokens.global_danger_color_300 && _reactTokens.global_danger_color_300["var"],
    link: _reactTokens.global_link_Color && _reactTokens.global_link_Color["var"],
    link_hover: _reactTokens.global_link_Color_hover && _reactTokens.global_link_Color_hover["var"],
    link_light_hover: _reactTokens.global_link_Color_light_hover && _reactTokens.global_link_Color_light_hover["var"],
    border_100: _reactTokens.global_BorderColor_100 && _reactTokens.global_BorderColor_100["var"],
    border_300: _reactTokens.global_BorderColor_300 && _reactTokens.global_BorderColor_300["var"],
    border_light_100: _reactTokens.global_BorderColor_light_100 && _reactTokens.global_BorderColor_light_100["var"],
    border_dark_100: _reactTokens.global_BorderColor_dark_100 && _reactTokens.global_BorderColor_dark_100["var"]
  },
  // Array or Object: Values for the fontFamily prop
  fonts: {
    sans_serif: _reactTokens.global_FontFamily_sans_serif && _reactTokens.global_FontFamily_sans_serif["var"],
    monospace: _reactTokens.global_FontFamily_monospace && _reactTokens.global_FontFamily_monospace["var"]
  },
  // Array or Object: Values for fontWeight prop
  fontWeights: {
    light: _reactTokens.global_FontWeight_light && _reactTokens.global_FontWeight_light["var"],
    normal: _reactTokens.global_FontWeight_normal && _reactTokens.global_FontWeight_normal["var"],
    semi_bold: _reactTokens.global_FontWeight_semi_bold && _reactTokens.global_FontWeight_semi_bold["var"],
    bold: _reactTokens.global_FontWeight_bold && _reactTokens.global_FontWeight_bold["var"],
    link: _reactTokens.global_link_FontWeight && _reactTokens.global_link_FontWeight["var"]
  },
  // Array or Object: Values for lineHeight prop
  lineHeights: {
    sm: _reactTokens.global_LineHeight_sm && _reactTokens.global_LineHeight_sm["var"],
    md: _reactTokens.global_LineHeight_md && _reactTokens.global_LineHeight_md["var"]
  },
  // Array or Object: Values for border props
  borders: {
    sm: _reactTokens.global_BorderWidth_sm && "".concat(_reactTokens.global_BorderWidth_sm["var"], " solid"),
    md: _reactTokens.global_BorderWidth_md && "".concat(_reactTokens.global_BorderWidth_md["var"], " solid"),
    lg: _reactTokens.global_BorderWidth_lg && "".concat(_reactTokens.global_BorderWidth_lg["var"], " solid")
  },
  // Array or Object: Values for boxShadow prop
  shadows: {
    sm: _reactTokens.global_BoxShadow_sm && _reactTokens.global_BoxShadow_sm["var"],
    sm_left: _reactTokens.global_BoxShadow_sm_left && _reactTokens.global_BoxShadow_sm_left["var"],
    sm_right: _reactTokens.global_BoxShadow_sm_right && _reactTokens.global_BoxShadow_sm_right["var"],
    sm_bottom: _reactTokens.global_BoxShadow_sm_bottom && _reactTokens.global_BoxShadow_sm_bottom["var"],
    sm_top: _reactTokens.global_BoxShadow_sm_top && _reactTokens.global_BoxShadow_sm_top["var"],
    md: _reactTokens.global_BoxShadow_md && _reactTokens.global_BoxShadow_md["var"],
    md_left: _reactTokens.global_BoxShadow_md_left && _reactTokens.global_BoxShadow_md_left["var"],
    md_right: _reactTokens.global_BoxShadow_md_right && _reactTokens.global_BoxShadow_md_right["var"],
    md_bottom: _reactTokens.global_BoxShadow_md_bottom && _reactTokens.global_BoxShadow_md_bottom["var"],
    md_top: _reactTokens.global_BoxShadow_md_top && _reactTokens.global_BoxShadow_md_top["var"],
    lg: _reactTokens.global_BoxShadow_lg && _reactTokens.global_BoxShadow_lg["var"],
    lg_left: _reactTokens.global_BoxShadow_lg_left && _reactTokens.global_BoxShadow_lg_left["var"],
    lg_right: _reactTokens.global_BoxShadow_lg_right && _reactTokens.global_BoxShadow_lg_right["var"],
    lg_bottom: _reactTokens.global_BoxShadow_lg_bottom && _reactTokens.global_BoxShadow_lg_bottom["var"],
    lg_top: _reactTokens.global_BoxShadow_lg_top && _reactTokens.global_BoxShadow_lg_top["var"],
    inset: _reactTokens.global_BoxShadow_inset && _reactTokens.global_BoxShadow_inset["var"]
  },
  // Custom array
  zIndices: [_reactTokens.global_ZIndex_xs && _reactTokens.global_ZIndex_xs["var"], _reactTokens.global_ZIndex_sm && _reactTokens.global_ZIndex_sm["var"], _reactTokens.global_ZIndex_md && _reactTokens.global_ZIndex_md["var"], _reactTokens.global_ZIndex_lg && _reactTokens.global_ZIndex_lg["var"], _reactTokens.global_ZIndex_xl && _reactTokens.global_ZIndex_xl["var"], _reactTokens.global_ZIndex_2xl && _reactTokens.global_ZIndex_2xl["var"]]
};
/**
 * The PatternFlyThemeProvider should be higher up the component tree so that it can wrap any styled components in use.
 * Multiple themes can be nested to override the theme if needed. When nesting themes, the theme object will be merged into the ancestor theme.
 */

exports.StyledTheme = StyledTheme;

var PatternFlyThemeProvider = function PatternFlyThemeProvider(_ref) {
  var theme = _ref.theme,
      children = _ref.children;
  return _react["default"].createElement(_emotionTheming.ThemeProvider, {
    theme: theme
  }, children);
};

PatternFlyThemeProvider.propTypes = {
  /** Theme object, defaults to the PatternFly theme */
  theme: _propTypes["default"].object,

  /** Anything that can be rendered */
  children: _propTypes["default"].element.isRequired
};
PatternFlyThemeProvider.defaultProps = {
  theme: StyledTheme
};
var _default = PatternFlyThemeProvider;
exports["default"] = _default;
//# sourceMappingURL=StyledTheme.js.map