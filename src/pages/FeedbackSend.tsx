
import React from "react";

import {IForm} from "../components/Form/types/types";
import {INPUT_TYPE} from "../components/Form/types/const";
import {MyForm} from "../components/Form/MyForm"
import {Link} from "react-router-dom";

export const FeedbackSend: React.FC = () => {

    const button_text = 'Send Feedback';
    const url = 'http://localhost:8082/api/v1/feedback/create';
    const inputs: Array<IForm.IInput> = [
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
                name: "fullname",
                value: "",
                label: "Full name",
                options: {
                    className: "input-control-solid",
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
                    className: "input-control-solid max-h-200 min-h-80 y-resize",
                },
            },
            type: INPUT_TYPE.TEXTAREA,
        },
    ];
    return (
        <div>
            <div className="main-nav">
                <Link to="/feedback_list">FeedbackList</Link> |{" "}
                <Link to="/feedback_send">FeedbackSend</Link>
            </div>

            <div className="d-flex flex-center flex-column">
                <div className="card mx-auto p-10 rounded shadow-sm wd-500">
                    <div className="text-center">
                        <h1>Send your feedback</h1>
                    </div>
                    <div className="card__body">
                        <MyForm
                            inputs={inputs}
                            url={url}
                            button_text={button_text}
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}

