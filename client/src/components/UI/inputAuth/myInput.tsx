import React from 'react';


interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string
};

const MyInput: React.FC<InputProps> = ((props) => {

    return (
        <input {...props}/>
    );
});

export default MyInput;