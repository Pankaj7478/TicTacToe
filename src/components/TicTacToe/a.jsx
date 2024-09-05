import React from "react";
import "../TicTacToe/TTT.css"
import "./Welcome.js";
const A = ({showtext1,setdataSent,dataSent,setAdditionalComponent})=>{
    const handle=(e,event)=>{
        e.preventDefault();
        setdataSent(prev=>[...prev,event]);
        showtext1('Loading');
        setAdditionalComponent(null);
    }
    return(
        <a style={{fontSize:"10px"}}>
            <a className="aaa" id="aaa1" onClick={(e)=>handle(e,1)}>
            1 </a>&nbsp;
            <a className="aaa" id="aaa2" onClick={(e)=>handle(e,2)}>
            2 </a>
        </a>
    );
}
export default A;