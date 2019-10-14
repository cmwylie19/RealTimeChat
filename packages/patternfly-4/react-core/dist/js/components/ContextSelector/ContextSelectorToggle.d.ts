import * as React from 'react';
export interface ContextSelectorToggleProps {
    /** HTML ID of toggle */
    id: string;
    /** Classes applied to root element of toggle */
    className?: string;
    /** Text that appears in the Context Selector Toggle */
    toggleText?: string;
    /** Flag to indicate if menu is opened */
    isOpen?: boolean;
    /** Callback called when toggle is clicked */
    onToggle?: (event: any, value: boolean) => void;
    /** Callback for toggle open on keyboard entry */
    onEnter: () => void;
    /** Element which wraps toggle */
    parentRef?: any;
    /** Forces focus state */
    isFocused?: boolean;
    /** Forces hover state */
    isHovered?: boolean;
    /** Forces active state */
    isActive?: boolean;
}
export declare class ContextSelectorToggle extends React.Component<ContextSelectorToggleProps> {
    static defaultProps: {
        className: string;
        toggleText: string;
        isOpen: boolean;
        onEnter: () => any;
        parentRef: any;
        isFocused: boolean;
        isHovered: boolean;
        isActive: boolean;
        onToggle: (event: any, value: boolean) => any;
    };
    toggle: React.RefObject<HTMLButtonElement>;
    componentDidMount: () => void;
    componentWillUnmount: () => void;
    onDocClick: (event: any) => void;
    onEscPress: (event: any) => void;
    onKeyDown: (event: any) => void;
    render(): JSX.Element;
}
