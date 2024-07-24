 
 // ********** Functions **********

 console.log(" *** Functions *** ")


  // ! Function turleri

 //* function declaration    
 //* function XPathExpression
 //* Arrow function


//*  camleCase yazmalyiz

//! Decalaration -  Fonksiyonun tanimlanmasi

// function yazdirMerhaba() {
    // alert("Merhaba FS-14")
//     console.log("Merhaba FS-14")
// }


// yazdirMerhaba() //*  invoke - veya call fonksiyonun cagrilmasi 


//? parametrik functions

// function yazdirParametre (message, name) {


//     console.log(message, name = "Cohort14")  //* Default paramtre
// }

// yazdirParametre("Hi", "FS-15" )
// yazdirParametre("Selam", "FS-16" )
// yazdirParametre("Chao", "FS-17" )
// yazdirParametre("Chao" )  //* undefined
// yazdirParametre("Hei" )  //* undefined
// yazdirParametre("Hello" )  //* default paramtre


//* fonksiyonun cok fazla parametre olmasi okunurlugu azaltir


//* ornek 


//* Calculate

// console.log(new Date()) //* sistem tarihi ve saatini verir 

// function calculate (name, yob){
    
    // const age = 2024 -yob
//     const age = new Date().getFullYear() - yob
//     console.log(`${name} is ${age} years old.`)
//     return age
// }

 

// calculate ("Ahmet",1990)
// calculate ("Bunyamin",1985)


//* ornek 2 */


// function add (num1, num2) {
//   return num1 + num2
// }


// const reult1= add(3,5)
// const reult2= add(5,9)

// console.log(reult1, reult2)

// * console girilen bir sayinin tek veya cift oldugunu hesaplayan ve sonucu ana       programa donduren kodu fonksiyonlar ile yazma


// function isEvenOrOdd(num) {

//     if(num%2 === 0) {
//        return "EVEN" 
//     }else {
//         return "ODD"
//     }

// return
// }


// const num = prompt ("Please enter a number")
// isEvenOrOdd(num1)

// console.log(`${num} is ${isEvenOrOdd(num)}`)


 //* Alternatigf   yontem

// function isEvenOrOdd(num1) {
//    let result 
//     if(num%2 === 0) {
//        return "EVEN" 
//     }else {
//         return "ODD"
//     }

// return result
// }


// const num1 = prompt ("Please enter a number")

// console.log(`${num1} is ${isEvenOrOdd(num1)}`)

//* Alternatif ternary

function isEvenOrOdd(num) {
   return num % 2 === 0 ? "EVEN" : "ODD"
}

const num = prompt ("Please enter a number")

console.log(`${num} is ${isEvenOrOdd(num)}`)