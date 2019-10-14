import * as React from 'react';
export interface TooltipContentProps extends React.HTMLProps<HTMLDivElement> {
    /** PopoverContent additional class */
    className?: string;
    /** PopoverContent content */
    children: React.ReactNode;
}
export declare const TooltipContent: ({ className, children, ...props }: TooltipContentProps) => JSX.Element;
