import * as React from 'react';
import { Omit } from '../../helpers/typeUtils';
export interface DataListItemRowProps extends Omit<React.HTMLProps<HTMLDivElement>, 'children'> {
    children: React.ReactNode;
    className?: string;
    rowid?: string;
}
export declare const DataListItemRow: React.FunctionComponent<DataListItemRowProps>;
