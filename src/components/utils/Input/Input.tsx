
import React from 'react';
import {IInputs} from "../types/types";

import '../../style/Input'

const Input = (props: IInputs.IComponentInput): JSX.Element => {

    const {
        name,
        value,
        label,
        options: {
            className = '',
            required = false
        } = {},
        onChange,
    } = props;

    let inputClassName = 'input-control ';

    if (className) {
        inputClassName += className;
    }
    const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        if(onChange){
            const{
                name,
                value
            }=e.target;
            onChange(name, value.trim());
        }

    };
    return (
        <div className="mb-10 d-flex flex-column">
            <label htmlFor="title" className="active">
                {label}
            </label>
            <input
                className={inputClassName}
                name={name}
                defaultValue={value}
                required={required}
                onChange={handleChange}
            />
        </div>

    );

}

export default Input;
