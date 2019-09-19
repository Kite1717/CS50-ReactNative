const firstName = "Mustafa Firat";
const lastName = "Yilmaz";

const val = 42;

const arr = [
	'string',
	42,
	function() { console.log('hi')},
]

//arrray declaration
arr[2]()

for(let i = 0; i < arr.length ; i++){
	console.log(arr[i]);
}

//explicit vs implicit
const x = 12;
const explicit = String(x);
const implicit = x + "";