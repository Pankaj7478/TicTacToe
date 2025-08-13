import { handleMove } from "./Level3";
import {winmove} from "./Level2"

const getRandomEmptyIndex = () => {
    const possibleIndices = [0,2,6,8];
    const randomIndex = Math.floor(Math.random() * possibleIndices.length);
    return possibleIndices[randomIndex];
};
const computerMove = (count,arr,data,rdata) => {
    let randomIndex = getRandomEmptyIndex();
    console.log("count in geteasy",count,rdata[0][3],randomIndex);
    if ((count===1||count===2||count===3||count===4)&&rdata[0][2]===3){
      randomIndex=handleMove(count,arr,data,rdata);
    }
    else if(rdata[0][2]===2||rdata[0][2]===3)randomIndex=winmove(data,rdata,randomIndex);
    return randomIndex;
};
export default computerMove;