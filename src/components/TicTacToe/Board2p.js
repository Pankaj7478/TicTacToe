import { useState,useEffect, useContext} from "react";
import "../TicTacToe/TTT.css"
import checkWin from "./Winningline";
import Board1 from "./Board";
import { StoreContext } from "./Store";
let data=['','','','','','','','',''];
const Board = ({undo,hint,takeundo,setHint,setUndo,setevalme,more,setMore,setNew,newgame}) => {
    setevalme(false);
    let dataFromWelcome=useContext(StoreContext);
    let [count,setcount]=useState(0);
    let [lock,setlock]=useState(false);
    const [arr,setarr]=useState([]);
    useEffect(()=>{
      if(hint)alert('Hint and Evaluation bar are only available for Level-3 Bot');
      setHint(false);
    },[hint])
    useEffect(()=>{
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
      else console.log("class not found");
    });
      useEffect(()=>{
      if(newgame){
        setTimeout(()=>{
          data=['','','','','','','','',''];
          setcount(0);setarr([]);setlock(false);
          setMore(false);
        },20);
        setNew(false);
      }
    },[newgame]);
    useEffect(() => {
      if (undo&&!lock) {
        if(takeundo){
          if (count >= 1) {
            data[arr[count - 1]]='';
            setcount(count - 1);
            setarr(prev => prev.slice(0, -1));
          }
        }
        else alert("Undo is off. Please turn it on first.\nClick More button or Press M.");
        setUndo(false);
      }
    }, [undo]);
    let toggle =(num)=>{
      if(more){
        setMore(false);
      }
      if(lock||data[num]!=='')return;
      if(count%2){
          data[num]=dataFromWelcome[0][1];
          setcount(++count);
      }
      else{
          data[num]=dataFromWelcome[0][0];
          setcount(++count);
      }
      setarr(prev=>[...prev,num]);
      if(checkWin(data)){
        setlock(true);
        return;
      }
    }
    return(
        <Board1 data={data} toggle={toggle} checkWin={checkWin}/>
    )
}
export default Board