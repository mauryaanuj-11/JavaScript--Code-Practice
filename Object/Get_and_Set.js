// ********************** Mostly used in Industry **********************
class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get password(){
        return `${this._password.toUpperCase()}`;
    }
    set password(val){
        this._password=val;
    }

}

const userOne=new User("chai@code.ai","xyz@123");
console.log(userOne.password);      // XYZ@123
console.log(userOne._password);     // xyz@123

// ********************** Previously Used (define-Object)  **********************
function creatUser(email,password){
    this._password=password;
    this._email=email;

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(getMail){
            this._email=getMail;
        }
    })

    Object.defineProperty(this,'password',{
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(getMail){
            this._password=getMail;
        }
    })

}

const newUser=new creatUser("chai@gmail.com","abc123")
console.log(newUser.email)          //CHAI@GMAIL.COM
console.log(newUser._email)         //chai@gmail.com

const newUserTwo=new creatUser("chai@gmail.com","abc123")
console.log(newUser.password)       //ABC123
console.log(newUser._password)      //abc123

// ********************** Rearly seen **********************

const newObj={
    _email: "mauryaanuj@gamil.com",
    _password: "maurya@1234",

    set password(val){
        this._password=val;
    },
    get password(){
        return this._password.toUpperCase();
    }
}

const newuser =Object.create(newObj)       // null If we not pass the new Object
console.log(newuser.password)