import { useEffect, useState } from "react";

export function useFetch<T>(url: string, options = {}) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<T | null>(null); // Type for data is T
    const [errors, setErrors] = useState<Error | null>(null); // Ensure error typing

    useEffect(() => {
        fetch(url, {
            ...options,
            headers: {
                Accept: "application/json; charset=UTF-8",
                ...options,
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setData(json as T); // Cast the response to T
            })
            .catch((error) => {
                setErrors(error);
            })
            .finally(() => setLoading(false));
    }, [url]);

    return { loading, data, errors };
}
