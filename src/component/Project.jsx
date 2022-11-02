import React from 'react';
import Singlepro from './Singlepro';
import  ProjectData  from '../ProjectData';

const Project = () => {
  console.log(ProjectData);
  return (
    <div id='ProjectSec'>
        <section id="project">
        <h2>Projects</h2>
        <p>Check out my Github page for code </p>
        <div className="project_container">
          {ProjectData.map((data)=>
            <Singlepro  key={data.id} Image={data.image} title={data.title}/>
          )}
         
        </div>
        </section>
    </div>
  )
}

export default Project