import * as React from 'react';
export const DataToolbarContext = React.createContext({});
export const formatSpacers = (spacers, type = 'pf-m-spacer') => {
  return spacers.reduce((acc, curr) => `${acc} ${type}-${curr.spacerSize}${curr.breakpoint ? `-on-${curr.breakpoint}` : ''}`, '');
};
//# sourceMappingURL=DataToolbarUtils.js.map