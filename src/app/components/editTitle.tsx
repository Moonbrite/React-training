"use client"

import Input from "@/app/blocks/form/input";
import { useState} from "react";
import {useDocumentTitle} from "@/app/hooks/useDocumentTitle";

export default function EditTitle() {

    const [nom, setNom] = useState("")

    useDocumentTitle(nom ? "Editer:"+ nom : "")

    return (
        <>
            <div className="w-1/3 flex flex-col">
                <Input
                    onChangeInput={setNom}
                    id="nom"
                    type="texte"
                    placeholder="Modifier le titre"
                    value={nom}
                />
            </div>
        </>
    );
}