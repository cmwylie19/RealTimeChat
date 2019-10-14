import * as React from 'react';
import { IExtra, IFormatterValueType } from '../../Table';
export declare const collapsible: (value: IFormatterValueType, { rowIndex, columnIndex, rowData, column, property }: IExtra) => {
    className: string;
    isVisible: boolean;
    children: JSX.Element;
};
export declare const expandable: (value: IFormatterValueType, { rowData }: IExtra) => JSX.Element | (object & {
    title?: React.ReactNode;
    props?: any;
});
export declare const expandedRow: (colSpan: number) => (value: IFormatterValueType, { rowIndex, rowData, column: { extraParams: { contentId } } }: IExtra) => {
    colSpan: any;
    id: string;
    className: string;
};
