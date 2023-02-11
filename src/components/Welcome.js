import React from 'react'

function Welcome({handleWelcomeFl}) {
  return (
    <div>
      <h1>Welcome to Resume Generator App</h1>
      <p>Instructions for creating Resume</p>
      <p>Happy something...</p>
      <button onClick={handleWelcomeFl}>Continue</button>
    </div>
  )
}

export default Welcome
