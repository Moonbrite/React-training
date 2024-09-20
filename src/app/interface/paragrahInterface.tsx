import React from "react";

export interface ParagrahInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: React.ReactNode;
}