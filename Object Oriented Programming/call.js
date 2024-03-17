function User(name){
    this.name=name;
    console.log("called");
}

function createUser(name,email,password){
    User.call(this,name);
    this.email=email;
    this.password=password;
}

const newUser=new createUser("Anuj Maurya", "chai@gmail.com",4346);
console .log(newUser);