

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

//  let not = prompt ("Lutfen 0-100 arasinda bir not giriniz!")

//  if ( not < 0 || not > 100) {
//     console.log("Not 0 dan kucuk veya 100 den buyuk olamaz")
//  }
//  while ( not < 0 || not > 100) {
//     console.log("Not 0 dan kucuk veya 100 den buyuk olamaz")
//     not = prompt ("Lutfen 0-100 arasinda bir not giriniz!")
//  }

//  console.log("Notunuz:", not)


 //* Do - while
 
  let not

 do {  not = prompt ("Lutfen 0-100 arasinda bir not giriniz!")

    if ( not < 0 || not > 100)
        alert ("Not 0 dan kucuk veya 100 den buyuk olamaz")
 }while (not < 0 || not > 100)

    console.log("Notunuz:", not)


    // * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******")

let i = 1
while (i <= 10) {
  console.log(i)
  i++
}
console.log("BYE")

//? Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

// if (not1 < 0 || not1 > 100) {
//   console.log("Not 0'dan küçük veya 100'den büyük olamaz")
// }

//! --------- WHILE -----------
let not1 = prompt("Lütfen 0-100 arasinda bir not giriniz:")

while (not1 < 0 || not1 > 100) {
  console.log("Not 0'dan küçük veya 100'den büyük olamaz")
  not1 = prompt("Lütfen 0-100 arasinda bir not giriniz:")
}
console.log("Notunuz:", not1)

//! ------  DO - WHILE -------
let not2
do {
  not2 = prompt("Lütfen 0-100 arasinda bir not giriniz:")
  // if (not < 0 || not > 100) {
  //   alert("Not 0'dan küçük veya 100'den büyük olamaz")
  // }
} while (not2 < 0 || not2 > 100)
console.log("Notunuz:", not2)

//! ------  FOR -------
let not3 = prompt("Lütfen 0-100 arasinda bir not giriniz:")
for (; not3 < 0 || not3 > 100; ) {
  alert("Not 0'dan küçük veya 100'den büyük olamaz")
  not = prompt("Lütfen 0-100 arasinda bir not giriniz:")
}
console.log("Notunuz:", not3)
