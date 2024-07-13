import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import EmailVerify from "./components/EmailVerify/EmailVerify";
import Services from "./components/Services/Services";
import HotelCard from "./components/Cards/HotelCard";
import LandingPage from "./components/LandingPage copy/LandingPage";



function App() {
  return (
    <div className="App">
      
      
      
      <Router>
      
      
        <Routes>



          <Route path='/login' element={<Login /> } />
          <Route path='/register' element={<SignUp /> } />
          <Route path='/service' element={<Services /> } />
          <Route path='/hotel' element={<HotelCard /> } />
          <Route path='/landing' element={<LandingPage /> } />

          <Route path="/users/:id/verify/:token" element={<EmailVerify />} />




        </Routes>
      
    </Router>

    </div>
  );
}

export default App;
