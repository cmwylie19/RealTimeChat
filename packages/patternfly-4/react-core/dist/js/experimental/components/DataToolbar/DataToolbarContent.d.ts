import * as React from 'react';
import { DataToolbarBreakpointMod } from './DataToolbarUtils';
export interface DataToolbarContentProps extends React.HTMLProps<HTMLDivElement> {
    /** Classes applied to root element of the Data toolbar content row */
    className?: string;
    /** An array of objects representing the various modifiers to apply to the content row at various breakpoints */
    breakpointMods?: DataToolbarBreakpointMod[];
    /** Content to be rendered as children of the content row */
    children?: React.ReactNode;
}
export declare const DataToolbarContent: React.FunctionComponent<DataToolbarContentProps>;
