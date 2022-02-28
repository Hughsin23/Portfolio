import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {Icon} from '@iconify/react'
// import { isMobile } from 'react-device-detect'
import safeHavenImg from '../../safehaven.png'
import ticTacToeImg from '../../tictactoe.png'
import showUsYourQuackImg from '../../quack.png'
import Flipcard from "../project_flipcards/Flipcards.js"
import './ProjectsStyle.css'


const isMobile = true

export default function Projects() {

    const tictactoeStack = ["HTML", "CSS", "Javascript"]
    const quackStack = ["HTML", "CSS", "Ruby", "Sinatra", "Cloundinary API", "PostgreSQL"]
    const safehavenStack = ["React", "Javascript", "Google Maps API", "CSS", "HMTL", "PostgreSQL"]

    return (
        <div className="project-container">
            <div className="projects-carousel">
            <Parallax className="project-parallax" pages={2.3} style={{ top: '0', left: '0' }}>
            
                <ParallaxLayer
                offset={0}
                speed={0.5}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flexGrow: "1" }}>
                {
                    isMobile ? 
                        <h4 style={{color: "white", paddingBottom: "5px"}}>Tap images for stack info!</h4>
                    :
                        <h4 style={{color: "white"}}>Click images for stack info!</h4>
                }
                { 
                    isMobile ? 
                        <><Flipcard projectName={"TicTacToe"} img={ticTacToeImg} stack={tictactoeStack} width={60}/></> 
                    : 
                        <><Flipcard projectName={"TicTacToe"} img={ticTacToeImg} stack={tictactoeStack} width={35}/></> 
                }
                <p className="project-p">Tic-tac-toe. Try it <a target="_blank" href="https://hughsin23.github.io/tic-tac-toe/">here</a></p>
                <p className="project-p">Scroll down for more <Icon icon="akar-icons:arrow-down" color="white" /></p>
                </ParallaxLayer>

                

                <ParallaxLayer
                offset={0.9}
                speed={0.5}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    flexDirection: 'column',
                    backgroundColor: '#2067e3'
                    
                }}>
                    { 
                        isMobile ? 
                            <><Flipcard projectName={"Show us your Quack"} img={showUsYourQuackImg} stack={quackStack} width={60}/></> 
                        : 
                            <><Flipcard projectName={"Show us your Quack"} img={showUsYourQuackImg} stack={quackStack} width={35}/>
                </> }
                    <p className="project-p">Show us your Quack! A duckspotting CRUD app! Try it <a target="_blank" href="https://show-us-your-quack.herokuapp.com/">here</a></p>
                    <p className="project-p">Scroll down for more <Icon icon="akar-icons:arrow-down" color="white" /></p>
                </ParallaxLayer>

                <ParallaxLayer
                offset={1.5}
                speed={0.5}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    flexDirection: 'column',
                    backgroundColor: '#3044FA'
                }}>
                {
                    isMobile ? 
                    <><Flipcard projectName={"Safehaven"} img={safeHavenImg} stack={safehavenStack} width={32}/></> 
                : 
                    <><Flipcard projectName={"Safehaven"} img={safeHavenImg} stack={safehavenStack} width={19}/></>
                }
                <br/>
                <p className="project-p" >Group project: Safehaven, a full stack safety app for women. Try it <a target="_blank" href="https://safe-haven-app.herokuapp.com/">here</a></p>
                </ParallaxLayer>
            </Parallax>
            </div>
            <div className='scroll-down-grid'>
                <h2 className='scroll-down'>My details<Icon icon="akar-icons:arrow-down" color="white" />
                </h2>
            </div>
        </div>
    )
}