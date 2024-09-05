export const winmove=(move,setarr,data,rdata,map,randomIndex,setCount,setLock,checkWin,hint)=>{
    if(((data[1]===data[2]&&data[2])||(data[3]===data[6]&&data[6])||(data[4]===data[8]&&data[8]))&&(!data[0]))randomIndex=0;
    if(((data[0]===data[2]&&data[2])||(data[4]===data[7]&&data[7]))&&(!data[1]))randomIndex=1;
    if(((data[0]===data[1]&&data[1])||(data[4]===data[6]&&data[6])||(data[5]===data[8]&&data[8]))&&(!data[2]))randomIndex=2;
    if(((data[0]===data[6]&&data[6])||(data[4]===data[5]&&data[5]))&&(!data[3]))randomIndex=3;
    if(((data[0]===data[8]&&data[8])||(data[1]===data[7]&&data[7])||(data[2]===data[6]&&data[6])||(data[3]===data[5]&&data[5]))&&(!data[4]))randomIndex=4;
    if(((data[2]===data[8]&&data[8])||(data[3]===data[4]&&data[4]))&&(!data[5]))randomIndex=5;
    if(((data[0]===data[3]&&data[3])||(data[2]===data[4]&&data[4])||(data[7]===data[8]&&data[8]))&&(!data[6]))randomIndex=6;
    if(((data[1]===data[4]&&data[4])||(data[6]===data[8]&&data[8]))&&(!data[7]))randomIndex=7;
    if(((data[0]===data[4]&&data[4])||(data[2]===data[5]&&data[5])||(data[6]===data[7]&&data[7]))&&(!data[8]))randomIndex=8;


    if(((data[1]===data[2]&&data[2]===map[rdata[0][1]])||(data[3]===data[6]&&data[6]===map[rdata[0][1]])||(data[4]===data[8]&&data[8]===map[rdata[0][1]]))&&(!data[0]))randomIndex=0;
    if(((data[0]===data[2]&&data[2]===map[rdata[0][1]])||(data[4]===data[7]&&data[7]===map[rdata[0][1]]))&&(!data[1]))randomIndex=1;
    if(((data[0]===data[1]&&data[1]===map[rdata[0][1]])||(data[4]===data[6]&&data[6]===map[rdata[0][1]])||(data[5]===data[8]&&data[8]===map[rdata[0][1]]))&&(!data[2]))randomIndex=2;
    if(((data[0]===data[6]&&data[6]===map[rdata[0][1]])||(data[4]===data[5]&&data[5]===map[rdata[0][1]]))&&(!data[3]))randomIndex=3;
    if(((data[0]===data[8]&&data[8]===map[rdata[0][1]])||(data[1]===data[7]&&data[7]===map[rdata[0][1]])||(data[2]===data[6]&&data[6]===map[rdata[0][1]])||(data[3]===data[5]&&data[5]))&&(!data[4]))randomIndex=4;
    if(((data[2]===data[8]&&data[8]===map[rdata[0][1]])||(data[3]===data[4]&&data[4]===map[rdata[0][1]]))&&(!data[5]))randomIndex=5;
    if(((data[0]===data[3]&&data[3]===map[rdata[0][1]])||(data[2]===data[4]&&data[4]===map[rdata[0][1]])||(data[7]===data[8]&&data[8]===map[rdata[0][1]]))&&(!data[6]))randomIndex=6;
    if(((data[1]===data[4]&&data[4]===map[rdata[0][1]])||(data[6]===data[8]&&data[8]===map[rdata[0][1]]))&&(!data[7]))randomIndex=7;
    if(((data[0]===data[4]&&data[4]===map[rdata[0][1]])||(data[2]===data[5]&&data[5]===map[rdata[0][1]])||(data[6]===data[7]&&data[7]===map[rdata[0][1]]))&&(!data[8]))randomIndex=8;
    // if(move===5)data[0]='';    
    if(hint){
        setarr(prev=>[...prev,randomIndex]);
        const possibleIndexes=[0,1,2,3,4,5,6,7,8];
        if(randomIndex===undefined)randomIndex=0;
        while(data[randomIndex])randomIndex=possibleIndexes[Math.floor(Math.random()*possibleIndexes.length)];
        console.log("randomindex is: ",randomIndex);
        if (randomIndex !== undefined) {
            // setTimeout(()=>{
                data[randomIndex] = map[rdata[0][1]];
            // },250);
            setCount((prevCount) => prevCount + 1);
            if (checkWin(data)) {
              setLock(true);
            }
        }
    }
    return randomIndex;
}