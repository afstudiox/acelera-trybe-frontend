import React from "react";

interface InputFieldProps {
    id: string;
    name: string;
    type: string;
    placeholder: string;
    value: string;
    className?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({ id, name, type, placeholder, value, className, onChange }: InputFieldProps) {
    return (
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            className={className}
            onChange={onChange}
        />
    );
}

export default InputField;