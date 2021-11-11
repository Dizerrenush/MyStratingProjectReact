
import React from 'react';
import {IInputs} from "../types/types";

export function Input(props: IInputs.IComponentTextarea) {

    const {
        name,
        value,
        label,
        options: {
            className = '',
            required = false
        } = {},
    } = props;

    let inputClassName = 'input-control ';

    if (className) {
        inputClassName += className;
    }

    return (
        <div className="mb-10 d-flex flex-column">
            <label htmlFor="title" className="active">
                {label}
            </label>
            <input
                className={inputClassName}
                name={name}
                value={value}
                required={required}
            />
        </div>

    );

}
