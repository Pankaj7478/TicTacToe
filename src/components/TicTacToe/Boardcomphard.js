import { useEffect, useState } from "react";
import {evaluatebar} from './EvaluateBar';
import React from "react";
import "../TicTacToe/TTT.css";
import cross from "../assets/Tic_tac_toe_cross.jpg";
import heart from "../assets/Tic_tac_toe_heart.jpg";
import { useLocation } from "react-router-dom";
import { handleMove } from "./Moves";
import Board1 from "./Board";
import checkWin from "../assets/line";
import {winmove} from "./Winmove"
let firstMove = 0,x=0;
let data = ['', '', '', '', '', '', '', '', ''];
const Board = ({undo,setevalme,hint,setHint,setUndo,i,seti,j,setj,setplayer1,setplayer2,setNew,newgame}) => {
  setevalme(true);
  const [arr,setarr]=useState([]);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  let rdata = [];rdata[0]=[cross,heart,1,2];
  const datas = useLocation();
  if(datas.state)rdata = [datas.state];
  console.log(rdata[0][1]);
  if(rdata[0][3]===2){
    setplayer1("Level-3 Bot");
    setplayer2("Player (You)");
  }
  else{
    setplayer1("Player (You)");
    setplayer2("Level-3 Bot");
  }
  const newmap = {};
  for (let i = 0; i <= 8; i++) {
      newmap[i] = i.toString();
  }
  // useEffect(()=>{
  //   setarr([]);
  //   data=['', '', '', '', '', '', '', '', ''];
  //   setCount(0);setNew(false);firstMove=0;x=0;seti(0);
  // },[newgame]);
  useEffect(()=>{
    if(hint&&!lock){
      const randomIndex = handleMove(count,arr,setarr,data,rdata,setCount,setLock,checkWin,hint);
      if(randomIndex<=8){
        document.getElementById(newmap[randomIndex]).style.backgroundColor='green';
        setTimeout(()=>{
          document.getElementById(newmap[randomIndex]).style.backgroundColor='black';
        },400)
      }
    }
    setHint(false);
  },[hint]);

  useEffect(() => {
    if (undo&&!lock) {
      if (count >= 2) {
        data[arr[count - 2]] = '';
        data[arr[count - 1]] = '';
        setCount(count - 2);
        setarr(prev => prev.slice(0, -2));
        setj(j+3);
      }
      setUndo(false);
    }
  }, [undo]);

  useEffect(() => {
    evaluatebar(i,j,seti,setj,count,data,rdata,arr,lock);
    if ((((count===2||count===4)&&rdata[0][3]===2)||(count===3&&rdata[0][3]===1))) {
      x=1;
      setTimeout(()=>{
        handleMove(count, arr, setarr, data, rdata, setCount, setLock, checkWin, hint);
      },300);
    }
    else x=0;
  }, [count,lock]);

  useEffect(() => {
    if (rdata[0][3] === 2) {
      let i = getRandomEmptyIndex(data);
      data[i] = rdata[0][1];
      setarr(prev=>[...prev,i]);
      setCount(1);
    }
  }, []);

  const getRandomEmptyIndex = (newData) => {
    if (firstMove === 0) {
      firstMove=1;
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
      winmove(count,setarr,data,rdata,randomIndex,setCount,setLock,checkWin,hint);
    }
  };
  const toggle = (num) => {
    if (lock || data[num] !== '') return;
    data[num] = rdata[0][0];
    console.log("mydata",data);
    setarr(prev=>[...prev,num]);
    setCount(count + 1);
    if(checkWin(data)){
      setLock(true);
      return;
    }
    setTimeout(()=>{
      computerMove(data);
    },300);
  };
  return (<>
    <Board1 data={data} toggle={toggle} checkWin={checkWin}></Board1>
    </>
  );
};

export default Board;
