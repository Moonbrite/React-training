import React from "react";

export default interface CheckBoxInterface extends React.InputHTMLAttributes<HTMLInputElement>{
    id: string;
    checked?: boolean;
    onChecked: (value: boolean ) => void ;
    label:string;
}