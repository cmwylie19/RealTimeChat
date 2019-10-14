/**
 * provider.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import * as React from 'react';
import { RenderersTypes, ColumnsType } from './types';
export interface ProviderProps extends RenderersTypes {
    children?: React.ReactNode;
    role?: string;
    className?: string;
}
export declare const ProviderContext: React.Context<{
    columns: ColumnsType;
    renderers: {
        table?: string;
        header?: import("./types").RendererType;
        body?: import("./types").RendererType;
    };
}>;
export declare class Provider extends React.Component<ProviderProps, {}> {
    static defaultProps: {
        renderers: {
            table: string;
            header: {
                wrapper: string;
                row: string;
                cell: string;
            };
            body: {
                wrapper: string;
                row: string;
                cell: string;
            };
        };
    };
    render(): JSX.Element;
}
