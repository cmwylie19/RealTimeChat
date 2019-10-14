import * as React from "react";
import { ChartDomain } from '../../ChartUtils';
interface ChartBulletDomainInterface {
    comparativeErrorMeasureComponent?: React.ReactElement<any>;
    comparativeErrorMeasureData?: any[];
    comparativeWarningMeasureComponent?: React.ReactElement<any>;
    comparativeWarningMeasureData?: any[];
    primaryDotMeasureComponent?: React.ReactElement<any>;
    primaryDotMeasureData?: any[];
    primarySegmentedMeasureComponent?: React.ReactElement<any>;
    primarySegmentedMeasureData?: any[];
    maxDomain?: any;
    minDomain?: any;
    qualitativeRangeComponent?: React.ReactElement<any>;
    qualitativeRangeData?: any[];
}
export declare const getBulletDomain: ({ comparativeErrorMeasureComponent, comparativeErrorMeasureData, comparativeWarningMeasureComponent, comparativeWarningMeasureData, primaryDotMeasureComponent, primaryDotMeasureData, primarySegmentedMeasureComponent, primarySegmentedMeasureData, maxDomain, minDomain, qualitativeRangeComponent, qualitativeRangeData }: ChartBulletDomainInterface) => ChartDomain;
export {};
