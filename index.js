// code your solution here
function superbowlWin(records){
    //use find() to see if theres a record with "W"in result
    const win = records.find(record =>record.result === "W") 
    if (win){
        return win.year
    }
}

const records= [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
]
console.log(superbowlWin(records))