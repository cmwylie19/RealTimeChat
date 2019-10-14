/// <reference types="react" />
import { IExtra, IFormatterValueType } from '../../Table';
export declare const selectable: (label: IFormatterValueType, { rowIndex, columnIndex, rowData, column, property }: IExtra) => {
    component: string;
    isVisible: boolean;
    scope: string;
    className?: undefined;
    children?: undefined;
} | {
    className: string;
    component: string;
    scope: string;
    isVisible: boolean;
    children: JSX.Element;
};
