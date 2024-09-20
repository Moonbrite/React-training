import React from "react";

export default interface CheckBoxInterface extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    id: string;
    checked?: boolean;
    onChecked: (value: boolean) => void;
    label:string;
}