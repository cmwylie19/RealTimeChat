import * as React from 'react';
import { DataToolbarBreakpointMod, DataToolbarSpacer } from './DataToolbarUtils';
export declare enum DataToolbarGroupVariant {
    'filter-group' = "filter-group",
    'icon-button-group' = "icon-button-group",
    'button-group' = "button-group"
}
export interface DataToolbarGroupProps extends React.HTMLProps<HTMLDivElement> {
    /** Classes applied to root element of the Data toolbar group */
    className?: string;
    /** A type modifier which modifies spacing specifically depending on the type of group */
    variant?: DataToolbarGroupVariant | 'filter-group' | 'icon-button-group' | 'button-group';
    /** Array of objects representing the various modifiers to apply to the Data toolbar group at various breakpoints */
    breakpointMods?: DataToolbarBreakpointMod[];
    /** Array of objects representing the various spacers to apply to the Data toolbar group at various breakpoints */
    spacers?: DataToolbarSpacer[];
    /** Array of objects representing the spacers to apply to the items in this group at various breakpoints */
    itemSpacers?: DataToolbarSpacer[];
    /** Content to be rendered inside the Data toolbar group */
    children?: React.ReactNode;
}
export declare const DataToolbarGroup: React.FunctionComponent<DataToolbarGroupProps>;
