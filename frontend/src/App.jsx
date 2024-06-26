import Landing from "./pages/Landing"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Dashboard from "./pages/Dashboard"

import {BrowserRouter, Route,Routes} from "react-router-dom" 
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />


      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
