interface ColorThemeInterface {
    COLOR_SCALE: string[];
}
export declare const ColorTheme: (props: ColorThemeInterface) => {
    area: {
        colorScale: string[];
        style: {
            data: {
                fill: string;
            };
        };
    };
    axis: {
        colorScale: string[];
    };
    bar: {
        colorScale: string[];
        style: {
            data: {
                fill: string;
            };
        };
    };
    boxplot: {
        colorScale: string[];
    };
    candlestick: {
        colorScale: string[];
    };
    chart: {
        colorScale: string[];
    };
    errorbar: {
        colorScale: string[];
    };
    group: {
        colorScale: string[];
    };
    legend: {
        colorScale: string[];
    };
    line: {
        colorScale: string[];
        style: {
            data: {
                stroke: string;
            };
        };
    };
    pie: {
        colorScale: string[];
    };
    scatter: {
        colorScale: string[];
    };
    stack: {
        colorScale: string[];
    };
    voronoi: {
        colorScale: string[];
    };
};
export {};
