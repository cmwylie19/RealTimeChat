/**
 * resolve-row-key.ts
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import { RowType, RowKeyType } from './types';
export declare function resolveRowKey({ rowData, rowIndex, rowKey }: {
    rowData: RowType;
    rowIndex: number;
    rowKey: RowKeyType;
}): string;
