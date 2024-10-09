import React from 'react';
import ExperienceItem from '../components/ExperienceItem';
import Pic1 from "../resources/embedded.png"
import Pic2 from "../resources/telco.png"
import Pic3 from "../resources/csv.png"
import Pic4 from "../resources/inhouse.png"
import Pic5 from "../resources/empset.png"
import "../styles/Experience.css"

const experienceList = [
  {
    name : "Vehicular Development",
    image : Pic1,
  },
  {
    name : "Voice Over LTE (Telco Project)",
    image : Pic2,
  },
  {
    name : "CSV Audit Powershell Script",
    image : Pic3
  },
  {
    name : "In-house Management SQA Testing",
    image : Pic4
  },
  {
    name : "Office Management System",
    image : Pic5
  },{
    name : "Quality Improvement SQA Testing (Web Development)"
  },{
    name : "System Migration (EDI Project)"
  },{
    name : "LTE Systems"
  },{
    name : "Digital Payment SQA Testing (Web Development)"
  }
]
function Experience() {
  return (
    <div className="experience">
        <h1 className='expTitle'>Relevant Project Experiences</h1>
        <div className='expList'>
          {experienceList.map((experience) => {
            return <ExperienceItem name ={experience.name} image={experience.image}/>
            
          })}
        </div>
    </div>

  );
}

export default Experience;

// return (
//   <div key={experience.name} className="expList">
//       <ExperienceItem name={experience.name} image={experience.image} />
//       <Button>More Details</Button>
//   </div>
// );