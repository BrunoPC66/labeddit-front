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
            <h1>LoginPage</h1>
            <header>
            </header>
            <body>
                <section>
                    <img />
                    <h1>Labeddit</h1>
                    <h3>Uma rede social da comunidade tech</h3>
                </section>
                <form>
                    <input type="email" id="email" name="email" placeholder="Email"
                        autoComplete="on" onChange={(e) => handleEmail(e)} />
                    <input type="password" id="password" name="password" placeholder="Senha" autoComplete="on" onChange={(e) => handlePassword(e)} />
                    <button type="submit" onClick={() => login(navigate)}>Entrar</button>
                </form>
                <button>Criar uma conta</button>
            </body>
            <footer>

            </footer>
        </>
    )
}