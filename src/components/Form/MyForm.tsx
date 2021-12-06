
import React from "react";
import type {IForm} from "./types/types";
import Input from "../utils/Input/Input";
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

        const controller = new AbortController();
        const signal = controller.signal;
        const fetchTimeout = 10000;
        const timeoutId = setTimeout(() => {
            controller.abort();
        }, fetchTimeout);

        postData(props.url, formData, {signal: signal})
            .then(() => {
                clearTimeout(timeoutId);

            })
            .catch(() => {
                clearTimeout(timeoutId);

                console.log('Error during send: Can`t connect to database');
            });
    }

    return (
        <form className="form-group" onSubmit={sendForm}>
            {
                inputs.map(inputData => {
                    const {
                        type,
                        data: {
                            label,
                            options,
                            name,
                            value,
                        },
                    } = inputData;
                    return (
                        <Input
                            label={label}
                            name={name}
                            value={value}
                            type={type}
                            options={options}
                            key={name}
                            onChange={handleChange}
                        />
                    )
                })
            }
            <button className="btn btn-primary" type="submit">
                {props.button_text}
            </button>
        </form>
    );

}

export default MyForm;
