interface blogs {
    blogs:object[],
    title:string,
    updateBlogs: (blogId:number) =>void
}

const BlogList = ({blogs, title, updateBlogs}:blogs) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>

            {
            blogs.map((blog:any) => (
            <section className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <button onClick={()=>updateBlogs(blog.id)}>Delete article</button>
            </section>))
            }

        </div>
     );
}
 
export default BlogList;