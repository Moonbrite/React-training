"use client"


import Link from "next/link";
import {colorButtonStyles} from "@/app/blocks/colorButtonStyles";




export default function Home() {

    //const [isCheck, setIsCheck] = useToggle(true)


    return (
        <>
            <div>
                <h1>Bienvenue sur la page accueil</h1>
                <Link
                    className={colorButtonStyles["blue"]}
                    href="/todo/"
                >
                    List Post
                </Link>
                <Link href="/about/">Aller à la page About</Link>
            </div>

        </>
    );
}
