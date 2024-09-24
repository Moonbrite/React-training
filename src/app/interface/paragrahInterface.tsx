import React from "react";

export interface ParagrahInterface extends React.HTMLAttributes<HTMLParagraphElement> {
    text: React.ReactNode;
}