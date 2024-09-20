import React from "react";

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    text: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
}