const dict={}
function memoize(){
    return function(...args){
        const key = args.sort().join(' ')
        if (Object.hasOwnProperty(dict,key)){
            return dict[key]
        }
        else{
            dict[key]= add(...args)
            return dict[key]
        }
    }

}
function add(){
    let arr = [...arguments]
    console.log(arr)
    return arr.reduce((acc,curr)=>acc+= curr,0);
}


const memoizeAdd = memoize(add)
console.log(memoizeAdd(100,100,200))
console.log(memoizeAdd(100,200,100))
console.log(memoizeAdd(10,200))
console.log(memoizeAdd(10,200))
