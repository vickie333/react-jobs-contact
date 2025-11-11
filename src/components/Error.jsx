import { useNavigate, useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError()
    const navigate = useNavigate()

    return (
        <div className="job-detail">
            <h2>Oops! Something went wrong.</h2>
            <p>{error.message}</p>
            <button onClick={() => navigate("/")}>Go to Home Page</button>
        </div>
    )
}

export default Error