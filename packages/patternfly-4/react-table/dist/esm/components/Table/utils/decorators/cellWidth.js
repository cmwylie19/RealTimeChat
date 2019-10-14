import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
export const cellWidth = width => () => ({
  className: css(getModifier(styles, `width_${width}`))
});
//# sourceMappingURL=cellWidth.js.map