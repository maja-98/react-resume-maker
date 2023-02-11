import React from 'react'

const Skills = ({handleResumeData,resumeData}) => {
  return (
    <div className='flex-column '>
      <label htmlFor='test-skill'>Test Skills</label>
      <input id='test-skill' onChange={(e)=>handleResumeData(e,'skills')} defaultValue={resumeData?.skills}/>
    </div>
  )
}

export default Skills
