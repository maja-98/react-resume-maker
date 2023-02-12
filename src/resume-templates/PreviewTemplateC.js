const PreviewTemplateC =  ({resumeData}) => {
  const {name,address,skills,careerObjective,academics} = resumeData
  const careerObjectiveLines = careerObjective?.split('\n') ?? []
  return (
    <div className='t3-body'>
      <h6 className='t3-name' >{name}</h6>
      <h4 className='t3-title'>Address</h4>
      <h6>{address}</h6>
      <h5 className='t3-title'>Academics</h5>
      {academics?.map(val => {
        return (
          val.value.trim() !=='' && <li className="t3-bullets" key={val.id}> {val.value}</li>
        )
      })}
      <h4 className='t3-title'> Skills</h4>
      <h6>{skills}</h6>
      <h4 className='t3-title'>careerObjective</h4>
      {careerObjectiveLines.map((line,ind) => <p key={ind}>{line}</p>)}
    </div>
  )
}
export default PreviewTemplateC