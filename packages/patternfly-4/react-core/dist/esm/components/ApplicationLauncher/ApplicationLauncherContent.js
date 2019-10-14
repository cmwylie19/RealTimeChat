import _pt from "prop-types";
import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AppLauncher/app-launcher';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import { ApplicationLauncherIcon } from './ApplicationLauncherIcon';
import { ApplicationLauncherText } from './ApplicationLauncherText';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import { ApplicationLauncherItemContext } from './ApplicationLauncherItem';
export const ApplicationLauncherContent = ({
  children
}) => React.createElement(ApplicationLauncherItemContext.Consumer, null, ({
  isExternal,
  icon
}) => React.createElement(React.Fragment, null, icon && React.createElement(ApplicationLauncherIcon, null, icon), icon ? React.createElement(ApplicationLauncherText, null, children) : children, isExternal && React.createElement(React.Fragment, null, React.createElement("span", {
  className: css(styles.appLauncherMenuItemExternalIcon)
}, React.createElement(ExternalLinkAltIcon, null)), React.createElement("span", {
  className: css(accessibleStyles.screenReader)
}, "(opens new window)"))));
ApplicationLauncherContent.propTypes = {
  children: _pt.node.isRequired
};
//# sourceMappingURL=ApplicationLauncherContent.js.map