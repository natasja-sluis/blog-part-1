import "./navigation.css"
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation-outer-container">
            <div className="navigation-image-container">

                <NavLink className="default-navigation-link" to="/"><img src="/src/assets/logo-medium.png"
                                                                 alt="logo"/></NavLink>


            </div>
            <ul className="navigation-inner-container">
                <li>
                    <NavLink className={({isActive}) => isActive ? "active-navigation-link" : "default-navigation-link"}
                             to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? "active-navigation-link" : "default-navigation-link"} to="/posts">Alle posts</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? "active-navigation-link" : "default-navigation-link"} to="/NewBlogPost">Nieuwe post maken</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;