import React from 'react'
import Comp1 from './Comp1/Comp1'
import Comp2 from './Comp2/Comp2'
import Comp4 from './Comp3/Comp4'
import './dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard-main-page'>
      
      <>
        <Comp1 />
      </>

      <>
        <Comp4 />
      </>

      <>
        <Comp2 />
      </>


    </div>
  )
}

export default Dashboard