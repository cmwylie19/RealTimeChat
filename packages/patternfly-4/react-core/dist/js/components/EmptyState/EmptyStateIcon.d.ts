import * as React from 'react';
import { Omit } from '../../helpers/typeUtils';
export declare enum IconSize {
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl"
}
export interface IconProps extends Omit<React.HTMLProps<SVGElement>, 'size'> {
    color?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    title?: string;
}
export interface EmptyStateIconProps extends IconProps {
    /** Additional classes added to the EmptyState */
    className?: string;
    /** Icon component to be rendered inside the EmptyState on icon variant */
    icon?: string | React.FunctionComponent<IconProps>;
    /** Component to be rendered inside the EmptyState on container variant */
    component?: React.FunctionComponent<any>;
    /** Adds empty state icon variant styles  */
    variant?: 'icon' | 'container';
}
export declare const EmptyStateIcon: React.FunctionComponent<EmptyStateIconProps>;
