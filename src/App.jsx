import { ChakraProvider } from "@chakra-ui/react";
import { GlobalState } from "./Contexts/GlobalState";
import { Router } from "./Router/Router";

function App({children}) {

  return (
    <ChakraProvider >
      <GlobalState children={children}>
        <Router />
      </GlobalState>
    </ChakraProvider>
  )
}

export default App;