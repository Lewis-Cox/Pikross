import React from 'react';
import './Grid.css';
//global to contain the status of every button in the grid for this level
let levelLayout = [];

//defines the square component, which we will use to populate the grid with interactive squares
function Square({ input, onSquareClick }) {
  const [isClicked, setIsClicked] = React.useState(false);
  let value = input;
  const clicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button
      className="square"
      onMouseDown={() => {
        clicked();
        onSquareClick(); // Call the provided onClick handler
      }}
      onDoubleClick={() => {
        if(value === ' '){
          value = 'X';
          }
        else{
          value = ' '; 
        }
        if(isClicked){
          clicked();
        }
      }}
      style={{ backgroundColor: isClicked ? 'black' : 'white' }}
    >
      {value}
    </button>
  );
}
//updates the leveldata array each time a square is clicked
function handleClick(i){
return;
}
//component for the entire grid, creates an array to store grid data, and populates itself with a grid with clues on the x and y axis and squares making up the centre
function Grid({ level }) {
  var rows = [];
  //we provide the clue data on the top x axis
  for (let x = 0; x < level.clueSize; x++) {
    rows.push(
      <div className="divRow">
        <ClueRow rowNum={x} clues={[...level.cluesX[x]]} width={level.width} clueSize={level.clueSize} /> <br />
      </div>
    );
  }
  // the rest of the array is then populated with clues on the y axis followed by empty squares
  for (let i = 0; i < level.height; i++) {
    rows.push(
      <div className="divRow">
        <Row rowNum={i} clues={[...level.cluesY[i]]} width={level.width} clueSize={level.clueSize} /> <br />
      </div>
    );
  }
  return rows;
}
//creates one row of squares with clues on the lefthand side
function Row({rowNum,clues,width,clueSize}){
 var squareRow = [];
 for(let i = 0; i < clueSize; i++){
   squareRow.push(<button className="clue">{clues[i]}</button>);
 }  
 for(let j = 0; j < width; j ++){
   squareRow.push(<Square value={' '} onSquareClick={() => handleClick(rowNum+j)} />);
  }
  return(squareRow);
}
//creates rows of clues to sit on the top x axis
function ClueRow({rowNum,clues, width,clueSize}){
 var squareRow = [];
 for(let i=0; i < clueSize; i++){
   squareRow.push(<button className="clue">{' '}</button>);
  }
 for(let j = 0; j < width; j ++){
   squareRow.push(<button className="clue">{clues[j]}</button>);
  }
  return(squareRow);
}


export default Grid;
