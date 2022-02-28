import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';



export default function Flipcard ({projectName, img, stack, width}) { // img url for the front, project name, project tech stack for the back
    const [isFlipped, setIsFlipped] = useState(false);

  console.log(img)
  const handleClick = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  }

  
    const styles = {
      card: {
        width: `${width}vw`, // this width, along with image width and the div style width all need to be the same for the flip to be working, otherwise the axis goes all funky because the widths are diff
        backgroundColor: "#4120e3",
        borderRadius: "10px",
        paddingLeft: "2px"
      },
      image: {
        // height: '400px',
        width: `${width}vw`
      }
    };

    return (
    <div style={{
        // paddingBottom: '10px',
        height: 300,
	      width: `${width}vw`
    }}>
      <ReactCardFlip isFlipped={isFlipped}>
        <div style={styles.card} onClick={handleClick}>
          <img
            style={styles.image}
            src={img}
          />
        </div>

        <div  style={styles.card} onClick={handleClick}>
          <h2>{projectName}</h2>
          <h2>tech stack:</h2>
          <ul style={{listStyleType: "none", color:"white"}}>
              {stack.map(language => <li>{language}</li>)}
          </ul>
        </div>
      </ReactCardFlip>
    </div>
    );
}

