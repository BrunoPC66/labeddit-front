import { useContext } from "react"
import { GlobalContext } from "../../Contexts/GlobalContext"
import { useNavigate } from "react-router-dom"

export const HomePage = () => {
    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    const {

    } = context

    return (
        <>
            <h1>HomePage</h1>
        </>
    )
}