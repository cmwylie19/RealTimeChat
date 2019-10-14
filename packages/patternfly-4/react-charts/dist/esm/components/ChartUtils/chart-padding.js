import { get, isEmpty, isFinite } from 'lodash';
export const getPaddingForSide = (side, padding, fallback) => {
  if (!isEmpty(padding)) {
    return get(padding, side, 0);
  }

  if (isFinite(padding)) {
    return padding;
  }

  return getPaddingForSide(side, fallback, 0);
};
//# sourceMappingURL=chart-padding.js.map