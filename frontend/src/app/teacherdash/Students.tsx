
const Students = (props: { active: boolean }) => {
    
    
  return (
    <div className={!props.active ?'main-dash-act absolute ml-20' : 'main-dash absolute'}>
        <h1 className="text-[#000]">Students</h1>
    </div>
  )
}

export default Students