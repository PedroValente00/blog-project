import {Link} from "react-router-dom";

interface blogs {
    blogs: object[]
}

const BlogList = ({blogs} : blogs) => {

    return (
        <div className="blog-list">
            <h2>Articles</h2>
            {
            blogs.map((blog : any) => (
                <section className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </section>
            ))
        } </div>
    );
}

export default BlogList;
