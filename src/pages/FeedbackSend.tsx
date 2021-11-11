import React from "react";

import {Form} from "../components/Form/Form"
import {IForm} from "../components/Form/types/types";
import {INPUT_TYPE} from "../components/Form/types/const";

export function FeedbackSend() {

    let button_text: string = 'Send Feedback';
    let url: string = 'localhost:8081';
    const inputs: Array<IForm.IInput> = [
        {
            data: {
                name: "fullname",
                value: "",
                label: "Full name",
                options: {
                    required: true,
                    className: "input-control-solid",
                },
            },
            type: INPUT_TYPE.TEXT,
        },
        {
            data: {
                name: "email",
                value: "",
                label: "Email",
                options: {
                    className: "input-control-solid",
                    required: true,
                },
            },
            type: INPUT_TYPE.TEXT,
        },
        {
            data: {
                name: "description",
                value: "",
                label: "Description",
                options: {
                    className: "input-control-solid y-resize",
                },
            },
            type: INPUT_TYPE.TEXTAREA,
        },
    ];
    return (
        <div className="d-flex flex-center flex-column">
            <div className="card mx-auto p-10 rounded shadow-sm wd-500">
                <div className="text-center">
                    <h1>Send your feedback</h1>
                </div>
                <div className="card__body">
                    <Form
                        inputs={inputs}
                        url={url}
                        button_text={button_text}
                    />
                </div>
            </div>
        </div>
    )

}

