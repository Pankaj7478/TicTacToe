import React, { useEffect, useRef, useState} from "react";
import Welcome from "./Welcome";
import { Routes, Route, useNavigate } from "react-router-dom";
import './TTT.css';
import { FaHome } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { IoBulbSharp } from "react-icons/io5";
import { IoIosUndo } from "react-icons/io";
import { MdMenuBook } from "react-icons/md";
import Board2p from "./Board2p";
import Boardcompeasy from "./BoardComp";
import { StoreContext } from "./Store";
import cross from "../assets/Tic_tac_toe_cross.jpg";
import heart from "../assets/Tic_tac_toe_heart.jpg";
const TTT = () => {
      const navi=useNavigate();const divRef=useRef(null);
      const map={1:"Level-1 Bot",2:"Level-2 Bot",3:"Level-3 Bot"}
      const [mydata,setmydata]=useState([cross,heart,3,1]);
      const [evalme,setevalme]=useState(false);
      const [undo,setUndo]=useState(false);
      const [hint,setHint]=useState(false);
      const [wintext,setwintext] = useState('Equal');
      const [i,seti]=useState(0);
      const [j,setj]=useState(0);
      const [player1,setplayer1]=useState('');
      const [player2,setplayer2]=useState('');
      const [str,setstr]=useState('in_middle');
      const [newgame,setNew]=useState(false);
      const [more,setMore]=useState(false);
      const [takehint,setTakehint]=useState(true);
      const [takeundo,setTakeundo]=useState(true);
      const [takeevaluate,setTakeevaluate]=useState(true);
      useEffect(() => {
        const handleClickAnywhere = (event) => {
          // console.log("event",event.target,divRef.current,divRef.current.contains(event.target));
          if (divRef.current&&!divRef.current.contains(event.target)) {
            console.log("I am inside");
            setMore(false);
          }
        };
        document.addEventListener("click", handleClickAnywhere);
        return () => {
          document.removeEventListener("click", handleClickAnywhere);
        };
      }, []);
      useEffect(() => {
        const handleKeyPress = (event) => {
          if(event.key.toLowerCase()==='r'){
            setNew(true);setMore(false);
          }
          if(event.key.toLowerCase()==='h'){
            setHint(true);setMore(false);
          }
          if(event.key.toLowerCase()==='m'){
            setMore(!more);
          }
          if(event.key.toLowerCase()==='u'){
            setUndo(true);setMore(false);
          }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      });
      useEffect(()=>{
        let x=document.getElementsByClassName("contain");
        if(more)x[x.length-1].style.backgroundColor="rgb(42, 42, 42)";
      },[more]);
      const animatebar = (bar1, start, end, duration) => {
      let startTime = null;
      function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const percent = start + progress * (end - start);
        bar1.style.background = `linear-gradient(to right, rgb(0, 165, 0) ${percent}%, rgb(19, 19, 173) 0%)`;
        if(progress < 1) requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
    };
    const bar1Ref=useRef(null);
    let bar1=bar1Ref.current;
    bar1 = document.getElementById("bar1");
    if(bar1){
        if(!i||i===5)bar1.style.background='linear-gradient(to right, rgb(0, 165, 0) 50.5%, rgb(19, 19, 173) 0%)';
        if((i===1||i===3)&&str==='in_middle'){
          animatebar(bar1,50,100,300);
          setTimeout(()=>{
            setstr('slide');
          },300)
        }
        if((i===2||i===4)&&str==='in_middle'){
          animatebar(bar1,50,0,300);
          setTimeout(()=>{
            setstr('slide');
          },300)
        }
        if(i===1||i===3)bar1.style.background='linear-gradient(to right, rgb(0, 165, 0) 100%, rgb(19, 19, 173) 0%)';
        if(i===2||i===4)bar1.style.background='linear-gradient(to right, rgb(0, 165, 0) 0%, rgb(19, 19, 173) 0%)';
      }
    useEffect(()=>{
        if(!i){setwintext("Equal");setstr("in_middle");}
        if(i===1||i===2)setwintext(`Win in ${j}`);
        if(i===3)setwintext("1-0");if(i===4)setwintext("0-1");
        if(i===5)setwintext(`½-½`);
    },[i,j])
        const EvaluationBar = () => {
          return(
                <div className="EvaluationBar" id="bar1">
                    <div className="evaluation">{player1}</div>
                    <div className="evaluation">{wintext}</div>
                    <div className="evaluation">{player2}</div>
                </div>
            );
        };
        const Toggleswitch=({isChecked,setIsChecked})=>{
          const handleToggle=(e)=> {e.stopPropagation();setIsChecked(!isChecked);}
          return(
          <div  className={`switch ${isChecked ? "checked" : ""}`}onClick={handleToggle}>
            <div className="slider" ></div>
        </div>);
        }
        const Add = () => {
          const handlehome = () =>{
          setTimeout(()=>{
            navi('/');
          },22);setNew(true);
        }
        const handlereset = () =>setNew(true);
        const handlehsign =()=>setHint(true);
        const handleusign =()=>setUndo(true);
        const handlemore =(e)=>{e.stopPropagation();setMore(!more);}
        return (
          <div className="help-container" style={{ backgroundColor: "black", borderRadius: "8px"}}>
                <div className='contain' >
                  <div onClick={handlehome}><FaHome/></div>
                  <div onClick={handlehome}> Home </div>
                </div>
                {evalme?(<div className='contain'>
                  <div onClick={handlehsign}><IoBulbSharp/></div>
                  <div onClick={handlehsign}> Hint </div>
                </div>):""}
                <div className='contain'>
                  <div onClick={handleusign}><IoIosUndo/></div>
                  <div onClick={handleusign}> Undo </div>
                </div>
                <div className='contain'>
                  <div onClick={handlereset}><GrPowerReset/></div>
                  <div onClick={handlereset}> Reset </div>
                </div>
                <div className='contain' ref={divRef}>
                  <div onClick={handlemore}><MdMenuBook/></div>
                  <div onClick={handlemore}> More </div>
                  {more&&<div className="moreoptions">
                    <div className="options">Undo<Toggleswitch setIsChecked={setTakeundo} isChecked={takeundo} /></div>
                    <div className="options">Hint<Toggleswitch setIsChecked={setTakehint} isChecked={takehint}/></div>
                    <div className="options">Evaluation Bar<Toggleswitch setIsChecked={setTakeevaluate} isChecked={takeevaluate}/></div>
                  </div>}
                </div>
            </div>
        );
    };

    return (
      <StoreContext.Provider value={[mydata,setmydata]}>
        {/* <Router> */}
            <div className="head">
                  {/* <div className="GameOver" style={{backgroundColor:"black"}}>Hello!
                  </div> */}            
              <div className="welcomeb">
                    <Routes>
                        <Route path="/" element={<Welcome />} />
                        <Route path="/compe" element={<>
                            {(mydata[2]===3&&takeevaluate)?<EvaluationBar />:<button className="Mode">{map[mydata[2]]}</button>}
                            <Boardcompeasy undo={undo} setTakehint={setTakehint} takehint={takehint} takeundo={takeundo} setTakeevaluate={setTakeevaluate} takeevaluate={takeevaluate} setTakeundo={setTakeundo} setUndo={setUndo} i={i} seti={seti} newgame={newgame} setplayer1={setplayer1} hint={hint} setHint={setHint} setevalme={setevalme} setplayer2={setplayer2} j={j} setj={setj} setNew={setNew}/>
                            <Add>
                              <div>hello</div>
                            </Add>
                        </>} />
                        <Route path="/2p" element={<>
                            <button className="Mode">Two Player</button>
                            <Board2p undo={undo} hint={hint} setHint={setHint} setUndo={setUndo} takeundo={takeundo} setevalme={setevalme} more={more} setMore={setMore} newgame={newgame} setNew={setNew} />
                            <Add/>
                        </>} />
                    </Routes>
                </div>
            </div>
        {/* </Router> */}
      </StoreContext.Provider>
    );
};
export default TTT;