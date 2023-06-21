
var car1 ={
    //1.property:value(many)
    brand:"hundai",
    year:2022,
    model:"verna",
    color:"white",
    type:"sedan",
    price:"300000",
    engine:"petrol",

    //2. Function/method (many)
    getFullDetail(){

        //Every function return something
        return this.brand +" "+ this.year +" "+ this.model +" "+ this.color +" "+ this.type +" "+ this.price +" "+ this.engine;
    }

}
const car2 ={
    //1.property:value(many)
    brand:"Mahindra",
    year:2023,
    model:"Thar",
    color:"black",
    type:"sedan",
    price:"400000",
    engine:"petrol/diesel",

    //2. Method (many)
    getDetail(){
        //every function return something
        return this.brand + this.year + this.model + this.color + this.type + this.price;
    }
}
let car3 ={
    //1.property:value(many)
    brand:"tata",
    year:2021,
    model:"venue",
    color:"white",
    type:"SUV",
    price:"500000",
    engine:"petrol",

    //3. Method (many)
    getDetails(){
        return this.brand + this.year + this.model
    }
}
console.log(car1.getFullDetail());
console.log(car2.getDetail());
console.log(car3.getDetails());

