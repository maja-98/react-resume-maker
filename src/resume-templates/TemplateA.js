import React from 'react'

const TemplateA = ({resumeData}) => {
  const {name,address,skills,careerObjective,academics} = resumeData
  return (
    
    <div className='t1-body'>
      <h6 >{name}</h6>
      {name &&<hr/>}
      <h4 className='t1-title'>Address</h4>
      <h6>{address}</h6>
      <h5 className='t1-title'>Academics</h5>
      {academics?.map(val => {
        return (
          val.value.trim() !=='' && <li key={val.id}> {val.value}</li>
        )
      })}
      <h4 className='t1-title'> Skills</h4>
      <h6>{skills}</h6>
      <h4 className='t1-title'>careerObjective</h4>
      <p>{careerObjective}</p>
    </div>
  )
}

export default TemplateA
