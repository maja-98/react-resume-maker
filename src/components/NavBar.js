import React from 'react'

const NavBar = ({handleDisplayFl}) => {
  return (
    <div className='nav-bar'>
        <h1 className='nav-head'>Enter Details</h1>
        <div className='nav-links'>
            <h3 onClick={()=>handleDisplayFl('basic')}>Basic</h3>
            <h3 onClick={()=>handleDisplayFl('skills')}>Skills</h3>
            <h3 onClick={()=>handleDisplayFl('academic')}>Academic</h3>
        </div>
    </div>
  )
}

export default NavBar
