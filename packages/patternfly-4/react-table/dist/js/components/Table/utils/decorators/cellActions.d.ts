/// <reference types="react" />
import { IAction, IActionsResolver, IAreActionsDisabled, IExtra, IFormatterValueType } from '../../Table';
export declare const cellActions: (actions: (IAction | import("../../Table").ISeparator)[], actionResolver: IActionsResolver, areActionsDisabled: IAreActionsDisabled) => (label: IFormatterValueType, { rowData, column, rowIndex, columnIndex, column: { extraParams: { dropdownPosition, dropdownDirection } }, property }: IExtra) => {
    children: JSX.Element;
    className: string;
    isVisible: boolean;
} | {
    children?: undefined;
    className: string;
    isVisible: boolean;
};
