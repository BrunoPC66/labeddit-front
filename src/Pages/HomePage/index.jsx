import { useContext } from "react"
import { GlobalContext } from "../../Contexts/GlobalContext"
import { useNavigate } from "react-router-dom"

export const HomePage = () => {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    const {
        posts,
        postIt,
        fetchPostComments,
        handlePostContent
    } = context

    return (
        <>  
            <h1>Home Page</h1>
            <header>

            </header>
            <body>
                <form>
                    <input type="text" id="content" name="content" placeholder="O que você está pensando?" onChange={(e) => handlePostContent(e)}/>
                    <button type="submit" onClick={postIt}></button>
                </form>
                <section className="post-container">
                    {posts.map(post => {
                        return (
                            <section className="post-card">
                                <h2>{post.creator.name}</h2>
                                <p>{post.updatedAt}</p>
                                <p>{post.content}</p>
                                <button>like</button>
                                <span>{post.likes-post.dislike}</span>
                                <button>dislike</button>
                                <button onClick={() => fetchPostComments(post.id, navigate)}>comentários</button>
                                <span>{post.comments}</span>
                            </section>
                        )
                    })}
                </section>
            </body>
            <footer>

            </footer>
        </>
    )
}