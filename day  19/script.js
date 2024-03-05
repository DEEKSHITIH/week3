// Code for the bank account
class bankaccount{

     constructor(accno,balance){
        this._accno=accno;
        this._balance=balance;
     }

     deposite(cash){
        console.log("im depsoiting");
    
    }

    withdraw(cash){
        console.log("im withdrawing");
    }

    get balance(){
        return this._balance;
    }
};

class saving extends  bankaccount{
    constructor(accno,balance,intrestrate){
        super(accno,balance)
        this._intrestrate = intrestrate;
    }

    
    get intrestrate(){
        return this._intrestrate;
    }
      }

 const savings = new saving(12334455666,1000000,1.7);
       savings.deposite(1000);
      savings.withdraw(500);
     
      console.log(`total balance arte ${savings.balance} 
      
      with this intrest rate ${savings.intrestrate}`);
      