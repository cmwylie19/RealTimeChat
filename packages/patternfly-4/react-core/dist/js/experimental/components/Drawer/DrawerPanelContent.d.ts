import * as React from 'react';
export interface DrawerPanelContentProps extends React.HTMLProps<HTMLDivElement> {
    /** Additional classes added to the Drawer. */
    className?: string;
    /** Content to rendered in the drawer */
    children?: React.ReactNode;
    /** Indicates if there should be padding around the drawer */
    noPadding?: boolean;
}
export declare const DrawerPanelContent: React.SFC<DrawerPanelContentProps>;
