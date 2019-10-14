import * as React from 'react';
export declare enum EmptyStateVariant {
    large = "large",
    small = "small",
    full = "full"
}
export interface EmptyStateProps extends React.HTMLProps<HTMLDivElement> {
    /** Additional classes added to the EmptyState */
    className?: string;
    /** Content rendered inside the EmptyState */
    children: React.ReactNode;
    /** Modifies EmptyState max-width */
    variant?: 'small' | 'large' | 'full';
}
export declare const EmptyState: React.FunctionComponent<EmptyStateProps>;
