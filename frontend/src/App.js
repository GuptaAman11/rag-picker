import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import EmailVerify from "./components/EmailVerify/EmailVerify";
import Dashboard from "./components/Dashboard/Dashboard";
import Payment from "./components/Payment/Payment";

import Userprofile from "./components/UserProfile/Userprofile";

import Mapx from "./components/Mapping/Mapx";





function App() {
  return (
    <div className="App">
      
      
      
      <Router>
      
      
        <Routes>



          <Route path='/login' element={<Login /> } />
          <Route path='/register' element={<SignUp /> } />
          <Route path='/home' element={<Dashboard /> } />
          <Route path='/map' element={<Mapx /> } />
          <Route path='/userprofile' element={<Userprofile/> } />
          <Route path='/payment' element={<Payment/> } />
          <Route path="/users/:id/verify/:token" element={<EmailVerify />} />





        </Routes>
      
    </Router>

    </div>
  );
}

export default App;
