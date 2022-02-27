import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import safeHavenImg from '../../safehaven.png'
import ticTacToeImg from '../../tictactoe.png'
import showUsYourQuackImg from '../../quack.png'

export default function Flipcard ({ imgUrl, projectName, projectStack }) { // img url for the front, project name, project tech stack for the back
    const [isFlipped, setIsFlipped] = useState(false);

    console.log(projectName)

  const handleClick = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  }

  
    const styles = {
      card: {
        width: '250px' // this width, along with image width and the div style width all need to be the same for the flip to be working
      },
      image: {
        height: '200px',
        width: '250px'
      }
    };

    return (
    <div style={{
        paddingTop: '100px',
        height: 285,
	    width: 250
    }}>
      <ReactCardFlip isFlipped={isFlipped}>
        <div style={styles.card} onClick={handleClick}>
          <img
            style={styles.image}
            src={imgUrl}
          />
        </div>

        <div style={styles.card} onClick={handleClick}>
          <h2>{projectName}</h2>
          <h2>tech stack:</h2>
          <ul>
              <li>test</li>
              {/* {projectStack.forEach(language => <li>${language}</li>)} */}
          </ul>
        </div>
      </ReactCardFlip>
    </div>
    );
}

