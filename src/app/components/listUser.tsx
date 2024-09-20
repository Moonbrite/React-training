import {useFetch} from "@/app/hooks/useFetch";
import {LoaderButton} from "@/app/blocks/loaderButton";
import {truncateString} from "@/app/fonctions/truncateString";

export function ListUser() {

    const {data, loading, errors} = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000");


    return (
        <>
            {loading && <LoaderButton/>}

            {data && <div>
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Liste des post</h2>
                <ul className="space-y-1 text-gray-900 dark:text-gray-100 list-disc list-inside flex">
                    {data.map((post, index) => (<li key={index}>Titre : {truncateString(post.title,5,true)} <br/> Body : {truncateString(post.body,100)}</li>))}
                </ul>
            </div>
            }

            {errors && <div>{errors.title}</div>}

        </>
    );
}