

//* Stack - Ram bellek   Stack basma push- "LIFO" <LEST INPUT FIRST OUTPUT>  SON GIREN ILK CIKAR
//* Heap area
//* code- and data


//* FUNCTION methods function declaration  function expression -- arrow fonksiyonu


//* arrow 

console.log("***Arrow Function ***")


//? Eksempel 1

const calculateAge = ( year) => new Date().getFullYear() - year
console.log(`AGe:${calculateAge(1990)}`)

//? Eksempel 2  

//* volume = Pi x r x r x h

const h= Number (prompt("h:"))
const r= Number (prompt("r:"))


const volume= (radius, height) => Math.PI * radius * r * height


console.log("Volume:" , volume(r, h))
