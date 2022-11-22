var person ={
    firstName:'shashank',
    lastName:'pandey',
    display:function(){
        return  `My name is ${this.firstName} ${this.lastName}`
    }
}
var loveCoding = function(firstInterest,secondInterest){
    console.log(`${this.display()} and i love ${firstInterest} and ${secondInterest} `)
}

var personDetails = loveCoding.bind(person)

personDetails('coding','fullstackdevelopment') // My name is shashank pandey and i love coding and full stack development
loveCoding.call(person,'eating','travelling') //My name is shashank pandey and i love eating and travelling
loveCoding.apply(person,['cricket','movies'])// My name is shashank pandey and i love cricket and movies