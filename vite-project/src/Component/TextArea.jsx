import {useState} from "react";

function Textarea({placeholder, onChangeValue}) {
    const [value, setvalue] = useState();
    const handleChange = (e) => {
        const newValue = e.target.value;
        setvalue(newValue);
        if (onChangeValue) {
            onChangeValue(newValue);
        }
    }
    return (
        <div className="flex justify-center p-1">
            <textarea onBlur={handleChange} className="textarea input_conf" placeholder={placeholder}></textarea>
        </div>
    )
}

    export default Textarea