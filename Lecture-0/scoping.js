
const thisIsConst = 51;
//error
//thisIsConst++;
//console.log(thiIsConst)

let thisIsLet = 41;
thisIsLet++;
thisIsLet = 2;
thisIsLet--;
console.log(thisIsLet)

//let thisIsLet = 51 // error

//const = constant referance let = changeable referance
const obj = {}
//error
//obj = {}
//console.log(obj)

//has not error
// referance same 
obj.a = 'a';
console.log(obj.a)

const val = 12;
//const val = 15; error
console.log(val)

//not error
var thisIsVar = 51;
console.log(thisIsVar)
var thisIsVar = 52;
console.log(thisIsVar);

thisIsHoisted()
//thisIsNotHoisted() error
function thisIsHoisted()
{
    console.log('this is function declared at the bottom of a filled')
}

const thisIsNotHoisted = function thisIsNotHoisted()
{
    console.log('should this be hoisted?')
}

