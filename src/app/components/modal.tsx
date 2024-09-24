"use client"

import {useEffect, useState} from "react";
import Button from "@/app/blocks/button";
import {closeModalIcon} from "@/app/icons/closeModalIcon";
import Paragraph from "@/app/blocks/paragraph";
import Title from "@/app/blocks/title";


export default function Modal() {
    const [modalOpen, setModalOpen] = useState(false);
    const [rgpdAccpet, setRgpdAccpet] = useState(false)

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }
    const closeModal = () => {
        toggleModal()
        setRgpdAccpet(false);

    }
    const acceptRgpd = () => {
        toggleModal()
        setRgpdAccpet(true)
    }
    useEffect(() => {
        window.localStorage.setItem("rgpdAccpet", JSON.stringify(rgpdAccpet))
    }, [rgpdAccpet]);


    const idModal = "default-modal"

    //throw new Error("Error creating modal")


    return (
        <>
            <Button
                onClickButton={toggleModal}
                text="Toggle modal"
            />
            <div id={idModal} tabIndex={-1} aria-hidden={!modalOpen}
                 className={`${
                     modalOpen ? 'flex' : 'hidden'
                 } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full`}>
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div
                            className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">

                            <Title text="Terms of Service" level={3}/>
                            <Button
                                    color={"gray"}
                                    onClickButton={closeModal}
                                    text={closeModalIcon(modalOpen)}
                            />
                        </div>
                        <div className="p-4 md:p-5 space-y-4">
                            <Paragraph
                                className="text-base leading-relaxed"
                                text="With less than a month to go before the European Union enacts new consumer privacy laws
                                for its citizens, companies around the world are updating their terms of service
                                agreements to comply."
                            />
                            <Paragraph
                                className="text-base leading-relaxed"
                                text="The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on
                                May 25 and is meant to ensure a common set of data rights in the European Union. It
                                requires organizations to notify users as soon as possible of high-risk data breaches
                                that could personally affect them."
                            />
                        </div>
                        <div
                            className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <Button
                                    onClickButton={acceptRgpd}
                                    text="Accept"
                            />
                            <Button
                                    color={"gray"}
                                    onClickButton={closeModal}
                                    text="Decline"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}