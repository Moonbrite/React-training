"use client"
import {useId} from "react";
import {ButtonInterface} from "@/app/interface/buttonInterface";
import {colorButtonStyles} from "@/app/blocks/colorButtonStyles";



export default function Button({color = "blue", className = "", text = "Default", onClickButton, ...props}:ButtonInterface) {
    const id = useId()

    const styleBase = colorButtonStyles[color] || colorButtonStyles["blue"];

    return (
        <>
            <button
                id={id}
                onClick={onClickButton}
                type="button"
                className={className +" "+ styleBase}
                {...props}
            >
                {text}
            </button>
        </>
    );
}