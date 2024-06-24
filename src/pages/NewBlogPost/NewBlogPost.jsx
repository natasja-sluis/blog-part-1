import "./newBlogPost.css"
import {useForm} from "react-hook-form";
import axios from "axios";
import {useState} from "react";

function NewBlogPost() {

    const [success, toggleSuccess] = useState(false);
    const [error, toggleError] = useState(false);

    const {
        register,
        handleSubmit,
    } = useForm();


    const onSubmit = (data) => {
        toggleSuccess(false);

        const created = new Date().toISOString();
        const shares = 0
        const comments = 0

        async function addPost() {
            try {
                await axios.post("http://localhost:3000/posts", {
                    "title": data.title,
                    "subtitle": data.subtitle,
                    "content": data.message,
                    "author": data.author,
                    "created": created,
                    "readTime": 0,
                    "comments": comments,
                    "shares": shares,
                })
                toggleSuccess(true);
            } catch (error) {
                console.log(error)
                toggleError(true);
            }
        }

        addPost();
    }

    return (
        <>
            <h1>Post toevoegen</h1>
            {success ? <p>Het is gelukt!</p> :
                <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                    <div className="details-input-container">
                        <label htmlFor="title" className="input-label">
                            Titel</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            {...register("title", {required: true})}
                        />

                    </div>

                    <div className="details-input-container">
                        <label className="input-label" htmlFor="subtitle">
                            Subtitel </label>
                        <input
                            type="text"
                            name="subtitle"
                            id="subtitle"
                            {...register("subtitle", {required: true})}
                        />

                    </div>

                    <div className="details-input-container">
                        <label className="input-label" htmlFor="author">
                            Auteur </label>
                        <input
                            type="text"
                            name="author"
                            id="author"
                            {...register("author", {required: true})}
                        />

                    </div>

                    <div className="details-input-container">
                        <label className="input-label" htmlFor="message">
                            Bericht: </label>
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            maxLength="2000"
                            minLength="300"
                            {...register("message", {required: true})}
                        >
                    </textarea>

                    </div>
                    <button className="submit-button" type="submit">Versturen</button>
                </form>
            }

            {error && <p className="error-message">Sorry, er is iets misgegaan</p>}
        </>
    )
}

export default NewBlogPost;