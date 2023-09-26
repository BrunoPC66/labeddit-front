import { useContext } from "react"
import { GlobalContext } from "../../Contexts/GlobalContext"
import { useNavigate } from "react-router-dom"

export const SignupPage = () => {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    const {
        handleName,
        handleEmail,
        handlePassword,
        signup
    } = context

    return (
        <>
            <header></header>
            <h1>SignupPage</h1>
            <form>
                <input type="name" id="name" name="name" placeholder="Nome" onChange={handleName}/>
                <input type="email" id="email" name="email" placeholder="Email" onChange={handleEmail}/>
                <input type="password" id="password" name="password" placeholder="Senha" onChange={handlePassword}/>
                <button type="submit" onClick={() => signup(navigate)}></button>
            </form>
        </>
    )
}