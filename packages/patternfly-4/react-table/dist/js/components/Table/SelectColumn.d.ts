import * as React from 'react';
export interface SelectColumnProps {
    name?: string;
    children?: React.ReactNode;
    className?: string;
    onSelect?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const SelectColumn: React.FunctionComponent<SelectColumnProps>;
