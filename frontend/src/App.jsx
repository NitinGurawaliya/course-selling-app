import Landing from "./pages/Landing"
import Signup from "./pages/Signup"

import {BrowserRouter, Route,Routes} from "react-router-dom" 
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
