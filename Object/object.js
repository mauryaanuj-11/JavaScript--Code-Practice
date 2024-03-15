function testObj(num){
    return num*10;
}
testObj.power=7;
console.log(testObj(5));
console.log(testObj.power);
console.log(testObj.prototype);


function createUser(user,price){
    this.user=user;
    this.price=price;
}

createUser.prototype.increment=function(){
    this.price++;
}

createUser.prototype.printMe=function(){
    console.log(`Name: ${this.user}\n price: ${this.price}`)
}

const userone=new createUser("Anuj", 500);
console.log(userone.printMe());

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/