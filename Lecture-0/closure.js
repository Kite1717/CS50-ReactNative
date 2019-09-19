function makeFunctionArray ()
{
    const arr = []

    //var change let and show difference
    for(var i = 0; i < 5 ; i++)
    {
        arr.push(function(){console.log(i)})
    }
    return arr
}

const arr = makeFunctionArray()
console.log(arr)
arr[0]()
arr[1]()