import { useEffect } from "react";
import React from 'react';
// import './TTT.css'
const Board=({data,toggle,checkWin})=>{
    let x=checkWin(data);
    useEffect(() => {
        const parent = document.querySelector('.board');
        const element = document.querySelector('.line');
        const setLineHeight = () => {
            if (element && parent&&x!=7&&x!=8)element.style.height = `${parent.offsetWidth/1.2}px`;
        };
        setLineHeight();
        window.addEventListener('resize', setLineHeight);
        if (element) {
            console.log(element,"hello");
          if (x === 1) {
              element.style.transform = 'rotate(90deg)';
              element.style.top = '-6.7%';
          } else if (x === 2) {
              element.style.transform = 'rotate(90deg)';
          } else if (x === 3) {
              element.style.transform = 'rotate(90deg)';
              element.style.top = '42.1%';
          } else if (x === 4) {
              element.style.left = '19%';
          } else if (x === 6) {
              element.style.left = '80.3%';
          } else if (x === 7) {
              element.style.transform = 'rotate(135deg)';
              element.style.height = '90%';
          } else if (x === 8) {
              element.style.transform = 'rotate(45deg)';
              element.style.height = '90%';
          }
      }
      return () => window.removeEventListener('resize', setLineHeight);
  }, [x]);
    return(
        <div className="board">
            {x?<div className="line" />:null}
            {[...Array(9)].map((_,idx) => (
                    <div className="boxes" id={idx} onClick={() => toggle(idx)} key={idx}>
                        {data[idx] && <img src={data[idx]} alt="player" />}
                    </div>
            ))}
        </div>
    )
}
export default Board;