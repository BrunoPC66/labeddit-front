import { useState } from "react"
import { GlobalContext } from "./GlobalContext"
import { getLogin, newUser } from "../Requisitions/UsersReq"
import {
    goToHomePage,
    goToLoginPage,
    goToSignupPage,
    goToComentsPage
} from "../Router/Coordinator"

export const GlobalState = (props) => {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [token, setToken] = useState('')
    const [postContent, setPostContent] = useState('')
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

    const context = {
        login,
        signup,
        handleName,
        handleEmail,
        handlePassword,
    }

    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}