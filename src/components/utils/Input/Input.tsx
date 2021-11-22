
import React from 'react';
import {IInputs} from "../types/types";

import '../../style/Input'

export function Input(props: IInputs.IComponentTextarea) {

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
    const handleChange = (e:any) => {
        // @ts-ignore
        onChange([e.target.name],e.target.value.trim());
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
