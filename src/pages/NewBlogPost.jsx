import "./newBlogPost.css"
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";

function NewBlogPost() {

    const {
        register,
        handleSubmit,
    } = useForm();

    const navigate = useNavigate();


 const onSubmit = (data) => {
     const created = new Date().toISOString();
     const shares = 0
     const likes = 0
     console.log({
         data,
         created,
         shares,
         likes,
     });

     console.log("Alle gegevens zijn verzameld!")
     navigate("/posts");
 }

    return (
        <>
            <h1>Post toevoegen</h1>
            <form className="form-container" onSubmit={handleSubmit(onSubmit)} >
                <div className="details-input-container">
                    <label htmlFor="title-post" className="input-label">
                        Titel</label>
                    <input
                        type="text"
                        name="title-post"
                        id="title-post"
                        {...register("title-post", {required: true})}
                    />

                </div>

                <div className="details-input-container">
                    <label className="input-label" htmlFor="sub-title-post">
                        Subtitel </label>
                    <input
                        type="text"
                        name="sub-title-post"
                        id="sub-title-post"
                        {...register("sub-title-post", {required: true})}
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
        </>
    )
}

export default NewBlogPost;