/**
 * types.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import * as React from 'react';
export interface CellType {
    property?: number | string;
    transforms?: transformsType;
    formatters?: formattersType;
    props?: object;
}
export declare type ColumnsType = ColumnType[] | any[];
export interface ColumnType {
    property?: string;
    cell?: CellType;
    props?: object;
    header?: HeaderType;
}
export interface HeaderType {
    label?: string;
    transforms?: transformsType;
    formatters?: formattersType;
    props?: object;
    property?: string;
}
export declare type RowsType = RowType[] | [][];
export declare type RowKeyType = Function | string;
export interface RowType {
    header?: HeaderType;
    cell?: CellType;
    [key: string]: any;
}
export declare const TableDefaults: {
    renderers: {
        table: string;
        header: {
            wrapper: string;
            row: string;
            cell: string;
        };
        body: {
            wrapper: string;
            row: string;
            cell: string;
        };
    };
};
export declare type formatterValueType = object | string | React.ElementType;
export interface ExtraParamsType {
    rowData?: RowType;
    column?: ColumnType;
    columnIndex?: number;
    property?: string;
    rowIndex?: number;
    rowKey?: RowKeyType;
}
export declare type formatterType = (value: string | object, extra: ExtraParamsType) => formatterValueType;
export declare type formattersType = formatterType[];
export declare type transformType = (value: string | object, extra: ExtraParamsType) => object;
export declare type transformsType = transformType[];
export declare type createElementType = string | React.ComponentClass<any, any> | React.FunctionComponent<any>;
export declare type rendererType = string | Function | React.ComponentClass<any, any> | React.FunctionComponent<any> | React.Component<any, {}, any>;
export interface RendererType {
    wrapper?: rendererType;
    row?: rendererType;
    cell?: rendererType;
}
export interface RenderersTypes {
    columns: ColumnsType;
    renderers?: {
        table?: string;
        header?: RendererType;
        body?: RendererType;
    };
    components?: {
        table?: string;
        header?: {
            wrapper?: rendererType;
            row?: rendererType;
            cell?: rendererType;
        };
        body?: {
            wrapper?: rendererType;
            row?: rendererType;
            cell?: rendererType;
        };
    };
}
