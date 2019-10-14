import * as React from 'react';
import { ProgressMeasureLocation, ProgressVariant } from './ProgressContainer';
import { Omit } from '../../helpers/typeUtils';
export declare enum ProgressSize {
    sm = "sm",
    md = "md",
    lg = "lg"
}
export interface ProgressProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size' | 'label'> {
    /** Classname for progress component. */
    className?: string;
    /** Size variant of progress. */
    size?: 'sm' | 'md' | 'lg';
    /** Where the measure percent will be located. */
    measureLocation?: 'outside' | 'inside' | 'top' | 'none';
    /** Status variant of progress. */
    variant?: 'danger' | 'success' | 'info';
    /** Title above progress. */
    title?: string;
    /** Text description of current progress value to display instead of percentage. */
    label?: React.ReactNode;
    /** Actual value of progress. */
    value?: number;
    /** DOM id for progress component. */
    id?: string;
    /** Minimal value of progress. */
    min?: number;
    /** Maximum value of progress. */
    max?: number;
    /** Accessible text description of current progress value, for when value is not a percentage. Use with label. */
    valueText?: string;
}
export declare class Progress extends React.Component<ProgressProps> {
    static defaultProps: {
        className: string;
        measureLocation: ProgressMeasureLocation;
        variant: ProgressVariant;
        id: string;
        title: string;
        min: number;
        max: number;
        size: ProgressSize;
        label: React.ReactNode;
        value: number;
        valueText: string;
    };
    id: string;
    render(): JSX.Element;
}
