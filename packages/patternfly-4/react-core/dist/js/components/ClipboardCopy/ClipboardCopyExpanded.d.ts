import * as React from 'react';
import { ClipboardCopyProps } from './ClipboardCopy';
import { Omit } from '../../helpers/typeUtils';
export interface ClipboardCopyExpandedProps extends Omit<ClipboardCopyProps, 'onChange'> {
    className?: string;
    children: React.ReactNode;
    onChange?: (text: string, e: React.FormEvent<HTMLDivElement>) => void;
    isReadOnly: boolean;
    isCode?: boolean;
}
export declare class ClipboardCopyExpanded extends React.Component<ClipboardCopyExpandedProps> {
    contentRef: React.RefObject<HTMLDivElement>;
    constructor(props: any);
    static defaultProps: {
        onChange: () => any;
        className: string;
        isReadOnly: boolean;
        isCode: boolean;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
