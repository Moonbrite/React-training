import LabelInterface from "@/app/interface/labelInterface";

export default function Label({id, label}: LabelInterface) {
    return (
        <>
            <label
                className="labelBaseStyle"
                htmlFor={id}
            >
                {label}
            </label>
        </>
    );
}