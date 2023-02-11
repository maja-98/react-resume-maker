import React from 'react'

const BasicDetail = ({resumeData,handleResumeData}) => {
  return (
    <div className='flex-column '>
      <label htmlFor='name'>Enter Name</label>
      <input required id='name' type={'text'} onChange={(e)=>handleResumeData(e,'name')} defaultValue={resumeData?.name  } />
      <label htmlFor='address'>Enter Address</label>
      <input required id='address' type={'text'} onChange={(e)=>handleResumeData(e,'address')} defaultValue={resumeData?.address } />
      <label htmlFor='email'>Enter Email</label>
      <input required id='email' type={'email'} onChange={(e)=>handleResumeData(e,'email')} defaultValue={resumeData?.email } />
      <label htmlFor='phone'>Enter Phone</label>
      <input required id='phone' type={'number'} onChange={(e)=>handleResumeData(e,'phone')} defaultValue={resumeData?.phone } />
      <label htmlFor='linkedin'>Enter Linkedin</label>
      <input id='linkedin' type={'text'} onChange={(e)=>handleResumeData(e,'linkedin')} defaultValue={resumeData?.linkedin } />
      <label htmlFor='career-objective'>Enter Career Objective</label>
      <textarea required id='career-objective'  onChange={(e)=>handleResumeData(e,'careerObjective')} defaultValue={resumeData?.careerObjective }></textarea>
    </div>
  )
}

export default BasicDetail
