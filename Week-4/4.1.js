const getNumber =()=>{
    return new Promise ((resolve,reject)=>{
    const randNumber = parseInt(Math.random()*100,10)
    setTimeout(()=>{
        if(randNumber%5 ===0) reject(`a promise is rejected ${randNumber}`)
        else resolve(`promise is resolved :${randNumber}`)
    },randNumber*100)
});
}
const p = getNumber()
p.then((x)=>console.log(x)).catch((err)=>console.log(err))