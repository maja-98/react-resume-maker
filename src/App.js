import { useState } from 'react';
import './App.css';
import Academics from './components/Academics';
import BasicDetail from './components/BasicDetail';
import NavBar from './components/NavBar';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Welcome from './components/Welcome';

const resumeSessionData = JSON.parse(sessionStorage.getItem('resumeappdata')) ?? {}
/*schema : {
  'name':'Jouhar',
  'address':'Kotteeri House',
  'email':'test@gmail.com',
  'phone':'7902323123',
  'linkedin':'asdasd',
  'careerObjective':'asdasd',
  'skills':'asdasd',
  'academis':['asdasd','asd']}*/
function App() {
  const [welcomeFl,setWelcomeFl] = useState(true)
  const [displayFl, setDisplayFl] = useState([false,false,false])
  const [basicDetailFl,skillsFl,academicFl] = displayFl
  const [resumeData,setResumeData] = useState(resumeSessionData)
  const handleDisplayFl= (display) => {
    if (display==='basic'){
      setDisplayFl([true,false,false])
    }
    else if (display==='skills'){
      setDisplayFl([false,true,false])
    }
    else if (display==='academic'){
      setDisplayFl([false,false,true])
    }
  }
  const handleWelcomeFl =() =>{
    setWelcomeFl(false)
    setDisplayFl([true,false,false])
  }
  const handleDeleteAcademics = (id) =>{
    setResumeData((prevState) => {
      const newAcademics = prevState.academics.filter(val => val.id!==id)
      return {...prevState,academics:newAcademics}
    })

  }
  const handleResumeData = (e,field) => {

    setResumeData(prevState => {
         let newState;
          if (field ==='name'){
              newState= {...prevState,name:e.target.value}
          }
          else if (field ==='address'){
              newState= {...prevState,address:e.target.value}
          }
          else if (field ==='email'){
              newState= {...prevState,email:e.target.value}
          }
          else if (field ==='phone'){
              newState= {...prevState,phone:e.target.value}
          }
          else if (field ==='linkedin'){
              newState= {...prevState,linkedin:e.target.value}
          }
          else if (field ==='skills'){
              newState= {...prevState,skills:e.target.value}
          }
          else if (field.includes('academics')){
              const newAcademics = prevState?.academics?.slice() ?? []
              const id = Number(field.slice(9))
              const AcademicUpdateValue = newAcademics.find(val => val.id===id)
              if (AcademicUpdateValue){
                  AcademicUpdateValue.value=e.target.value
                  newState= {...prevState,academics:newAcademics}
              }  
              else{
                newAcademics.push({id:id,value:''})
                newState= {...prevState,academics:newAcademics}
              }          
          }
          else if (field ==='careerObjective'){
              newState= {...prevState,careerObjective:e.target.value}
          }
          sessionStorage.setItem('resumeappdata',JSON.stringify(newState))
          return newState
    })

 
  }
  return (
    <div className="App">
      {welcomeFl && <Welcome handleWelcomeFl={handleWelcomeFl}/>}
      {!welcomeFl && <NavBar handleDisplayFl={handleDisplayFl}/>}
      <div className='grid'>
        {basicDetailFl && <BasicDetail resumeData={resumeData} handleResumeData={handleResumeData}/>}
        {skillsFl && <Skills resumeData={resumeData} handleResumeData={handleResumeData}/>}
        {academicFl && <Academics resumeData={resumeData} handleResumeData={handleResumeData} handleDeleteAcademics={handleDeleteAcademics}/>}     
        {displayFl.some(Boolean) && <Resume resumeData={resumeData} handleResumeData={handleResumeData} /> } 
      </div>
    </div>
  );
}

export default App;
