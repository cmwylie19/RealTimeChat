import { ChartThemeDefinition } from '../../ChartTheme';
interface ChartBulletScaleInterface {
    defaultSize: number;
    height: number;
    horizontal?: boolean;
    scale?: number;
    value: number;
    width: number;
}
interface ChartBulletSizeInterface {
    height: number;
    horizontal?: boolean;
    theme?: ChartThemeDefinition;
    themeColor?: string;
    themeVariant?: string;
    width: number;
}
export declare const getComparativeMeasureErrorWidth: ({ height, horizontal, themeColor, themeVariant, width, theme, }: ChartBulletSizeInterface) => number;
export declare const getComparativeMeasureWidth: ({ height, horizontal, themeColor, themeVariant, width, theme, }: ChartBulletSizeInterface) => number;
export declare const getComparativeMeasureWarningWidth: ({ height, horizontal, themeColor, themeVariant, width, theme, }: ChartBulletSizeInterface) => number;
export declare const getPrimaryDotMeasureSize: ({ height, horizontal, themeColor, themeVariant, width, theme, }: ChartBulletSizeInterface) => number;
export declare const getPrimarySegmentedMeasureWidth: ({ height, horizontal, themeColor, themeVariant, width, theme, }: ChartBulletSizeInterface) => number;
export declare const getQualitativeRangeBarWidth: ({ height, horizontal, themeColor, themeVariant, width, theme, }: ChartBulletSizeInterface) => number;
export declare const scaleBarWidth: (props: ChartBulletScaleInterface) => number;
export declare const scaleSize: ({ value, ...rest }: ChartBulletScaleInterface) => number;
export {};
