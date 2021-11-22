
import React from "react";
import {connect} from "react-redux";
import {IState} from "../redux/types/types";

const mapStateToProps = (state: IState) => ({
    feedbackList: state.feedbackList,
});

const FeedbackList = ({feedbackList}: IState): JSX.Element => {

    return (
        <div>
            <ul className="list bg-light-gray no-dot">
                {feedbackList.map(item => (
                    <li key={item.id} className="list-item d-flex flex-column bg-white p-10">
                        <div className="title text-dark fw-bold">
                            Client: {item.fullname}
                        </div>
                        <div className="body">
                            Feedback: {item.description}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default connect(mapStateToProps)(FeedbackList)

