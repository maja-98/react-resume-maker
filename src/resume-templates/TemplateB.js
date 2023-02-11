import React from 'react'

const TemplateA = ({resumeData}) => {
  const {name,address,skills,careerObjective} = resumeData
  return (
    
    <div className='t2-body'>
      <h5>Test purpose only</h5>
      <div className='flex-row'>
        <div>
          <h4>Name</h4>
          <h6>{name}</h6>
        </div>
        <div>
          <h4>Address</h4>
          <h6>{address}</h6>
        </div>

      </div>

      <h4>Skills</h4>
      <h6>{skills}</h6>
      <h4>careerObjective</h4>
      <p>{careerObjective}</p>
    </div>
  )
}

export default TemplateA
