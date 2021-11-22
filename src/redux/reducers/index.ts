
import {ACTION_ID, WS_EVENT_ID} from "../types/const";
import type {IActions, IState} from "../types/types";
import type {IFeedbacks} from "../../pages/types/types";
import type {Reducer} from "redux";

export const feedbacks: Reducer<IState | undefined, IActions.TAction> = (state, action) => {
    const {
        type,
        data,
    } = action;

    if(!state){
        return state;
    }

    switch (type) {
        case ACTION_ID.HANDLE_EVENT: {
            const {
                eventId,
                payload,
            } = data as IActions.EventCreateFeedbackData;

            switch (eventId) {
                case WS_EVENT_ID.FEEDBACK_CREATED: {
                    return {
                        feedbackList: state.feedbackList.concat([payload]),
                    };
                }
                /*case WS_EVENT_ID.FEEDBACK_UPDATED: {
                    return {
                        feedbackList: state.feedbackList.push(payload),
                    };
                }
                TODO
                case WS_EVENT_ID.FEEDBACK_DELETED: {
                    return {
                        feedbackList: state.feedbackList.push(payload),
                    };
                }*/
                default:
                    return state;
            }
        }

        case ACTION_ID.SET_FEEDBACKS:
            return {
                feedbackList: data as Array<IFeedbacks.IListItem>,
            };
        default:
            return state;
    }
}
