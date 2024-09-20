"use client"

import EditTitle from "@/app/components/editTitle";
import CheckBox from "@/app/blocks/form/checkBox";
import Compteur from "@/app/components/compteur";
import Login from "@/app/components/login";
import UseRef from "@/app/components/useRef";
import {useToggle} from "@/app/hooks/useToggle";
import CompteurV2 from "@/app/components/compteurV2";
import {ListUser} from "@/app/components/listUser";
import dynamic from "next/dynamic";
import Modal from "@/app/components/modal";
import { ErrorBoundary } from "react-error-boundary";
import TodoList from "@/app/components/todoList";

const DarkMode = dynamic(() => import('@/app/components/darkMode'), { ssr: false });


export default function Home() {

    const [isCheck, setIsCheck] = useToggle(true)


    return (
        <>
            <DarkMode/>
            {isCheck && <EditTitle/>}
            <CheckBox
                id="checkbox"
                checked={isCheck}
                label="Afficher les input"
                onChecked={setIsCheck}
            />
            <Compteur/>
            <Login/>
            <UseRef/>
            <CompteurV2/>
            <ListUser/>
            <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
                <Modal/>
            </ErrorBoundary>
            <TodoList/>
        </>
    );
}
