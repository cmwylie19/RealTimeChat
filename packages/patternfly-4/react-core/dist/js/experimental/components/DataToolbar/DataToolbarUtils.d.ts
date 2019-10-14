import * as React from 'react';
import { RefObject } from 'react';
interface DataToolbarContextProps {
    isExpanded: boolean;
    toggleIsExpanded: () => void;
    expandableContentRef: RefObject<HTMLDivElement>;
    expandableContentId: string;
}
export declare const DataToolbarContext: React.Context<Partial<DataToolbarContextProps>>;
export declare type DataToolbarBreakpointMod = {
    /** The attribute to modify  */
    modifier: 'hidden' | 'visible' | 'align-right' | 'align-left';
    /** The breakpoint at which to apply the modifier */
    breakpoint: 'md' | 'lg' | 'xl' | '2xl';
};
export declare type DataToolbarSpacer = {
    /** The size of the spacer */
    spacerSize: 'none' | 'sm' | 'md' | 'lg';
    /** The breakpoint at which to apply the spacer */
    breakpoint?: 'md' | 'lg' | 'xl';
};
export declare const formatSpacers: (spacers: DataToolbarSpacer[], type?: string) => string;
export {};
