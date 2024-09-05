import { useState } from "react";
import React from "react";
import "../TicTacToe/TTT.css";
import circle from "../assets/Tic_tac_toe_circle.jpg";
import cross from "../assets/Tic_tac_toe_cross.jpg";
import heart from "../assets/Tic_tac_toe_heart.jpg";
import { useLocation } from "react-router-dom";
let data=['', '', '', '', '', '', '', '', ''];
const Board = () => {
  const datas=useLocation();
  let rdata=datas.state;
  if(!rdata)rdata=circle;
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

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
    let randomIndex = getRandomEmptyIndex(newData);
    if(randomIndex===0||randomIndex===1||randomIndex===2||randomIndex===3){
        for(let i=3;i<=8;i++){
            if(data[i]===''){randomIndex=i;}
        }
    }
    if(((data[1]===data[2]&&data[2])||(data[3]===data[6]&&data[6])||(data[4]===data[8]&&data[8]))&&(!data[0]))randomIndex=0;
    if(((data[0]===data[2]&&data[2])||(data[4]===data[7]&&data[7]))&&(!data[1]))randomIndex=1;
    if(((data[0]===data[1]&&data[1])||(data[4]===data[6]&&data[6])||(data[5]===data[8]&&data[8]))&&(!data[2]))randomIndex=2;
    if(((data[0]===data[6]&&data[6])||(data[4]===data[5]&&data[5]))&&(!data[3]))randomIndex=3;
    if(((data[0]===data[8]&&data[8])||(data[1]===data[7]&&data[7])||(data[2]===data[6]&&data[6])||(data[3]===data[5]&&data[5]))&&(!data[4]))randomIndex=4;
    if(((data[2]===data[8]&&data[8])||(data[3]===data[4]&&data[4]))&&(!data[5]))randomIndex=5;
    if(((data[0]===data[3]&&data[3])||(data[2]===data[4]&&data[4])||(data[7]===data[8]&&data[8]))&&(!data[6]))randomIndex=6;
    if(((data[1]===data[4]&&data[4])||(data[6]===data[8]&&data[8]))&&(!data[7]))randomIndex=7;
    if(((data[0]===data[4]&&data[4])||(data[2]===data[5]&&data[5])||(data[6]===data[7]&&data[7]))&&(!data[8]))randomIndex=8;

    if(((data[1]===data[2]&&data[2]===rdata)||(data[3]===data[6]&&data[6]===rdata)||(data[4]===data[8]&&data[8]===rdata))&&(!data[0]))randomIndex=0;
    if(((data[0]===data[2]&&data[2]===rdata)||(data[4]===data[7]&&data[7]===rdata))&&(!data[1]))randomIndex=1;
    if(((data[0]===data[1]&&data[1]===rdata)||(data[4]===data[6]&&data[6]===rdata)||(data[5]===data[8]&&data[8]===rdata))&&(!data[2]))randomIndex=2;
    if(((data[0]===data[6]&&data[6]===rdata)||(data[4]===data[5]&&data[5]===rdata))&&(!data[3]))randomIndex=3;
    if(((data[0]===data[8]&&data[8]===rdata)||(data[1]===data[7]&&data[7]===rdata)||(data[2]===data[6]&&data[6]===rdata)||(data[3]===data[5]&&data[5]))&&(!data[4]))randomIndex=4;
    if(((data[2]===data[8]&&data[8]===rdata)||(data[3]===data[4]&&data[4]===rdata))&&(!data[5]))randomIndex=5;
    if(((data[0]===data[3]&&data[3]===rdata)||(data[2]===data[4]&&data[4]===rdata)||(data[7]===data[8]&&data[8]===rdata))&&(!data[6]))randomIndex=6;
    if(((data[1]===data[4]&&data[4]===rdata)||(data[6]===data[8]&&data[8]===rdata))&&(!data[7]))randomIndex=7;
    if(((data[0]===data[4]&&data[4]===rdata)||(data[2]===data[5]&&data[5]===rdata)||(data[6]===data[7]&&data[7]===rdata))&&(!data[8]))randomIndex=8;

    if (randomIndex !== undefined) {
        data[randomIndex] = rdata;
        setCount((prevCount) => prevCount + 1);
        if (checkWin(newData)) {
            setLock(true);
        }
    }
};
  const toggle = (num) => {
    if (lock || data[num] !== '') return;
    data[num] = heart;
    setCount(count+1);
    for(let i=0;i<=8;i++){
        if(data[i]===heart)console.log(i);
    }
    if (checkWin(data)) {
        setLock(true);
        return;
    }

    setTimeout(() => {
      computerMove(data);
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
