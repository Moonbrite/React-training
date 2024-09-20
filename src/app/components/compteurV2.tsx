import Button from "@/app/blocks/button";
import {useIncrement} from "@/app/hooks/useIncrement";

export default function CompteurV2() {


    const {count, decrement, increment} = useIncrement({
        base: 0,
        max: 10,
        min: 0,
    })


    return (
        <>
            <div className="mt-3 w-3/12 flex flex-col content-center justify-center">

                <h2 className="text-3xl text-gray-900 dark:text-gray-100 text-center my-2">
                    {count}
                </h2>

                <Button
                    color="green"
                    text="Incrémenter"
                    onClickButton={increment}/>
                <Button
                    color="red"
                    text="Décrémenter"
                    onClickButton={decrement}
                />
            </div>

        </>
    );
}