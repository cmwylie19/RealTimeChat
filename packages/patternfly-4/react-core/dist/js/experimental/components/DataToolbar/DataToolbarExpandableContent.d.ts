import * as React from 'react';
import { RefObject } from 'react';
export interface DataToolbarExpandableContentProps extends React.HTMLProps<HTMLDivElement> {
    /** Classes added to the root element of the Data toolbar expandable content */
    className?: string;
    /** Flag indicating the expandable content is expanded */
    isExpanded?: boolean;
    /** Expandable content reference for passing to Data toolbar children */
    expandableContentRef: RefObject<HTMLDivElement>;
}
export declare const DataToolbarExpandableContent: React.FunctionComponent<DataToolbarExpandableContentProps>;
