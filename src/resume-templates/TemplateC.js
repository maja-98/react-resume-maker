import React from 'react'

const TemplateA = ({resumeData}) => {
  const {name,address,skills,careerObjective} = resumeData
  return (
    
    <div className='t3-body'>
      <h5>Test purpose only</h5>
      <h4>Name</h4>
      <h6>{name}</h6>
      <h4>Address</h4>
      <h6>{address}</h6>
      <div className='flex-row'>
        <div>
          <h4>Skills</h4>
          <h6>{skills}</h6>
        </div>
        <div>
          <h4>careerObjective</h4>
          <p>{careerObjective}</p>   
        </div>


      </div>

    </div>
  )
}

export default TemplateA
