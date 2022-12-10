import React from "react";
import "./error.css";

const Error = () => {
    return (
        <div>
            <div className="errorContainer">
                <h1 className="errorTitle">404</h1>
                <h2>This is not the page you're looking for.</h2>
            </div>
        </div>
    );
};

export default Error;