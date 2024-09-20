import InputInterface from "@/app/interface/inputInterface";


export default function Input({className="", id , type, placeholder, onChangeInput, value, inputRef}:InputInterface) {


    return (
        <>
            <input
                ref={inputRef}
                value={value}
                onChange={event => onChangeInput(event.target.value)}
                className= {className + " inputBaseStyle"}
                id={id}
                type={type}
                placeholder={placeholder}
            />
        </>
    );

}