"use strict";
exports.__esModule = true;
var React = require("react");
var react_styles_1 = require("@patternfly/react-styles");
var app_launcher_1 = require("@patternfly/react-styles/css/components/AppLauncher/app-launcher");
var accessibility_1 = require("@patternfly/react-styles/css/utilities/Accessibility/accessibility");
var ApplicationLauncherIcon_1 = require("./ApplicationLauncherIcon");
var ApplicationLauncherText_1 = require("./ApplicationLauncherText");
var react_icons_1 = require("@patternfly/react-icons");
var ApplicationLauncherItem_1 = require("./ApplicationLauncherItem");
exports.ApplicationLauncherContent = function (_a) {
    var children = _a.children;
    return (<ApplicationLauncherItem_1.ApplicationLauncherItemContext.Consumer>
    {function (_a) {
        var isExternal = _a.isExternal, icon = _a.icon;
        return (<>
        {icon && <ApplicationLauncherIcon_1.ApplicationLauncherIcon>{icon}</ApplicationLauncherIcon_1.ApplicationLauncherIcon>}
        {icon ? <ApplicationLauncherText_1.ApplicationLauncherText>{children}</ApplicationLauncherText_1.ApplicationLauncherText> : children}
        {isExternal && (<>
            <span className={react_styles_1.css(app_launcher_1["default"].appLauncherMenuItemExternalIcon)}><react_icons_1.ExternalLinkAltIcon /></span>
            <span className={react_styles_1.css(accessibility_1["default"].screenReader)}>(opens new window)</span>
          </>)}
      </>);
    }}
  </ApplicationLauncherItem_1.ApplicationLauncherItemContext.Consumer>);
};
