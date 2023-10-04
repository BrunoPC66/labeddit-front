import { useEffect, useState } from "react"
import { GlobalContext } from "./GlobalContext"
import { getLogin, newUser } from "../Requisitions/UsersReq"
import {
    goToHomePage,
    goToLoginPage,
    goToSignupPage,
    goToCommentsPage
} from "../Router/Coordinator"
import { fetchPost, newPost } from "../Requisitions/PostReq"

export const GlobalState = (props) => {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [token, setToken] = useState('')
    const [posts, setPosts] = useState([])
    const [postContent, setPostContent] = useState('')
    const [postComments, setPostComments] = useState([])
    const [commentContent, setCommentContent] = useState('')

    const handleName = (e) => {
        setUserName(e.target.value)
    }

    const handleEmail = (e) => {
        setUserEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setUserPassword(e.target.value)
    }

    const handlePostContent = (e) => {
        setPostContent(e.target.value)
    }

    const handleCommentContent = (e) => {
        setCommentContent(e.target.value)
    }

    const login = (navigate) => {
        getLogin(userEmail, userPassword)
            .then(user => {
                setToken(user.token)
                goToHomePage(navigate)
            })
            .catch(err => `Erro no login: ${err}`)
    }

    const signup = (navigate) => {
        newUser(userName, userEmail, userPassword)
            .then(user => {
                setToken(user.token)
                login(navigate)
                return user.message
            })
            .catch(err => `Erro no cadastro: ${err}`)
    }

    const postIt = () => {
        newPost(postContent, token)
            .catch(err => `Erro no novo post: ${err}`)
    }

    const allPosts = () => {
        fetchPost(creatorName, token)
            .then(post => setPosts([...posts, post]))
            .catch(err => `Erro ao buscar post: ${err}`)
    }

    const fetchPostComments = (postId, navigate) => {
        fetchComments(postId, token)
        .then(comment => {
            setPostComments([...postComments, comment])
            goToCommentsPage(navigate)
        })
        .catch(err => `Erro ao buscar comentários: ${err}`)
    }
    
    useEffect({

    }, [])

    const context = {
        posts,
        login,
        signup,
        postIt,
        fetchPostComments,
        handleName,
        handleEmail,
        handlePassword,
        handlePostContent,
        handleCommentContent
    }

    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}