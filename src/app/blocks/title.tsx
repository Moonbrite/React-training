import {TitleProps} from "@/app/interface/titleInterface";
import React from "react";
import {getTextSizeClass} from "@/app/blocks/getTextSize";

export default function Title({text, level = 1, ...props}:TitleProps) {

    const textSizeClass = getTextSizeClass(level);
    let className;
    const combinedClassName = `font-semibold text-gray-900 dark:text-white ${textSizeClass} ${className || ''}`.trim();

    return React.createElement(
        `h${level}`,
        {
            className: combinedClassName,
            ...props
        },
        text
    );
}