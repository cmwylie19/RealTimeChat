import * as React from 'react';
import { Omit } from '../../helpers/typeUtils';
export declare const PopoverHeader: React.FunctionComponent<PopoverHeaderProps>;
export interface PopoverHeaderProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
    /** popover id */
    id: string;
    /** header node */
    children: React.ReactNode;
}
