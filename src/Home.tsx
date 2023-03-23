import {useState} from "react";
import BlogList from "./BlogList";


const Home = () => {

    
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Maria', id: 1 },
        { title: 'Cake recipes!', body: 'lorem ipsum...', author: 'Peter', id: 2 },
        { title: 'We like games', body: 'lorem ipsum...', author: 'Mike', id: 3 }
    ])
    
    const handleDelete = (id:number) => {
        setBlogs(blogs.filter(blogs => blogs.id !== id))
    }
    return (
        <div className="home">
    <BlogList blogs={blogs} title="hello" updateBlogs={handleDelete} />
        </div>
    );
}

export default Home;
