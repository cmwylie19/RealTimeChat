import * as React from 'react';
import { Omit } from '../../helpers/typeUtils';
export interface CheckboxProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled' | 'label'> {
    /** Additional classes added to the Checkbox. */
    className?: string;
    /** Flag to show if the Checkbox selection is valid or invalid. */
    isValid?: boolean;
    /** Flag to show if the Checkbox is disabled. */
    isDisabled?: boolean;
    /** Flag to show if the Checkbox is checked. */
    isChecked?: boolean;
    checked?: boolean;
    /** A callback for when the Checkbox selection changes. */
    onChange?: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
    /** Label text of the checkbox. */
    label?: React.ReactNode;
    /** Id of the checkbox. */
    id: string;
    /** Aria-label of the checkbox. */
    'aria-label'?: string;
}
export declare class Checkbox extends React.Component<CheckboxProps> {
    static defaultProps: {
        className: string;
        isValid: boolean;
        isDisabled: boolean;
        isChecked: boolean;
        onChange: () => void;
    };
    constructor(props: any);
    private handleChange;
    render(): JSX.Element;
}
