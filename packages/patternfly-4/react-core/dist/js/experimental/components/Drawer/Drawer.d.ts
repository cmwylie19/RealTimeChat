import * as React from 'react';
export interface DrawerProps extends React.HTMLProps<HTMLDivElement> {
    /** Additional classes added to the Drawer. */
    className?: string;
    /** Content rendered in the left hand panel */
    children?: React.ReactNode;
    /** Indicate if the drawer is expanded */
    isExpanded?: boolean;
    /** Indicates if the content element and panel element are displayed side by side. */
    isInline?: boolean;
}
export declare const Drawer: React.SFC<DrawerProps>;
