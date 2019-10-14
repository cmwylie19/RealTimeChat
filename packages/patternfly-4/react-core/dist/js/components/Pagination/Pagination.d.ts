import * as React from 'react';
import { ToggleTemplateProps } from './ToggleTemplate';
import { InjectedOuiaProps } from '../withOuia';
export declare enum PaginationVariant {
    top = "top",
    bottom = "bottom",
    left = "left",
    right = "right"
}
export interface PerPageOptions {
    title?: string;
    value?: number;
}
export interface PaginationTitles {
    page?: string;
    items?: string;
    itemsPerPage?: string;
    perPageSuffix?: string;
    toFirstPage?: string;
    toPreviousPage?: string;
    toLastPage?: string;
    toNextPage?: string;
    optionsToggle?: string;
    currPage?: string;
    paginationTitle?: string;
}
export interface PaginationProps extends React.HTMLProps<HTMLDivElement> {
    /** What should be rendered inside */
    children?: React.ReactNode;
    /** Additional classes for the container. */
    className?: string;
    /** Total number of items. */
    itemCount: number;
    /** Position where pagination is rendered. */
    variant?: 'top' | 'bottom' | 'left' | 'right';
    /** Flag indicating if pagination is disabled */
    isDisabled?: boolean;
    /** Flag indicating if pagination is compact */
    isCompact?: boolean;
    /** Number of items per page. */
    perPage?: number;
    /** Select from options to number of items per page. */
    perPageOptions?: PerPageOptions[];
    /** Page we start at. */
    firstPage?: number;
    /** Current page number. */
    page?: number;
    /** First index of items on current page. */
    itemsStart?: number;
    /** Last index of items on current page. */
    itemsEnd?: number;
    /** ID to ideintify widget on page. */
    widgetId?: string;
    /** Direction of dropdown context menu. */
    dropDirection?: 'up' | 'down';
    /** Object with titles to display in pagination. */
    titles?: PaginationTitles;
    /** This will be shown in pagination toggle span. You can use firstIndex, lastIndex, itemCount, itemsTitle props. */
    toggleTemplate?: ((props: ToggleTemplateProps) => React.ReactElement) | string;
    /** Function called when user sets page. */
    onSetPage?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
    /** Function called when user clicks on navigate to first page. */
    onFirstClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
    /** Function called when user clicks on navigate to previous page. */
    onPreviousClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
    /** Function called when user clicks on navigate to next page. */
    onNextClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
    /** Function called when user clicks on navigate to last page. */
    onLastClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
    /** Function called when user inputs page number. */
    onPageInput?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
    /** Function called when user selects number of items per page. */
    onPerPageSelect?: (event: React.MouseEvent | React.KeyboardEvent | MouseEvent, perPage: number) => void;
}
declare const PaginationWithOuiaContext: React.FunctionComponent<Pick<PaginationProps & InjectedOuiaProps, "children" | "className" | "id" | "accept" | "acceptCharset" | "action" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoFocus" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "cite" | "classID" | "cols" | "colSpan" | "content" | "controls" | "coords" | "crossOrigin" | "data" | "dateTime" | "default" | "defer" | "disabled" | "download" | "encType" | "form" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "height" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "label" | "list" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "multiple" | "muted" | "name" | "nonce" | "noValidate" | "open" | "optimum" | "pattern" | "placeholder" | "playsInline" | "poster" | "preload" | "readOnly" | "rel" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "selected" | "shape" | "size" | "sizes" | "span" | "src" | "srcDoc" | "srcLang" | "srcSet" | "start" | "step" | "summary" | "target" | "type" | "useMap" | "value" | "width" | "wmode" | "wrap" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "lang" | "slot" | "spellCheck" | "style" | "tabIndex" | "title" | "inputMode" | "is" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "css" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "ref" | "key" | "page" | "ouiaId" | "isDisabled" | "variant" | "isCompact" | "toggleTemplate" | "itemCount" | "firstPage" | "onSetPage" | "onNextClick" | "onPreviousClick" | "onFirstClick" | "onLastClick" | "onPageInput" | "widgetId" | "dropDirection" | "perPageOptions" | "perPage" | "onPerPageSelect" | "titles" | "itemsStart" | "itemsEnd">>;
export { PaginationWithOuiaContext as Pagination };
