import * as React from 'react';
export interface BodyCellProps {
    'data-label'?: string;
    className?: string;
    colSpan?: number;
    component?: React.ReactNode;
    isVisible?: boolean;
    parentId?: number;
    textCenter?: boolean;
    isOpen?: boolean;
    ariaControls?: string;
}
export declare const BodyCell: React.FunctionComponent<BodyCellProps>;
