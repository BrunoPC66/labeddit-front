import { GlobalContext } from "./GlobalContext"


export const GlobalState = (props) => {

    const context = {

    }

    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}