import {  BackgroundImageSrc } from '@patternfly/react-core';
import { BackgroundImage1200,BackgroundImage7682x,BackgroundImage5762x,BackgroundImage576, BackgroundImage768 } from '.'


/**
 * Note: When using background-filter.svg, you must also include #image_overlay as the fragment identifier
 */
export const BackgroundImages = {
    [BackgroundImageSrc.lg]: BackgroundImage1200,
    [BackgroundImageSrc.sm]: BackgroundImage768,
    [BackgroundImageSrc.sm2x]: BackgroundImage7682x,
    [BackgroundImageSrc.xs]: BackgroundImage576,
    [BackgroundImageSrc.xs2x]: BackgroundImage5762x,
    //[BackgroundImageSrc.filter]: '/assets/images/background-filter.svg#image_overlay'
};

