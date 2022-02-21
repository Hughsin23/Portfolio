import './Navbarstyle.css'
import { useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from 'react-router-dom'

const linkStyle = {
  borderRadius: '7px',
  backgroundColor: ''
}

const Logo = () => {
  return (
    <div className='logo'>
      <h2>My stuff</h2>
      <Link className="link" to="/" >Home</Link>
      <Link className="link" to="/projects" >My projects</Link>
    </div>
  );
}

const NavLink = ({url, text, icon = null}) => {
  return (
    <>
      {icon}
      <a target="_blank" href={url}>{icon, text}</a>
    </>
    )
} 



const DropdownList = () => {

  return (
  <div className='links-dropdown'>
    <ul className='projects-list'>
      <li><NavLink url="https://hughsin23.github.io/tic-tac-toe/" text="TicTacToe" /></li>
      <li><NavLink url="https://show-us-your-quack.herokuapp.com/" text="Show us your Quack" /></li>
      <li><NavLink url="https://safe-haven-app.herokuapp.com/" text="Group project: Safehaven" /></li>
    </ul> 
  </div>
  )
}

const ProjectDropdown = ({icon, isDropdownVisible, setIsDropdownVisible}) => {
    return(
      <a className="projects-container" onClick={() => { setIsDropdownVisible(!isDropdownVisible) }}>
        <p>Project demos</p> {icon}
      </a>
      );
  }

export default function Navbar() {
  
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  return (
    <div className='navbar-container'>
      <Logo />
      <div className="links">
        <NavLink url="https://github.com/Hughsin23" text="Github" icon={<GitHubIcon />}/>
        <NavLink url="https://www.linkedin.com/in/hsinclair23/" text="LinkedIn" icon={<LinkedInIcon />}/>
        <ProjectDropdown setIsDropdownVisible={setIsDropdownVisible} isDropdownVisible={isDropdownVisible} icon={ <ExpandMoreIcon fontSize="small" />} />
        {isDropdownVisible && <DropdownList />}
      </div>
      

    </div>
  );
};
