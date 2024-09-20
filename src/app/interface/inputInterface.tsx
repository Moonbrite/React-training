import React from "react";

export default interface InputInterface {
    id: string,
    type: string,
    placeholder?: string,
    className?: string,
    onChangeInput: (value: string) => void,
    value: string,
    inputRef?: React.RefObject<HTMLInputElement> | null;
}