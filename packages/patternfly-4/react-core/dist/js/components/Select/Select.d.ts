import * as React from 'react';
import { SelectOptionObject } from './SelectOption';
import { SelectVariant, SelectDirection } from './selectConstants';
import { Omit } from '../../helpers/typeUtils';
export interface SelectProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onSelect' | 'ref' | 'checked' | 'selected'> {
    /** Content rendered inside the Select */
    children: React.ReactElement[];
    /** Classes applied to the root of the Select */
    className?: string;
    /** Flag specifying which direction the Select menu expands */
    direction?: 'up' | 'down';
    /** Flag to indicate if select is expanded */
    isExpanded?: boolean;
    /** Flag to indicate if select options are grouped */
    isGrouped?: boolean;
    /** Display the toggle with no border or background */
    isPlain?: boolean;
    /** Flag to indicate if select is disabled */
    isDisabled?: boolean;
    /** Flag to indicate if the typeahead select allows new items */
    isCreatable?: boolean;
    /** Text displayed in typeahead select to prompt the user to create an item */
    createText?: string;
    /** Title text of Select */
    placeholderText?: string | React.ReactNode;
    /** Text to display in typeahead select when no results are found **/
    noResultsFoundText?: string;
    /** Selected item */
    selections?: string | SelectOptionObject | (string | SelectOptionObject)[];
    /** Id for select toggle element */
    toggleId?: string;
    /** Adds accessible text to Select */
    'aria-label'?: string;
    /** Id of label for the Select aria-labelledby */
    ariaLabelledBy?: string;
    /** Label for input field of type ahead select variants */
    ariaLabelTypeAhead?: string;
    /** Label for clear selection button of type ahead select variants */
    ariaLabelClear?: string;
    /** Label for toggle of type ahead select variants */
    ariaLabelToggle?: string;
    /** Label for remove chip button of multiple type ahead select variant */
    ariaLabelRemove?: string;
    /** Callback for selection behavior */
    onSelect?: (event: React.MouseEvent | React.ChangeEvent, value: string | SelectOptionObject, isPlaceholder?: boolean) => void;
    /** Callback for toggle button behavior */
    onToggle: (isExpanded: boolean) => void;
    /** Callback for typeahead clear button */
    onClear?: (event: React.MouseEvent) => void;
    /** Optional callback for custom filtering */
    onFilter?: (e: React.ChangeEvent<HTMLInputElement>) => React.ReactElement[];
    /** Optional callback for newly created options */
    onCreateOption?: (newOptionValue: string) => void;
    /** Variant of rendered Select */
    variant?: 'single' | 'checkbox' | 'typeahead' | 'typeaheadmulti';
    /** Width of the select container as a number of px or string percentage */
    width?: string | number;
    /** Max height of the select container as a number of px or string percentage */
    maxHeight?: string | number;
    /** Icon element to render inside the select toggle */
    toggleIcon?: React.ReactElement;
}
export interface SelectState {
    openedOnEnter: boolean;
    typeaheadInputValue: string;
    typeaheadActiveChild?: HTMLElement;
    typeaheadFilteredChildren: React.ReactNode[];
    typeaheadCurrIndex: number;
    creatableValue: string;
}
export declare class Select extends React.Component<SelectProps, SelectState> {
    private parentRef;
    private refCollection;
    static defaultProps: {
        "children": React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>[];
        "className": string;
        "direction": SelectDirection;
        "toggleId": string;
        "isExpanded": boolean;
        "isGrouped": boolean;
        "isPlain": boolean;
        "isDisabled": boolean;
        "isCreatable": boolean;
        "aria-label": string;
        "ariaLabelledBy": string;
        "ariaLabelTypeAhead": string;
        "ariaLabelClear": string;
        "ariaLabelToggle": string;
        "ariaLabelRemove": string;
        "selections": string;
        "createText": string;
        "placeholderText": string;
        "noResultsFoundText": string;
        "variant": SelectVariant;
        "width": string;
        "maxHeight": string;
        "onClear": Function;
        "onCreateOption": Function;
        "toggleIcon": React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
        "onFilter": () => {};
    };
    state: {
        openedOnEnter: boolean;
        typeaheadInputValue: string;
        typeaheadActiveChild: HTMLElement;
        typeaheadFilteredChildren: React.ReactNode[];
        typeaheadCurrIndex: number;
        creatableValue: string;
    };
    componentDidUpdate: (prevProps: SelectProps, prevState: SelectState) => void;
    onEnter: () => void;
    onClose: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: React.MouseEvent<Element, MouseEvent>) => void;
    clearSelection: (e: React.MouseEvent<Element, MouseEvent>) => void;
    extendTypeaheadChildren(typeaheadActiveChild: HTMLElement): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>[];
    sendRef: (ref: React.ReactNode, index: number) => void;
    handleArrowKeys: (index: number, position: string) => void;
    handleFocus: () => void;
    handleTypeaheadKeys: (position: string) => void;
    getDisplay: (value: string | SelectOptionObject, type?: "text" | "node") => any;
    findText: (item: React.ReactElement) => string;
    render(): JSX.Element;
}
