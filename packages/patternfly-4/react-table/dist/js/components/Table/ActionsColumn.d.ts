import * as React from 'react';
import { DropdownPosition, DropdownDirection } from '@patternfly/react-core';
import { IAction, IExtraData, IRowData } from './Table';
export interface ActionsColumnProps {
    children?: React.ReactNode;
    items: IAction[];
    isDisabled?: boolean;
    dropdownPosition?: DropdownPosition;
    dropdownDirection?: DropdownDirection;
    rowData?: IRowData;
    extraData?: IExtraData;
}
export interface ActionsColumnState {
    isOpen: boolean;
}
export declare class ActionsColumn extends React.Component<ActionsColumnProps, ActionsColumnState> {
    static defaultProps: {
        children: React.ReactNode;
        items: IAction[];
        dropdownPosition: DropdownPosition;
        dropdownDirection: DropdownDirection;
        rowData: IRowData;
        extraData: IExtraData;
    };
    constructor(props: ActionsColumnProps);
    onToggle: (isOpen: boolean) => void;
    onSelect: (event: MouseEvent | React.MouseEvent<any, MouseEvent> | React.KeyboardEvent<Element>, onClick: (event: React.MouseEvent<Element, MouseEvent>, rowIndex: number, rowData: IRowData, extraData: IExtraData) => void) => void;
    render(): JSX.Element;
}
