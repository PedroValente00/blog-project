import {useState} from "react";
const Home = () => {
const [blog, setBlog] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Maria', id: 1 },
    { title: 'Cake recipes!', body: 'lorem ipsum...', author: 'Peter', id: 2 },
    { title: 'We like games', body: 'lorem ipsum...', author: 'Mike', id: 3 }
])
    return (
        <div className="home">
        {blog.map(blog => (
            <section className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
            </section>
         ))}
        </div>
    );
}

export default Home;
