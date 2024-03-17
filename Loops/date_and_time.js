let user={
    username: "hitesh",
    price:999,
    welcomemessage: function(){
        // console.log(`Hey!, ${this.username}`)
        // console.log(this)
    }
}

// user.welcomemessage()
// user.username="Shivam"
// user.welcomemessage()

// +++++++++++++++++++++++++++++ Explict Way +++++++++++++++++++++++++++++++

let chai=(num1,num2)=>{
    const customerName= "Hitesh Chaudhari"
    console.log(customerName)
    console.log(num1+num2)
}
// chai(12,34)

// ++++++++++++++++++++++++++++ Implict Way +++++++++++++++++++++++++++++++++

let value=()=> ({userName: "anuj"})
value()
console.log(value())

