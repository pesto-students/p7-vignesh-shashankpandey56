const getNumber =()=>{
   const randNumber = parseInt(Math.random()*100,10)
   return randNumber

}

let num = getNumber()
function isDivisible(num){
    return  new myPromise((resolve,reject)=>{
        setTimeout(()=>{
            if(num%5 ===0){
                resolve(`${num} is divisible by 5`)
            }
            else{
                reject(`${num} is not divisble by 5`)
            }
        },2000)
    })
}
function myPromise(executor){
    let onReject;
    let onResolve;
    this.then=(fn)=>{
        onResolve = fn
        return this
    }
    this.catch=(fn)=>{
        onReject = fn
        return this
    }
    function resolve(val){
        onResolve(val)
    }
    function reject(val){
        onReject(val)
    }
    executor(resolve,reject)


}
isDivisible(num).then((x)=>{
    console.log(x)
})
.catch((err)=>{
    console.log(err)
})
