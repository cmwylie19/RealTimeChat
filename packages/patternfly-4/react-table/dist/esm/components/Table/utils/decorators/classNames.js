import { css, pickProperties } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
export const Visibility = pickProperties(styles.modifiers, ['hidden', 'hiddenOnSm', 'hiddenOnMd', 'hiddenOnLg', 'hiddenOnXl', 'hiddenOn2Xl', 'visibleOnSm', 'visibleOnMd', 'visibleOnLg', 'visibleOnXl', 'visibleOn2Xl']); // tslint:disable-next-line:no-shadowed-variable

export const classNames = (...classNames) => () => ({
  className: css(...classNames)
});
//# sourceMappingURL=classNames.js.map