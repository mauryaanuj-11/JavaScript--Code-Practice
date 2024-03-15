class User{
    constructor(name,email,password=834389401){
        this.name=name;
        this.email=email;
        this.password=password;
    }
    encrypted(){
        console.log(`Your password is : ${this.password}`);
    }
}

const userOne=new  User("Hitesh", "chai@gmail.com");
console.log(userOne.encrypted());
