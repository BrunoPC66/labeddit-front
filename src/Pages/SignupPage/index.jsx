import { useContext } from "react"
import { GlobalContext } from "../../Contexts/GlobalContext"
import { useNavigate } from "react-router"

export const SignupPage = () => {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    const {
        signup,
        handleName,
        handleEmail,
        handlePassword
    } = context

    return (
        <>
            <h1>SignupPage</h1>
            <header>
            </header>
            <body>
                <section>
                    <img />
                    <h1>Texto de boas vindas...</h1>
                </section>
                <form>
                    <input type="name" id="name" name="name" value="" placeholder="Nome" onChange={(e) => handleName(e)} />
                    <input type="email" id="email" name="email" placeholder="Email" onChange={(e) => handleEmail(e)} />
                    <input type="password" id="password" name="password" placeholder="Senha" onChange={(e) => handlePassword(e)} />
                    <p>Ao continuar você concorda com o nosso <a>Termo de Contrato</a> e com nossa <a>Política de Privacidade</a></p>
                    <input type="checkbox" /> Eu concordo em receber email sobre as novidades da plataforma da Labeddit.
                    <button type="submit" onClick={() => signup(navigate)}>Cadastrar</button>
                </form>
            </body>
            <footer></footer>
        </>
    )
}