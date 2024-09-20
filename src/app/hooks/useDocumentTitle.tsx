"use client"

import {useEffect} from "react";

export function useDocumentTitle(nom) {

    //const titleRef = useRef(document.title);


    useEffect(() => {
        window.document.title = nom
    }, [nom])


}