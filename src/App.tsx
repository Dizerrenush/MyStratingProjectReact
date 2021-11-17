
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Provider, useSelector, useDispatch } from 'react-redux'
import {webSocketConnect} from"./webSocketConnect";
import "./assets/sass/style";

const WSSERVER = process.env.WEBSOCKET_SERVER || 'ws://localhost:3000';

const wsConnect =  webSocketConnect(WSSERVER);

//TODO redux dispatch

const App: React.FC = () => {
    return (
        <div>
            <div className="main-nav">
                <Link to="/feedback_list">FeedbackList</Link> |{" "}
                <Link to="/feedback_send">FeedbackSend</Link>
            </div>
        </div>
    );
};

export default App;