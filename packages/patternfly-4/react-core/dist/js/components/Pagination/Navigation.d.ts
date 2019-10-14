import * as React from 'react';
export interface NavigationProps extends React.HTMLProps<HTMLElement> {
    /** Additional classes for the container */
    className?: string;
    /** Flag indicating if the pagination is disabled */
    isDisabled?: boolean;
    /** Flag indicating if the pagination is compact */
    isCompact?: boolean;
    /** The number of the last page */
    lastPage?: number;
    /** The number of first page where pagination starts */
    firstPage?: number;
    /** The title of a page displayed beside the page number */
    pagesTitle?: string;
    /** Accessible label for the button which moves to the last page */
    toLastPage?: string;
    /** Accessible label for the button which moves to the previous page */
    toPreviousPage?: string;
    /** Accessible label for the button which moves to the next page */
    toNextPage?: string;
    /** Accessible label for the button which moves to the first page */
    toFirstPage?: string;
    /** Accessible label for the input displaying the current page */
    currPage?: string;
    /** Accessible label for the pagination component */
    paginationTitle?: string;
    /** The number of the current page */
    page: React.ReactText;
    /** Function called when page is changed */
    onSetPage: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
    /** Function called when user clicks to navigate to next page */
    onNextClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
    /** Function called when user clicks to navigate to previous page */
    onPreviousClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
    /** Function called when user clicks to navigate to first page */
    onFirstClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
    /** Function called when user clicks to navigate to last page */
    onLastClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
    /** Function called when user inputs page number */
    onPageInput?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
}
export interface NavigationState {
    userInputPage?: React.ReactText;
}
export declare class Navigation extends React.Component<NavigationProps, NavigationState> {
    constructor(props: NavigationProps);
    static defaultProps: {
        className: string;
        isDisabled: boolean;
        isCompact: boolean;
        lastPage: number;
        firstPage: number;
        pagesTitle: string;
        toLastPage: string;
        toNextPage: string;
        toFirstPage: string;
        toPreviousPage: string;
        currPage: string;
        paginationTitle: string;
        onNextClick: () => any;
        onPreviousClick: () => any;
        onFirstClick: () => any;
        onLastClick: () => any;
        onPageInput: () => any;
    };
    private static parseInteger;
    private onChange;
    private onKeyDown;
    componentDidUpdate(lastState: NavigationProps): void;
    render(): JSX.Element;
}
