import { useParams } from "react-router-dom";
interface params {id:string}

const BlogDetails = () => {
    const {id}:params = useParams()

    return ( 
    <div className="blog-details">
        <h2>Blog details - { id } </h2>
    </div> 
    );
}
 
export default BlogDetails;