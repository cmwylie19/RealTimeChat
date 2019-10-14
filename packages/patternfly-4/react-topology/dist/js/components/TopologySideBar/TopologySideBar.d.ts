import * as React from 'react';
import '@patternfly/react-styles/css/components/Topology/topology-side-bar.css';
export interface TopologySideBarProps extends React.HTMLProps<HTMLDivElement> {
    /** Additional classes added to the sidebar */
    className?: string;
    /** Contents for the sidebar */
    children?: React.ReactNode;
    /** Flag if sidebar is open */
    show?: boolean;
    /** A callback for closing the sidebar, if provided the close button will be displayed in the sidebar */
    onClose?: () => void;
    /** Component to place in the header of the sidebar */
    header?: React.ReactNode;
}
interface TopologySideBarState {
    isIn: boolean;
}
export declare class TopologySideBar extends React.Component<TopologySideBarProps, TopologySideBarState> {
    timer: any;
    constructor(props: TopologySideBarProps);
    componentWillUnmount(): void;
    updateForTransitions: () => void;
    startTimer: () => void;
    clearTimer: () => void;
    render(): JSX.Element;
}
export {};
