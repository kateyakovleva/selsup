import React from 'react';

interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string;
}

const Input = ({label, defaultValue, ...props}: IProps) => {
    return (
        <div className='container-input'>
            <div className='label-input'>{label}</div>
            <input className='input' defaultValue={defaultValue}/>
        </div>
    );
};

export default Input;





