/// <reference types="react" />
import { IExtra, IFormatterValueType } from '../../Table';
export declare const sortable: (label: IFormatterValueType, { columnIndex, column, property }: IExtra) => {
    "className": string;
    'aria-sort': string;
    "children": JSX.Element;
};
