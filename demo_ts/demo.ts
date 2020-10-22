class User {
    name: String;
    address: String;
    email: String;

    constructor(name:String,address:String,email:String) {
        this.name = name;
        this.address = address;
        this.email = email;
    }

    getInfor(): string {
       return  this.name + this.address + this.emai;

    }
}