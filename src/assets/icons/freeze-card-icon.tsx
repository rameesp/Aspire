import * as React from 'react';
import Svg, {SvgProps, Defs, Path, SvgXml, SvgFromXml} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const FreezeCardIcon = ({}: SvgProps) => (
  <SvgFromXml
    xml={`
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_77_4578)">
    <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#325BAF"/>
    <path d="M22.7829 21.2796L21.182 19.6787L22.9922 19.3152L22.5729 17.2342L19.376 17.8727L17.5234 16.0201L19.6879 13.8557L22.4456 14.7749L23.118 12.7603L21.368 12.1756L22.7822 10.7614L21.2796 9.25875L19.8654 10.673L19.2813 8.92358L17.2667 9.59604L18.186 12.3538L16.0215 14.5182L14.1689 12.6656L14.8074 9.46876L12.7264 9.04945L12.3629 10.8596L10.7621 9.25875L9.25946 10.7614L10.8611 12.363L9.04945 12.7264L9.46593 14.8102L12.6663 14.1696L14.5182 16.0215L12.6663 17.8734L9.46593 17.2342L9.04803 19.3166L10.8575 19.678L9.25734 21.2782L10.7614 22.7822L12.3622 21.1813L12.725 22.9936L14.8095 22.5778L14.1689 19.3746L16.0201 17.5234L17.872 19.3753L17.2314 22.5757L19.3152 22.9922L19.6787 21.1806L21.2803 22.7822L22.7829 21.2796Z" fill="#9AC0FA"/>
    </g>
    <defs>
    <clipPath id="clip0_77_4578">
    <rect width="32" height="32" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
    `}
  />
);

export default FreezeCardIcon;
