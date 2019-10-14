import * as React from 'react';
import { RowKeyType } from './base/types';
import { IRow } from './Table';
export interface TableBodyProps {
    className?: string;
    children?: React.ReactNode;
    headerData?: IRow[];
    rows?: IRow[];
    rowKey?: RowKeyType;
    onRowClick?: Function;
    onRow?: Function;
}
export declare const TableBody: ({ onRow, className, children, rowKey, onRowClick, ...props }: TableBodyProps) => JSX.Element;
