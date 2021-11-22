
import React from "react";
import {IForm} from "./types/types";
import Textarea from "../utils/Textarea/Textarea";
import Input from "../utils/Input/Input";
import {INPUT_TYPE} from "./types/const";
import './Form.scss'
import {postData} from "../../utils/utils";

type TInitialFormData = Record<string, string | number>;

const MyForm = (props: IForm.IData): JSX.Element => {
    const inputs = props.inputs;
    const initialFormData = inputs.reduce((obj, item) => {
        const {
            data: {
                name,
                value,
            },
        } = item;

        obj[name] = value;

        return obj;
    }, {} as TInitialFormData);
    const [formData, updateFormData] = React.useState<TInitialFormData>(initialFormData);
    const handleChange = (name: string, value: string | number) => {
        updateFormData({
            ...formData,
            [name]: value,
        });
    };

    const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //TODO Abort signal
        postData(props.url, formData).catch();
    }

    return (
        <form className="form-group" onSubmit={sendForm}>
            {inputs.map(inputData => {
                const {
                    type,
                    data: {
                        label,
                        options,
                        name,
                        value,
                    },
                } = inputData;
                switch (type) {
                    case INPUT_TYPE.TEXT: {
                        return (
                            <Input
                                label={label}
                                name={name}
                                value={value}
                                options={options}
                                key={name}
                                onChange={handleChange}
                            />
                        );
                    }
                    case INPUT_TYPE.TEXTAREA: {
                        return (
                            <Textarea
                                label={label}
                                name={name}
                                value={value}
                                options={options}
                                key={name}
                                onChange={handleChange}
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

export default MyForm;
