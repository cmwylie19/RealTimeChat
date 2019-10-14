/* eslint-disable no-console */
import * as React from 'react';
export const columns = [{
  title: 'Header cell'
}, 'Branches', {
  title: 'Pull requests'
}, 'Workspaces', {
  title: 'Last Commit'
}];
export const rows = [{
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}];
export const actions = [{
  title: 'Some action',
  onClick: ({
    event
  }, {
    rowId
  }) => // tslint:disable-next-line:no-console
  console.log('clicked on Some action, on row: ', rowId)
}, {
  title: React.createElement("div", null, "Another action"),
  onClick: ({
    event
  }, {
    rowId
  }) => // tslint:disable-next-line:no-console
  console.log('clicked on Another action, on row: ', rowId)
}, {
  isSeparator: true
}, {
  title: 'Third action',
  onClick: ({
    event
  }, {
    rowId
  }) => // tslint:disable-next-line:no-console
  console.log('clicked on Third action, on row: ', rowId)
}];
//# sourceMappingURL=data-sets.js.map