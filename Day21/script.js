class contact{
    constructor(name,email,phone){
        this._name=name;
        this._email=email;
        this._phone=phone;
    }
    
     addcontact(){
        console.log(`${this._name} contact  is added`);
    }

    viewcontact(){
        console.log(`Name: ${this._name} Email: ${this._email} Phone: ${this._phone}`);
    }
    
    searchconatct(){
        console.log(`searching contact :Name: ${this._name} Email: ${this._email} Phone: ${this._phone}`);
    }


}

const contact1 = new contact("bhavani","bhavvi@.com",1234567890);
const contact2 = new contact("sunny","sunny@.com",9999999999);
contact1.addcontact();
contact2.addcontact();
contact1.viewcontact();
contact2.viewcontact();
console.log("searching contact:");
contact2.searchconatct();