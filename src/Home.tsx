import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data:blogs, error, loading} = useFetch("http://localhost:8000/blogs")

    return (
        <div className="home">
            { loading && <div>Loading...</div> }

            {
            (error !== null)  ? <div>{error}</div> 
            : 
            <BlogList blogs={blogs}/>
            }
            
        </div>
    );
}

export default Home;
