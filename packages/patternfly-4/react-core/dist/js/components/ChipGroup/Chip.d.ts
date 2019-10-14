import * as React from 'react';
export interface ChipProps extends React.HTMLProps<HTMLDivElement> {
    /** Content rendered inside the chip text */
    children?: React.ReactNode;
    /** Aria Label for close button */
    closeBtnAriaLabel?: string;
    /** Additional classes added to the chip item */
    className?: string;
    /** Flag indicating if the chip has overflow */
    isOverflowChip?: boolean;
    /** Flag if chip is read only */
    isReadOnly?: boolean;
    /** Function that is called when clicking on the chip button */
    onClick?: (event: React.MouseEvent) => void;
    /** Internal flag for which component will be used for chip */
    component?: React.ReactNode;
    /** Position of the tooltip which is displayed if text is longer */
    tooltipPosition?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
}
interface ChipState {
    isTooltipVisible: boolean;
}
export declare class Chip extends React.Component<ChipProps, ChipState> {
    constructor(props: ChipProps);
    span: React.RefObject<HTMLSpanElement>;
    static defaultProps: {
        closeBtnAriaLabel: string;
        className: string;
        isOverflowChip: boolean;
        isReadOnly: boolean;
        tooltipPosition: string;
        onClick: () => any;
        component: string;
    };
    componentDidMount(): void;
    renderOverflowChip: () => JSX.Element;
    renderChip: (randomId: string) => JSX.Element;
    render(): JSX.Element;
}
export {};
