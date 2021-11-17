
import React from "react";

import {IForm} from "./types/types";
import {Textarea} from "../utils/Textarea/Textarea";
import {Input} from "../utils/Input/Input";
import {INPUT_TYPE} from "./types/const";
import './Form.scss'

export function MyForm(props: IForm.IData) {

    const inputs = props.inputs;

    const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //TODO гет поля формы useSTate
        //fetch(props.url, data).then()
    }

    return (
        <form className="form-group" onSubmit={sendForm}>
            {inputs.map(inputData => {
                const {
                    type,
                    data:{
                        label,
                        options,
                        name,
                        value,
                    },
                } = inputData;
                switch (type){
                    case INPUT_TYPE.TEXT:{
                        return(
                            <Input
                                label={label}
                                name={name}
                                value={value}
                                options={options}
                                key={name}
                            />
                        );
                    }
                    case INPUT_TYPE.TEXTAREA:{
                        return(
                            <Textarea
                                label={label}
                                name={name}
                                value={value}
                                options={options}
                                key={name}
                            />
                        );
                    }
                }
            })}
            <button className="btn btn-primary" type="submit">
                {props.button_text}
            </button>
        </form>
    );

}
