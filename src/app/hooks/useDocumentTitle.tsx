"use client"

import {useEffect} from "react";

export function useDocumentTitle(nom:string) {


    useEffect(() => {
        window.document.title = nom
    }, [nom])


}