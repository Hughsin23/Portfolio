import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import safeHavenImg from '../../safehaven.png'
import ticTacToeImg from '../../tictactoe.png'
import showUsYourQuackImg from '../../quack.png'
import './ProjectsStyle.css'
import {Icon} from '@iconify/react'
import Flipcard from "../project_flipcards/Flipcards.js"




export default function Projects() {

    var tictactoeStack = ["HTML", "CSS", "JS"]

    return (
        <div className="project-container">
            <div className="projects-carousel">
            <Parallax className="project-parallax" pages={3} style={{ top: '0', left: '0' }}>
            
                <ParallaxLayer
                offset={0}
                speed={2.5}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',  }}>
                <Flipcard imgUrl={"../../tictactoe.png"} projectName={"TicTacToe"} projectStack={tictactoeStack}/>
                {/* <img className="tictactoe-img" src={ticTacToeImg} alt="" />
                <p className="project-p">Tic-tac-toe. Try it <a target="_blank" href="https://hughsin23.github.io/tic-tac-toe/">here</a></p>
                <p className="project-p">Scroll down for more <Icon icon="akar-icons:arrow-down" color="white" /></p> */}
                </ParallaxLayer>

                

                <ParallaxLayer
                offset={1}
                speed={0.5}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    flexDirection: 'column',
                    backgroundColor: '#2067e3'
                    
                }}>
                    <img src={showUsYourQuackImg} alt="" />
                    <p className="project-p">Show us your Quack! A duckspotting CRUD app! Try it <a target="_blank" href="https://show-us-your-quack.herokuapp.com/">here</a></p>
                    <p className="project-p">Scroll down for more <Icon icon="akar-icons:arrow-down" color="white" /></p>
                </ParallaxLayer>

                <ParallaxLayer
                offset={2}
                speed={0.5}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    flexDirection: 'column',
                    backgroundColor: '#3044FA'
                }}>
                <img className="safehaven-img" src={safeHavenImg} alt="" />
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