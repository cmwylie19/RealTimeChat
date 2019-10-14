import * as React from 'react';
import { Omit } from '../../helpers/typeUtils';
export declare const OuiaContext: React.Context<OuiaContextProps>;
export interface InjectedOuiaProps {
    ouiaContext?: OuiaContextProps;
    ouiaId?: number | string;
}
export interface OuiaContextProps {
    isOuia?: boolean;
    ouiaId?: number | string;
}
export declare function withOuiaContext<P extends {
    ouiaContext?: OuiaContextProps;
}, R = Omit<P, 'ouiaContext'>>(WrappedComponent: React.ComponentClass<P> | React.FunctionComponent<P>): React.FunctionComponent<R>;
