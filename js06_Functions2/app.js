

//* Stack - Ram bellek   Stack basma push- "LIFO" <LEST INPUT FIRST OUTPUT>  SON GIREN ILK CIKAR
//* Heap area
//* code- and data


//* FUNCTION methods function declaration  function expression -- arrow fonksiyonu


//* arrow 

console.log("***Arrow Function ***")


//? Eksempel 1

// const calculateAge = ( year) => new Date().getFullYear() - year
// console.log(`AGe:${calculateAge(1990)}`)

//? Eksempel 2  

//* volume = Pi x r x r x h

// const h= Number (prompt("h:"))
// const r= Number (prompt("r:"))


// const volume= (r, h) => Math.PI * r * r * h


// console.log("Volume:" , volume(r, h).toFixed(2))
// console.log("Volume:" , volume(r, h).toPrecision(5)) // * kac basamakli istersek


//* Eksempel 3  Calculator  birdern fazla durumlarda switch case durumu 
const add= (n1, n2)  => n1+ n2
const sub= (n1, n2)  => n1 - n2
const mul= (n1, n2)  => n1 * n2
const div= (n1, n2)  => n1 / n2


const compute = (n1, n2, operator) => {
let result = 0
    switch (operator) {
        case "+":
       // result = n1 + n2
        result = add(n1, n2)
            
            break;
        case "-":
             result = sub( n1, n2 )
            break;
        case "x":
        case "*":
             result = mul( n1, n2 )
            break;
        case "/":
             result = div( n1, n2 )
            break;
    
        default:

        alert("Incorrect Operator")
            break;
    }

    return result =""

}


// const n1 = + prompt("First Number:")
// const n2 = + prompt("Second Number:")
// const operator= prompt("Operator:")

// console.log (`${n1} ${operator} ${n2} = ${compute(n1,n2, operator)}`)


//? Fibonaci oz yenileme  faktoriel  oz yinemeli fonksiyonlar 



//* Eksempel 4 Fakto (5)   iterasyon 


const fakto = (n) => {

   let f= 1
   for(let i=n; i>1; i--) {
 
    f= f * i


   }  return f


}

const number = +prompt ("n")

console.log(`Fakto(${number})= ${fakto(number)}`)