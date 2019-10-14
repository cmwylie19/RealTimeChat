/**
 * evaluate-formatters.ts
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import { formattersType, formatterValueType, ExtraParamsType } from './types';
export declare function evaluateFormatters(formatters: formattersType): (value: formatterValueType, extra: ExtraParamsType) => formatterValueType;
