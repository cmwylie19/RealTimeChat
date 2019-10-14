import * as React from 'react';
export interface HeaderCellProps {
    'data-label'?: string;
    className?: string;
    component?: React.ReactNode;
    isVisible?: boolean;
    scope?: string;
    textCenter?: boolean;
}
export declare const HeaderCell: React.FunctionComponent<HeaderCellProps>;
