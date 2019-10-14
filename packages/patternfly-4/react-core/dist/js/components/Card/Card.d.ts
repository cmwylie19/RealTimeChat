import * as React from 'react';
export interface CardProps extends React.HTMLProps<HTMLDivElement> {
    /** Content rendered inside the Card */
    children?: React.ReactNode;
    /** Additional classes added to the Card */
    className?: string;
    /** Sets the base component to render. defaults to article */
    component?: React.ReactNode;
    /** Modifies the card to include hover styles on :hover */
    isHoverable?: boolean;
    /** Modifies the card to include compact styling */
    isCompact?: boolean;
}
export declare const Card: React.FunctionComponent<CardProps>;
