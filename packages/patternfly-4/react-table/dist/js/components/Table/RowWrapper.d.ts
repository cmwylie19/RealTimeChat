import * as React from 'react';
export interface RowWrapperRow {
    isOpen?: Boolean;
    isExpanded?: Boolean;
}
export interface RowWrapperProps {
    trRef?: React.Ref<any> | Function;
    className?: string;
    onScroll?: React.UIEventHandler;
    onResize?: React.UIEventHandler;
    row?: RowWrapperRow;
    rowProps?: Object;
}
export declare class RowWrapper extends React.Component<RowWrapperProps, {}> {
    static defaultProps: {
        className: string;
        row: RowWrapperRow;
        rowProps: any;
    };
    _unmounted: boolean;
    constructor(props: RowWrapperProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleScroll: (event: Event) => void;
    handleResize: (event: Event) => void;
    render(): JSX.Element;
}
