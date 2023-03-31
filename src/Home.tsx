// import {useEffect, useState} from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data:blogs, error, loading} = useFetch("http://localhost:8000/blogs")

    // const handleDelete = (id : number) => {
    //     setBlogs(blogs.filter((blogs : any) => blogs.id !== id))
    // }

    return (
        <div className="home">
            {
            loading && <div>Loading...</div>
        }
            {
            (error !== null)  ? <div>{error}</div> : 
            <BlogList blogs={blogs} title="Articles" 
            // updateBlogs={ handleDelete }
            />
        } </div>
    );
}

export default Home;
