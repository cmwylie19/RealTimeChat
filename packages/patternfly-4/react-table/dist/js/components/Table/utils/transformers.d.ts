export { selectable } from './decorators/selectable';
export { sortable } from './decorators/sortable';
export { cellActions } from './decorators/cellActions';
export { cellWidth } from './decorators/cellWidth';
export { cellHeightAuto } from './decorators/cellHeightAuto';
export { wrappable } from './decorators/wrappable';
export { textCenter } from './decorators/textCenter';
export { collapsible, expandedRow, expandable } from './decorators/collapsible';
export { compoundExpand } from './decorators/compoundExpand';
export { headerCol } from './decorators/headerCol';
export { classNames, Visibility } from './decorators/classNames';
import { IFormatterValueType, IExtra } from '../Table';
declare const emptyTD: () => {
    scope: string;
    component: string;
};
declare const scopeColTransformer: () => {
    scope: string;
};
declare const emptyCol: (label: IFormatterValueType) => {};
declare const parentId: (_value: IFormatterValueType, { rowData }: IExtra) => {
    parentId: number;
};
declare const mapProps: (_label: IFormatterValueType, { property, rowData }: IExtra) => any;
export { emptyTD, scopeColTransformer, emptyCol, parentId, mapProps };
