const checkWin = (data) => {
const winningCombinations = [
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],
    [2,4,6],[2,5,8],[3,4,5],[6,7,8],
];
for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (data[a]&&data[a]===data[b]&&data[a]===data[c]) {
            if(a===0&&b===1)return 1;
            if(a===3&&b===4)return 2;
            if(a===6&&b===7)return 3;
            if(a===0&&b===3)return 4;
            if(a===1&&b===4)return 5;
            if(a===2&&b===5)return 6;
            if(a===0&&b===4)return 7;
            if(a===2&&b===4)return 8;
    }
}
return 0;
};
export default checkWin;