function createIncrement(){
    let count =0;
    function increment(){
        count++;
    }
    let message = `Count is ${count}`;
    console.log(count)
    
    function log(){
        
        console.log(message)
    }
    return [increment,log]
}

const [increment,log] = createIncrement()

increment();
increment();
increment();
log();

/* 
first time when we run create Increment function on line number 16 the message property has set and it has taken value of
 count from their local scope which is defined on line number 2 and this function returns two function increment and log.
 Now we are calling increment fucntion 3 times and the value of count is increasing by one so count value actually is not 4
 present in the local scope of increment function then it will go to the parent scope which is scope of createIncrement 
 function and increment function will update that value and 1 and when we call that function 3 time count value increased by 3.
 When we call log function which is logging message variable only which is set at the time of createIncrement function call at that
 count value was 0 so it is showing Count is 0. 

*/