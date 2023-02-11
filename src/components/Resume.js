import React, { useState } from 'react'
import TemplateA from '../resume-templates/TemplateA'
import TemplateB from '../resume-templates/TemplateB'
import TemplateC from '../resume-templates/TemplateC'
import {CaretLeft, CaretRight} from 'react-bootstrap-icons'

const templateCount = 3
const firstState = Array.from({length:templateCount},()=>false)
firstState[0]=true



const Resume = ({resumeData}) => {

    const [templateDisplayFls,setTemplateDisplayFls] = useState(firstState)
    const handleTemplateDisplayFls = (direction) => {
        
        setTemplateDisplayFls((prevState) => {
            if(direction==='next'){
                const currentTemplateIndex = prevState.findIndex(t => t===true)
                const nextTemplateIndex = currentTemplateIndex+1=== prevState.length ? 0: currentTemplateIndex+1
                const returnArray = Array.from({length:prevState.length},()=>false)
                returnArray[nextTemplateIndex]=true
                return returnArray
            }
            else if (direction==='prev'){
                const currentTemplateIndex = prevState.findIndex(t => t===true)
                const prevTemplateIndex = currentTemplateIndex-1<0 ? prevState.length-1: currentTemplateIndex-1    
                const returnArray = Array.from({length:prevState.length},()=>false)
                returnArray[prevTemplateIndex]=true       
                return returnArray
            }
            
        })
    }
  return (
    <div className='template-container'>
        <div className='template-display'>
            {templateDisplayFls[0] && <TemplateA resumeData={resumeData}/>}
            {templateDisplayFls[1] && <TemplateB resumeData={resumeData}/>}
            {templateDisplayFls[2] && <TemplateC resumeData={resumeData}/>}
        </div>
        <div className='template-selector-arrow-container'>
            <button onClick={()=>{handleTemplateDisplayFls('prev')}}><CaretLeft/></button>
            <button onClick={()=>{handleTemplateDisplayFls('next')}}><CaretRight/></button>
        </div>

    </div>
  )
}

export default Resume
