import CheckBoxInterface from "@/app/interface/checkBoxInterface";
import Label from "@/app/blocks/form/label";

export default function CheckBox({id,onChecked,checked,label, ...props}:CheckBoxInterface) {
    return (
        <>
            <div className="flex items-center mb-4">
                <input
                    id={id}
                    className="checkBoxBaseStyle"
                    onChange={(e) => onChecked(e.target.checked)}
                    type="checkbox"
                    checked={checked}
                    {...props}
                />
               <Label
                   id={id}
                   label={label}
               />
            </div>

        </>
    );
}