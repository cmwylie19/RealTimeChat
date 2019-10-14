import * as React from 'react';
export interface SortColumnProps extends React.HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
    isSortedBy?: boolean;
    onSort?: Function;
    sortDirection?: string;
}
export declare const SortColumn: React.FunctionComponent<SortColumnProps>;
