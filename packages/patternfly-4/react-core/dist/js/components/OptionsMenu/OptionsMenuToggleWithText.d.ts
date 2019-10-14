import * as React from 'react';
export interface OptionsMenuToggleWithTextProps extends React.HTMLProps<HTMLDivElement> {
    /** Id of the parent Options menu component */
    parentId?: string;
    /** Content to be rendered inside the Options menu toggle as text or another non-interactive element */
    toggleText: React.ReactNode;
    /** classes to be added to the Options menu toggle text */
    toggleTextClassName?: string;
    /** Content to be rendered inside the Options menu toggle button */
    toggleButtonContents?: React.ReactNode;
    /** Classes to be added to the Options menu toggle button */
    toggleButtonContentsClassName?: string;
    /** Callback for when this Options menu is toggled */
    onToggle?: (event: boolean) => void;
    /** Inner function to indicate open on Enter */
    onEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** Flag to indicate if menu is open */
    isOpen?: boolean;
    /** Flag to indicate if the button is plain */
    isPlain?: boolean;
    /** Forces display of the focused state of the Options menu button */
    isFocused?: boolean;
    /** Forces display of the hover state of the Options menu button */
    isHovered?: boolean;
    /** Forces display of the active state of the Options menu button */
    isActive?: boolean;
    /** Disables the options menu toggle */
    isDisabled?: boolean;
    /** Internal parent reference */
    parentRef?: HTMLElement;
    /** Indicates that the element has a popup context menu or sub-level menu */
    ariaHasPopup?: boolean | 'dialog' | 'menu' | 'false' | 'true' | 'listbox' | 'tree' | 'grid';
    /** Provides an accessible name for the button when an icon is used instead of text */
    'aria-label'?: string;
}
export declare const OptionsMenuToggleWithText: React.FunctionComponent<OptionsMenuToggleWithTextProps>;
