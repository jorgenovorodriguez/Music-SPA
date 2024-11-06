import React from 'react';
import { SvgIconProps } from '../interfaces/interfaces';

export const HomeIcon: React.FC<SvgIconProps> = ({ color, width }) => {
    return (
        <svg
            width={width}
            viewBox='0 0 14 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path d='M5.5 9H8.5V14.25H5.5V9Z' fill={color} />
            <path
                d='M13.3151 6.13502L7.53259 0.225023C7.46286 0.154726 7.37991 0.0989305 7.28852 0.060854C7.19712 0.0227775 7.0991 0.00317383 7.00009 0.00317383C6.90108 0.00317383 6.80305 0.0227775 6.71165 0.060854C6.62026 0.0989305 6.53731 0.154726 6.46759 0.225023L0.685086 6.14252C0.545164 6.28357 0.434657 6.45102 0.359983 6.63513C0.285308 6.81924 0.247953 7.01635 0.250087 7.21502V13.5C0.249505 13.884 0.396166 14.2535 0.659867 14.5325C0.923568 14.8116 1.28423 14.9789 1.66759 15H4.00009V8.25002C4.00009 8.05111 4.0791 7.86034 4.21976 7.71969C4.36041 7.57904 4.55117 7.50002 4.75009 7.50002H9.25009C9.449 7.50002 9.63976 7.57904 9.78042 7.71969C9.92107 7.86034 10.0001 8.05111 10.0001 8.25002V15H12.3326C12.7159 14.9789 13.0766 14.8116 13.3403 14.5325C13.604 14.2535 13.7507 13.884 13.7501 13.5V7.21502C13.7507 6.81222 13.5947 6.42496 13.3151 6.13502Z'
                fill={color}
            />
        </svg>
    );
};

export const AgreeIcon: React.FC<SvgIconProps> = ({ color, width }) => {
    return (
        <svg
            width={width}
            viewBox='0 0 21 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M1.67993 5.04004V11.13C2.03882 11.2497 2.39666 11.4379 2.71691 11.655C3.48005 10.7472 4.48196 10.29 5.45993 10.29C5.6312 10.2907 5.79823 10.3434 5.93894 10.441L10.1389 13.381C10.4262 13.5801 10.5648 13.9707 10.4672 14.3063C10.3143 14.8229 10.0409 15.3311 9.65993 15.737C9.94889 15.8605 10.2507 15.96 10.4999 15.96C10.9829 15.96 11.5961 15.7841 11.9699 15.54L15.4744 13.0856L12.3437 9.60754C11.6432 10.2367 10.6679 10.92 9.44993 10.92C8.88608 10.92 8.38103 10.6517 8.03243 10.3228C7.68383 9.99415 7.44695 9.61048 7.23842 9.21379C7.06895 8.89879 7.13048 8.47627 7.38269 8.2228C7.38269 8.2228 9.93587 5.6839 9.94868 5.67004C9.56228 5.39578 9.06941 5.25004 8.60993 5.25004C7.03073 5.25004 5.92823 5.74984 3.98993 6.30004L1.67993 5.04004ZM19.3199 5.04004L17.0099 6.30004C15.5305 5.86702 13.9805 5.25235 12.5999 5.25004C11.8307 5.25004 11.1709 5.54467 10.4999 6.30004L7.97993 8.82004C8.35037 9.52438 8.8046 10.08 9.44993 10.08C10.573 10.08 11.7599 9.03004 12.3899 8.40004L16.1699 12.6C17.1078 11.9314 18.275 11.5967 19.3199 11.13V5.04004ZM5.45993 11.13C4.53215 11.13 3.61235 11.6078 2.93993 12.81L6.50993 15.33C6.94064 15.6341 7.22288 15.75 7.76993 15.75C8.65739 15.75 9.40058 14.9457 9.65993 14.07L5.45993 11.13Z'
                fill={color}
            />
        </svg>
    );
};

export const ShoppingIcon: React.FC<SvgIconProps> = ({ color, width }) => {
    return (
        <svg
            width={width}
            viewBox='0 0 22 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M18.945 6.12502C18.7938 5.86307 18.5773 5.64477 18.3166 5.49141C18.0559 5.33806 17.7599 5.25489 17.4575 5.25002H6.2575L5.75 3.27252C5.69872 3.08163 5.58433 2.91373 5.42544 2.79615C5.26656 2.67857 5.07254 2.61826 4.875 2.62502H3.125C2.89294 2.62502 2.67038 2.71721 2.50628 2.88131C2.34219 3.0454 2.25 3.26796 2.25 3.50002C2.25 3.73209 2.34219 3.95465 2.50628 4.11874C2.67038 4.28284 2.89294 4.37502 3.125 4.37502H4.21L6.625 13.3525C6.67627 13.5434 6.79067 13.7113 6.94956 13.8289C7.10844 13.9465 7.30246 14.0068 7.5 14H15.375C15.5366 13.9995 15.6949 13.9543 15.8323 13.8694C15.9698 13.7844 16.081 13.6631 16.1537 13.5188L19.0237 7.77878C19.1481 7.51804 19.2061 7.23056 19.1923 6.942C19.1786 6.65343 19.0936 6.37276 18.945 6.12502Z'
                fill={color}
            />
            <path
                d='M7.0625 18.375C7.78737 18.375 8.375 17.7874 8.375 17.0625C8.375 16.3376 7.78737 15.75 7.0625 15.75C6.33763 15.75 5.75 16.3376 5.75 17.0625C5.75 17.7874 6.33763 18.375 7.0625 18.375Z'
                fill={color}
            />
            <path
                d='M15.8125 18.375C16.5374 18.375 17.125 17.7874 17.125 17.0625C17.125 16.3376 16.5374 15.75 15.8125 15.75C15.0876 15.75 14.5 16.3376 14.5 17.0625C14.5 17.7874 15.0876 18.375 15.8125 18.375Z'
                fill={color}
            />
        </svg>
    );
};

export const HeartIcon: React.FC<SvgIconProps> = ({ color, width }) => {
    return (
        <svg
            width={width}
            height='21'
            viewBox='0 0 21 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g clip-path='url(#clip0_66_163)'>
                <path
                    d='M10.4999 18.3751C10.3848 18.3757 10.2706 18.3537 10.164 18.3101C10.0574 18.2666 9.96046 18.2024 9.8787 18.1213L3.07995 11.3138C2.22714 10.4521 1.74878 9.2887 1.74878 8.07633C1.74878 6.86395 2.22714 5.70055 3.07995 4.83883C3.93943 3.98177 5.10368 3.50049 6.31745 3.50049C7.53122 3.50049 8.69547 3.98177 9.55495 4.83883L10.4999 5.78383L11.4449 4.83883C12.3044 3.98177 13.4687 3.50049 14.6824 3.50049C15.8962 3.50049 17.0605 3.98177 17.9199 4.83883C18.7728 5.70055 19.2511 6.86395 19.2511 8.07633C19.2511 9.2887 18.7728 10.4521 17.9199 11.3138L11.1212 18.1213C11.0394 18.2024 10.9425 18.2666 10.8359 18.3101C10.7293 18.3537 10.6151 18.3757 10.4999 18.3751Z'
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id='clip0_66_163'>
                    <rect width='21' height='21' fill={color} />
                </clipPath>
            </defs>
        </svg>
    );
};

export const MenuIcon: React.FC<SvgIconProps> = ({ color, width }) => {
    return (
        <svg
            viewBox='0 0 21 21'
            fill='currentColor'
            height={width}
            width={width}
        >
            <g
                fill='none'
                fillRule='evenodd'
                stroke={color}
                strokeLinecap='round'
                strokeLinejoin='round'
            >
                <path d='M4.5 6.5h12M4.498 10.5h11.997M4.5 14.5h11.995' />
            </g>
        </svg>
    );
};

export const CloseIcon: React.FC<SvgIconProps> = ({ color, width }) => {
    return (
        <svg viewBox='0 0 512 512' fill={color} width={width}>
            <path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z' />
        </svg>
    );
};