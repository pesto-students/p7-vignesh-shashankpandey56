// function createStack(){
//     return {
//         items:[],
//         push(item){
//             this.items.push(item)
//         },
//         pop(){
//             return this.items.pop();
//         }
//     };
// }

// const stack = createStack()
// stack.push(10)
// stack.push(5)
// stack.pop()
// stack.items =[10,100,1000]
// console.log(stack)

// refactored code
function createStack(){
    const items =[];
    return {
        push(item){
            items.push(item)
        },
        pop(){
            return items.pop();
        }
    };
}

const stack = createStack()
stack.push(10)
stack.push(5)
console.log(stack.pop())
console.log(stack.items)
console.log(stack)
