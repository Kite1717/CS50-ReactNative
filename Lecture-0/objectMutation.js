const o = {
    a : 'a',
    b : 'b',
}
const o2 = o;

//same results
// but same referance
o.a = 'new value'
console.log(o2.a)

//o2.a = 'new value'
//console.log(o.a)

const obj1 = {
    a : 'a' ,
    b : 'b',
    obj : {
        key : 'key',
    }
}
//now have the same values ​​but have different references
const obj2 = Object.assign({},obj1)

obj2.obj.key = 'new value'
console.log(obj1.obj.key)
//the value will also be changed because when copying it assigns the object as a normal value, 
//regardless of whether the object is in it, so the reference to the object inside is copied

//we need deep copy

const m1 = {
    a : 'a' ,
    b : 'b',
    obj : {
        key : 'key',
        
        obj2 : {
            h :'h' ,
        },
    },
}


 function deepCopy(obj) {
   
    //check if vals are objects
    //if so , copy that object (deep copy)
    //els return the value
    const keys = Object.keys(obj)
    const newObject = {}
    for(let i = 0 ; i < keys.length ;i++)
    
        if(typeof obj[keys[i]] === 'object')
        newObject[keys[i]] = deepCopy(obj[keys[i]])
        
        else newObject[keys[i]] = obj[keys[i]]
       
    
    return newObject
   
}
const m2 = deepCopy(m1)

m1.obj.obj2.h = false

console.log(m2.obj.obj2.h)

const arr = [];
console.log(arr)

arr.push("value")
console.log(arr)

const str ="string"

//str.toUpperCase() --> ineffective cause not static method


//an assignment or use is required
const upper = str.toUpperCase()
console.log(str.toUpperCase())
console.log(upper)

const array = [1.2,'mustafa',3 ,false , [1,234,5]]

array.shift()
console.log(array)

//error
//console.log(2.toString())

console.log((2).toString())



