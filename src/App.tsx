
import React, {useEffect} from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {connect} from 'react-redux'
import store from './redux/store'
import "./assets/sass/style";
import init from "./webSocket/init";
import {createEventAction, setFeedbackList} from "./redux/actions";
import {IActions} from "./redux/types/types";
import {IFeedbacks} from "./pages/types/types";
import FeedbackList from "./pages/FeedbackList";
import FeedbackSend from "./pages/FeedbackSend";

const WS_SERVER = process.env.WEBSOCKET_SERVER || 'ws://localhost:3000';
const url = 'http://localhost:8082/api/v1/feedback/get';

const App: React.FC = () => {

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(payload => setFeedbacks(payload))
    }, []);

    init(WS_SERVER).then(
        (wsConnect) => {
            wsConnect.onmessage = (message) => {
                const data = message.data

                if (data instanceof Blob) {
                    const reader = new FileReader();
                    reader.readAsText(data);
                    reader.onload = () => {
                        const result = JSON.parse(reader.result as string || '{}');

                        handleEvent(result);
                    };

                } else {
                    handleEvent(JSON.parse(data as string));
                }

            };
        }
    );

    return (
        <div className="main-nav">
            <BrowserRouter>
                <Link to="/">FeedbackList</Link> |{" "}
                <Link to="/feedback_send">FeedbackSend</Link>
                <Routes>
                    <Route path="/" element={<FeedbackList/>}/>
                    <Route path="feedback_send" element={<FeedbackSend/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

const handleEvent = (event: IActions.EventCreateFeedbackData) => {
    store.dispatch(createEventAction(event))
};
const setFeedbacks = (event: Array<IFeedbacks.IListItem>) => {
    store.dispatch(setFeedbackList(event))
};

export default connect()(App);