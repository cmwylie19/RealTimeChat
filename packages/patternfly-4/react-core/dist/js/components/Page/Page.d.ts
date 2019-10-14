import * as React from 'react';
export declare enum PageLayouts {
    vertical = "vertical",
    horizontal = "horizontal"
}
export declare const PageContextProvider: React.ProviderExoticComponent<React.ProviderProps<{}>>;
export declare const PageContextConsumer: React.ExoticComponent<React.ConsumerProps<{}>>;
export interface PageProps extends React.HTMLProps<HTMLDivElement> {
    /** Content rendered inside the main section of the page layout (e.g. <PageSection />) */
    children?: React.ReactNode;
    /** Additional classes added to the page layout */
    className?: string;
    /** Header component (e.g. <PageHeader />) */
    header?: React.ReactNode;
    /** Sidebar component for a side nav (e.g. <PageSidebar />) */
    sidebar?: React.ReactNode;
    /** Skip to content component for the page */
    skipToContent?: React.ReactElement;
    /** an id to use for the [role="main"] element */
    mainContainerId?: string;
    /**
     * If true, manages the sidebar open/close state and there is no need to pass the isNavOpen boolean into
     * the sidebar component or add a callback onNavToggle function into the PageHeader component
     */
    isManagedSidebar?: boolean;
    /**
     * If true, the managed sidebar is initially open for desktop view
     */
    defaultManagedSidebarIsOpen?: boolean;
    /**
     * Can add callback to be notified when resize occurs, for example to set the sidebar isNav prop to false for a width < 768px
     * Returns object { mobileView: boolean, windowSize: number }
     */
    onPageResize?: (object: any) => void;
    /** Breadcrumb component for the page */
    breadcrumb?: React.ReactNode;
}
export interface PageState {
    desktopIsNavOpen: boolean;
    mobileIsNavOpen: boolean;
    mobileView: boolean;
}
export declare class Page extends React.Component<PageProps, PageState> {
    static defaultProps: {
        breadcrumb: React.ReactNode;
        children: React.ReactNode;
        className: string;
        header: React.ReactNode;
        sidebar: React.ReactNode;
        skipToContent: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
        isManagedSidebar: boolean;
        defaultManagedSidebarIsOpen: boolean;
        onPageResize: () => void;
        mainContainerId: string;
    };
    constructor(props: PageProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleResize: () => void;
    onNavToggleMobile: () => void;
    onNavToggleDesktop: () => void;
    render(): JSX.Element;
}
