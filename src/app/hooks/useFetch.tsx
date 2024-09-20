"use client"

import {useEffect, useState} from "react";

export function useFetch(url, options = {}) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        fetch(url, {
            ...options,
            headers: {
                "Accept": "application/json; charset=UTF-8",
                ...options
            }
        }).then((response) => response.json())
            .then((json) => {
                setData(json)
            }).catch((error) => {
            setErrors(error)
        }).finally(() => setLoading(false)
        );
    }, [options, url]);

    return {
        loading, data, errors
    };


}