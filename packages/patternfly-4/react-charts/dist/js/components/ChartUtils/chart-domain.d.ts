import * as React from 'react';
import { DataGetterPropType } from 'victory';
interface DomainInterface {
    data?: any;
    maxDomain?: any;
    minDomain?: any;
    x?: DataGetterPropType;
    y?: DataGetterPropType;
}
interface SourcesInterface {
    maxDomain?: any;
    minDomain?: any;
    sources?: {
        component?: React.ReactElement<any>;
        data?: any;
    }[];
}
export interface ChartDomain {
    x: [number, number];
    y: [number, number];
}
export declare const getDomain: ({ data, maxDomain, minDomain, x, y }: DomainInterface) => ChartDomain;
export declare const getDomains: ({ maxDomain, minDomain, sources }: SourcesInterface) => ChartDomain;
export {};
