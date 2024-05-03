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
  for(let x= 0; x < level.clueSize; x++){
    rows.push(<div className="divRow"><clueRow  rowNum={x} clues={level.cluesX[x]} width = {level.width} clueSize={level.clueSize} ></clueRow> <br></br></div>);
    }
  for(let i = level.clueSize; i < (level.height+level.clueSize); i++){
    rows.push(<div className="divRow"><Row  rowNum={i} clues={level.cluesY[i]} width = {level.width} clueSize= {level.clueSize} /> <br></br> </div>);
   }
  return (rows);
}

function Row(rowNum,clues,width,clueSize){
 var squareRow = [];
 for(let i = 0; i < clueSize; i++){
  squareRow.push(<p>{clues[i]}</p>); 
 }  
 for(let j = 0; j < width; j ++){
   squareRow.push(<Square value={' '} onSquareClick={() => handleClick(rowNum+j)} />);
  }
  return(squareRow);
}

function clueRow(rowNum,clues, width,clueSize){
 var squareRow = [];
 for(let i=0; i < clueSize; i++){
  squareRow.push(<p className="fillerRow">" "</p>);
  }
 for(let j = 0; j < width; j ++){
   squareRow.push(<p className="clueRow"> {clues[j]}</p>);
  }
  return(squareRow);
}


export default Grid;
