const dict={}
function memoize(){
    return function(...args){
        const key = args.sort().join(' ')
        console.log(key)
        if (Object.hasOwnProperty(dict,key)){
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
console.log(memoizeAdd(100,100,200))
console.log(memoizeAdd(100,200,100))
console.log(memoizeAdd(10,200))
console.log(memoizeAdd(10,200))
