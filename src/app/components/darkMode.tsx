"use client"

import {useDarkMode} from "usehooks-ts";
import {useEffect} from "react";
import {DarkIcon} from "@/app/icons/darkIcon";
import {LightIcon} from "@/app/icons/lightIcon";
import Button from "@/app/blocks/button";



export default function DarkMode() {
    const {isDarkMode, toggle} = useDarkMode();

    useEffect(() => {
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const textIcon = ()=> {
        return isDarkMode ? <DarkIcon /> : <LightIcon />
    }

    return (
        <div>
            <Button
                className={" mt-3"}
                onClickButton={toggle}
                text={textIcon()}
                color={"gray"}
            />
        </div>
    )
}