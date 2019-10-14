import _pt from "prop-types";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
export const OptionsMenuItemGroup = (_ref) => {
  let {
    children = null,
    className = '',
    ariaLabel = ''
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "ariaLabel"]);

  return React.createElement("li", props, React.createElement("ul", {
    className: className,
    "aria-label": ariaLabel
  }, children));
};
OptionsMenuItemGroup.propTypes = {
  children: _pt.node,
  className: _pt.string,
  ariaLabel: _pt.string
};
//# sourceMappingURL=OptionsMenuItemGroup.js.map