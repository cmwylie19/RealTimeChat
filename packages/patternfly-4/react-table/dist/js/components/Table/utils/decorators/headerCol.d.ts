/// <reference types="react" />
import { IExtra, IFormatterValueType } from '../../Table';
export declare const headerCol: (id?: string) => (value: IFormatterValueType, { rowIndex }?: IExtra) => {
    component: string;
    children: JSX.Element;
};
