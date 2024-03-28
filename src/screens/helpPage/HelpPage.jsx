import React from 'react';
import "./helpPage.css";
import NavBar from "../../components/navBar/NavBar.jsx";
function HelpPage({user }) {
  return (
    <>
    <NavBar showSearch="noShow" user={user}/>
    <div className='helpPageContainer'>
      <h3 className='helpPageTitle'>Meet The Team</h3>
      <div className='collaboratorContainer'>
        <p className='collaboratorName'>Cesar Iparrea</p>
        <div className='gitHubIcon'><a href=''></a></div>
        <div className='linkedInIcon'><a href='https://www.linkedin.com/in/cesariparrea'></a></div>
      </div>
      <div className='collaboratorContainer'>
        <p className='collaboratorName'>Kevin Butler</p>
        <div className='gitHubIcon'><a href='https://github.com/kevinjbutler1994'></a></div>
        <div className='linkedInIcon'><a href=''></a></div>
      </div>
      <div className='collaboratorContainer'>
        <p className='collaboratorName'>John Lopez</p>
        <div className='gitHubIcon'><a href='https://github.com/JLopez0001'></a></div>
        <div className='linkedInIcon'><a href='https://www.linkedin.com/in/john-lopez01/'></a></div>
      </div>
      <div className='collaboratorContainer'>
        <p className='collaboratorName'>Joseph Coste</p>
        <div className='gitHubIcon'><a href='https://github.com/josephcoste'></a></div>
        <div className='linkedInIcon'><a href=''></a></div>
      </div>
      <div className='collaboratorContainer'>
        <p className='collaboratorName'>Luis Payan</p>
        <div className='gitHubIcon'><a href=''></a></div>
        <div className='linkedInIcon'><a href='https://www.linkedin.com/in/luis-payan-jr/'></a></div>
      </div>
    </div>
    </>
  )
}
export default HelpPage