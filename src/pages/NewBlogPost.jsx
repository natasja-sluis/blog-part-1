import React from "react";
import logo from "../assets/logo-white.png";

function NewBlogPost() {
    return (
        <>
            <div className="page-container">
                <img src={logo} alt="Company logo"/>
                <h1>New!</h1>
            </div>
        </>
    )
}

export default NewBlogPost;