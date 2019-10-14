import * as React from 'react';
import { Omit } from '../../helpers/typeUtils';
export interface RadioProps extends Omit<React.HTMLProps<HTMLInputElement>, 'disabled' | 'label' | 'onChange' | 'type'> {
    /** Additional classes added to the radio. */
    className?: string;
    /** Id of the radio. */
    id: string;
    /** Flag to show if the radio is checked. */
    isChecked?: boolean;
    /** Flag to show if the radio is disabled. */
    isDisabled?: boolean;
    /** Flag to show if the radio selection is valid or invalid. */
    isValid?: boolean;
    /** Label text of the radio. */
    label?: React.ReactNode;
    /** Name for group of radios */
    name: string;
    /** A callback for when the radio selection changes. */
    onChange?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
    /** Aria label for the radio. */
    'aria-label'?: string;
}
export declare class Radio extends React.Component<RadioProps> {
    static defaultProps: {
        className: string;
        isDisabled: boolean;
        isValid: boolean;
        onChange: Function;
    };
    constructor(props: RadioProps);
    handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
