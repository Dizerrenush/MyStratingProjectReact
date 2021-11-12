
import React from "react";
import { Link } from "react-router-dom";

import "./assets/sass/style";

const App: React.FC = (props) => {
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