import {ParagrahInterface} from "@/app/interface/paragrahInterface";

export default function Paragraph({text, ...props}:ParagrahInterface) {
    return (
        <>
            <p
                className="text-gray-900 dark:text-gray-100"
                {...props}
            >
                {text}
            </p>
        </>
    );
}