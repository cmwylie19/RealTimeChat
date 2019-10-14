import { VictoryThemeDefinition } from 'victory';
export interface ChartThemeDefinitionInterface extends VictoryThemeDefinition {
    area?: any;
    axis?: any;
    bar?: any;
    boxplot?: any;
    candlestick?: any;
    chart?: any;
    errorbar?: any;
    group?: any;
    legend?: any;
    line?: any;
    pie?: any;
    scatter?: any;
    stack?: any;
    tooltip?: any;
    voronoi?: any;
}
interface ChartThemeColorInterface {
    blue: string;
    cyan: string;
    default: string;
    gold: string;
    gray: string;
    green: string;
    multi: string;
    multiOrdered: string;
    multiUnordered: string;
    orange: string;
    purple: string;
}
interface ChartThemeVariantInterface {
    dark: string;
    default: string;
    light: string;
}
/**
 * The color family to be applied to a theme. For example, 'blue' represents an ordered list of colors
 * (i.e., a color scale) composed from the blue color family defined by PatternFly core.
 *
 * For example, the 'blue' color scale looks like:
 *
 * chart_color_blue_100
 * chart_color_blue_200
 * chart_color_blue_300
 * chart_color_blue_400
 * chart_color_blue_500
 *
 * In this case, the chart_color_blue_100 value would be applied to the first data point in a chart.
 * The chart_color_blue_200 value would be applied to the second data point in a chart. And so on...
 *
 * If legend data is provided to a chart, those colors would be synced with the legend as well.
 *
 * The 'multiOrdered' color family is intended for ordered charts; donut, pie, bar, & stack
 * The 'multiUnordered' color family is intended for unordered charts; area & line
 * The 'multi' defaults to the 'multiOrdered' color family
 *
 * Note: These values are not intended to be applied directly as a component's fill style. For example, "multi" would
 * not be a valid fill color. Please use chart variables from PatternFly core (e.g., via the react-charts package)
 */
export declare const ChartThemeColor: ChartThemeColorInterface;
/**
 * The variant to be applied to a theme.
 *
 * Note: Only the light variant is currently supported
 */
export declare const ChartThemeVariant: ChartThemeVariantInterface;
export declare type ChartThemeDefinition = ChartThemeDefinitionInterface;
export declare const ChartAxisTheme: ChartThemeDefinition;
export declare const ChartBaseTheme: ChartThemeDefinition;
export declare const ChartBulletComparativeErrorMeasureTheme: ChartThemeDefinition;
export declare const ChartBulletComparativeMeasureTheme: ChartThemeDefinition;
export declare const ChartBulletComparativeWarningMeasureTheme: ChartThemeDefinition;
export declare const ChartBulletGroupTitleTheme: ChartThemeDefinition;
export declare const ChartBulletPrimaryDotMeasureTheme: ChartThemeDefinition;
export declare const ChartBulletPrimaryNegativeMeasureTheme: ChartThemeDefinition;
export declare const ChartBulletPrimarySegmentedMeasureTheme: ChartThemeDefinition;
export declare const ChartBulletTheme: ChartThemeDefinition;
export declare const ChartBulletQualitativeRangeTheme: ChartThemeDefinition;
export declare const ChartDonutUtilizationDynamicTheme: ChartThemeDefinition;
export declare const ChartDonutUtilizationStaticTheme: ChartThemeDefinition;
export declare const ChartDonutTheme: ChartThemeDefinition;
export declare const ChartDonutThresholdDynamicTheme: ChartThemeDefinition;
export declare const ChartDonutThresholdStaticTheme: ChartThemeDefinition;
export declare const ChartThresholdTheme: ChartThemeDefinition;
export {};
