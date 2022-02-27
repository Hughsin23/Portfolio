import './Aboutstyle.css';
import Typical from 'react-typical'
import {Icon} from '@iconify/react'

const AboutMe = () => {

  return (
    <div className="about-me">
      
      <h1>I'm Hugh, a Software Engineer</h1>
      <h2 style={{padding: '10px'}}>
      I <Typical steps={['can code', 1000, 'am adaptable', 1000, 'am curious', 1000, 'am a Software Engineer', 1000, 'want to learn', 1000]} loop={Infinity} wrapper="span"/>
      </h2>
      
    </div>
  );
}

const Skills = () => {

  return (
    <div className="skills">
      <h2 className="skills-title">My tech skills include:</h2>
      <ul className="skills-ul">
        <li><Icon icon="cib:html5" color="white"/> HTML</li>
        <li><Icon icon="cib:css3-shiled" color="white" /> CSS</li>
        <li><Icon icon="cib:javascript" color="white" /> Javascript</li>
        <li><Icon icon="la:node-js" color="white" /> NodeJS</li>
        <li><Icon icon="simple-icons:googlemaps" color="white" /> Google maps API</li>
        <li><Icon icon="teenyicons:ruby-outline" color="white" />  Ruby</li>
        <li><Icon icon="cib:postgresql" color="white" /> PostgreSQL</li>
        <li><Icon icon="cib:react" color="white" /> React</li>
      </ul>
      <h2 className='resume-title'><a href=""></a> <Icon icon="carbon:document" color="white" /> Take a peek at my resume</h2>
      <h2 
        className='scroll-down'>Keep scrolling to see my projects <Icon icon="akar-icons:arrow-down" color="white" />
      </h2>
    </div>
  )
}


export default function About() {
  
  


  return (
    <div className="about-container">
      <AboutMe /> 
      <Skills />
   </div>
  );
}