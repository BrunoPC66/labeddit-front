import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from "../../Contexts/GlobalContext"

export const LoginPage = () => {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    const {
        handleEmail,
        handlePassword,
        login
    } = context

    return (
        <>
            <header></header>
            <h1>LoginPage</h1>
            <section>
                <img />
                <h1>Labeddit</h1>
                <h3>Uma rede social da comunidade tech</h3>
            </section>
            <form>
                <input type="email" id="email" name="email" placeholder="Email" onChange={handleEmail} />
                <input type="password" id="password" name="password" placeholder="Senha" autoComplete="on" onChange={handlePassword} />
                <button type="submit" onClick={() => login(navigate)}>Entrar</button>
            </form>
            <button>Criar uma conta</button>
        </>
    )
}