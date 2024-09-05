import React, { useEffect, useRef, useState } from "react";
import Welcome from "./Welcome";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import './TTT.css';
import Board2p from "./Board2p";
import Boardcompeasy from "./Boardcompeasy";
import Boardcompmedium from "./Boardcompmedium";
import Boardcomphard from './Boardcomphard';
const TTT = () => {
    const [dl1,setdl1]=useState(false);
    const [dl2,setdl2]=useState(false);
    const [hl1,sethl1]=useState(false);
    const [hl2,sethl2]=useState(false);
    const [hl3,sethl3]=useState(false);
    const [vl1,setvl1]=useState(false);
    const [vl2,setvl2]=useState(false);
    const [vl3,setvl3]=useState(false);
    const [evalme,setevalme]=useState(0);
    const DiagonalLine1 = () => {
      return (<>
        {evalme ? (
          <div className="line" style={{ height: '709px', left: '304px', top: '9px', transform: 'rotate(134.5deg)' }} />
        ) : (
          <div className="line" style={{ height: '709px', left: '304px', top: '-50px', transform: 'rotate(134.5deg)' }} />
        )}</>
      );
    };
    const DiagonalLine2 = () => {
        return (<>
          {evalme ? (
            <div className="line" style={{ height: '709px', left: '308px', top: '10px', transform: 'rotate(45.5deg)' }} />
          ) : (
            <div className="line" style={{ height: '709px', left: '308px', top: '-59px', transform: 'rotate(45.5deg)' }} />
          )}</>
        );
      };
      const HorizontalLine1 = () => {
        return (
          <>
            {evalme ? (
              <div className="line" style={{ height: '523px', left: '305px', top: '-82px', transform: 'rotate(90deg)' }} />
            ) : (
              <div className="line" style={{ height: '523px', left: '305px', top: '-150px', transform: 'rotate(90deg)' }} />
            )}
          </>
        );
      };      
      const HorizontalLine2 = () => {
        return (
          <>
            {evalme ? (
              <div className="line" style={{ height: '523px', left: '305px', top: '102px', transform: 'rotate(90deg)' }} />
            ) : (
              <div className="line" style={{ height: '523px', left: '305px', top: '40px', transform: 'rotate(90deg)' }} />
            )}
          </>
        );
      };  
      const HorizontalLine3 = () => {
        return (
          <>
            {evalme ? (
              <div className="line" style={{ height: '523px', left: '305px', top: '287px', transform: 'rotate(90deg)' }} />
            ) : (
              <div className="line" style={{ height: '523px', left: '305px', top: '227px', transform: 'rotate(90deg)' }} />
            )}
          </>
        );
      };      
      const VerticalLine1 = () => {
        return (
          <>
            {evalme ? (
              <div className="line" style={{ height: '523px', left: '117px', top: '108px' }} />
            ) : (
              <div className="line" style={{ height: '523px', left: '110px', top: '38px' }} />
            )}
          </>
        );
      };      
      const VerticalLine2 = () => {
        return (
          <>
            {evalme ? (
              <div className="line" style={{ height: '523px', left: '305px', top: '108px' }} />
            ) : (
              <div className="line" style={{ height: '523px', left: '305px', top: '38px' }} />
            )}
          </>
        );
      };      
      const VerticalLine3 = () => {
        return (
          <>
            {evalme ? (
              <div className="line" style={{ height: '523px', left: '492px', top: '108px' }} />
            ) : (
              <div className="line" style={{ height: '523px', left: '492px', top: '38px' }} />
            )}
          </>
        );
      };      
      const [undo, setUndo] = useState(false);
      const [hint, setHint] = useState(false);
      const [wintext, setwintext] = useState('Equal');
      const [i,seti]=useState(0);
      const [j,setj]=useState(0);
      const [player1,setplayer1]=useState('');
      const [player2,setplayer2]=useState('');
      const [str,setstr]=useState('in_middle');
      const [newgame,setNew]=useState(false);
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
        if(!i)bar1.style.background='linear-gradient(to right, rgb(0, 165, 0) 50%, rgb(19, 19, 173) 0%)';
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
        if(i==1||i===3)bar1.style.background='linear-gradient(to right, rgb(0, 165, 0) 100%, rgb(19, 19, 173) 0%)';
        if(i===2||i===4)bar1.style.background='linear-gradient(to right, rgb(0, 165, 0) 0%, rgb(19, 19, 173) 0%)';
      }
    useEffect(()=>{
        if(!i){setwintext("Equal");setstr("in_middle");}
        if(i==1)setwintext(player1+" wins in "+j);
        if(i==2)setwintext(player2+" wins in "+j);
        if(i==3||i===4)setwintext("Computer Won");
    },[i,j])
        const EvaluationBar = () => {
          return (
                <div className="EvaluationBar" id="bar1">
                    <a className="evaluation1">{player1}</a>
                    <a className="evaluation2">{player2}</a>
                    <a className="win">{wintext}</a>
                </div>
            );
        };
      const Add = () => {
        const navigate = useNavigate();
        const handlenew = () => {
          setNew(true);
          navigate('/');
        };
        const handlehsign = () => {
          setHint(true);
        };
        const handleusign = () => {
            setUndo(true);
        };
        return (
            <div className="help-container" style={{ backgroundColor: "black", borderRadius: "8px"}}>
                {evalme?(<div className='contain' >
                  <a className="help" id="hsign" onClick={handlehsign}>&#x1F4A1;</a>
                  <a className="tools" onMouseOver={() => document.getElementById('hsign').style.backgroundColor = 'rgb(42, 42, 42)'} onMouseOut={() => document.getElementById('hsign').style.backgroundColor = ''}id="hint" onClick={handlehsign}> Hint </a>
                </div>):""}
                <div className='contain' >
                  <a className="help" id="usign" onClick={handleusign}>&#x1F504;</a>
                  <a className="tools" onMouseOver={() => document.getElementById('usign').style.backgroundColor = 'rgb(42, 42, 42)'} onMouseOut={() => document.getElementById('usign').style.backgroundColor = ''}id="undo" onClick={handleusign}> Undo </a>
                </div>
                <div className='contain' >
                  <a className="help" id="psign" onClick={handlenew}>&#x002B;</a>
                  <a className="tools" onMouseOver={() => document.getElementById('psign').style.backgroundColor = 'rgb(42, 42, 42)'} onMouseOut={() => document.getElementById('psign').style.backgroundColor = ''}id="new" onClick={handlenew}> New Game </a>
                </div>
                <div className='contain' >
                  <a className="help" id="msign" onClick={handlenew}>&#9776;</a>
                  <a className="tools" onMouseOver={() => document.getElementById('msign').style.backgroundColor = 'rgb(42, 42, 42)'} onMouseOut={() => document.getElementById('msign').style.backgroundColor = ''}id="more" onClick={handlenew}> More </a>
                </div>
            </div>
        );
    };

    return (
        <Router>
            <div className="head">
                  {/* <div className="GameOver" style={{backgroundColor:"black"}}>Hello!
                  </div> */}
                <a className="heading">TIC TAC TOE</a>
                <div className="welcomeb">
                    <Routes>
                        <Route path="/" element={<Welcome />} />
                        <Route path="/compe" element={<>
                            {/* <EvaluationBar /><br /> */}
                            <Boardcompeasy undo={undo} setUndo={setUndo} i={i} seti={seti} setdl1={setdl1} newgame={newgame}
                            setplayer1={setplayer1} setplayer2={setplayer2} j={j} setj={setj} setdl2={setdl2} setNew={setNew}/>
                            <Add />
                            <DiagonalLine1/><DiagonalLine2 /><HorizontalLine1/><HorizontalLine2/><HorizontalLine3/>
                            <VerticalLine1/><VerticalLine2/><VerticalLine3/>
                        </>} />
                        <Route path="/compm" element={<>
                            {/* <EvaluationBar /><br /> */}
                            <Boardcompmedium undo={undo} setUndo={setUndo} i={i} seti={seti} setdl1={setdl1} newgame={newgame}
                            setplayer1={setplayer1} setplayer2={setplayer2} j={j} setj={setj} setdl2={setdl2} setNew={setNew}/>
                            <Add />
                            <DiagonalLine1/><DiagonalLine2 /><HorizontalLine1/><HorizontalLine2/><HorizontalLine3/>
                            <VerticalLine1/><VerticalLine2/><VerticalLine3/>
                        </>} />
                        <Route path="/comph" element={<>
                            
                            <EvaluationBar /><br />
                            <Boardcomphard undo={undo} hint={hint} setHint={setHint} setUndo={setUndo} i={i} seti={seti} setdl1={setdl1} setdl2={setdl2} sethl1={sethl1}setplayer1={setplayer1} setplayer2={setplayer2} j={j} setj={setj} sethl2={sethl2} sethl3={sethl3} setvl1={setvl1}setvl2={setvl2} setvl3={setvl3} newgame={newgame} setNew={setNew} setevalme={setevalme}/>
                            <Add />
                            {dl1&&<DiagonalLine1 />}{dl2&&<DiagonalLine2 />}{hl1&&<HorizontalLine1/>}{hl2&&<HorizontalLine2/>}{hl3&&<HorizontalLine3/>}{vl1&&<VerticalLine1/>}{vl2&&<VerticalLine2/>}{vl3&&<VerticalLine3/>}
                        </>} />
                        <Route path="/2p" element={<>
                            {/* <EvaluationBar /><br /> */}
                            <Board2p undo={undo} hint={hint} setHint={setHint} setUndo={setUndo} i={i} seti={seti} setdl1={setdl1} setdl2={setdl2} sethl1={sethl1}setplayer1={setplayer1} setplayer2={setplayer2} j={j} setj={setj} sethl2={sethl2} sethl3={sethl3} setvl1={setvl1}setvl2={setvl2} setvl3={setvl3} newgame={newgame} setNew={setNew} setevalme={setevalme}/>
                            <Add />
                            {dl1&&<DiagonalLine1 />}{dl2&&<DiagonalLine2 />}{hl1&&<HorizontalLine1/>}{hl2&&<HorizontalLine2/>}{hl3&&<HorizontalLine3/>}{vl1&&<VerticalLine1/>}{vl2&&<VerticalLine2/>}{vl3&&<VerticalLine3/>}
                        </>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default TTT;
