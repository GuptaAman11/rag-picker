import React from 'react'
import './comp1.css'
const Comp1 = () => {
  return (
    <div>
        <div className="dashboard-cards">
            <div className="card welcome-card">
                <h2>Welcome Back, Chris!</h2>
                <p>AppStack Dashboard</p>
                <img src="welcome_image.png" alt="Welcome Image"/>
            </div>
            <div className="card earnings-card">
                <h2>$ 24,300</h2>
                <p>Total Earnings</p>
                <span className="positive-change">+5.35% Since last week</span>
                <div className="card-icon">&#128176;</div>
            </div>
            <div className="card orders-card">
                <h2>43</h2>
                <p>Pending Orders</p>
                <span className="negative-change">-4.25% Since last week</span>
                <div className="card-icon">&#128179;</div>
            </div>
            <div className="card revenue-card">
                <h2>$ 18,700</h2>
                <p>Total Revenue</p>
                <span className="positive-change">+8.65% Since last week</span>
                <div className="card-icon">&#128181;</div>
            </div>
        </div>
    </div>
  )
}

export default Comp1