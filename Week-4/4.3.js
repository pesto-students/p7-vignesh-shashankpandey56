const Fib = {
    [Symbol.iterator](){
        let i =0
        let n =5
        let first=0,second = 0
        return {
            next(){
                if(i++ < n){
                    [first,second] = [second,first+second ? first+second :1]
                    return{value:first,done:false}
                }
                else{
                    return {done:true}
                }
            }
        }
    }
}




for(let num of Fib){
    console.log(num)
}
