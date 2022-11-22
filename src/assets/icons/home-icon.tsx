import * as React from 'react';
import Svg, {SvgProps, Defs, Path, SvgXml, SvgFromXml} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const HomeIcon = ({color}: SvgProps) => (
  <SvgFromXml
    xml={`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_71_4552)">
    <path d="M24 0H0V24H24V0Z" fill="transparent"/>
    <path d="M23.5 14.772C23.5 14.839 23.5 14.905 23.431 14.905C23.396 14.9026 23.363 14.888 23.3378 14.8636C23.3125 14.8393 23.2967 14.8069 23.293 14.772C23.086 14.506 12.618 3.449 12.136 3.049C11.929 2.849 11.861 2.916 11.654 3.116C11.588 3.182 0.707 14.639 0.569 14.838C0.5 14.905 0.431 14.905 0.431 14.771C0.0866024 13.5823 -0.0530566 12.3436 0.0179997 11.108C0.0761243 9.31795 0.598166 7.57367 1.533 6.046C2.3415 4.57392 3.46392 3.29769 4.82069 2.30781C6.17747 1.31792 7.73538 0.6386 9.384 0.318005C11.3776 -0.157037 13.4605 -0.105961 15.4284 0.466226C17.3964 1.03841 19.1819 2.11208 20.61 3.582C22.3522 5.25325 23.4906 7.45528 23.847 9.84301C23.9638 10.48 24.0101 11.1279 23.985 11.775C23.9244 12.7878 23.7619 13.7918 23.5 14.772V14.772Z" fill="${String(color)}"/>
    <path d="M3.531 20.0341C3.462 19.9671 3.393 19.9011 3.531 19.7681C3.669 19.6351 11.726 11.1751 11.933 10.9751C12.002 10.9081 12.071 10.9081 12.071 10.9751C12.346 11.3081 20.271 19.7011 20.471 19.8341C20.54 19.9011 20.54 19.9671 20.402 19.9671C19.9431 20.4414 19.4353 20.8658 18.887 21.2331C17.1426 22.4677 15.0951 23.2043 12.964 23.3641C12.6001 23.4194 12.2319 23.4418 11.864 23.4311C8.74891 23.4323 5.75737 22.2128 3.531 20.0341V20.0341Z" fill="${String(color)}"/>
    </g>
    <defs>
    <clipPath id="clip0_71_4552">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `}
  />
);

export default HomeIcon;