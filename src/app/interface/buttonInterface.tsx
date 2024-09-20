import React from "react";

export interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: "blue" | "green" | "red" | "gray",
    className?: string,
    text?: React.ReactNode,
    onClickButton: () => void,
}