import './Aboutstyle.css';
import Typical from 'react-typical'




const AboutMe = () => {

  return (
    <div className="about-me">
      
      <h1>I'm Hugh, a Software Engineer</h1>
      <h2>
      I <Typical steps={['can code', 1000, 'am adaptable', 1000, 'am curious', 1000, 'want to learn', 1000]} loop={Infinity} wrapper="span"/>
      </h2>
      
    </div>
  );
}


export default function Home() {
  
  


  return (
   <AboutMe /> 
  );
}