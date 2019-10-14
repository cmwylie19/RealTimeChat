import { DataGetterPropType } from 'victory';
import { ChartThemeDefinition } from '../../ChartTheme';
interface ChartBulletDataInterface {
    data?: any[];
    invert?: boolean;
    negativeMeasureTheme?: ChartThemeDefinition;
    theme?: ChartThemeDefinition;
    themeColor?: string;
    themeVariant?: string;
    y?: DataGetterPropType;
    y0?: DataGetterPropType;
}
export declare const getComparativeErrorMeasureData: ({ data, themeColor, themeVariant, theme, y }: ChartBulletDataInterface) => any[];
export declare const getComparativeMeasureData: ({ data, themeColor, themeVariant, theme, y }: ChartBulletDataInterface) => any[];
export declare const getComparativeWarningMeasureData: ({ data, themeColor, themeVariant, theme, y }: ChartBulletDataInterface) => any[];
export declare const getPrimaryDotMeasureData: ({ data, invert, themeColor, themeVariant, theme, y, y0 }: ChartBulletDataInterface) => any[];
export declare const getPrimarySegmentedMeasureData: ({ data, invert, themeColor, themeVariant, theme, negativeMeasureTheme, y, y0 }: ChartBulletDataInterface) => any[];
export declare const getQualitativeRangeData: ({ data, invert, themeColor, themeVariant, theme, y, y0 }: ChartBulletDataInterface) => any[];
export {};
