class User{
    constructor(name, phone, email, address){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
    }
    show(){
        console.log(this.name+" "+this.phone+" "+this.email);
        console.log("Address: ");
        for(let address of this.address){
            address.show();
        }
    }
}
class Address{
    constructor(adrsLine, city, state, zipCode,label){
        this.adrsLine = adrsLine;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.label = label
    }
    show(){
        console.log(this.adrsLine+" "+this.city+" "+this.state+" "+this.zipCode+" "+this.label);
    }
}

const a1 = new Address(adrsLine="gurudev nager", city="ludhiana", state="punjab", zipCode=141001, label="work");
const a2 = new Address(adrsLine="naveen nagar", city="ludhiana", state="punjab", zipCode=141002, label= "home");
const addressArray = [a1, a2];
let u1 = new User(name="John", phone="1236548970", email="john@example.com", address=addressArray);
let u2 = new User(name="Jim", phone="1236548974", email="jim@example.com", address=addressArray);

u1.show();
u2.show();
