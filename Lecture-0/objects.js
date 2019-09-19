//3 ways to identify the object
// 1. way
const o = new Object()
o.firstName =  "Mustafa"
o.lastName = "Yilmaz"
o.isTeaching = false
o.greet = function()
{
    console.log("hi")
}

// 2 .way
//const o2 ={} // output undefined

//access to elements of the object
//setting process
o.firstName = 'fırat'
o['lastName'] = 'yilmaz'
const key = "isTeaching"
o[key] = true;

o['greet'] = function()
{
    console.log('hi')
}

//3.way and object in object
const o3 = {
    1 : "test",
    firstName : 'mustafa' ,
    lastName : 'yilmaz' ,
    isTeaching :  false ,
    
    greet : function(){
        console.log('hi')
    },
    address : {
        street : 'Main St.' ,
        number : 1234 ,

    },

}

//getting
console.log(o3.greet() + " " +
  o3.address.number + " " +
   o3.isTeaching + " " + 
   o3.address['street'])

//add new property in inner object

o3.address.v = "number"
//if we use it, it won't write something like this somewhere.
//etc.
console.log(o3.address.v);

o3.hasCar = false;
console.log(o3.hasCar)

console.log(o3['1'])
//it has not seventh property undefined
console.log(o3[7])

//gives an undefined inside assignment
const kkey = 8779794
console.log(o3.kkey)

//assignment made
o3.kkey = kkey
console.log(o3.kkey)




