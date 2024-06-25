//-----task-1-----
//-----task-2-----
//-----task-3-----
//-----task-4-----
class car {
    make  ;
    model ;
    constructor(make,model){
        this.make = make;
        this.model = model;
    }
    started(){
        console.log("the car has started");
    }
}
var car1=new car;

car1.make="bmw";
car1.model=2000;

console.log(car1.make,car1.model);
car1.started();

var car2=new car ("mersedis",2005);

console.log (car2.make,car2.model);

//-----task-5-----
class Private {

    #balance = 0;
    
    deposit(x) {
        this.#balance = this.#balance + x;
        return this.#balance;
    }
    
    withdraw(x) {
        this.#balance = this.#balance - x;
        return this.#balance;
    }
    
    print() {
        console.log(this.#balance);
    }
}

var ahmad = new Private;

ahmad.deposit(100)

ahmad.deposit(50)

ahmad.withdraw(30)

ahmad.print()


