import * as React from 'react';
export interface ChipGroupToolbarItemProps extends React.HTMLProps<HTMLUListElement> {
    /**  Category name text */
    categoryName?: string;
    /** Content rendered inside the chip text */
    children: React.ReactNode;
    /** Additional classes added to the chip item */
    className?: string;
}
export declare const ChipGroupToolbarItem: React.FunctionComponent<ChipGroupToolbarItemProps>;
