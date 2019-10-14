import * as React from 'react';
import { DataToolbarBreakpointMod, DataToolbarSpacer } from './DataToolbarUtils';
export declare enum DataToolbarItemVariant {
    separator = "separator",
    'bulk-select' = "bulk-select",
    'overflow-menu' = "overflow-menu",
    pagination = "pagination",
    'search-filter' = "search-filter",
    label = "label"
}
export interface DataToolbarItemProps extends React.HTMLProps<HTMLDivElement> {
    /** Classes applied to root element of the Data toolbar item */
    className?: string;
    /** A type modifier which modifies spacing specifically depending on the type of item */
    variant?: DataToolbarItemVariant | 'separator' | 'bulk-select' | 'overflow-menu' | 'pagination' | 'search-filter' | 'label';
    /** An array of objects representing the various modifiers to apply to the Data toolbar item at various breakpoints */
    breakpointMods?: DataToolbarBreakpointMod[];
    /** An array of objects representing the various spacers to apply to the Data toolbar item at various breakpoints */
    spacers?: DataToolbarSpacer[];
    /** id for this Data toolbar item */
    id?: string;
    /** Content to be rendered inside the Data toolbar item */
    children?: React.ReactNode;
}
export declare const DataToolbarItem: React.FunctionComponent<DataToolbarItemProps>;
