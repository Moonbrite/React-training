"use client";

import Input from "@/app/blocks/form/input";
import { useEffect, useState } from "react";

export default function Compteur() {
    const [timeCompteur, setTimeCompteur] = useState("5");
    const [displayTimer, setDisplayTimer] = useState(timeCompteur);

    useEffect(() => {
        setDisplayTimer(timeCompteur);
    }, [timeCompteur]);

    useEffect(() => {
        const timer = () => {
            setDisplayTimer(prevState => {
                const newTime = parseInt(prevState) - 1;
                return newTime >= 0 ? newTime.toString() : "0"; // Avoid negative values
            });
        };

        const intervalId = setInterval(timer, 1000);

        return () => clearInterval(intervalId);
    }, [displayTimer]);

    return (
        <>
            <div className="w-1/4">
                <Input
                    id="compteur"
                    type="text"
                    placeholder="Entré un temps"
                    onChangeInput={setTimeCompteur}
                    value={timeCompteur}
                />
            </div>

            <h2 className="text-gray-900 dark:text-gray-100 text-4xl">{displayTimer}</h2>
        </>
    );
}
