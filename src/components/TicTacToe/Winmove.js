export const winmove=(data,rdata,randomIndex)=>{
    if(((data[1]===data[2]&&data[2])||(data[3]===data[6]&&data[6])||(data[4]===data[8]&&data[8]))&&(!data[0]))randomIndex=0;
    if(((data[0]===data[2]&&data[2])||(data[4]===data[7]&&data[7]))&&(!data[1]))randomIndex=1;
    if(((data[0]===data[1]&&data[1])||(data[4]===data[6]&&data[6])||(data[5]===data[8]&&data[8]))&&(!data[2]))randomIndex=2;
    if(((data[0]===data[6]&&data[6])||(data[4]===data[5]&&data[5]))&&(!data[3]))randomIndex=3;
    if(((data[0]===data[8]&&data[8])||(data[1]===data[7]&&data[7])||(data[2]===data[6]&&data[6])||(data[3]===data[5]&&data[5]))&&(!data[4]))randomIndex=4;
    if(((data[2]===data[8]&&data[8])||(data[3]===data[4]&&data[4]))&&(!data[5]))randomIndex=5;
    if(((data[0]===data[3]&&data[3])||(data[2]===data[4]&&data[4])||(data[7]===data[8]&&data[8]))&&(!data[6]))randomIndex=6;
    if(((data[1]===data[4]&&data[4])||(data[6]===data[8]&&data[8]))&&(!data[7]))randomIndex=7;
    if(((data[0]===data[4]&&data[4])||(data[2]===data[5]&&data[5])||(data[6]===data[7]&&data[7]))&&(!data[8]))randomIndex=8;

    if(((data[1]===data[2]&&data[2]===rdata[0][1])||(data[3]===data[6]&&data[6]===rdata[0][1])||(data[4]===data[8]&&data[8]===rdata[0][1]))&&(!data[0]))randomIndex=0;
    if(((data[0]===data[2]&&data[2]===rdata[0][1])||(data[4]===data[7]&&data[7]===rdata[0][1]))&&(!data[1]))randomIndex=1;
    if(((data[0]===data[1]&&data[1]===rdata[0][1])||(data[4]===data[6]&&data[6]===rdata[0][1])||(data[5]===data[8]&&data[8]===rdata[0][1]))&&(!data[2]))randomIndex=2;
    if(((data[0]===data[6]&&data[6]===rdata[0][1])||(data[4]===data[5]&&data[5]===rdata[0][1]))&&(!data[3]))randomIndex=3;
    if(((data[0]===data[8]&&data[8]===rdata[0][1])||(data[1]===data[7]&&data[7]===rdata[0][1])||(data[2]===data[6]&&data[6]===rdata[0][1])||(data[3]===data[5]&&data[5]))&&(!data[4]))randomIndex=4;
    if(((data[2]===data[8]&&data[8]===rdata[0][1])||(data[3]===data[4]&&data[4]===rdata[0][1]))&&(!data[5]))randomIndex=5;
    if(((data[0]===data[3]&&data[3]===rdata[0][1])||(data[2]===data[4]&&data[4]===rdata[0][1])||(data[7]===data[8]&&data[8]===rdata[0][1]))&&(!data[6]))randomIndex=6;
    if(((data[1]===data[4]&&data[4]===rdata[0][1])||(data[6]===data[8]&&data[8]===rdata[0][1]))&&(!data[7]))randomIndex=7;
    if(((data[0]===data[4]&&data[4]===rdata[0][1])||(data[2]===data[5]&&data[5]===rdata[0][1])||(data[6]===data[7]&&data[7]===rdata[0][1]))&&(!data[8]))randomIndex=8;
    return randomIndex;
}