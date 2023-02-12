import React, { useState ,useRef} from 'react'
import TemplateA from '../resume-templates/TemplateA'
import PreviewTemplateA from '../resume-templates/PreviewTemplateA'
import TemplateB from '../resume-templates/TemplateB'
import PreviewTemplateB from '../resume-templates/PreviewTemplateB'
import TemplateC from '../resume-templates/TemplateC'
import PreviewTemplateC from '../resume-templates/PreviewTemplateC'
import {CaretLeft, CaretRight} from 'react-bootstrap-icons'



const templateCount = 3
const firstState = Array.from({length:templateCount},()=>false)
firstState[0]=true
const ref = React.createRef();


const Resume = ({resumeData}) => {
    const mainResumeRef = useRef()
    const [templateDisplayFls,setTemplateDisplayFls] = useState(firstState)

    const toggleMainResumeDisplay = ()=>{
        if (mainResumeRef.current.style.display==='flex' ){
            mainResumeRef.current.style.display='none'
        }
        else{
            mainResumeRef.current.style.display='flex'
            mainResumeRef.current.style.flexDirection='column'
        }
    }
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
        <div className='template-display' >
            {templateDisplayFls[0] && <PreviewTemplateA   resumeData={resumeData}/>}
            {templateDisplayFls[1] && <PreviewTemplateB   resumeData={resumeData}/>}
            {templateDisplayFls[2] && <PreviewTemplateC  resumeData={resumeData}/>}
        </div>

        <div className='template-selector-arrow-container'>
            <button onClick={()=>{handleTemplateDisplayFls('prev')}}><CaretLeft/></button>
            <button onClick={()=>{handleTemplateDisplayFls('next')}}><CaretRight/></button>
        </div>
        <button onClick={toggleMainResumeDisplay} className='gen-resume-button'>Generate Resume</button>
        <div id='template-og-container'  ref={mainResumeRef}>
            <div id='template-og'  ref={ref}>
                {templateDisplayFls[0] && <TemplateA   resumeData={resumeData}/>}
                {templateDisplayFls[1] && <TemplateB   resumeData={resumeData}/>}
                {templateDisplayFls[2] && <TemplateC  resumeData={resumeData}/>}
            </div>
            <div className='flex-row resume-btn-container'>
                <button onClick={toggleMainResumeDisplay} >Close</button>

            </div>

        </div>


    </div>
  )
}

export default Resume
