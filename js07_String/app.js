console.log("*** Strings *** ")


// let str1 = " This is a string"

// console.log(typeof str1)

// let str2 = "Clarusway"

// console.log(str2.length)

// const str = " Hello World"


// console.log(str[6])


// for ( let i= 0 ; i < str.length; i++) {

//      console.log(str[i])

// }

//* tersten itereasyon

// for ( let i = str.length -1 ; i>=0; i--) {


//     console.log(str[i])
// }

//* Strings immutable manupule edilemez

 //? Escape sequences

//  let str1 = 'I\'m a string'

//  alert(' 1- ders \n 2- kayit \n3- pre-class ')  alt alta dizer

//* Strings methods

//* slice()  yon soldan aga   2. karakter optionaldir.

// const str5 = "Orange"

// console.log(str5.slice(0,4))
// console.log(str5.slice(-4))
// console.log(str5.length)
// console.log(str5.slice(-5, -3))


//* Substring  siralamayi takip eder.

// const str2= "Orange"   

// console.log(str2.substring(4, 0))
// console.log(str2.substring(0, 4))
// console.log(str2.substring(str2.length -4)) //* son 4 karakteri getirir. 
// console.log(str2.substring(-4)) //* calismaz

// console.log(str2)


//* concat() methods

// let str1 = "Clarusway"
// let str2 = "Full"
// let str3 = "Stack"

// const result = str1.concat(" ", str2, " ", str3)

// console.log(result)

//* includes()

// let str = "Hello John , welcome to Clarusway."

// console.log(str.includes("welcome")) //* true
// console.log(str.includes("Welcome")) //* false

// let Ayse ="Akilli mi?"

// console.log(Ayse.includes("Akilli mi?")) //* true

// console.log(Ayse.includes('y', 2)) //* 3. indexten basladigi icin y harfini goremez

//? indexof methods

// let str4 = "Clarusway"

// console.log(str4.indexOf('a',3)) //*  3 arama baslangic numarasi 


//* eksempel

// let mail = prompt ('Email adresini giriniz:')

// console.log(mail.includes("@"))

// //* You don't know what you don't know until you know.

//* lastIndexOf  sondan baslayarak arama yapar

let str = "Hello John , Welcome to Clarusway" 

console.log(str.lastIndexOf("o")) //* 22 


// * search methods  - regular expression


let str1 = ' You do not know what do not know until you know'

console.log(str1.search("know")) // 12
console.log(str1.search(/know/)) // 12 with regular expression


let str2 ='hello World'

const arama= /[A-Z]/

console.log(str2.search(arama))  //* 6 siradaki ilk buyuk harfi getirdi