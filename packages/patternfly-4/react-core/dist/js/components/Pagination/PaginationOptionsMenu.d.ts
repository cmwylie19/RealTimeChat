import * as React from 'react';
import { DropdownDirection } from '../Dropdown';
import { ToggleTemplateProps } from './ToggleTemplate';
import { PerPageOptions } from './Pagination';
export interface PaginationOptionsMenuProps extends React.HTMLProps<HTMLDivElement> {
    /** Custom class name added to the Pagination Options Menu */
    className?: string;
    /** Id added to the title of the Pagination Options Menu */
    widgetId?: string;
    /** Flag indicating if Pagination Options Menu is disabled */
    isDisabled?: boolean;
    /** Menu will open up or open down from the Options menu toggle */
    dropDirection?: 'up' | 'down';
    /** Array of titles and values which will be the options on the Options Menu dropdown */
    perPageOptions?: PerPageOptions[];
    /** The Title of the Pagination Options Menu */
    itemsPerPageTitle?: string;
    /** The suffix to be displayed after each option on the Options Menu dropdown */
    perPageSuffix?: string;
    /** The type or title of the items being paginated */
    itemsTitle?: string;
    /** The text to be displayed on the Options Toggle */
    optionsToggle?: string;
    /** The total number of items being paginated */
    itemCount?: number;
    /** The first index of the items being paginated */
    firstIndex?: number;
    /** The last index of the items being paginated */
    lastIndex?: number;
    /** The number of items to be displayed per page */
    perPage?: number;
    /** This will be shown in pagination toggle span. You can use firstIndex, lastIndex, itemCount, itemsTitle props. */
    toggleTemplate?: ((props: ToggleTemplateProps) => React.ReactElement) | string;
    /** Function called when user selects number of items per page. */
    onPerPageSelect?: (event: React.MouseEvent | React.KeyboardEvent | MouseEvent, perPage: number) => void;
}
interface PaginationOptionsMenuState {
    isOpen: boolean;
}
export declare class PaginationOptionsMenu extends React.Component<PaginationOptionsMenuProps, PaginationOptionsMenuState> {
    private parentRef;
    static defaultProps: {
        className: string;
        widgetId: string;
        isDisabled: boolean;
        dropDirection: DropdownDirection;
        perPageOptions: PerPageOptions[];
        itemsPerPageTitle: string;
        perPageSuffix: string;
        optionsToggle: string;
        perPage: number;
        firstIndex: number;
        lastIndex: number;
        itemCount: number;
        itemsTitle: string;
        toggleTemplate: ({ firstIndex, lastIndex, itemCount, itemsTitle }: ToggleTemplateProps) => JSX.Element;
        onPerPageSelect: () => any;
    };
    constructor(props: PaginationOptionsMenuProps);
    onToggle: (isOpen: boolean) => void;
    onSelect: () => void;
    renderItems: () => JSX.Element[];
    render(): JSX.Element;
}
export {};
