import {useEffect, useState} from "react";
import BlogList from "./BlogList";

const Home = () => {


    const [blogs, setBlogs] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("http://localhost:8000/blogss").then(res => {
            if (!res.ok) {
                throw Error("could not fetch data")
            }
            return res.json()
        }).then(data => {
            setLoading(false);
            setBlogs(data);
            setError(null)
        }).catch(err => {
            setLoading(false);
            setError(err.message);
        })
    }, [])

    const handleDelete = (id : number) => {
        setBlogs(blogs.filter((blogs : any) => blogs.id !== id))
    }

    return (
        <div className="home">
            {
            loading && <div>Loading...</div>
        }
            {
            error ? <div>Could not display articles</div> : <BlogList blogs={blogs}
                title="Articles"
                updateBlogs={handleDelete}/>
        } </div>
    );
}

export default Home;
