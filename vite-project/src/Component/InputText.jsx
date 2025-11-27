import {useState} from "react";

function InputText({nom, placeholder, onChangeValue}) {
    const [value, setvalue] = useState();
    const handleChange = (e) => {
        const newValue = e.target.value;
        setvalue(newValue);
        if (onChangeValue) {
            onChangeValue(newValue);
        }
    }
    return (
        <div className=" flex justify-center p-1">
            <label className="input input_conf">
                <span className="label text-gray-900 w-[45%] p-[6px]">{nom}</span>
                <input onBlur={handleChange} type="text" placeholder={placeholder} />
            </label>
        </div>
    )
}

export default InputText