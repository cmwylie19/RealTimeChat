import * as React from 'react';
export const headerCol = (id = 'simple-node') => {
  // tslint:disable-next-line:no-shadowed-variable
  const headerCol = (value, {
    rowIndex
  } = {}) => {
    const result = typeof value === 'object' ? value.title : value;
    return {
      component: 'th',
      children: React.createElement("div", {
        id: `${id}${rowIndex}`
      }, result)
    };
  };

  return headerCol;
};
//# sourceMappingURL=headerCol.js.map