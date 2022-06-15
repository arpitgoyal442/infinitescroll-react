import Login from "./views/Login.js";
import Home from "./views/Home.js";
import { BrowserRouter, Routes, Route} from "react-router-dom";




import "./styles/login.css";
import "./styles/home.css";
import "./styles/user.css"


function App() {

 

  return (
    <BrowserRouter>
    <Routes>

        <Route exact path="/" element={<Login />} />
        <Route  exact path="/home"  element={<Home />}   />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
