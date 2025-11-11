import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate('/')
    }

    return (
        <div>
            <h2>404 Page not found</h2>
            <br/>
            <button onClick={handleButtonClick}>Go to Home Page</button>
        </div>
    )
}

export default NotFound