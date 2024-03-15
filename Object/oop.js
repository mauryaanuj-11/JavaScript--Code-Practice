const User=function(username,branch,rollno){
    this.username=username;
    this.branch=branch;
    this.rollno=rollno;
    this.greeting=function(){
        console.log(`your name is , ${username}`)
    }
}

const userOne=new User("Anuj", "IT", 423413434);
const userTwo=new User("Aaditya", "IT", 9098908);
console.log(userOne.constructor);
