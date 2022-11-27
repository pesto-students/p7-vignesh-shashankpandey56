const dict={}
function memoize(){
    return function(...args){
        const key = args.join(' ')
        if (Object.hasOwn(dict,key)){
            return dict[key]
        }
        else{
            sum =0
            args.forEach(ele=>{
                sum+=ele

            })
            dict[key]= sum
            return sum
        }
    }

}
function add(a,b){
    return a+b;
}

const memoizeAdd = memoize(add)
console.time()
console.log(memoizeAdd(100,100))
console.timeEnd()
console.time()
console.log(memoizeAdd(100,100))
console.timeEnd()
console.time()
console.log(memoizeAdd(10,200))
console.timeEnd()
console.time()
console.log(memoizeAdd(10,200))
console.timeEnd()
