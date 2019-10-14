import * as React from 'react';
import { HTMLProps } from 'react';
import { Omit } from '../../helpers/typeUtils';
export interface TextAreaProps extends Omit<HTMLProps<HTMLTextAreaElement>, 'onChange'> {
    /** Additional classes added to the TextArea. */
    className?: string;
    /** Flag to show if the TextArea is required. */
    isRequired?: boolean;
    /** Flag to show if the TextArea is valid or invalid. */
    isValid?: boolean;
    /** Value of the TextArea. */
    value?: string | number;
    /** A callback for when the TextArea value changes. */
    onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    /** Custom flag to show that the TextArea requires an associated id or aria-label. */
    'aria-label'?: string;
}
export declare class TextArea extends React.Component<TextAreaProps> {
    static defaultProps: {
        "className": string;
        "isRequired": boolean;
        "isValid": boolean;
        'aria-label': string;
    };
    constructor(props: TextAreaProps);
    private handleChange;
    render(): JSX.Element;
}
