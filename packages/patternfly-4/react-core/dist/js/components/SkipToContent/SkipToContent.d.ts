import * as React from 'react';
export interface SkipToContentProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    /** Sets the base component to render. Defaults to an anchor */
    component?: any;
    /** The skip to content link. */
    href: string;
    /** Content to display within the skip to content component, typically a string. */
    children?: React.ReactNode;
    /** Additional styles to apply to the skip to content component. */
    className?: string;
    /** Forces the skip to component to display. This is primarily for demonstration purposes and would not normally be used. */
    show?: boolean;
}
export declare class SkipToContent extends React.Component<SkipToContentProps> {
    static defaultProps: {
        component: string;
        className: string;
        show: boolean;
    };
    render(): JSX.Element;
}
