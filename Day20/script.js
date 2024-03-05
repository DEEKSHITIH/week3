//getter and settter
class user{
    constructor(name){
        this._name=name;
}
get name(){
    return this._name;

}
  set name(another)
  {
    this._name=another;
  }
}

let user1=new user("BHAVANI");
console.log(user1.name);
user1.name="DEEKSHITH";
console.log(user1.name);