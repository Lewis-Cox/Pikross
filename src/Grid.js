import React from 'react';
import './Grid.css';

function Square({ value, onSquareClick }) {
  const [isClicked, setIsClicked] = React.useState(false);

  const clicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button
      className="square"
      onClick={() => {
        clicked();
        onSquareClick(); // Call the provided onClick handler
      }}
      style={{ backgroundColor: isClicked ? 'black' : 'white' }}
    >
      {value}
    </button>
  );
}

function handleClick(i){
return;
}
function Grid({ level }) {
  var rows = [];
  for (let x = 0; x < level.clueSize; x++) {
    rows.push(
      <div className="divRow">
        <ClueRow rowNum={x} clues={[...level.cluesX[x]]} width={level.width} clueSize={level.clueSize} /> <br />
      </div>
    );
  }
  for (let i = 0; i < level.height; i++) {
    rows.push(
      <div className="divRow">
        <Row rowNum={i+level.clueSize} clues={[...level.cluesY[i]]} width={level.width} clueSize={level.clueSize} /> <br />
      </div>
    );
  }
  return rows;
}

function Row({rowNum,clues,width,clueSize}){
 var squareRow = [];
 for(let i = 0; i < clueSize; i++){
   squareRow.push(<Square value={clues[i]} onSquareClick={null} />);
 }  
 for(let j = 0; j < width; j ++){
   squareRow.push(<Square value={' '} onSquareClick={() => handleClick(rowNum+j)} />);
  }
  return(squareRow);
}

function ClueRow({rowNum,clues, width,clueSize}){
 var squareRow = [];
 for(let i=0; i < clueSize; i++){
   squareRow.push(<Square value={' '} onSquareClick={null} />);
  }
 for(let j = 0; j < width; j ++){
   squareRow.push(<Square value={clues[j]} onSquareClick={null} />);
  }
  return(squareRow);
}


export default Grid;
