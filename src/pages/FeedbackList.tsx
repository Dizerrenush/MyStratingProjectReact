
import React from "react";
import {IFeedbacks} from "./types/types";

export const FeedbackList: React.FC = () => {

    //TODO empty item
    let feedbacks: Array<IFeedbacks.IListItem> = [];

    fetch('http://localhost:8082/api/v1/feedback/read').then(response => {
        console.log(response.body)
        //feedbacks = response.body
    })

    console.log(feedbacks)

    return (
        <div className="feedback-list">
            <ul>
                {feedbacks.map(feedbackData => {
                    const {
                        client: {
                            fullname,
                            email,
                        },
                        description
                    } = feedbackData;
                    return (
                        <li>
                            <div className="feedback-item">
                                <div className="feedback-item_header">
                                    <div className="feedback-item_fullname">
                                        {fullname}
                                    </div>
                                    <div className="feedback-item_email">
                                        {email}
                                    </div>
                                </div>
                                <div className="feedback-item_body">
                                    {description}
                                </div>
                            </div>
                        </li>
                    );

                })}
            </ul>
        </div>
    )

}

