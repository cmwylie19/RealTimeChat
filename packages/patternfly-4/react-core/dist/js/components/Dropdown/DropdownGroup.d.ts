import * as React from 'react';
import { Omit } from '../../helpers/typeUtils';
export interface DropdownGroupProps extends Omit<React.HTMLProps<HTMLDivElement>, 'label'> {
    /** Checkboxes within group */
    children?: React.ReactNode;
    /** Additional classes added to the DropdownGroup control */
    className?: string;
    /** Group label */
    label?: React.ReactNode;
}
export declare const DropdownGroup: React.FunctionComponent<DropdownGroupProps>;
