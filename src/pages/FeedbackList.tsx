import React from "react";
import {connect} from "react-redux";
import type {IActions, IState} from "../redux/types/types";
import type {IFeedbacks} from "./types/types";
import store from "../redux/store";
import {createEventAction} from "../redux/actions";
import {WS_EVENT_ID} from "../redux/types/const";

const mapStateToProps = (state: IState) => ({
    feedbackList: state.feedbackList,
});
const url = 'http://localhost:8082/api/v1/feedback/delete/'
const deleteItem = (item: IFeedbacks.IListItem) => {
    const {
        id
    } = item;
    fetch(url + id, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then((data: { success: boolean }) => {
                if (data.success) {
                    deleteFeedback({
                        eventId: WS_EVENT_ID.FEEDBACK_DELETED,
                        payload: item,
                    });
                }
            }
        );

}

const FeedbackList = ({feedbackList}: IState): JSX.Element => {

    return (
        <div>
            <ul className="list bg-light-gray no-dot">
                {feedbackList.map(item => (
                    <li key={item.id} className="list-item flex bg-white p-10">
                        <div className="d-flex flex-column">
                            <div className="title text-dark fw-bold">
                                Client: {item.fullname ? item.fullname : 'Name not found'}
                            </div>
                            <div className="body">
                                Feedback: {item.description}
                            </div>
                        </div>
                        <div className="btn btn_delete" onClick={() => deleteItem(item)}>
                            delete
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )

}

const deleteFeedback = (event: IActions.EventFeedbackData) => {
    store.dispatch(createEventAction(event))
};

export default connect(mapStateToProps)(FeedbackList)

