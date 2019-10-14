import * as React from 'react';
export interface DataListProps extends React.HTMLProps<HTMLUListElement> {
    children?: React.ReactNode;
    className?: string;
    'aria-label': string;
}
export declare const DataList: React.FunctionComponent<DataListProps>;
