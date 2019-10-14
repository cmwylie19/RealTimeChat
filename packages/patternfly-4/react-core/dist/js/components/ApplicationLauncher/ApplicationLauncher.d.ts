import * as React from 'react';
import { DropdownDirection, DropdownPosition } from '../Dropdown';
export interface ApplicationLauncherProps extends React.HTMLProps<HTMLDivElement> {
    /** Additional element css classes */
    className?: string;
    /** Display menu above or below dropdown toggle */
    direction?: DropdownDirection;
    /**
     * @deprecated
     * Use the items prop instead
     *
     * Array of DropdownItem nodes that will be rendered in the dropdown Menu list
     */
    dropdownItems?: React.ReactNode[];
    /** Array of application launcher items */
    items?: React.ReactNode[];
    /** Render Application launcher toggle as disabled icon */
    isDisabled?: boolean;
    /** open bool */
    isOpen?: boolean;
    /** Indicates where menu will be alligned horizontally */
    position?: DropdownPosition;
    /** Function callback called when user selects item */
    onSelect?: (event: any) => void;
    /** Callback called when application launcher toggle is clicked */
    onToggle?: (value: boolean) => void;
    /** Adds accessible text to the button. Required for plain buttons */
    'aria-label'?: string;
    /** Flag to indicate if application launcher has groups */
    isGrouped?: boolean;
    /** Toggle Icon, optional to override the icon used for the toggle */
    toggleIcon?: React.ReactNode;
}
export declare class ApplicationLauncher extends React.Component<ApplicationLauncherProps> {
    static defaultProps: {
        "className": string;
        "isDisabled": boolean;
        "direction": DropdownDirection;
        "dropdownItems": React.ReactNode[];
        "items": React.ReactNode[];
        "isOpen": boolean;
        "position": DropdownPosition;
        "onSelect": (_event: any) => any;
        "onToggle": (_value: boolean) => any;
        'aria-label': string;
        "isGrouped": boolean;
        "toggleIcon": JSX.Element;
    };
    render(): JSX.Element;
}
