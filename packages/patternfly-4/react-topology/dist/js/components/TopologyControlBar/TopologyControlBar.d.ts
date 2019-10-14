import * as React from 'react';
import '@patternfly/react-styles/css/components/Topology/topology-controlbar.css';
export declare const ZOOM_IN = "zoom-in";
export declare const ZOOM_OUT = "zoom-out";
export declare const FIT_TO_SCREEN = "fit-to-screen";
export declare const RESET_VIEW = "reset-view";
export declare const LEGEND = "legend";
export interface TopologyControlButton {
    id: any;
    icon: React.ReactNode;
    tooltip?: React.ReactNode;
    ariaLabel?: string;
    callback?: (id: any) => void;
    disabled?: boolean;
    hidden?: boolean;
}
export interface TopologyControlButtonsOptions {
    zoomIn: boolean;
    zoomInIcon: React.ReactNode;
    zoomInTip: React.ReactNode;
    zoomInAriaLabel: string;
    zoomInCallback: (id: any) => void;
    zoomInDisabled: boolean;
    zoomInHidden: boolean;
    zoomOut: boolean;
    zoomOutIcon: React.ReactNode;
    zoomOutTip: React.ReactNode;
    zoomOutAriaLabel: string;
    zoomOutCallback: (id: any) => void;
    zoomOutDisabled: boolean;
    zoomOutHidden: boolean;
    fitToScreen: boolean;
    fitToScreenIcon: React.ReactNode;
    fitToScreenTip: React.ReactNode;
    fitToScreenAriaLabel: string;
    fitToScreenCallback: (id: any) => void;
    fitToScreenDisabled: boolean;
    fitToScreenHidden: boolean;
    resetView: boolean;
    resetViewIcon: React.ReactNode;
    resetViewTip: React.ReactNode;
    resetViewAriaLabel: string;
    resetViewCallback: (id: any) => void;
    resetViewDisabled: boolean;
    resetViewHidden: boolean;
    legend: boolean;
    legendIcon: React.ReactNode;
    legendTip: string;
    legendAriaLabel: string;
    legendCallback: (id: any) => void;
    legendDisabled: boolean;
    legendHidden: boolean;
    customButtons: TopologyControlButton[];
}
export declare const defaultControlButtonsOptions: TopologyControlButtonsOptions;
export declare const createTopologyControlButtons: ({ zoomIn, zoomInIcon, zoomInTip, zoomInAriaLabel, zoomInCallback, zoomInDisabled, zoomInHidden, zoomOut, zoomOutIcon, zoomOutTip, zoomOutAriaLabel, zoomOutCallback, zoomOutDisabled, zoomOutHidden, fitToScreen, fitToScreenIcon, fitToScreenTip, fitToScreenAriaLabel, fitToScreenCallback, fitToScreenDisabled, fitToScreenHidden, resetView, resetViewIcon, resetViewTip, resetViewAriaLabel, resetViewCallback, resetViewDisabled, resetViewHidden, legend, legendIcon, legendTip, legendAriaLabel, legendCallback, legendDisabled, legendHidden, customButtons, }?: TopologyControlButtonsOptions) => TopologyControlButton[];
export interface TopologyControlBarProps extends React.HTMLProps<HTMLDivElement> {
    /** Additional classes added to the control bar */
    className?: string;
    /** Any extra child nodes (placed after the buttons) */
    children?: React.ReactNode;
    /** Buttons to be added to the bar */
    controlButtons?: TopologyControlButton[];
    /** Callback when any button is clicked, id of the clicked button is passed */
    onButtonClick?: (id: any) => void;
}
export declare const TopologyControlBar: React.FunctionComponent<TopologyControlBarProps>;
