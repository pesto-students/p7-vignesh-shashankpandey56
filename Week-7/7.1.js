"use strict"
const readline = require("readline")
var rl = readline.createInterface(
    process.stdin, process.stdout);
rl.question('enter your numbers',(nums)=>{
    let arr = nums.split(",")
    let newArr =[]
    for(let ele of arr){
        newArr.push(Number(ele))
    }
    console.log(contiguousMaxSubarray(newArr))
})
const contiguousMaxSubarray = (arr)=>{
    let maxCurr = arr[0]
    let maxSum = arr[0]
    let maxArr =[arr[0]]
    for(let i =1; i<arr.length;i++){
        maxCurr = Math.max(arr[i],maxCurr+arr[i])
        if(maxCurr>maxSum){
            maxSum = maxCurr
        }
    }
    return maxSum
}

