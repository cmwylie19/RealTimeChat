import * as React from 'react';
export interface AboutModalBoxProps extends React.HTMLProps<HTMLDivElement> {
    /** content rendered inside the AboutModelBox.  */
    children: React.ReactNode;
    /** additional classes added to the AboutModalBox  */
    className?: string;
}
export declare const AboutModalBox: React.SFC<AboutModalBoxProps>;
