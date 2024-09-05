import { useEffect, useState } from "react";
import {evaluatebar} from './EvaluateBar';
import React from "react";
import "../TicTacToe/TTT.css";
import circle from "../assets/Tic_tac_toe_circle.jpg";
import cross from "../assets/Tic_tac_toe_cross.jpg";
import heart from "../assets/Tic_tac_toe_heart.jpg";
import { useLocation } from "react-router-dom";
import { handleMove } from "./Moves";
import {winmove} from "./Winmove"
// import { bestMove } from "./bestMove";
let firstMove = 0,x=0;
let data = ['', '', '', '', '', '', '', '', ''];

const Board = ({undo,setevalme,hint,setHint,setUndo,i,seti,j,setj,setplayer1,setplayer2,setdl1,setdl2,sethl1,sethl2,sethl3,setvl1,setvl2,setvl3,setNew,newgame}) => {
  setevalme(1);
  const [arr,setarr]=useState([]);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const datas = useLocation();
  let rdata = [datas.state];
  if(rdata[0][2]===2){
    setplayer1("Computer");
    setplayer2("Player");
  }
  else{
    setplayer1("Player");
    setplayer2("Computer");
  }
  const map = { 'circle': circle, 'cross': cross, 'heart': heart };
  const newmap = {};
  for (let i = 0; i <= 8; i++) {
      newmap[i] = i.toString();
  }
  useEffect(()=>{
    setarr([]);
    data=['', '', '', '', '', '', '', '', ''];
    setvl1(false);setvl2(false);setvl3(false);setdl1(false);
    sethl1(false);sethl2(false);sethl3(false);setdl2(false);
    setCount(0);setNew(false);firstMove=0;x=0;
  },[newgame]);
  useEffect(()=>{
    if(hint){
      console.log(hint);
      if(!lock){
        const randomIndex = handleMove(count,arr,setarr, data, map, rdata, setCount,setLock,checkWin,0);
        console.log("Best move: ",randomIndex, hint);
        if(randomIndex<=8){
          document.getElementById(newmap[randomIndex]).style.backgroundColor='green';
          setTimeout(()=>{
            document.getElementById(newmap[randomIndex]).style.backgroundColor='black';
          },400)
        }
        console.log(arr,randomIndex);
      }
  }
    setHint(false);
  },[hint]);
  useEffect(() => {
    console.log(undo);
    // console.log(moves);
    if (undo&&!lock) {
      if (count >= 2) {
        data[arr[count - 2]] = '';
        data[arr[count - 1]] = '';
        // setMoves(moves - 2);
        setCount(count - 2);
        setarr(prev => prev.slice(0, -2));
        setj(j+3);
      }
      setUndo(false);
    }
  }, [undo]);
  useEffect(() => {
    evaluatebar(i,j,seti,setj,map,count,data,rdata,arr,lock);
    // if(count===9)setLock(true);
    if ((((count===2||count === 4)&&rdata[0][2]===2)||(count===3&&rdata[0][2]===1))) {
      x=1;
      setTimeout(()=>{
        handleMove(count, arr, setarr, data, map, rdata, setCount, setLock, checkWin, 1);
      },300);
    }
    else x=0;
    console.log(count);
  }, [count,lock]);
  
  useEffect(() => {
    if (rdata[0][2] === 2 && firstMove === 0) {
      let i = getRandomEmptyIndex(data);
      // i=8;
      data[i] = map[rdata[0][1]];
      setarr(prev=>[...prev,i]);
      firstMove = 1;
      setCount(1);
    }
  }, [firstMove]);

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
        setTimeout(()=>{
          if(a===0&&b===1)setvl1(true);
          if(a===0&&b===3)sethl1(true);
          if(a===0&&b===4)setdl1(true);
          if(a===1&&b===4)sethl2(true);
          if(a===2&&b===4)setdl2(true);
          if(a===2&&b===5)sethl3(true);
          if(a===3&&b===4)setvl2(true);
          if(a===6&&b===7)setvl3(true);
        },400)
        return true;
      }
    }
    return false;
  };

  const getRandomEmptyIndex = (newData) => {
    if (firstMove === 0) {
      const possibleIndices = [0, 2, 6, 8];
      const emptyIndices = possibleIndices.filter(index => newData[index] === '');
      if (emptyIndices.length === 0) return undefined;
      const randomIndex = Math.floor(Math.random() * emptyIndices.length);
      return emptyIndices[randomIndex];
    } else {
      const myIndex=[0,1,2,3,4,5,6,7,8];
      let randomIndex=Math.floor(Math.random()*myIndex.length);
      while(data[randomIndex])randomIndex=Math.floor(Math.random()*myIndex.length);
      return randomIndex;
    }
  };

  const computerMove = (newData) => {
    let randomIndex = getRandomEmptyIndex(newData);
    if(!x){
      if(count===0){
        if(!data[4])randomIndex=4;
      }
      winmove(count,setarr,data,rdata,map,randomIndex,setCount,setLock,checkWin,1);
    }
  };
  const toggle = (num) => {
    if (lock || data[num] !== '') return;
    data[num] = map[rdata[0][0]];
    setarr(prev=>[...prev,num]);
    setCount(count + 1);
    if (checkWin(data)) {
      setLock(true);
      return;
    }
    setTimeout(()=>{
      computerMove(data);
    },300);
  };
  console.log(arr);
  return (
    <div className="board">
      <div className="row1">
        <div className="boxes" id='0' onClick={() => toggle(0)}>
          {data[0] && <img src={data[0]} alt="player" />}
        </div>
        <div className="boxes" id='1' onClick={() => toggle(1)}>
          {data[1] && <img src={data[1]} alt="player" />}
        </div>
        <div className="boxes" id='2' onClick={() => toggle(2)}>
          {data[2] && <img src={data[2]} alt="player" />}
        </div>
      </div>
      <div className="row2">
        <div className="boxes" id='3' onClick={() => toggle(3)}>
          {data[3] && <img src={data[3]} alt="player" />}
        </div>
        <div className="boxes" id='4' onClick={() => toggle(4)}>
          {data[4] && <img src={data[4]} alt="player" />}
        </div>
        <div className="boxes" id='5' onClick={() => toggle(5)}>
          {data[5] && <img src={data[5]} alt="player" />}
        </div>
      </div>
      <div className="row3">
        <div className="boxes" id='6' onClick={() => toggle(6)}>
          {data[6] && <img src={data[6]} alt="player" />}
        </div>
        <div className="boxes" id='7' onClick={() => toggle(7)}>
          {data[7] && <img src={data[7]} alt="player" />}
        </div>
        <div className="boxes" id='8' onClick={() => toggle(8)}>
          {data[8] && <img src={data[8]} alt="player" />}
        </div>
      </div>
    </div>
  );
};

export default Board;
