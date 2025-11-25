import { useState } from "react";

function InputFile() {
    const [files, setFiles] = useState([]);

    const handleChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(selectedFiles);
    };

    return (
        <div className="flex flex-col items-center p-2">
            <input
                type="file"
                multiple
                onChange={handleChange}
                className="file-input file-input-ghost w-full max-w-xs"
            />

            {files.length > 0 && (
                <ul className="mt-3 text-sm text-gray-600">
                    {files.map((file, index) => (
                        <li key={index}>📄 {file.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default InputFile;