/// <reference types="react" />
import { ICell, IRow } from '../Table';
/**
 * Function to join parent and their children so they can be rendered in tbody.
 * @param {*} rows raw data to find out if it's child or parent.
 * @param {*} children data to render (array of react children).
 */
export declare const mapOpenedRows: (rows: IRow[], children: any) => IRow[];
/**
 * Function to calculate columns based on custom config.
 * It adds some custom cells for collapse, select, if expanded row and actions.
 * @param {*} headerRows custom object with described table header cells.
 * @param {*} extra object with custom callbacks.
 * @return {*} expected object for react tabular table.
 */
export declare const calculateColumns: (headerRows: (string | ICell)[], extra: any) => {
    property: string;
    extraParams: any;
    data: any;
    header: {
        label: string | ICell;
        transforms: (((label: import("../Table").IFormatterValueType) => {}) | ((label?: import("../Table").IFormatterValueType, rowData?: import("../Table").IRowData, columnIndex?: number, column?: import("../Table").IColumn, property?: string, rowIndex?: number, rowKey?: import("../base").RowKeyType) => {
            className: string;
            'aria-sort': string;
            children: import("react").ReactNode;
        }))[];
        formatters: ((data?: import("../Table").IFormatterValueType, rowData?: import("../Table").IRowData, columnIndex?: number, column?: import("../Table").IColumn, property?: string, rowIndex?: number, rowKey?: import("../base").RowKeyType) => import("../base").formatterValueType)[];
        title?: import("react").ReactNode;
        cellTransforms?: ((label?: import("../Table").IFormatterValueType, rowData?: import("../Table").IRowData, columnIndex?: number, column?: import("../Table").IColumn, property?: string, rowIndex?: number, rowKey?: import("../base").RowKeyType) => {
            className: string;
            'aria-sort': string;
            children: import("react").ReactNode;
        })[];
        columnTransforms?: ((label?: import("../Table").IFormatterValueType, rowData?: import("../Table").IRowData, columnIndex?: number, column?: import("../Table").IColumn, property?: string, rowIndex?: number, rowKey?: import("../base").RowKeyType) => {
            className: string;
            'aria-sort': string;
            children: import("react").ReactNode;
        })[];
        cellFormatters?: ((data?: import("../Table").IFormatterValueType, rowData?: import("../Table").IRowData, columnIndex?: number, column?: import("../Table").IColumn, property?: string, rowIndex?: number, rowKey?: import("../base").RowKeyType) => import("../base").formatterValueType)[];
        props?: any;
        data?: any;
        header?: any;
        cell?: any;
    };
    cell: {
        transforms: (((_label: import("../Table").IFormatterValueType, { property, rowData }: import("../Table").IExtra) => any) | ((label?: import("../Table").IFormatterValueType, rowData?: import("../Table").IRowData, columnIndex?: number, column?: import("../Table").IColumn, property?: string, rowIndex?: number, rowKey?: import("../base").RowKeyType) => {
            className: string;
            'aria-sort': string;
            children: import("react").ReactNode;
        }))[];
        formatters: ((data?: import("../Table").IFormatterValueType, rowData?: import("../Table").IRowData, columnIndex?: number, column?: import("../Table").IColumn, property?: string, rowIndex?: number, rowKey?: import("../base").RowKeyType) => import("../base").formatterValueType)[];
        title?: import("react").ReactNode;
        cellTransforms?: ((label?: import("../Table").IFormatterValueType, rowData?: import("../Table").IRowData, columnIndex?: number, column?: import("../Table").IColumn, property?: string, rowIndex?: number, rowKey?: import("../base").RowKeyType) => {
            className: string;
            'aria-sort': string;
            children: import("react").ReactNode;
        })[];
        columnTransforms?: ((label?: import("../Table").IFormatterValueType, rowData?: import("../Table").IRowData, columnIndex?: number, column?: import("../Table").IColumn, property?: string, rowIndex?: number, rowKey?: import("../base").RowKeyType) => {
            className: string;
            'aria-sort': string;
            children: import("react").ReactNode;
        })[];
        cellFormatters?: ((data?: import("../Table").IFormatterValueType, rowData?: import("../Table").IRowData, columnIndex?: number, column?: import("../Table").IColumn, property?: string, rowIndex?: number, rowKey?: import("../base").RowKeyType) => import("../base").formatterValueType)[];
        props?: any;
        data?: any;
        header?: any;
        cell?: any;
    };
    props: any;
}[];
