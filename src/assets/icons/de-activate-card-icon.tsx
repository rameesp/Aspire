import * as React from 'react';
import Svg, {SvgProps, Defs, Path, SvgXml, SvgFromXml} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const DeActivateCardIcon = ({color = '#dddddd'}: SvgProps) => (
  <SvgFromXml
    xml={`
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_77_4531)">
    <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#325BAF"/>
    <path d="M16 8C14.4178 8 12.871 8.46919 11.5554 9.34824C10.2398 10.2273 9.21447 11.4767 8.60897 12.9385C8.00347 14.4003 7.84504 16.0089 8.15372 17.5607C8.4624 19.1126 9.22433 20.538 10.3431 21.6569C11.462 22.7757 12.8874 23.5376 14.4393 23.8463C15.9911 24.155 17.5997 23.9965 19.0615 23.391C20.5233 22.7855 21.7727 21.7602 22.6518 20.4446C23.5308 19.129 24 17.5823 24 16C23.9976 13.879 23.154 11.8456 21.6542 10.3458C20.1545 8.846 18.121 8.00238 16 8V8ZM10 16C10.0001 14.7549 10.39 13.5412 11.115 12.529L19.471 20.885C18.5747 21.5251 17.5192 21.9056 16.4207 21.9848C15.3221 22.064 14.223 21.8388 13.2442 21.3339C12.2653 20.829 11.4446 20.064 10.8723 19.123C10.2999 18.182 9.99811 17.1014 10 16V16ZM20.885 19.471L12.529 11.115C13.683 10.2923 15.0913 9.90536 16.5036 10.0229C17.916 10.1404 19.2409 10.7548 20.243 11.757C21.2452 12.7591 21.8596 14.084 21.9771 15.4964C22.0946 16.9087 21.7077 18.317 20.885 19.471V19.471Z" fill="#9AC0FA"/>
    <path d="M20.8579 19.4438L12.514 11.1L11.0998 12.5142L19.4437 20.858L20.8579 19.4438Z" fill="#F1F3F4"/>
    </g>
    <defs>
    <clipPath id="clip0_77_4531">
    <rect width="32" height="32" fill="white"/>
    </clipPath>
    </defs>
    </svg>
 `}
  />
);

export default DeActivateCardIcon;
