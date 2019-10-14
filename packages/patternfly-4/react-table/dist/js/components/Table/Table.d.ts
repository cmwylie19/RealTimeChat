import * as React from 'react';
import { DropdownPosition, DropdownDirection, DropdownItemProps, Omit } from '@patternfly/react-core';
import { formatterValueType, ColumnType, RowType, RowKeyType, ColumnsType } from './base';
export declare enum TableGridBreakpoint {
    none = "",
    grid = "grid",
    gridMd = "grid-md",
    gridLg = "grid-lg",
    gridXl = "grid-xl",
    grid2xl = "grid-2xl"
}
export declare enum TableVariant {
    compact = "compact"
}
export declare type OnSort = (event: React.MouseEvent, columnIndex: number, sortByDirection: SortByDirection, extraData: IExtraColumnData) => void;
export declare type OnCollapse = (event: React.MouseEvent, rowIndex: number, isOpen: boolean, rowData: IRowData, extraData: IExtraData) => void;
export declare type OnExpand = (event: React.MouseEvent, rowIndex: number, colIndex: number, isOpen: boolean, rowData: IRowData, extraData: IExtraData) => void;
export declare type OnSelect = (event: React.MouseEvent, isSelected: boolean, rowIndex: number, rowData: IRowData, extraData: IExtraData) => void;
export declare enum SortByDirection {
    asc = "asc",
    desc = "desc"
}
export interface IHeaderRow extends ColumnType {
}
export interface IRowData extends IRow {
    disableActions?: boolean;
}
export interface IColumn {
    extraParams: {
        sortBy?: ISortBy;
        onSort?: OnSort;
        onCollapse?: OnCollapse;
        onExpand?: OnExpand;
        onSelect?: OnSelect;
        rowLabeledBy?: string;
        expandId?: string;
        contentId?: string;
        dropdownPosition?: DropdownPosition;
        dropdownDirection?: DropdownDirection;
        allRowsSelected?: boolean;
    };
}
export interface IExtraRowData {
    rowIndex?: number;
    rowKey?: RowKeyType;
}
export interface IExtraColumnData {
    columnIndex?: number;
    column?: IColumn;
    property?: string;
}
export interface IExtraData extends IExtraColumnData, IExtraRowData {
}
export interface IExtra extends IExtraData {
    rowData?: IRowData;
}
export declare type IFormatterValueType = formatterValueType & {
    title?: string | React.ReactNode;
    props?: any;
};
export interface ISortBy {
    index?: number;
    direction?: 'asc' | 'desc';
}
export interface IAction extends Omit<DropdownItemProps, 'title' | 'onClick'> {
    isSeparator?: boolean;
    itemKey?: string;
    title?: string | React.ReactNode;
    onClick: (event: React.MouseEvent, rowIndex: number, rowData: IRowData, extraData: IExtraData) => void;
}
export interface ISeparator extends IAction {
    isSeparator: boolean;
}
export declare type IActions = (IAction | ISeparator)[];
export declare type IActionsResolver = (rowData: IRowData, extraData: IExtraData) => (IAction | ISeparator)[];
export declare type IAreActionsDisabled = (rowData: IRowData, extraData: IExtraData) => boolean;
export interface IDecorator extends React.HTMLProps<HTMLElement> {
    isVisible: boolean;
    children?: React.ReactNode;
}
export declare type ITransforms = ((label?: IFormatterValueType, rowData?: IRowData, columnIndex?: number, column?: IColumn, property?: string, rowIndex?: number, rowKey?: RowKeyType) => {
    className: string;
    'aria-sort': string;
    children: React.ReactNode;
})[];
export declare type IFormatters = ((data?: IFormatterValueType, rowData?: IRowData, columnIndex?: number, column?: IColumn, property?: string, rowIndex?: number, rowKey?: RowKeyType) => formatterValueType)[];
export interface ICell {
    title?: string | React.ReactNode;
    transforms?: ITransforms;
    cellTransforms?: ITransforms;
    columnTransforms?: ITransforms;
    formatters?: IFormatters;
    cellFormatters?: IFormatters;
    props?: any;
    data?: any;
    header?: any;
    cell?: any;
}
export interface IRowCell {
    title?: string | React.ReactNode;
    props?: any;
}
export interface IRow extends RowType {
    cells?: (React.ReactNode | IRowCell)[];
    isOpen?: boolean;
    parent?: number;
    compoundParent?: number;
    props?: any;
    fullWidth?: boolean;
    noPadding?: boolean;
    showSelect?: boolean;
    isExpanded?: boolean;
    isFirstVisible?: boolean;
    isLastVisible?: boolean;
    selected?: boolean;
}
export interface TableProps {
    'aria-label'?: string;
    children?: React.ReactNode;
    className?: string;
    variant?: 'compact';
    borders?: boolean;
    gridBreakPoint?: '' | 'grid' | 'grid-md' | 'grid-lg' | 'grid-xl' | 'grid-2xl';
    sortBy?: ISortBy;
    onCollapse?: OnCollapse;
    onExpand?: OnExpand;
    onSelect?: OnSelect;
    canSelectAll?: boolean;
    onSort?: OnSort;
    actions?: IActions;
    actionResolver?: IActionsResolver;
    areActionsDisabled?: IAreActionsDisabled;
    header?: React.ReactNode;
    caption?: React.ReactNode;
    rowLabeledBy?: string;
    expandId?: string;
    contentId?: string;
    dropdownPosition?: 'right' | 'left';
    dropdownDirection?: 'up' | 'down';
    rows: (IRow | string[])[];
    cells: (ICell | string)[];
    bodyWrapper?: Function;
    rowWrapper?: Function;
    role?: string;
}
export declare const TableContext: React.Context<{
    headerData: ColumnsType;
    headerRows: IHeaderRow[];
    rows: (string[] | IRow)[];
}>;
export declare class Table extends React.Component<TableProps, {}> {
    static defaultProps: {
        "children": React.ReactNode;
        "className": string;
        "variant": TableVariant;
        "borders": boolean;
        "rowLabeledBy": string;
        "expandId": string;
        "contentId": string;
        "dropdownPosition": DropdownPosition;
        "dropdownDirection": DropdownDirection;
        "header": React.ReactNode;
        "caption": React.ReactNode;
        'aria-label': string;
        "gridBreakPoint": TableGridBreakpoint;
        "role": string;
        "canSelectAll": boolean;
    };
    isSelected: (row: IRow) => boolean;
    areAllRowsSelected: (rows: IRow[]) => boolean;
    render(): JSX.Element;
}
