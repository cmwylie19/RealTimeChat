import * as React from 'react';
import { DropdownProps } from './Dropdown';
import { DropdownPosition, DropdownDirection } from './dropdownConstants';
export declare class DropdownWithContext extends React.Component<DropdownProps> {
    openedOnEnter: boolean;
    baseComponentRef: React.RefObject<any>;
    static currentId: number;
    static defaultProps: {
        className: string;
        dropdownItems: any[];
        isOpen: boolean;
        isPlain: boolean;
        isGrouped: boolean;
        position: DropdownPosition;
        direction: DropdownDirection;
        onSelect: Function;
        autoFocus: boolean;
    };
    constructor(props: DropdownProps);
    onEnter: () => void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
