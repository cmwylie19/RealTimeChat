import * as React from 'react';
export interface DataToolbarProps extends React.HTMLProps<HTMLDivElement> {
    /** Classes applied to root element of the Data toolbar */
    className?: string;
    /** Content to be rendered as rows in the Data toolbar */
    children?: React.ReactNode;
    /** Flag indicating if a Data toolbar toggle group's expandable content is expanded */
    isExpanded?: boolean;
    /** A callback for setting the isExpanded flag */
    toggleIsExpanded?: () => void;
    /** Id of the Data toolbar */
    id: string;
}
export interface DataToolbarState {
    /** Flag indicating the if the expandable content's expanded state is consumer managed or not */
    isConsumerManagedToggleGroup: boolean;
    /** Flag indicating if the component managed state has expanded content or not */
    componentManagedIsExpanded: boolean;
}
export declare class DataToolbar extends React.Component<DataToolbarProps, DataToolbarState> {
    private expandableContentRef;
    static defaultProps: {
        isExpanded: boolean;
    };
    constructor(props: DataToolbarProps);
    toggleIsExpanded: () => void;
    closeExpandableContent: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
