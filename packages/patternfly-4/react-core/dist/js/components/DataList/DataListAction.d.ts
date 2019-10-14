import * as React from 'react';
import { Omit } from '../../helpers/typeUtils';
export declare const DataListActionVisibility: {};
export interface DataListActionProps extends Omit<React.HTMLProps<HTMLDivElement>, 'children'> {
    /** Content rendered as DataList Action  (e.g <Button> or <Dropdown>) */
    children: React.ReactNode;
    /** Additional classes added to the DataList Action */
    className?: string;
    /** Identify the DataList toggle number */
    id: string;
    /** Adds accessible text to the DataList Action */
    'aria-labelledby': string;
    /** Adds accessible text to the DataList Action */
    'aria-label': string;
}
interface DataListActionState {
    isOpen: boolean;
}
export declare class DataListAction extends React.Component<DataListActionProps, DataListActionState> {
    static defaultProps: {
        className: string;
    };
    constructor(props: DataListActionProps);
    onToggle: (isOpen: boolean) => void;
    onSelect: (event: MouseEvent) => void;
    render(): JSX.Element;
}
export {};
