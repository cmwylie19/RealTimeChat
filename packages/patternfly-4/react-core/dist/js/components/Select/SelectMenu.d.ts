import * as React from 'react';
import { SelectOptionObject } from './SelectOption';
import { Omit } from '../../helpers/typeUtils';
export interface SelectMenuProps extends Omit<React.HTMLProps<HTMLElement>, 'checked' | 'selected' | 'ref'> {
    /** Content rendered inside the SelectMenu */
    children: React.ReactElement[];
    /** Additional classes added to the SelectMenu control */
    className?: string;
    /** Flag indicating the Select is expanded */
    isExpanded: boolean;
    /** Flag indicating the Select options are grouped */
    isGrouped?: boolean;
    /** Currently selected option (for single, typeahead variants) */
    selected?: string | SelectOptionObject | (string | SelectOptionObject)[];
    /** Currently checked options (for checkbox variant) */
    checked?: (string | SelectOptionObject)[];
    /** Internal flag for specifiying how the menu was opened */
    openedOnEnter?: boolean;
    /** Flag to specify the  maximum height of the menu, as a string percentage or number of pixels */
    maxHeight?: string | number;
    /** Internal callback for ref tracking */
    sendRef?: (ref: React.ReactNode, index: number) => void;
    /** Internal callback for keyboard navigation */
    keyHandler?: (index: number, position: string) => void;
}
export declare class SelectMenu extends React.Component<SelectMenuProps> {
    static defaultProps: {
        className: string;
        isExpanded: boolean;
        isGrouped: boolean;
        openedOnEnter: boolean;
        selected: string;
        maxHeight: string;
        sendRef: Function;
        keyHandler: Function;
    };
    extendChildren(): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>[];
    cloneOption(child: React.ReactElement, index: number): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
    extendCheckboxChildren(props: any): JSX.Element | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>[];
    render(): JSX.Element;
}
