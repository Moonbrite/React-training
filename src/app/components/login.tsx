"use client"

import Input from "@/app/blocks/form/input";
import {useState, useMemo} from "react";
import Label from "@/app/blocks/form/label";

export default function Login() {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const security = useMemo(() => {
        return securityPassword(password)
    }, [password])


    return (
        <>
            <div className="flex flex-col w-1/2">
                <Input
                    id="userName"
                    type="text"
                    onChangeInput={setUserName}
                    value={userName}
                    placeholder="UserName"
                />

                <Input
                    id="password"
                    type="text"
                    onChangeInput={setPassword}
                    value={password}
                    placeholder="Password"
                />
                <Label
                    id="securiryPasswordForce"
                    label={"Sécurity : " + security}
                />
            </div>
        </>
    );

    function securityPassword(password) {
        if (password.length <= 3) {
            return "Faible Password";
        } else if (password.length < 6 && password.length > 3) {
            return "Moyen Password";
        } else if (password.length >= 6) {
            return "Fort Password";
        }
    }

}