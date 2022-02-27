import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import safeHavenImg from '../../safehaven.png'
import ticTacToeImg from '../../tictactoe.png'
import showUsYourQuackImg from '../../quack.png'
import './ProjectsStyle.css'


export default function Projects() {

    return (
        <div className="project-container">
            <div className="projects-carousel">
            <Parallax className="project-parallax" pages={3} style={{ top: '0', left: '0' }}>
            
                <ParallaxLayer
                offset={0}
                speed={2.5}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',  }}>
                <img className="tictactoe-img" src={ticTacToeImg} alt="" />
                <p style={{ borderRadius: '10px', width: '300px', backgroundColor: '#4120e3', color: 'white', textAlign: 'center' }}>Tic-tac-toe. Try it <a target="_blank" href="https://hughsin23.github.io/tic-tac-toe/">here</a></p>
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
                    <p style={{ borderRadius: '10px', width: '300px', backgroundColor: '#4120e3', color: 'white', textAlign: 'center' }}>Show us your Quack! A duckspotting CRUD app! Try it <a target="_blank" href="https://show-us-your-quack.herokuapp.com/">here</a></p>
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
                <p style={{ borderRadius: '10px', width: '300px', backgroundColor: '#4120e3', color: 'white', textAlign: 'center' }}>Group project: Safehaven, a full stack safety app for women. Try it <a target="_blank" href="https://safe-haven-app.herokuapp.com/">here</a></p>
                </ParallaxLayer>
            </Parallax>
            </div>
        </div>
    )
}