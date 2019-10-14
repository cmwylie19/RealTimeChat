import * as React from 'react';
import { Omit } from '../../helpers/typeUtils';
export interface DropdownToggleCheckboxProps extends Omit<React.HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled' | 'checked'> {
    /** Additional classes added to the DropdownToggleCheckbox */
    className?: string;
    /** Flag to show if the checkbox selection is valid or invalid */
    isValid?: boolean;
    /** Flag to show if the checkbox is disabled */
    isDisabled?: boolean;
    /** Flag to show if the checkbox is checked */
    isChecked?: boolean | null;
    /** Alternate Flag to show if the checkbox is checked */
    checked?: boolean | null;
    /** A callback for when the checkbox selection changes */
    onChange?(checked: boolean, event: React.FormEvent<HTMLInputElement>): void;
    /** Element to be rendered inside the <span> */
    children?: React.ReactNode;
    /** Id of the checkbox */
    id: string;
    /** Aria-label of the checkbox */
    'aria-label': string;
}
export declare class DropdownToggleCheckbox extends React.Component<DropdownToggleCheckboxProps> {
    static defaultProps: {
        className: string;
        isValid: boolean;
        isDisabled: boolean;
        onChange: () => any;
    };
    handleChange: (checked: boolean, event: React.FormEvent<HTMLInputElement>) => void;
    calculateChecked: () => boolean;
    render(): JSX.Element;
}
