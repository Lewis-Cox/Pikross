import React from 'react';
import './Grid.css';
//global to contain the status of every button in the grid for this level
let solution = [];
let width = 0;
let height = 0;
let clueSize = 0;
let levelLayout = [];

//defines the square component, which we will use to populate the grid with interactive squares
function Square({onSquareClick }) {
  let [state, setState] = React.useState(0);

  const changeState = () => {
      if(state == 2){
        setState(0);
      }
      else{
        setState(++state);
       }
  }

  return (
    <button
      className="square"
      onClick={() => {
        changeState();
        onSquareClick(); {/*Call the provided onClick handler*/}
      }}
      
      style={{ backgroundColor: (state == 1) ? 'black' : 'white' }
      }
    >
      {(state == 2) ? 'X' : ' '}
    </button>
  );
}

//updates the leveldata array each time a square is clicked
function handleClick(i,j){
  if(levelLayout[i][j] === 2){
    levelLayout[i][j] = 0;      
  }
  else{
    levelLayout[i][j] += 1;
  }
  if(checkIfWin){
    
  }
}

function  checkIfWin(){
  for(let i = 0; i < height-clueSize; i++){
    for(let j = 0; j < width-clueSize; j++){
      if(solution[i+clueSize][j+clueSize] === "1" && levelLayout [i][j] !== 1 ){
        return false;
      }
    } 
  }
  return true;
}
//component for the entire grid, creates an array to store grid data, and populates itself with a grid with clues on the x and y axis and squares making up the centre
function Grid({ level }) {
  solution = level.layout;
  width = level.width;
  height = level.height;
  clueSize = level.clueSize;
  {/*populates levelLayout with zeros */}
  for(let a = 0; a< level.height; a++){
    let thisRow = []
    for(let b =0; b< level.width; b++){
      thisRow.push(0);
      }
    levelLayout.push(thisRow);
  }

  var rows = [];
  {/*we provide the clue data on the top x axis*/}
  for (let x = 0; x < level.clueSize; x++) {
    rows.push(
      <div className="divRow">
        <ClueRow rowNum={x} clues={[...level.cluesX[x]]} width={level.width} clueSize={level.clueSize} /> <br />
      </div>
    );
  }
  {/*the rest of the array is then populated with clues on the y axis followed by empty squares*/}
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
   squareRow.push(<Square value={' '} onSquareClick={() => handleClick(rowNum,j)} />);
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
