
import React, {useState, useEffect} from "react";
import {IFeedbacks} from "./types/types";
import {Link} from "react-router-dom";
import store from "../redux/store";
import {connect} from "react-redux";

function FeedbackList() {

    return (
        <div>
            <div className="main-nav">
                <Link to="/feedback_list">FeedbackList</Link> |{" "}
                <Link to="/feedback_send">FeedbackSend</Link>
            </div>

            <ul className="list bg-light-gray no-dot">
                {data.map(item => (
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

export default connect()(FeedbackList)

