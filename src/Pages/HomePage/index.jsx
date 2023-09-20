import { getLogin, newUser } from "../../Requisitions/UsersReq"

export const HomePage = () => {
    console.log(getLogin('fulano@email.com', 'fulano123'));

    return (
        <>
            <h1>HomePage</h1>
        </>
    )
}