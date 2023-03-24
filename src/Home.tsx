import {useEffect, useState} from "react";
import BlogList from "./BlogList";


const Home = () => {

    
    const [blogs, setBlogs] = useState<any>([])
    useEffect(() => {
        fetch("http://localhost:8000/blogs")
        .then(res => res.json())
        .then(data => setBlogs(data))
       }, [])

    const handleDelete = (id:number) => {
        setBlogs(blogs.filter((blogs:any) => blogs.id !== id))
    }




    return (
        <div className="home">
    <BlogList blogs={blogs} title="hello" updateBlogs={handleDelete} />
        </div>
    );
}

export default Home;
