const PreviewTemplateA =  ({resumeData}) => {
  const {name,address,skills,careerObjective,academics} = resumeData
  const careerObjectiveLines = careerObjective.split('\n')
  return (
    <div className='t1-body'>
      <h6 className='t1-name' >{name}</h6>
      <h4 className='t1-title'>Address</h4>
      <h6>{address}</h6>
      <h5 className='t1-title'>Academics</h5>
      {academics?.map(val => {
        return (
          val.value.trim() !=='' && <li className="t1-bullets" key={val.id}> {val.value}</li>
        )
      })}
      <h4 className='t1-title'> Skills</h4>
      <h6>{skills}</h6>
      <h4 className='t1-title'>careerObjective</h4>
      {careerObjectiveLines.map((line,ind) => <p key={ind}>{line}</p>)}
    </div>
  )
}
export default PreviewTemplateA