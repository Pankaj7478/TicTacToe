import { useState,useEffect, useContext } from "react";
import "../TicTacToe/TTT.css";
import Board1 from "./Board"
import checkWin from "./Winningline";
import computerMove from "./Level1";
import { evaluatebar } from "./EvaluateBar";
import { StoreContext } from "./Store";
let data=['', '', '', '', '', '', '', '', ''];
const Board = ({undo,setUndo,hint,takehint,takeundo,setHint,i,setevalme,seti,j,setj,setplayer1,setplayer2,newgame,setNew}) => {
  const items=useContext(StoreContext);
  useEffect(()=>{
    if(items[0][2]===1||items[0][2]===2){
      let x=document.querySelectorAll(".options");
      console.log(x);
      if(x.length){
        x[1].style.backgroundColor="#605f5f";
        x[1].style.cursor="not-allowed";
        x[2].style.backgroundColor="#605f5f";
        x[2].style.cursor="not-allowed";
        x[1].children[0].style.display="none";
        x[2].children[0].style.display="none";
        console.log("x[0].children",x[0].children[0]);
      }
    }
  });
  if(items[0][3]===2){
    setplayer1("Level-3 Bot");
    setplayer2("Player (You)");
  }
  else{
    setplayer1("Player (You)");
    setplayer2("Level-3 Bot");
  }
  console.log(items);
  if(items[0][2]===3)setevalme(true);
  else{
    let x=document.getElementsByClassName("options");
    if(x.length)x[0].style.backgroundColor="white";
    // else console.log("classnotfound");
  }
  const [count, setcount] = useState(0);
  const [lock, setlock] = useState(false);
  const [arr,setarr]=useState([]);
  useEffect(()=>{
    if(newgame){
      setTimeout(()=>{
        data=['','','','','','','','',''];setj(0);
        setcount(0);setarr([]);seti(0);setlock(false);
      },20);
      setNew(false);
    }
  },[newgame]);
  useEffect(()=>{
    console.log(items,"items");
    if(hint&&!lock&&((count+items[0][3])&1)){
      if(items[0][2]===2||items[0][2]===1)alert('Hint and Evaluation bar are only available for Level-3 Bot');
      else if(takehint){
        let x=computerMove(count,arr,data,items);
        document.getElementById(x.toString()).style.backgroundColor="green";
        setTimeout(()=>{
          document.getElementById(x.toString()).style.backgroundColor="black";
        },300);
      }
      else if(items[0][2]===3)alert("Hint is off. Please turn it on first.\nClick More button or Press M.");
    }
    setHint(false);
  },[hint])
  useEffect(() => {
    if(checkWin(data)){seti(3);setlock(true);}
    else if(count===9){seti(5);setlock(true);}
    else{
      evaluatebar(i,j,seti,setj,count,data,items,arr,lock);
      if (checkWin(data))setlock(true);
      else if((((count+items[0][3])&1)===0)){
        let x=computerMove(count,arr,data,items);
        console.log("easy",lock,hint,x,count,items[0][3],(count+items[0][3])&1);
        setTimeout(() => {
          setarr(prev=>[...prev,x]);
          const possibleIndexes=[0,1,2,3,4,5,6,7,8];
          if(x===undefined)x=0;
          while(data[x])x=possibleIndexes[Math.floor(Math.random()*possibleIndexes.length)];
          if (x !== undefined){
            data[x] = items[0][1];
          }
          setcount((prevCount) => prevCount + 1);
        }, 400);
      }
    }
  },[count]);

  useEffect(() => {
    console.log("count+items[0][3]",takeundo,count,items[0][3]);
    if (undo&&!lock&&((count+items[0][3])&1)){
      if (count >= 2) {
        if(takeundo){
          data[arr[count - 2]] = '';
          data[arr[count - 1]] = '';
          setcount(count - 2);
          setarr(prev => prev.slice(0, -2));
          setj(j+3);
        }
        else alert("Undo is off. Please turn it on first.\nClick More button or Press M.");
      }
    }
    setUndo(false);
  }, [undo]);

  const toggle = (num) => {
    if (lock || data[num] !== '') return;
    data[num]=items[0][0];
    setarr(prev=>[...prev,num]);
    setcount(count + 1);
  };

  return <Board1 data={data} toggle={toggle} checkWin={checkWin}/>
};
export default Board;