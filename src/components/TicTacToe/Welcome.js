import React,{useState,useEffect} from "react";
import './TTT.css';
import vsComp from "./vsComputer_icon.jpg"
import twop from "./2Player_icon.jpg"
import circle from "../assets/Tic_tac_toe_circle.jpg"
import cross from "../assets/Tic_tac_toe_cross.jpg"
// import board from "../assets/Tic_tac_toe_board.jpg"
import heart from "../assets/Tic_tac_toe_heart.jpg"
import Aaa from "./a.jsx"
import {useNavigate} from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css';
// import { useNavigate } from 'react-router-dom';
const Welcome = () =>{
    const navi=useNavigate();
    const [dataToSend2p,setdataToSend2p]=useState([]);
    const [dataToSendcomp,setdataToSendcomp]=useState([]);
    const [text1,showtext1]=useState('Pick Your Badge:');
    const [text2,showtext2]=useState('Pick Player1 Badge:');
    const [play,showplay]=useState(true);
    const [vscomp,showvscomp]=useState(true);
    const [twoplay,showtwoplay]=useState(true);
    const [circle1,showcircle1]=useState(true);
    const [cross1,showcross1]=useState(true);
    const [heart1,showheart1]=useState(true);
    const [circle2,showcircle2]=useState(true);
    const [cross2,showcross2]=useState(true);
    const [heart2,showheart2]=useState(true);
    const [mydata,setmydata]=useState([]);
    const [additionalComponent, setAdditionalComponent] = useState(null);
    useEffect(() => {
        // console.log(dataToSend2p);
        if(dataToSend2p.length===2)setTimeout(()=>{
            // showtext2(false);
            navi('/2p',{state: dataToSend2p});
        },750);
    }, [dataToSend2p]);
    useEffect(()=>{
        setmydata(dataToSendcomp);
        // console.log(dataToSendcomp);
    },[dataToSendcomp]);
    useEffect(()=>{
        // setmydata(dataToSendcomp);
        console.log(mydata);
        console.log(mydata.length);
        setTimeout(()=>{
            if(mydata.length===3){
                navi('/comph',{state: mydata});
            }
        },750);
    },[mydata]);

    const handlePlay = () =>{
        showplay(false);
    }
    const handlevscomp=()=>{
        showtwoplay(true);
        setTimeout(()=>{
            showvscomp(false);
            showtext2("Pick Player1 Badge: ");
            showcircle2(true);showcross2(true);
            showheart2(true);
        },30);
    }
    const handletwoplay=()=>{
        showvscomp(true);
        setTimeout(()=>{
            showtwoplay(false);
            showtext1("Pick Your Badge: ");
            showcircle1(true);showcross1(true);
            showheart1(true);setAdditionalComponent(null);
        },30);
    }
    const handle1a = () =>{
        if(text1==="Pick Computer Badge:"){
            setdataToSendcomp(prev=>[...prev,'circle']);
            setAdditionalComponent(<Aaa showtext1={showtext1} setdataSent={setmydata} dataSent={mydata} setAdditionalComponent={setAdditionalComponent}/>);
            showtext1("Select your turn: ");
            showcircle1(false);showcross1(false);
            showheart1(false);
            return;
        }
        setdataToSendcomp(['circle']);
        setAdditionalComponent(null);
        showtext1("Pick Computer Badge:");
        // showvscomp(false);
        showtext2("Pick Player1 Badge:");
        showcircle1(false);showcircle2(true);
        showcross2(true);showheart2(true);
    }
    const handle1b = () =>{
        if(text1==="Pick Computer Badge:"){
            setdataToSendcomp(prev=>[...prev,'cross']);
            setAdditionalComponent(<Aaa showtext1={showtext1} setdataSent={setmydata} dataSent={mydata} setAdditionalComponent={setAdditionalComponent}/>);
            showtext1("Select your turn: ");
            showcircle1(false);showcross1(false);
            showheart1(false);
            return;
        }
        setdataToSendcomp(['cross']);
        setAdditionalComponent(null);
        showtext1("Pick Computer Badge:");
        // showvscomp(false);
        showtext2("Pick Player1 Badge:");
        showcross1(false);showcircle2(true);
        showcross2(true);showheart2(true);
    }
    const handle1c = () =>{
        if(text1==="Pick Computer Badge:"){
            setdataToSendcomp(prev=>[...prev,'heart']);
            setAdditionalComponent(<Aaa showtext1={showtext1} setdataSent={setmydata} dataSent={mydata} setAdditionalComponent={setAdditionalComponent}/>);
            showtext1("Select your turn: ");
            showcircle1(false);showcross1(false);
            showheart1(false);
            return;
        }
        setdataToSendcomp(['heart']);
        setAdditionalComponent(null);
        showtext1("Pick Computer Badge:");
        // showvscomp(false);
        showtext2("Pick Player1 Badge:");
        showheart1(false);showcircle2(true);
        showcross2(true);showheart2(true);
    }
    const handle2a = () =>{
        if(text2==="Pick Player2 Badge:"){
            setdataToSend2p(prev=>[...prev,'circle']);
            setAdditionalComponent(null);
            showtext2("Loading");
            showcircle2(false);showcross2(false);
            showheart2(false);
            return;
        }
        showtext2("Pick Player2 Badge:");
        // showtwoplay(false);
        showtext1("Pick Your Badge:");
        showcircle2(false);showcircle1(true);
        showcross1(true);showheart1(true);
        setdataToSend2p(['circle']);
    }
    const handle2b = () =>{
        if(text2==="Pick Player2 Badge:"){
            setdataToSend2p(prev=>[...prev,'cross']);
            setAdditionalComponent(null);
            showtext2("Loading");
            showcircle2(false);showcross2(false);
            showheart2(false);
            return;
        }
        setdataToSend2p(['cross']);
        setAdditionalComponent(null);
        showtext2("Pick Player2 Badge:");
        // showtwoplay(false);
        showtext1("Pick Your Badge:");
        showcross2(false);showcircle1(true);
        showcross1(true);showheart1(true);
    }
    const handle2c = () =>{
        setAdditionalComponent(null);
        if(text2==="Pick Player2 Badge:"){
            setdataToSend2p(prev => [...prev,'heart']);
            showtext2("Loading");
            showcircle2(false);showcross2(false);
            showheart2(false);
            return;
        }
        setdataToSend2p(['heart']);
        showtext2("Pick Player2 Badge:");
        // showtwoplay(false);
        showtext1("Pick Your Badge:");
        showheart2(false);showcircle1(true);
        showcross1(true);showheart1(true);
    }
    return(
        <div>
            <p className="welcome">Welcome to Tic Tac Toe Game</p>
            {play&&<button className="playbutton" id="play" onClick={handlePlay}>Play</button>}
                {(!play)&&<p>
                    {vscomp&&<p className="pclass"><img src={vsComp} alt="Vs Computer Icon"onClick={handlevscomp} className="icon-image" />
                    <button className="playbutton" onClick={handlevscomp}>vs Computer</button></p>}
                        {!vscomp&&<a style={{fontSize:"25px"}}><a className="turn">{text1} {additionalComponent}</a>
                        <div>{circle1&&<img src={circle} alt="2 Player Icon" className="sign-image" onClick={handle1a}/>}
                            {cross1&&<img src={cross} alt="2 Player Icon" className="sign-image" onClick={handle1b}/>}
                            {heart1&&<img src={heart} alt="2 Player Icon" className="sign-image" onClick={handle1c}/>}
                            {text1==="Loading"&&<div class="loader"></div>}</div>
                        </a>}
                    {twoplay&&<p className="pclass"><img src={twop} alt="2 Player Icon"onClick={handletwoplay} className="icon-image" />
                    <button className="playbutton" onClick={handletwoplay}>Two Players</button></p>}
                        {!twoplay&&<a style={{fontSize:"23px"}}><a className="turn">{text2}</a>
                            <div>{circle2&&<img src={circle} alt="2 Player Icon" className="sign-image" onClick={handle2a}/>}
                            {cross2&&<img src={cross} alt="2 Player Icon" className="sign-image" onClick={handle2b}/>}
                            {heart2&&<img src={heart} alt="2 Player Icon" className="sign-image" onClick={handle2c}/>}
                            {text2==="Loading"&&<div class="loader"></div>}</div>
                        </a>}
            </p>}
        </div>
    )
}
export default Welcome