import { useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import React from "react";
import "../TicTacToe/TTT.css"
import circle from "../assets/Tic_tac_toe_circle.jpg"
import cross from "../assets/Tic_tac_toe_cross.jpg"
// import board from "../assets/Tic_tac_toe_board.jpg"
import heart from "../assets/Tic_tac_toe_heart.jpg"
import { bestMove } from "./bestMove";
let data=['','','','','','','','',''];
const Board = ({undo,hint,setHint,setUndo,i,seti,j,setj,setplayer1,setplayer2,setdl1,setdl2,sethl1,sethl2,sethl3,setvl1,setvl2,setvl3,setNew,setevalme,newgame}) => {
    setevalme(0);
    const location = useLocation();
    const dataFromWelcome =[location.state];
    let [count,setcount]=useState(0);
    let [lock,setlock]=useState(false);
    const [arr,setarr]=useState([]);
    const newmap = {};
    for (let i = 0; i <= 8; i++) {
        newmap[i] = i.toString();
    }
    useEffect(()=>{
        data=['','','','','','','','',''];
        setvl1(false);setvl2(false);setvl3(false);setdl1(false);
        sethl1(false);sethl2(false);sethl3(false);setdl2(false);
        setcount(0);
        setNew(0);
    },[newgame]);
    useEffect(()=>{
        // console.log(hint);
        const best = bestMove(data, count, arr, setarr);
        const possibleIndexes = best;
        let randomIndex = possibleIndexes[Math.floor(Math.random() * possibleIndexes.length)];
        console.log("Best move: ",randomIndex, best, count, hint);
        if(hint){
          document.getElementById(newmap[randomIndex]).style.backgroundColor='green';
          setTimeout(()=>{
            document.getElementById(newmap[randomIndex]).style.backgroundColor='black';
          },400)
        //   console.log(newmap[randomIndex],randomIndex);
      }
      setHint(false);
      },[hint]);
      useEffect(()=>{
        console.log(count,arr);
      },[arr]);
      useEffect(() => {
        console.log(undo);
        console.log(count);
        if (undo&&!lock) {
          if (count >= 1) {
            data[arr[count - 1]] = '';
            setcount(count - 1);
            setarr(prev => prev.slice(0, -1));
          }
          setUndo(false);
        }
      }, [undo]);
    const map={'circle':circle,'cross':cross,'heart':heart}
    setplayer1('Player1');
    setplayer2('Player2');
    let toggle =(e,num)=>{
        if(lock||data[num]!=='')return;
        if(count%2){
            // e.target.innerHTML=`<img src='${map[dataFromWelcome[0][1]]}'>`;
            data[num]=map[dataFromWelcome[0][1]];
            setcount(++count);
        }
        else{
            // e.target.innerHTML=`<img src='${map[dataFromWelcome[0][0]]}'>`;
            data[num]=map[dataFromWelcome[0][0]];
            setcount(++count);
        }
        setarr(prev=>[...prev,num]);
        if(data[0]===data[1]&&data[1]===data[2]&&data[2]!==''){setlock(true);setTimeout(()=>{setvl1(true)},400);}
        if(data[0]===data[3]&&data[3]===data[6]&&data[6]!==''){setlock(true);setTimeout(()=>{sethl1(true)},400);}
        if(data[0]===data[4]&&data[4]===data[8]&&data[8]!==''){setlock(true);setTimeout(()=>{setdl1(true)},400);}
        if(data[1]===data[4]&&data[4]===data[7]&&data[7]!==''){setlock(true);setTimeout(()=>{sethl2(true)},400);}
        if(data[2]===data[4]&&data[4]===data[6]&&data[6]!==''){setlock(true);setTimeout(()=>{setdl2(true)},400);}
        if(data[2]===data[5]&&data[5]===data[8]&&data[8]!==''){setlock(true);setTimeout(()=>{sethl3(true)},400);}
        if(data[3]===data[4]&&data[4]===data[5]&&data[5]!==''){setlock(true);setTimeout(()=>{setvl2(true)},400);}
        if(data[6]===data[7]&&data[7]===data[8]&&data[8]!==''){setlock(true);setTimeout(()=>{setvl3(true)},400);}
    }
    return(
        <div className="board">
            <div className="row1">
                <div className="boxes" id="0" onClick={(e)=>{toggle(e,0)}}>
                    {data[0] && <img src={data[0]} alt="player" />}
                </div>
                <div className="boxes" id="1" onClick={(e)=>{toggle(e,1)}}>
                    {data[1] && <img src={data[1]} alt="player" />}
                </div>
                <div className="boxes" id="2" onClick={(e)=>{toggle(e,2)}}>
                    {data[2] && <img src={data[2]} alt="player" />}
                </div>
            </div>
            <div className="row2">
                <div className="boxes" id="3" onClick={(e)=>{toggle(e,3)}}>
                    {data[3] && <img src={data[3]} alt="player" />}
                </div>
                <div className="boxes" id="4" onClick={(e)=>{toggle(e,4)}}>
                    {data[4] && <img src={data[4]} alt="player" />}
                </div>
                <div className="boxes" id="5" onClick={(e)=>{toggle(e,5)}}>
                    {data[5] && <img src={data[5]} alt="player" />}
                </div>
            </div>
            <div className="row3">
                <div className="boxes" id="6" onClick={(e)=>{toggle(e,6)}}>
                    {data[6] && <img src={data[6]} alt="player" />}
                </div>
                <div className="boxes" id="7" onClick={(e)=>{toggle(e,7)}}>
                    {data[7] && <img src={data[7]} alt="player" />}
                </div>
                <div className="boxes" id="8" onClick={(e)=>{toggle(e,8)}}>
                    {data[8] && <img src={data[8]} alt="player" />}
                </div>
            </div>
        </div>
    )
}
export default Board