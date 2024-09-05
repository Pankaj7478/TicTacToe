export const bestMove = (data, move, arr, setarr) => {
    let bestmove = [];
    if (move === 0) bestmove = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    else if (move === 1) {
        if (data[0] || data[2] || data[6] || data[8]) bestmove = [4];
        if (data[4]) bestmove = [0, 2, 6, 8];
        if (data[1]) bestmove = [0, 2, 4, 7];
        if (data[3]) bestmove = [0, 4, 5, 6];
        if (data[5]) bestmove = [2, 3, 4, 8];
        if (data[7]) bestmove = [1, 4, 6, 8];
    }
    else if(move===2){
        if(arr[0]===0){
            if(arr[1]===1)bestmove=[3,4,6];if(arr[1]===2)bestmove=[3,6,8];
            if(arr[1]===3)bestmove=[1,2,4];if(arr[1]===4)bestmove=[1,2,3,5,6,7,8];
            if(arr[1]===5||arr[1]===7||arr[1]===8)bestmove=[2,6];if(arr[1]===6)bestmove=[1,2,8];
        }
        if(arr[0]===1){
            if(arr[1]===0)bestmove=[2,3,4,5,6,7,8];if(arr[1]===2)bestmove=[0,3,4,5,6,7,8];
            if(arr[1]===3||arr[1]===6)bestmove=[0];if(arr[1]===4)bestmove=[0,2,3,5,6,8];
            if(arr[1]===5||arr[1]===8)bestmove=[2];if(arr[1]===7)bestmove=[0,2,3,4,5,6,8];
        }
        if(arr[0]===2){
            if(arr[1]===0)bestmove=[5,6,8];if(arr[1]===1)bestmove=[4,5,8];
            if(arr[1]===3||arr[1]===6||arr[1]===7)bestmove=[0,8];if(arr[1]===4)bestmove=[0,1,3,5,6,7,8];
            if(arr[1]===5)bestmove=[0,1,4];if(arr[1]===8)bestmove=[0,1,6];
        }
        if(arr[0]===3){
            if(arr[1]===0)bestmove=[1,2,4,5,6,7,8];if(arr[1]===1||arr[1]===2)bestmove=[0];
            if(arr[1]===4)bestmove=[0,1,2,3,6,7,8];if(arr[1]===5)bestmove=[0,1,2,4,5,6,7,8];
            if(arr[1]===6)bestmove=[0,1,2,4,5,7,8];if(arr[1]===7||arr[1]===8)bestmove=[6];
        }
        if(arr[0]===4){
            if(arr[1]===0)bestmove=[1,2,3,5,6,7,8];if(arr[1]===1||arr[1]===3||arr[1]===5||arr[1]===7)bestmove=[0,2,6,8];
            if(arr[1]===2)bestmove=[0,1,3,5,6,7,8];if(arr[1]===6)bestmove=[0,1,2,3,5,7,8];if(arr[1]===8)bestmove=[0,1,2,3,5,6,7];
        }
        if(arr[0]===5){
            if(arr[1]===0||arr[1]===1)bestmove=[2];if(arr[1]===2)bestmove=[0,1,3,4,6,7,8];
            if(arr[1]===3)bestmove=[0,1,2,4,5,6,7,8];if(arr[1]===4)bestmove=[0,1,2,3,4,5,6,7,8];
            if(arr[1]===6||arr[1]===7)bestmove=[8];if(arr[1]===8)bestmove=[0,1,2,3,4,6,7,8];
        }
        if(arr[0]===6){
            if(arr[1]===0)bestmove=[2,7,8];if(arr[1]===1||arr[1]===2||arr[1]===5)bestmove=[0,8];
            if(arr[1]===3)bestmove=[4,7,8];if(arr[1]===4)bestmove=[1,2,3,5,6,7,8];
            if(arr[1]===7)bestmove=[0,3,4];if(arr[1]===8)bestmove=[0,2,3];
        }
        if(arr[0]===7){
            if(arr[1]===0||arr[1]===3)bestmove=[6];if(arr[1]===1)bestmove=[0,2,3,4,5,6,8];
            if(arr[1]===2||arr[1]===5)bestmove=[8];if(arr[1]===4)bestmove=[0,2,3,5,6,8];
            if(arr[1]===6)bestmove=[0,1,2,3,4,5,8];if(arr[1]===8)bestmove=[0,1,2,3,4,5,6];
        }
        if(arr[0]===8){
            if(arr[1]===0||arr[1]===1||arr[1]===3)bestmove=[2,6];if(arr[1]===2)bestmove=[0,6,7];
            if(arr[1]===4)bestmove=[0,1,2,3,5,6,7];if(arr[1]===5)bestmove=[4,6,7];
            if(arr[1]===6)bestmove=[0,2,5];if(arr[1]===7)bestmove=[2,4,5];
        }
    }
    
    return bestmove;
};
