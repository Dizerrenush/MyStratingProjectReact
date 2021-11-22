
import {createStore} from 'redux';
import {feedbacks} from './reducers'
import type {IState} from "./types/types";

const initialValue: IState = {
    feedbackList: [],
};

const store = createStore(feedbacks, initialValue);

export default store;