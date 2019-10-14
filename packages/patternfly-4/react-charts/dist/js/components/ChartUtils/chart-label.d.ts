import { ChartThemeDefinition } from '../ChartTheme';
interface ChartBulletLabelInterface {
    dx?: number;
    dy?: number;
    chartHeight?: number;
    chartWidth?: number;
    labelPosition?: 'bottom' | 'left' | 'top' | 'top-left';
    legendPosition?: 'bottom' | 'bottom-left' | 'right';
    svgHeight?: number;
    svgWidth?: number;
    width?: number;
}
interface ChartPieLabelInterface {
    dx?: number;
    dy?: number;
    height: number;
    labelPosition?: 'bottom' | 'center' | 'right';
    legendPosition?: 'bottom' | 'right';
    padding: any;
    width: number;
}
interface ChartLabelTextSizeInterface {
    text: any;
    theme: ChartThemeDefinition;
}
export declare const getBulletLabelX: ({ chartWidth, dx, labelPosition }: ChartBulletLabelInterface) => number;
export declare const getBulletLabelY: ({ chartHeight, dy, labelPosition }: ChartBulletLabelInterface) => number;
export declare const getPieLabelX: ({ dx, height, labelPosition, legendPosition, padding, width }: ChartPieLabelInterface) => any;
export declare const getPieLabelY: ({ dy, height, labelPosition, padding, width }: ChartPieLabelInterface) => any;
export declare const overpassFontCharacterConstant = 2.5875;
export declare const getLabelTextSize: ({ text, theme }: ChartLabelTextSizeInterface) => {
    height: number;
    width: number;
};
export {};
