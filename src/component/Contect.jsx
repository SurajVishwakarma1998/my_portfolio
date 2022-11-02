import React from 'react';
import {DiGithub} from "react-icons/di";
import {AiFillCodeSandboxCircle,AiFillLinkedin} from "react-icons/ai";
import {SiIndeed } from "react-icons/si";

const Contect = () => {
  return (
    <div className="contact" id='ContactPage'>
        <div >
            <h2>Contact Me</h2>
            <p>Email Id : suvishwakarma67@gmail.com</p>
            
             
        </div>
        <div>
            <h2> Network</h2>
            <p className='infoP'>following are the links of  my projects mention above ..</p>
            <a href='https://github.com/SurajVishwakarma1998?tab=repositories' target="blank"><DiGithub className='contactLink' style={{color:"black"}} /></a>
            <a href='https://codesandbox.io/dashboard/drafts?workspace=a65aacfb-dba8-4325-9e78-5c0cdf599235' target="blank"><AiFillCodeSandboxCircle className='contactLink' style={{color:"orange"}} /></a>
            <a href='https://profile.indeed.com/?hl=en&co=IN&from=gnav-passport--passport-webapp&_ga=2.37824288.242185604.1667195471-1423706116.1664638766' target="blank"><SiIndeed className='contactLink' style={{color:"#241663"}} /></a>
            <a href='https://www.linkedin.com/in/suraj-vishwakarma-87b351246/' target="blank"><AiFillLinkedin className='contactLink' style={{color:"#537EC5"}} /></a>
        </div>
    </div>
  )
}

export default Contect