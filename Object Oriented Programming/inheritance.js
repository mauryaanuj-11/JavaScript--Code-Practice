class createUser{
    constructor(name){
        this.name=name;
    }

    isAvailable(){
        console.log(`Your name is : ${this.name}`);
    }
}

class teacher extends createUser{
    constructor(name,mail,password){
        super(name);                     //The super keyword refers to superclass (parent) objects
        this.mail=mail;
        this.password=password;
    }
    printMe(){
        console.log(`Your mail id is : ${this.email}`);
    }
}

const newUser=new teacher("Shivam","chai@gmail.com", "32302");
newUser.isAvailable()
const newUserTwo=new teacher("Kaleen","chai@gmail.com", "32302");
newUserTwo.isAvailable();

console.log(newUser===newUserTwo)
console.log(newUserTwo instanceof teacher)
console.log(newUserTwo instanceof createUser)