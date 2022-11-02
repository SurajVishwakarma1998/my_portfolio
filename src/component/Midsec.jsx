import React from 'react';
import { DiHtml5,DiCss3,DiJsBadge,DiReact,DiNodejs ,DiNpm,DiBootstrap,DiResponsive,DiVisualstudio} from 'react-icons/di';
import {SiRedux} from "react-icons/si";
import {TbApi} from "react-icons/tb";


const Midsec = () => {
  return (
    <div id='Skills'>

        <div className='black_box'>
            <h2>Skills & Services </h2>
   
         <div className='allIcon'>
                  <DiHtml5 className='Icon' style={{color:"orange",border:"1px solid orange"}}/>
                  <DiCss3 className='Icon' style={{color:"#47B5FF",border:"1px solid #47B5FF"}}/>
                  <DiJsBadge  className='Icon'  style={{color:"#f0db4f",border:"1px solid #f0db4f"}}  /> 
                  <DiReact className='Icon' style={{color:"#61dbfb",border:"1px solid #61dbfb"}}/>
                  <DiNodejs  className='Icon' style={{color:"#68a063 ",border:"1px solid #68a063"}} />
                  <DiNpm className='Icon' style={{color:"#cc3534 ",border:"1px solid #cc3534"}}/> 
                  <DiBootstrap className='Icon' style={{color:"#563d7c",border:"1px solid #563d7c"}}/>
                  <DiResponsive  className='Icon' style={{color:"white",border:"1px solid white"}}/>
                  <SiRedux className='Icon' style={{color:"#764abc",border:"1px solid #764abc"}}/>
                  <TbApi className='Icon'   style={{color:"blue",border:"1px solid blue"}}/>
                  <DiVisualstudio className='Icon'  style={{color:"#47B5FF",border:"1px solid #47B5FF"}}/>
         </div>
          
          </div>  
      
      
    </div>
  )
}

export default Midsec