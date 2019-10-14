import * as React from 'react';
import { Omit } from '../../helpers/typeUtils';
export interface DataListItemProps extends Omit<React.HTMLProps<HTMLLIElement>, 'children'> {
    /** Flag to show if the expanded content of the DataList item is visible */
    isExpanded?: boolean;
    /** Content rendered inside the DataList item */
    children: React.ReactNode;
    /** Additional classes added to the DataList item should be either <DataListItemRow> or <DataListContent> */
    className?: string;
    /** Adds accessible text to the DataList item */
    'aria-labelledby': string;
}
export interface DataListItemChildProps {
    /** Id for the row */
    rowid: string;
}
export declare const DataListItem: React.FunctionComponent<DataListItemProps>;
