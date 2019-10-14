import * as React from 'react';
export declare const variantIcons: {
    success: React.FunctionComponent<import("@patternfly/react-icons/dist/js/common").IconProps>;
    danger: React.FunctionComponent<import("@patternfly/react-icons/dist/js/common").IconProps>;
    warning: React.FunctionComponent<import("@patternfly/react-icons/dist/js/common").IconProps>;
    info: React.FunctionComponent<import("@patternfly/react-icons/dist/js/common").IconProps>;
    default: React.FunctionComponent<import("@patternfly/react-icons/dist/js/common").IconProps>;
};
export interface AlertIconProps extends React.HTMLProps<HTMLDivElement> {
    /** variant */
    variant: 'success' | 'danger' | 'warning' | 'info' | 'default';
    /** className */
    className?: string;
}
export declare const AlertIcon: ({ variant, className, ...props }: AlertIconProps) => JSX.Element;
