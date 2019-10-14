/// <reference types="react" />
import { IExtra, IFormatterValueType } from '../../Table';
export declare const compoundExpand: (value: IFormatterValueType, { rowIndex, columnIndex, rowData, column, property }: IExtra) => {
    className: string;
    children: JSX.Element;
};
