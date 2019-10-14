import * as React from 'react';
import { DropdownItemProps } from '../Dropdown';
export declare const ApplicationLauncherItemContext: React.Context<{
    isExternal: boolean;
    icon: any;
}>;
export interface ApplicationLauncherItemProps {
    /** Icon rendered before the text */
    icon?: React.ReactNode;
    /** If clicking on the item should open the page in a separate window */
    isExternal?: boolean;
    /** Tooltip to display when hovered over the item */
    tooltip?: React.ReactNode;
    /** Additional tooltip props forwarded to the Tooltip component */
    tooltipProps?: any;
    /** The component that will wrap the item.
     * If you need to render a custom component, for example a react router Link component,
     * then pass the component here. Example:
     * <ApplicationLauncherItem key="router1" component={
     *   <Link to="/components/alert/">
     *     <ApplicationLauncherContent>Router link</ApplicationLauncherContent>
     *   </Link>
     * } />
     */
    component?: React.ReactNode;
}
export declare const ApplicationLauncherItem: React.FunctionComponent<ApplicationLauncherItemProps & DropdownItemProps>;
