import * as React from 'react';
import { Omit } from '../../helpers/typeUtils';
export interface OptionsMenuItemProps extends Omit<React.HTMLProps<HTMLAnchorElement>, 'onSelect' | 'onClick' | 'onKeyDown' | 'type'> {
    /** Anything which can be rendered as an Options menu item */
    children?: React.ReactNode;
    /** Classes applied to root element of an Options menu item */
    className?: string;
    /** Render Options menu item as selected */
    isSelected?: boolean;
    /** Render Options menu item as disabled option */
    isDisabled?: boolean;
    /** Callback for when this Options menu item is selected */
    onSelect?: (event?: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent) => void;
    /** Unique id of this Options menu item */
    id?: string;
}
export declare const OptionsMenuItem: React.FunctionComponent<OptionsMenuItemProps>;
