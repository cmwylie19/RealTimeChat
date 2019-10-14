import * as React from 'react';
export interface BreadcrumbProps extends React.HTMLProps<HTMLElement> {
    /** Children nodes be rendered to the BreadCrumb. Should be of type BreadCrumbItem. */
    children?: React.ReactNode;
    /** Additional classes added to the breadcrumb nav. */
    className?: string;
    /** Aria label added to the breadcrumb nav. */
    'aria-label'?: string;
}
export declare const Breadcrumb: React.FunctionComponent<BreadcrumbProps>;
