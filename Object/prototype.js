const myArr=["Thor","Captain America"];

const myObj={
    thor: "hammer",
    spiderman: "sling",
    greeting: function(){
        console.log(`Powe of Thor : ${this.thor}`);
    }
}

Object.prototype.hitesh=function(){
    console.log("We are in under the object prototype");
}

Array.prototype.sayHitesh=function(){
    console.log(`We are in under the array prototype`);
}
// myObj.hitesh();
// myArr.hitesh();

// myArr.sayHitesh();
// myObj.sayHitesh();

const str="chai       ";
String.prototype.trueLength=function(){
    console.log(this);
    console.log(`Your string length is : ${this.trim().length}`);
}

str.trueLength();
"hitesh  ".trueLength();
"Anuj Maurya".trueLength();