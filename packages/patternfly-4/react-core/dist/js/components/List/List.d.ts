import * as React from 'react';
export declare enum ListVariant {
    inline = "inline"
}
export interface ListProps extends React.HTMLProps<HTMLUListElement> {
    /** Anything that can be rendered inside of the list */
    children?: React.ReactNode;
    /** Additional classes added to the list. */
    className?: string;
    /** Adds list variant styles */
    variant?: 'inline';
}
export declare const List: React.FunctionComponent<ListProps>;
