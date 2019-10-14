export declare const BaseTheme: {
    area: {
        style: {
            data: {
                fill: "#151515";
                fillOpacity: 0.3;
                strokeWidth: 2;
            };
            labels: {
                textAnchor: "middle";
                fontFamily: "var(--pf-chart-global--FontFamily)";
                fontSize: 14;
                letterSpacing: "var(--pf-chart-global--letter-spacing)";
                padding: 10;
                stroke: "transparent";
            };
        };
        padding: 50;
        height: 300;
        width: 450;
    };
    axis: {
        style: {
            axis: {
                fill: "transparent";
                strokeWidth: 1;
                stroke: "#d2d2d2";
                strokeLinecap: "round";
                strokeLinejoin: "round";
            };
            axisLabel: {
                padding: 40;
                stroke: "transparent";
                textAnchor: "middle";
                fontFamily: "var(--pf-chart-global--FontFamily)";
                fontSize: 14;
                letterSpacing: "var(--pf-chart-global--letter-spacing)";
            };
            grid: {
                fill: "none";
                stroke: string;
                pointerEvents: "painted";
                strokeLinecap: "round";
                strokeLinejoin: "round";
            };
            ticks: {
                fill: "transparent";
                size: 5;
                stroke: "#d2d2d2";
                strokeLinecap: "round";
                strokeLinejoin: "round";
                strokeWidth: 1;
            };
            tickLabels: {
                fill: "#4f5255";
                fontFamily: "var(--pf-chart-global--FontFamily)";
                fontSize: 14;
                letterSpacing: "var(--pf-chart-global--letter-spacing)";
                padding: 10;
                stroke: "transparent";
            };
        };
        padding: 50;
        height: 300;
        width: 450;
    };
    bar: {
        barWidth: 10;
        style: {
            data: {
                fill: "#151515";
                padding: 8;
                stroke: "none";
                strokeWidth: 0;
            };
            labels: {
                fontFamily: "var(--pf-chart-global--FontFamily)";
                fontSize: 14;
                letterSpacing: "var(--pf-chart-global--letter-spacing)";
                padding: 10;
                stroke: "transparent";
            };
        };
        padding: 50;
        height: 300;
        width: 450;
    };
    boxplot: {
        style: {
            max: {
                padding: 8;
                stroke: "#151515";
                strokeWidth: 1;
            };
            maxLabels: {
                fontFamily: "var(--pf-chart-global--FontFamily)";
                fontSize: 14;
                letterSpacing: "var(--pf-chart-global--letter-spacing)";
                padding: 10;
                stroke: "transparent";
            };
            median: {
                padding: 8;
                stroke: "#151515";
                strokeWidth: 1;
            };
            medianLabels: {
                fontFamily: "var(--pf-chart-global--FontFamily)";
                fontSize: 14;
                letterSpacing: "var(--pf-chart-global--letter-spacing)";
                padding: 10;
                stroke: "transparent";
            };
            min: {
                padding: 8;
                stroke: "#151515";
                strokeWidth: 1;
            };
            minLabels: {
                fontFamily: "var(--pf-chart-global--FontFamily)";
                fontSize: 14;
                letterSpacing: "var(--pf-chart-global--letter-spacing)";
                padding: 10;
                stroke: "transparent";
            };
            q1: {
                fill: "#8a8d90";
                padding: 8;
            };
            q1Labels: {
                fontFamily: "var(--pf-chart-global--FontFamily)";
                fontSize: 14;
                letterSpacing: "var(--pf-chart-global--letter-spacing)";
                padding: 10;
                stroke: "transparent";
            };
            q3: {
                fill: "#8a8d90";
                padding: 8;
            };
            q3Labels: {
                fontFamily: "var(--pf-chart-global--FontFamily)";
                fontSize: 14;
                letterSpacing: "var(--pf-chart-global--letter-spacing)";
                padding: 10;
                stroke: "transparent";
            };
        };
        boxWidth: 20;
        padding: 50;
        height: 300;
        width: 450;
    };
    candlestick: {
        candleColors: {
            positive: "#fff";
            negative: "#151515";
        };
        style: {
            data: {
                stroke: "#151515";
                strokeWidth: 1;
            };
            labels: {
                textAnchor: "middle";
                fontFamily: "var(--pf-chart-global--FontFamily)";
                fontSize: 14;
                letterSpacing: "var(--pf-chart-global--letter-spacing)";
                padding: 10;
                stroke: "transparent";
            };
        };
        padding: 50;
        height: 300;
        width: 450;
    };
    chart: {
        padding: 50;
        height: 300;
        width: 450;
    };
    errorbar: {
        borderWidth: 8;
        style: {
            data: {
                fill: "transparent";
                opacity: 1;
                stroke: "#151515";
                strokeWidth: 2;
            };
            labels: {
                textAnchor: "middle";
                fontFamily: "var(--pf-chart-global--FontFamily)";
                fontSize: 14;
                letterSpacing: "var(--pf-chart-global--letter-spacing)";
                padding: 10;
                stroke: "transparent";
            };
        };
        padding: 50;
        height: 300;
        width: 450;
    };
    group: {
        padding: 50;
        height: 300;
        width: 450;
    };
    legend: {
        gutter: 20;
        orientation: "horizontal";
        titleOrientation: "top";
        style: {
            data: {
                type: "square";
            };
            labels: {
                fontFamily: "var(--pf-chart-global--FontFamily)";
                fontSize: 14;
                letterSpacing: "var(--pf-chart-global--letter-spacing)";
                padding: 10;
                stroke: "transparent";
            };
            title: {
                fontSize: 14;
                padding: 2;
                fontFamily: "var(--pf-chart-global--FontFamily)";
                letterSpacing: "var(--pf-chart-global--letter-spacing)";
                stroke: "transparent";
            };
        };
    };
    line: {
        style: {
            data: {
                fill: "transparent";
                opacity: 1;
                stroke: "#151515";
                strokeWidth: 2;
            };
            labels: {
                textAnchor: "middle";
                fontFamily: "var(--pf-chart-global--FontFamily)";
                fontSize: 14;
                letterSpacing: "var(--pf-chart-global--letter-spacing)";
                padding: 10;
                stroke: "transparent";
            };
        };
        padding: 50;
        height: 300;
        width: 450;
    };
    pie: {
        padding: 20;
        style: {
            data: {
                padding: 8;
                stroke: "transparent";
                strokeWidth: 1;
            };
            labels: {
                padding: 8;
                fontFamily: "var(--pf-chart-global--FontFamily)";
                fontSize: 14;
                letterSpacing: "var(--pf-chart-global--letter-spacing)";
                stroke: "transparent";
            };
        };
        height: 230;
        width: 230;
    };
    scatter: {
        style: {
            data: {
                fill: "#151515";
                opacity: 1;
                stroke: "transparent";
                strokeWidth: 0;
            };
            labels: {
                textAnchor: "middle";
                fontFamily: "var(--pf-chart-global--FontFamily)";
                fontSize: 14;
                letterSpacing: "var(--pf-chart-global--letter-spacing)";
                padding: 10;
                stroke: "transparent";
            };
        };
        padding: 50;
        height: 300;
        width: 450;
    };
    stack: {
        style: {
            data: {
                strokeWidth: 1;
            };
        };
        padding: 50;
        height: 300;
        width: 450;
    };
    tooltip: {
        cornerRadius: 0;
        flyoutStyle: {
            cornerRadius: 0;
            fill: "#151515";
            pointerEvents: "none";
            stroke: "#151515";
            strokeWidth: 0;
        };
        pointerLength: 10;
        pointerWidth: 20;
        style: {
            fill: "#ededed";
            padding: 16;
            pointerEvents: "none";
        };
    };
    voronoi: {
        style: {
            data: {
                fill: "transparent";
                stroke: "transparent";
                strokeWidth: 0;
            };
            labels: {
                fill: "#ededed";
                padding: 8;
                pointerEvents: "none";
                textAnchor: "middle";
                fontFamily: "var(--pf-chart-global--FontFamily)";
                fontSize: 14;
                letterSpacing: "var(--pf-chart-global--letter-spacing)";
                stroke: "transparent";
            };
            flyout: {
                fill: "#151515";
                pointerEvents: "none";
                stroke: "#151515";
                strokeWidth: 1;
            };
        };
        padding: 50;
        height: 300;
        width: 450;
    };
};
