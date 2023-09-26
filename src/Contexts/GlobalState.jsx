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
    const [post, setPost] = useState("")
    const [token, setToken] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    
    const login = (navigate) => {
        getLogin(email, password)
        .then(res => {
            setToken(res.token)
            goToHomePage(navigate)
        })
        .catch(err => console.error(`Erro no login: ${err}`))
    }
    
    const signup = (navigate) => {
        newUser(name, email, password)
        .then(res => {
            setToken(res.token)
            login()
            goToHomePage(navigate)
        })
        .catch(err => console.error(`Erro no cadastro: ${err}`))
    }

    const context = {
        handleName,
        handleEmail,
        handlePassword,
        signup,
        login,

    }

    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}