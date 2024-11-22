import React,{useState,useContext} from "react";
import './TTT.css';
import vsComp from "./vsComputer_icon.jpg"
import twop from "./2Player_icon.jpg"
import circle from "../assets/Tic_tac_toe_circle.jpg"
import cross from "../assets/Tic_tac_toe_cross.jpg"
import heart from "../assets/Tic_tac_toe_heart.jpg"
// import board from "../assets/Tic_tac_toe_board.jpg"
import {useNavigate} from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { StoreContext } from "./Store";
let x=false,y=false;
const Welcome = () =>{
    const items=useContext(StoreContext);
    const navi=useNavigate();
    console.log("items in Welcome",items[0]);
    const [text,showtext]=useState('');
    const [play,showplay]=useState(true);
    const [vscomp,showvscomp]=useState(true);
    const [twoplay,showtwoplay]=useState(true);
    const [circle1,showcircle1]=useState(true);
    const [cross1,showcross1]=useState(true);
    const [heart1,showheart1]=useState(true);
    const badge = {'circle': circle, 'cross': cross, 'heart': heart };
    const handlePlay = () =>showplay(false);
    const handleclick=(e)=>{
        if(e===1){
            showtwoplay(true);
            showvscomp(false);
            showtext("Pick Your Badge: ");
        }
        else{
            showvscomp(true);
            showtwoplay(false);
            showtext("Pick Player1 Badge: ");
        } 
        showcircle1(true);
        showcross1(true);
        showheart1(true);
    }
    const handlecomp = (data,ab) =>{
        console.log('ab',ab,badge[ab]);
        if(text==="Pick Computer Badge:"){
            items[1](prev=>[...prev,badge[ab]]);
            data(false);showcross1(false);
            showtext("Select level: ");x=true;y=true;
            showheart1(false);showcircle1(false);showcross1(false);
        }
        else if(text=="Select level: "){
            items[1](prev=>[...prev,ab]);
            showtext("Select your turn: ");x=true;y=false;
        }
        else if(text==="Select your turn: "){
            items[1](prev=>[...prev,ab]);x=false;y=false;
            showtext("Select your turn: ");showtext("Loading");
            setTimeout(()=>{navi('/compe');},750);
        }
        else{
            showtext("Pick Computer Badge:");
            data(false);items[1]([badge[ab]]);
        }
    }
    const handle2p = (data,ab) =>{
        if(text==="Pick Player2 Badge:"){
            items[1](prev=>[...prev,badge[ab]]);
            showtext("Loading");showheart1(false);
            showcircle1(false);showcross1(false);
            setTimeout(()=>{navi('/2p');},750);
        }
        else{
            items[1]([badge[ab]]);data(false);
            showtext("Pick Player2 Badge:");
        }
    }
    return(
        <div>
            <p className="welcome">Welcome to Tic Tac Toe Game</p>
            {play&&<div className="playbutton" id="play" onClick={handlePlay}>Play</div>}
                {(!play)&&<p>
                    {vscomp&&<div className="playbutton"><img src={vsComp} className="icon-image" alt="Vs Computer Icon" onClick={()=>handleclick(1)} />
                    <div onClick={()=>handleclick(1)}>vs Computer</div></div>}
                        {!vscomp&&<a><a className="turn">{text} <p/>
                        {x&&<a style={{fontSize:"10px"}}>
                            <a className="aaa" onClick={()=>handlecomp(1,1)} id="aaa1">1</a>
                            <a className="aaa" onClick={()=>handlecomp(2,2)} id="aaa2">2</a>
                            {y&&<a className="aaa" onClick={()=>handlecomp(3,3)} id="aaa2">3</a>}
                        </a>}</a>
                        <div/>{circle1&&<img src={circle} alt="2 Player Icon" className="sign-image" onClick={()=>handlecomp(showcircle1,'circle')}/>}
                            {cross1&&<img src={cross} alt="2 Player Icon" className="sign-image" onClick={()=>handlecomp(showcross1,'cross')}/>}
                            {heart1&&<img src={heart} alt="2 Player Icon" className="sign-image" onClick={()=>handlecomp(showheart1,'heart')}/>}
                            {text==="Loading"&&<div class="loader"></div>}
                        </a>}
                    {twoplay&&<div className="playbutton" ><img src={twop} className="icon-image" alt="2 Player Icon" onClick={()=>handleclick(2)} />
                    <div onClick={()=>handleclick(2)}>Two Players</div></div>}
                        {!twoplay&&<div><a className="turn">{text}</a>
                            <div>{circle1&&<img src={circle} alt="2 Player Icon" className="sign-image" onClick={()=>handle2p(showcircle1,'circle')}/>}
                            {cross1&&<img src={cross} alt="2 Player Icon" className="sign-image" onClick={()=>handle2p(showcross1,'cross')}/>}
                            {heart1&&<img src={heart} alt="2 Player Icon" className="sign-image" onClick={()=>handle2p(showheart1,'heart')}/>}
                            {text==="Loading"&&<div class="loader"></div>}</div>
                        </div>}
            </p>}
        </div>
    )
}
export default Welcome