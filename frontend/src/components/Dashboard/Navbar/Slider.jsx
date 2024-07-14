import React from 'react'
import '../Navbar/Slider.css'
function Slider() {
  return (
     <div className="sidebar">
        <div className="profile">
            <img src="https://via.placeholder.com/80" alt="Profile Picture" className="profile-img"/>
            <h2>Jitu Chauhan</h2>
          
        </div>
        <nav>
            <ul className='s-ul'>
                <li><a href="#">Home</a></li>
                <li><a href="#" className="active">Profile</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Billing</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Notifications</a></li>
                <li><a href="#">Integration</a></li>
                <li><a href="#">Session</a></li>
                <li><a href="#">Social</a></li>
                <li><a href="#">Appearance</a></li>
                <li><a href="#">Sign Out</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Slider