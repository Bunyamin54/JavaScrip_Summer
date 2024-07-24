

 console.log("***** Lopps*****")

 //* For loops  adetli durumlarda

// for (let i = 1; i <=99; i++) {

//     console.log(`${i}- FS-14`)
// }


// for( let i =1 ; i<= 10; i++) {

//     console.log("Selam")
// }

// const n = prompt("Enter your number")

// let sum = 0  //* global degisken

// for (let i = 1 ; i<= n ; i++) {


//     //! lokal degisken
//     // sum = sum + 1
//     sum += i //* kisa hali
//     console.log(sum)
// }

// console.log(`SUM: ${sum}`)


// const number= prompt ("How many numbers")

// //? Math.random( =>  0- 1 rastgele sayi uretir)



// for (let sayac =1 ; sayac <= number; sayac++) {


//     const rasgeleSayi =Math.round(Math.random () * 100)
//     console.log(`${sayac}. sayiniz ${rasgeleSayi}`)
// }

//* While Loops  - karmasik kompleks durumlarda 


//     let i = 1
//     while (i < 10) {
//     console.log(i)
//     i++
//  }

//  console.log("BYE")

 let not = prompt ("Lutfen 0-100 arasinda bir not giriniz§")

 if ( not < 0 || not > 100) {
    console.log("Not 0 dan kucuk veya 100 den buyuk olamaz")
 }