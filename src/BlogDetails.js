import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import API_URL from "./config"


const BlogDetails = () => {

    
    const {id} = useParams()
    const { data: blog, isPending, error } = useFetch(`${API_URL}/blogs/${id}`);
    const history = useNavigate();

    const deleteBlog = () => {
        fetch(`${API_URL}/blogs/`+blog.id,
            {method: 'DELETE'}
        ).then(() => {
            history('/');
        })
        
    }

    return (

        <div className="blog-details">
            {isPending && <div>Loading... </div>}
            {error && <div>error</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={deleteBlog}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;