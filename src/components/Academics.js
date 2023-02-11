import React from 'react'
import { Trash } from 'react-bootstrap-icons'


const Academics = ({handleResumeData,resumeData,handleDeleteAcademics}) => {
  let ids = resumeData?.academics?.map((val)=>val.id) ?? [0]
  const uniquekey = Math.max(...ids)+1

  return (
    <div className='flex-column '>
      <label htmlFor='academics'>Test Academics</label>
      {resumeData?.academics?.map((val) => {
        return(
          
          <div className='flex-row' key={val.id}  >
                  <input id={`test${val.id}`} 
                  className={(resumeData.academics.length>1) ?'multi-input':''} 
                  onChange={(e)=>handleResumeData(e,`academics${val.id}`)} 
                  defaultValue={val.value}/>
                  {resumeData.academics.length>1 && <button onClick={() => handleDeleteAcademics(val.id)}><Trash/></button>}
            </div>
      )})}
      
      
      {resumeData?.academics?.length===undefined && <input id={`test0`} onChange={(e)=>handleResumeData(e,`academics${uniquekey}`)} defaultValue={''}/>}
      <button value={''} onClick={(e)=>handleResumeData(e,`academics${uniquekey}`)}>Add Academics</button>
    </div>
  )
}

export default Academics
