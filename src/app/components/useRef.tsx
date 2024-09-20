"use client"

import Input from "@/app/blocks/form/input";
import {useEffect, useId, useRef, useState} from "react";

export default function UseRef() {

    const [prefix, setPrefix] = useState("")

    const uniqueId = useId()
    const ref = useRef(null)

    /*
        useEffect(() => {
            const timer = setInterval(()=>{
                return console.log( ref.current.getBoundingClientRect().height, ref)
            },1000 )

            return () => clearInterval(timer)

        },[])
    */

    return (
        <>
            <div className="container">
                <Input
                    inputRef={ref}
                    id={uniqueId}
                    onChangeInput={setPrefix}
                    type="text"
                    value={prefix}
                />
                <div className="text-gray-900 dark:text-gray-100">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores atque dolor dolore
                    ducimus earum, est ex exercitationem facilis fuga hic illo ipsam ipsum iure necessitatibus nesciunt
                    numquam officia quia quod reprehenderit suscipit, tempore vero voluptas! Accusamus animi architecto
                    autem consequuntur cupiditate dignissimos, dolorum ducimus ea eaque explicabo illum laudantium modi
                    nulla obcaecati praesentium quae quasi ratione repudiandae sit totam unde veniam veritatis vitae,
                    voluptatibus voluptatum? Ad autem blanditiis commodi, consectetur, consequuntur cumque dolore
                    doloremque earum enim error esse excepturi fugit incidunt odio perspiciatis quas repudiandae tempora
                    velit voluptate voluptatum. Consequuntur culpa excepturi fuga illo ipsam iusto obcaecati quia rerum.
                </div>
            </div>
        </>
    );
}