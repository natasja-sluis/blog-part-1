import "./notFound.css"
import {useNavigate} from "react-router-dom";

function NotFound() {

    const navigate = useNavigate();

    return (
        <>
            <section className="outer-content-container">
                <div className="inner-content-container">
                    <h1 className="not-found-message">I am sorry. We could not find this page.</h1>
                    <span><button type="button" onClick={() => navigate('/')}>Terug naar home</button></span>
                </div>

            </section>
        </>
    )
}

export default NotFound;