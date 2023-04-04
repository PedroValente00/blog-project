import useFetch from "./useFetch";
import { useParams, useHistory } from "react-router-dom";
interface params {id:string}

const BlogDetails = () => {
    const {id}:params = useParams();
    const history = useHistory();
    const {data:blog, error, loading} = useFetch(`http://localhost:8000/blogs/${id}`);

const handleDelete = ()=> {
    fetch("http://localhost:8000/blogs/" + id, {method:"DELETE"})
    .then(()=> {
        history.push("/")
    })
}

    return ( 
    <div className="blog-details">
    {loading && <div>loading...</div> }
    {error && error}
    {blog && (
        <article>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            <div>{blog.body}</div>
            <button onClick={handleDelete}>Delete blog</button>
        </article>
    ) }
    </div> 
    );
}
 
export default BlogDetails;