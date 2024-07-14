import React from 'react'
import '../Comp1/comp1.css'

const Comp4 = () => {
  return (
    <div><div className="dashboard-main">
    <div className="sales-revenue">
        <h2>Sales / Revenue</h2>
        <div className="chart">
            <img src="sales_chart.png" alt="Sales Chart" />
        </div>
    </div>
    <div className="daily-feed">
        <h2>Daily feed</h2>
        <div className="feed-item">
            <img src="ashley.png" alt="Ashley Briggs" />
            <div className="feed-content">
                <p><strong>Ashley Briggs</strong> started following <strong>Stacie Hall</strong></p>
                <span className="feed-time">5m ago</span>
            </div>
        </div>
        <div className="feed-item">
            <img src="chris.png" alt="Chris Wood" />
            <div className="feed-content">
                <p><strong>Chris Wood</strong> posted something on <strong>Stacie Hall</strong>'s timeline</p>
                <span className="feed-time">30m ago</span>
                <p className="feed-message">Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing...</p>
            </div>
        </div>
        <div className="feed-item">
            <img src="stacie.png" alt="Stacie Hall" />
            <div className="feed-content">
                <p><strong>Stacie Hall</strong> posted a new blog</p>
                <span className="feed-time">1h ago</span>
            </div>
        </div>
        <button className="load-more">Load more</button>
    </div>
</div></div>
  )
}

export default Comp4