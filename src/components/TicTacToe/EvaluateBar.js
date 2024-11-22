export const evaluatebar=(i,j,seti,setj,count,data,rdata,arr)=>{
    if(count===1)seti(0);
    if(count===2){
        if((data[0]||data[2]||data[6]||data[8])&&!data[4]){seti(1);setj(5);}
        else seti(0);
    }
    else if(count===3){
        let t1=arr[0],t2=arr[2];
        if(t1>t2)[t1,t2]=[t2,t1];
        if((t1===1&&t2===7)||(t1===3&&t2===5)){seti(2);setj(5);}
        else if(((t1===0&&t2===2)||(t1===0&&t2===6)||(t1===2&&t2===8)||(t1===6&&t2===8))&&arr[1]!==4){}
        else seti(0);
    }
    else if(count===4){
        if(data[0]===data[8]&&rdata[0][1]===data[8]&&(data[4]&&(data[2]||data[6]))){seti(1);setj(3);}
        else if(data[2]===data[6]&&rdata[0][1]===data[6]&&(data[4]&&(data[0]||data[8]))){seti(1);setj(3);}
        if(arr[0]===4){
            if(arr[1]===0&&arr[2]===1&&arr[3]===7)seti(0);if(arr[1]===0&&arr[2]===3&&arr[3]===5)seti(0);
            if(arr[1]===2&&arr[2]===1&&arr[3]===7)seti(0);if(arr[1]===2&&arr[2]===5&&arr[3]===3)seti(0);
            if(arr[1]===6&&arr[2]===3&&arr[3]===5)seti(0);if(arr[1]===6&&arr[2]===7&&arr[3]===1)seti(0);
            if(arr[1]===8&&arr[2]===5&&arr[3]===3)seti(0);if(arr[1]===8&&arr[2]===7&&arr[3]===1)seti(0);
        }
    }
    if(count===5){
        if(arr[0]===4&&arr[1]===0&&arr[2]===1&&arr[3]===7&&arr[4]===2)seti(2);
        if(arr[0]===4&&arr[1]===0&&arr[2]===3&&arr[3]===5&&arr[4]===6)seti(2);
        if(arr[0]===4&&arr[1]===2&&arr[2]===1&&arr[3]===7&&arr[4]===0)seti(2);
        if(arr[0]===4&&arr[1]===2&&arr[2]===5&&arr[3]===3&&arr[4]===8)seti(2);
        if(arr[0]===4&&arr[1]===6&&arr[2]===3&&arr[3]===5&&arr[4]===0)seti(2);
        if(arr[0]===4&&arr[1]===6&&arr[2]===7&&arr[3]===1&&arr[4]===8)seti(2);
        if(arr[0]===4&&arr[1]===8&&arr[2]===5&&arr[3]===3&&arr[4]===2)seti(2);
        if(arr[0]===4&&arr[1]===8&&arr[2]===7&&arr[3]===1&&arr[4]===6)seti(2);
        setj(3);
    }
    if(i===1&&j-1)setj(j-1);
    if(i===2&&j-1)setj(j-1);
}