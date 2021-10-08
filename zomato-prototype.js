function Dish(name = "NA", price = 0, quantity = 1){
    this.name = name,
    this.price = price,
    this.quantity = quantity,
    this.show = function(){
        console.log(this.name+"is priced at \u20b9"+this.price);
        console.log("Quantity: "+this.quantity);
        console.log("Price: "+this.quantity*this.price);
    },
    this.increment = function(){
        this.quantity++;
        Dish.prototype.totalDishes++;
        Dish.prototype.totalPrice += this.price;
    },
    this.decrement = function(){
        this.quantity--;
        Dish.prototype.totalDishes--;
        Dish.prototype.totalPrice -= this.price;
    }
}
Dish.prototype.totalDishes = 0
Dish.prototype.totalPrice = 0
Dish.prototype.restaurant = "Briyani By Kilo"

Dish.prototype.show = function() {
    console.log(Dish.prototype.totalDishes);
}
 d1 = new Dish(name= "veg Briyani", price= 200)
 Dish.prototype.totalDishes++;
 Dish.prototype.totalPrice += d1.price;
 d2 = new Dish(name= "Hyderabadi Briyani", price=350)
 Dish.prototype.totalDishes++;
 Dish.prototype.totalPrice += d2.price;

 d1.increment()
 d1.increment()
 d2.increment()
 d1.show();
 d2.show();
 Dish.prototype.show();

