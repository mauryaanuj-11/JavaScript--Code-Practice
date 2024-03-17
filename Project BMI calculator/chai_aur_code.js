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




