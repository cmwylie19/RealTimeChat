interface ChartBulletThemeInterface {
    comparativeErrorMeasureData?: any[];
    comparativeErrorMeasureLegendData?: any[];
    comparativeWarningMeasureData?: any[];
    comparativeWarningMeasureLegendData?: any[];
    invert?: boolean;
    primaryDotMeasureData?: any[];
    primaryDotMeasureLegendData?: any[];
    primarySegmentedMeasureData?: any[];
    primarySegmentedMeasureLegendData?: any[];
    qualitativeRangeData?: any[];
    qualitativeRangeLegendData?: any[];
    themeColor?: string;
    themeVariant?: string;
}
export declare const getColorScale: ({ comparativeErrorMeasureData, comparativeErrorMeasureLegendData, comparativeWarningMeasureData, comparativeWarningMeasureLegendData, invert, primaryDotMeasureData, primaryDotMeasureLegendData, primarySegmentedMeasureData, primarySegmentedMeasureLegendData, qualitativeRangeData, qualitativeRangeLegendData, themeColor, themeVariant }: ChartBulletThemeInterface) => any[];
export declare const getBulletThemeWithLegendColorScale: ({ comparativeErrorMeasureData, comparativeErrorMeasureLegendData, comparativeWarningMeasureData, comparativeWarningMeasureLegendData, invert, primaryDotMeasureData, primaryDotMeasureLegendData, primarySegmentedMeasureData, primarySegmentedMeasureLegendData, qualitativeRangeData, qualitativeRangeLegendData, themeColor, themeVariant }: ChartBulletThemeInterface) => import("../../ChartTheme").ChartThemeDefinitionInterface;
export {};
