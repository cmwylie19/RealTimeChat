import { ChartLegendProps } from '../ChartLegend';
import { ChartThemeDefinition } from '../ChartTheme';
interface ChartLegendInterface {
    chartType?: string;
    dx?: number;
    dy?: number;
    height?: number;
    legendData: any[];
    legendOrientation: 'horizontal' | 'vertical';
    legendPosition: 'bottom' | 'bottom-left' | 'right';
    legendProps: any;
    padding?: any;
    theme: ChartThemeDefinition;
    width?: number;
}
interface ChartLegendDimensionsInterface {
    legendData: any[];
    legendOrientation: 'horizontal' | 'vertical';
    legendProps: ChartLegendProps;
    theme: ChartThemeDefinition;
}
export declare const getLegendDimensions: ({ legendData, legendOrientation, legendProps, theme }: ChartLegendDimensionsInterface) => any;
export declare const getLegendX: ({ chartType, ...rest }: ChartLegendInterface) => any;
export declare const getLegendY: ({ chartType, ...rest }: ChartLegendInterface) => any;
export declare const getBulletLegendY: ({ dy, height, legendPosition, legendData, legendOrientation, legendProps, padding, theme, width }: ChartLegendInterface) => number;
export declare const getChartLegendX: ({ dx, height, legendData, legendOrientation, legendPosition, legendProps, padding, theme, width }: ChartLegendInterface) => any;
export declare const getChartLegendY: ({ dy, height, legendPosition, legendData, legendOrientation, legendProps, padding, theme, width }: ChartLegendInterface) => any;
export declare const getPieLegendX: ({ dx, height, legendData, legendOrientation, legendPosition, legendProps, padding, theme, width }: ChartLegendInterface) => any;
export declare const getPieLegendY: ({ dy, height, legendPosition, legendData, legendOrientation, legendProps, padding, theme, width }: ChartLegendInterface) => any;
export {};
