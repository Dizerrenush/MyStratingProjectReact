
import React from 'react';
import type {IInputs} from "../types/types";
import '../../style/Input'
import {INPUT_TYPE} from "../../Form/types/const";

const Input = (props: IInputs.Component): JSX.Element => {

    const {
        name,
        value,
        label,
        type,
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
    const handleChange = (e:  React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
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
            <label className="active">
                <span>{label}</span>
                {() => {
                    switch (type) {
                        case INPUT_TYPE.TEXT: {
                            return (
                                <input
                                    className={inputClassName}
                                    name={name}
                                    defaultValue={value}
                                    required={required}
                                    onChange={handleChange}
                                />
                            );
                        }
                        case INPUT_TYPE.TEXTAREA: {
                            return (
                                <textarea
                                    className={inputClassName}
                                    name={name}
                                    defaultValue={value}
                                    required={required}
                                    onChange={handleChange}
                                />
                            );
                        }
                    }
                }
                }

            </label>
        </div>

    );

}

export default Input;
