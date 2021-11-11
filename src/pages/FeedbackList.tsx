
import React from "react";

import {IFeedbacks} from "./types/types";

export const FeedbackList: React.FC = () => {

    let feedbacks: Array<IFeedbacks.IListItem> = [];

    //TODO get feedback from backend

    feedbacks.forEach(feedback => {
        <li>
            <div className="feedback-item">
                <div className="feedback-item_header">
                    <div className="feedback-item_fullname">
                        {feedback.client.fullname}
                    </div>
                    <div className="feedback-item_email">
                        {feedback.client.email}
                    </div>
                </div>
                <div className="feedback-item_body">
                    {feedback.description}
                </div>
            </div>
        </li>

    });

    return (
        <div className="feedback-list">
            <ul>
                {feedbacks}
            </ul>
        </div>
    )

}

