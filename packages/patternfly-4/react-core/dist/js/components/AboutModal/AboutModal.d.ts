import * as React from 'react';
export interface AboutModalProps {
    /** Content rendered inside the about modal  */
    children: React.ReactNode;
    /** Additional classes added to the about modal  */
    className?: string;
    /** Flag to show the about modal  */
    isOpen?: boolean;
    /** A callback for when the close button is clicked  */
    onClose?: () => void;
    /** Product name  */
    productName?: string;
    /** Trademark information  */
    trademark?: string;
    /** The URL of the image for the brand  */
    brandImageSrc: string;
    /** The alternate text of the brand image  */
    brandImageAlt: string;
    /** The URL of the image for the background  */
    backgroundImageSrc?: string;
    /** Prevents the about modal from rendering content inside a container; allows for more flexible layouts  */
    noAboutModalBoxContentContainer?: boolean;
}
interface ModalState {
    container: HTMLElement;
}
export declare class AboutModal extends React.Component<AboutModalProps, ModalState> {
    private static currentId;
    private id;
    ariaLabelledBy: string;
    ariaDescribedBy: string;
    static defaultProps: {
        className: string;
        isOpen: boolean;
        onClose: () => any;
        productName: string;
        trademark: string;
        backgroundImageSrc: string;
        noAboutModalBoxContentContainer: boolean;
    };
    constructor(props: AboutModalProps);
    handleEscKeyClick: (event: KeyboardEvent) => void;
    toggleSiblingsFromScreenReaders: (hide: boolean) => void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): React.ReactPortal;
}
export {};
