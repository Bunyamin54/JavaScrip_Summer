

 console.log("***** Lopps*****")

// for (let i = 1; i <=99; i++) {

//     console.log(`${i}- FS-14`)
// }


// for( let i =1 ; i<= 10; i++) {

//     console.log("Selam")
// }

const n = prompt("Enter your number")

let sum = 0  //* global degisken

for (let i = 1 ; i<= n ; i++) {


    //! lokal degisken
    // sum = sum + 1
    sum += i //* kisa hali
    console.log(sum)
}

console.log(`SUM: ${sum}`)