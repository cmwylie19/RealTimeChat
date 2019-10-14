import * as React from 'react';
import { DataToolbarGroupProps } from './DataToolbarGroup';
import { DataToolbarBreakpointMod, DataToolbarSpacer } from './DataToolbarUtils';
export interface DataToolbarToggleGroupProps extends DataToolbarGroupProps {
    /** An Icon to be rendered when the toggle group has collapsed down */
    toggleIcon: React.ReactNode;
    /** The breakpoint at which the toggle group is collapsed down */
    breakpoint: 'md' | 'lg' | 'xl' | '2xl';
}
export declare class DataToolbarToggleGroup extends React.Component<DataToolbarToggleGroupProps> {
    static defaultProps: {
        breakpointMods: DataToolbarBreakpointMod[];
        spacers: DataToolbarSpacer[];
    };
    isContentPopup: () => boolean;
    render(): JSX.Element;
}
