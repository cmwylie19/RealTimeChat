import * as React from 'react';
export interface ExpandableProps {
    /** Content rendered inside the Expandable Component */
    children: React.ReactNode;
    /** Additional classes added to the Expandable Component */
    className?: string;
    /** Flag to indicate if the content is expanded */
    isExpanded?: boolean;
    /** Text that appears in the  toggle */
    toggleText?: string;
    /** Callback function to toggle the expandable content */
    onToggle?: () => void;
    /** Forces focus state */
    isFocused?: boolean;
    /** Forces hover state */
    isHovered?: boolean;
    /** Forces active state */
    isActive?: boolean;
}
interface ExpandableState {
    isExpanded: boolean;
}
export declare class Expandable extends React.Component<ExpandableProps, ExpandableState> {
    constructor(props: ExpandableProps);
    static defaultProps: {
        className: string;
        toggleText: string;
        onToggle: () => any;
        isFocused: boolean;
        isActive: boolean;
        isHovered: boolean;
    };
    render(): JSX.Element;
}
export {};
