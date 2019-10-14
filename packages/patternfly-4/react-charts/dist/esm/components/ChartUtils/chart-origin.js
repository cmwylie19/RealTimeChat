import { Helpers } from 'victory-core';
// Returns te origin for pie based charts. For example, something with a radius such as pie, donut, donut utilization,
// and donut threshold.
export const getPieOrigin = ({
  height,
  padding,
  width
}) => {
  const {
    top,
    bottom,
    left,
    right
  } = Helpers.getPadding({
    padding
  });
  const radius = Helpers.getRadius({
    height,
    width,
    padding
  });
  const offsetX = (width - radius * 2 - left - right) / 2;
  const offsetY = (height - radius * 2 - top - bottom) / 2;
  return {
    x: radius + left + offsetX,
    y: radius + top + offsetY
  };
};
//# sourceMappingURL=chart-origin.js.map