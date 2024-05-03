import React from 'react';
import './Grid.css';

function Square({value,onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function handleClick(i){
  return;
}
function Grid(level) {
var rows = [];
  for(let i = 0; i < 30; i++){
    rows.push(<div className="divRow"><Row rowNum={i}/> <br></br> </div>);
   }
  return (rows);
}

function Row(rowNum){
 var squareRow = [];
 for(let j = 0; j < 30; j ++){
   squareRow.push(<Square value={' '} onSquareClick={() => handleClick(rowNum+j)} />);
  }
  return(squareRow);
}

export default Grid;
