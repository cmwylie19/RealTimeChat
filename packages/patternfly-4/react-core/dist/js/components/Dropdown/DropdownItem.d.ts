import * as React from 'react';
import { InternalDropdownItemProps } from './InternalDropdownItem';
export interface DropdownItemProps extends InternalDropdownItemProps {
    /** Anything which can be rendered as dropdown item */
    children?: React.ReactNode;
    /** Classes applied to root element of dropdown item */
    className?: string;
    /** Indicates which component will be used as dropdown item */
    component?: React.ReactNode;
    /** Render dropdown item as disabled option */
    isDisabled?: boolean;
    /** Forces display of the hover state of the element */
    isHovered?: boolean;
    /** Default hyperlink location */
    href?: string;
    /** Tooltip to display when hovered over the item */
    tooltip?: React.ReactNode;
    /** Additional tooltip props forwarded to the Tooltip component */
    tooltipProps?: any;
}
export declare const DropdownItem: React.FunctionComponent<DropdownItemProps>;
