import { GlobalState } from "./Contexts/GlobalState";
import { Router } from "./Router/Router";

function App() {

  return (
    <GlobalState>
      <Router/>
    </GlobalState>
  )
}

export default App;