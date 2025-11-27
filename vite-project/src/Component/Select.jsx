import {useState} from "react";

function Select({options, onChangeValue}) {
    const [value, setValue] = useState();
    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        if (onChangeValue) {
            onChangeValue(newValue);
        }
    }
    return (
        <div className=" flex justify-center p-1">
            <select defaultValue="Motif de la demande" className="select input_conf" onChange={handleChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;