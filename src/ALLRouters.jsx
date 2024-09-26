import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from "./HomePage"
import PasswordGenerator from "./PasswordGEnerator"
import Otp from "./Otp"

const ALLRouters = () => {
  return (
  <>
  <Router>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/passwordgenerator" element={<PasswordGenerator/>}/>
        <Route path="/passcode" element={<Otp/>} />
    </Routes>
  </Router>
  
  
  </>
  )
}

export default ALLRouters