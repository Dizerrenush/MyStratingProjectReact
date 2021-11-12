
import React from "react";

import {IForm} from "./types/types";
import {Textarea} from "../utils/Textarea/Textarea";
import {Input} from "../utils/Input/Input";
import {INPUT_TYPE} from "./types/const";
import './Form.scss'

export function MyForm(props: IForm.IData) {

    const inputs = props.inputs;
    const updateData = (name:string,value:string)=>{

    }

    const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //TODO гет поля формы
        console.log(e)
        //fetch(props.url, e.target.value)
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
                        onChange
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
                                onChange={updateData}
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
                                onChange={updateData}
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
