"use client"

import { useState } from "react";
import { useFetch } from "@/app/hooks/useFetch";
import { LoaderButton } from "@/app/blocks/loaderButton";
import { truncateString } from "@/app/fonctions/truncateString";

interface Post {
    id: number;
    title: string;
    body: string;
}

interface Comment {
    id: number;
    name: string;
    body: string;
    email: string;
}

export function ListUser() {
    const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

    const url = selectedPostId
        ? `https://jsonplaceholder.typicode.com/posts/${selectedPostId}/comments`
        : "https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000";

    const { data, loading, errors } = useFetch<Post[] | Comment[]>(url);

    return (
        <>
            {loading && <LoaderButton />}

            {data && (
                <div>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                        {selectedPostId ? `Commentaires du Post ${selectedPostId}` : "Liste des posts"}
                    </h2>

                    <ul className="space-y-1 text-gray-900 dark:text-gray-100 list-disc list-inside">
                        {selectedPostId
                            ? (data as Comment[]).map((comment, index: number) => (
                                <li key={index}>
                                    <strong>{comment.name}</strong> :{" "}
                                    {truncateString(comment.body, 100)} : {comment.email}
                                </li>
                            ))
                            : (data as Post[]).map((post, index: number) => (
                                <li key={index}>
                                    Titre : {truncateString(post.title, 5, true)} <br />
                                    Body : {truncateString(post.body, 100)} <br />
                                    <button
                                        className="text-blue-500 hover:underline"
                                        onClick={() => setSelectedPostId(post.id)}
                                    >
                                        Voir les commentaires
                                    </button>
                                </li>
                            ))}
                    </ul>
                </div>
            )}

            {errors && <div>{errors.message}</div>}

            {selectedPostId && (
                <button
                    className="mt-4 text-blue-500 hover:underline"
                    onClick={() => setSelectedPostId(null)}
                >
                    Retour à la liste des posts
                </button>
            )}
        </>
    );
}
