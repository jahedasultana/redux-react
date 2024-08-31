import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";


const PostsView = () => {
    const dispatch = useDispatch()
   useEffect(() => {
    dispatch(fetchPosts())
   }, []);

    const {posts,isLoading,error} = useSelector((state) => state.posts)
    return (
        <div>
            {isLoading && <p>losding</p>}
            {error && <p>{error}</p>}
            {
                posts && posts.map((post) => {
                    return(
                        <article key={post.id}>
                            <h5>{post.title}</h5>
                            <p>{post.body}</p>
                        </article>
                    )
                })
            }
        </div>
    );
};

export default PostsView;