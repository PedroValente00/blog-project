import React, {FormEvent, useState} from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("Paul")
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    
   const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    fetch("http://localhost:8000/blogs", {
        method: "POST",
        body: JSON.stringify({title, body, author}) ,
        headers: {"Content-type": "application/json"}
    }).then(()=> {
    setIsLoading(false);
    history.push("/")
    })    
   }

    return ( <section className="create">
        <h2>Add a new blog</h2>
        <form onSubmit={handleSubmit}>

            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" required
             onChange={(e)=> setTitle(e.currentTarget.value) }/>
             
            <label htmlFor="body"></label>
            <textarea name="body" id="body" required minLength={20}
            onChange={(e)=> setBody(e.currentTarget.value)} ></textarea>

            <select name="author" id="author" onChange={(e)=>setAuthor(e.currentTarget.value)}>
                <option value="Paul">Paul</option>
                <option value="Theresa">Theresa</option>
                <option value="Martha Townsend">Martha Townsend</option>
            </select>
        </form>
        {isLoading && <button type="submit" disabled>Create article</button> }
        {!isLoading && <button type="submit">Create article</button> }
    </section> );
}
 
export default Create;