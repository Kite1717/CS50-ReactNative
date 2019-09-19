
//user class constructor
function User()
{
    console.log("in user class right now")
    //Defining memory and speed loss for each instance
    //this will be generated for each instance, which causes memory loss
    this.getFullName = function(name , surname)
    {
       return(typeof name === "string" && typeof surname === 'string')  ? "Hi : " + name +" " + surname : "error";
    }

}

const user1 = new User();
console.log(user1.getFullName("mustafa fırat" , "yılmaz") + "\n")

const user2 = new User();
console.log(user2.getFullName("post","malone"))

console.log(new User().getFullName(true,"2") + "\n\n")

//-----//


//Prototype Inheritance
function Bear(type)
{
    this.type = type;
console.log(type);
} 
//Class proterty
Bear.growl = function()
{
    console.log("gırr")
}

//each instance using property
Bear.prototype.growl = function()
{
    console.log("Name : " + this.type + " gırr")
}

const grizzly = new Bear("grizzly");
const polar = new Bear('polar');
//bear {}   bear{}
console.log(grizzly, polar)

console.log(grizzly.type,polar.type)
//Only class using
console.log(Bear.growl())

//error
//console.log(grizzly.growl())

console.log(grizzly.growl(),polar.growl())

//Inheritance
const Kodiak = function(){
Bear.call(this)
}
Kodiak.prototype = Object.create(Bear.prototype)
console.log(new Kodiak())

Kodiak.prototype.growl = function()
{
    console.log("override")
}
console.log(new Kodiak().growl())
console.log(new Bear().growl())


const x = 42;
console.log(x.__proto__)
console.log(x instanceof Number)
console.log(typeof x === 'number')

//boxing
const y = new Number(42);
console.log(y instanceof Number)

//unboxing
const z = y.valueOf();
console.log(z);


//42
console.log(z.toString());

//affect all samples to change the tostring method
Number.prototype.toString = function(){return "120"}
//120
console.log(z.toString())

const num2 = 99;
//120
console.log(num2.toString())
