import { useState,useEffect } from "react";
import React from "react";
import "../TicTacToe/TTT.css";
import circle from "../assets/Tic_tac_toe_circle.jpg";
import cross from "../assets/Tic_tac_toe_cross.jpg";
import heart from "../assets/Tic_tac_toe_heart.jpg";

const Board = ({undo,hint,setHint,setUndo,i,seti,j,setj,setplayer1,setplayer2,setdl1,setdl2,sethl1,sethl2,sethl3,setvl1,setvl2,setvl3,setNew,newgame}) => {
  const [data, setData] = useState(['', '', '', '', '', '', '', '', '']);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  useEffect(()=>{
    setData(['', '', '', '', '', '', '', '', '']);
  },[newgame]);
  const checkWin = (data) => {
    const winningCombinations = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        return true;
      }
    }
    return false;
  };

  const getRandomEmptyIndex = (newData) => {
    const emptyIndices = newData.map((val, index) => val === '' ? index : null).filter(val => val !== null);
    const randomIndex = Math.floor(Math.random() * emptyIndices.length);
    return emptyIndices[randomIndex];
  };

  const computerMove = (newData) => {
    const randomIndex = getRandomEmptyIndex(newData);
    if (randomIndex !== undefined) {
      newData[randomIndex] = cross;
      setData(newData);
      setCount((prevCount) => prevCount + 1);
      if (checkWin(newData)) {
        setLock(true);
      }
    }
  };
  const toggle = (num) => {
    if (lock || data[num] !== '') return;

    const newData = [...data];
    newData[num] = heart;
    setData(newData);
    setCount(count + 1);

    if (checkWin(newData)) {
      setLock(true);
      return;
    }

    setTimeout(() => {
      computerMove(newData);
    }, 500);
  };

  return (
    <div className="board">
      <div className="row1">
        <div className="boxes" onClick={() => toggle(0)}>
          {data[0] && <img src={data[0]} alt="player" />}
        </div>
        <div className="boxes" onClick={() => toggle(1)}>
          {data[1] && <img src={data[1]} alt="player" />}
        </div>
        <div className="boxes" onClick={() => toggle(2)}>
          {data[2] && <img src={data[2]} alt="player" />}
        </div>
      </div>
      <div className="row2">
        <div className="boxes" onClick={() => toggle(3)}>
          {data[3] && <img src={data[3]} alt="player" />}
        </div>
        <div className="boxes" onClick={() => toggle(4)}>
          {data[4] && <img src={data[4]} alt="player" />}
        </div>
        <div className="boxes" onClick={() => toggle(5)}>
          {data[5] && <img src={data[5]} alt="player" />}
        </div>
      </div>
      <div className="row3">
        <div className="boxes" onClick={() => toggle(6)}>
          {data[6] && <img src={data[6]} alt="player" />}
        </div>
        <div className="boxes" onClick={() => toggle(7)}>
          {data[7] && <img src={data[7]} alt="player" />}
        </div>
        <div className="boxes" onClick={() => toggle(8)}>
          {data[8] && <img src={data[8]} alt="player" />}
        </div>
      </div>
    </div>
  );
};

export default Board;
