
import {WS_EVENT_ID} from "../types/const";
import type {IFeedbacks} from "../../pages/types/types";

interface IState {
    feedbackList: Array<IFeedbacks.IListItem>
}

export const feedbacks = (state: IState, action: any) => {
    const {
        type,
        payload,
    }=action;

    switch (type) {
        case WS_EVENT_ID.FEEDBACK_CREATED:
            return {
                ...state,
                feedbackList: state.feedbackList.concat(payload);
            };
        default:
            return state
    }
}
