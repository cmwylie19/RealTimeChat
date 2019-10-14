import * as React from 'react';
import { Omit } from '../../helpers/typeUtils';
export interface SelectOptionObject {
    toString(): string;
}
export interface SelectOptionProps extends Omit<React.HTMLProps<HTMLElement>, 'type' | 'ref' | 'value'> {
    /** Optional alternate display for the option */
    children?: React.ReactNode;
    /** Additional classes added to the Select Option */
    className?: string;
    /** Internal index of the option */
    index?: number;
    /** The value for the option, if passing an object you most provide a toString function */
    value: string | SelectOptionObject;
    /** Flag indicating if the option is disabled */
    isDisabled?: boolean;
    /** Flag indicating if the option acts as a placeholder */
    isPlaceholder?: boolean;
    /** Internal flag indicating if the option is selected */
    isSelected?: boolean;
    /** Internal flag indicating if the option is checked */
    isChecked?: boolean;
    /** Internal flag indicating if the option is focused */
    isFocused?: boolean;
    /** Internal callback for ref tracking */
    sendRef?: (ref: React.ReactNode, index: number) => void;
    /** Internal callback for keyboard navigation */
    keyHandler?: (index: number, position: string) => void;
    /** Optional callback for click event */
    onClick?: (event: React.MouseEvent | React.ChangeEvent) => void;
}
export declare class SelectOption extends React.Component<SelectOptionProps> {
    private ref;
    static defaultProps: {
        className: string;
        value: string;
        index: number;
        isDisabled: boolean;
        isPlaceholder: boolean;
        isSelected: boolean;
        isChecked: boolean;
        isFocused: boolean;
        onClick: Function;
        sendRef: Function;
        keyHandler: Function;
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    onKeyDown: (event: React.KeyboardEvent<Element>) => void;
    render(): JSX.Element;
}
