console.log ('*** Strings *** ');

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

// //* lastIndexOf  sondan baslayarak arama yapar

// let str = "Hello John , Welcome to Clarusway"

// console.log(str.lastIndexOf("o")) //* 22

// * search methods  - regular expression

// let str1 = ' You do not know what do not know until you know'

// console.log(str1.search("know")) // 12
// console.log(str1.search(/know/)) // 12 with regular expression

// let str2 ='hello World'

// const arama= /[A-Z]/

// console.log(str2.search(arama))  //* 6 siradaki ilk buyuk harfi getirdi

// //* Replace()   methods - degistirme methods

// let str3= 'Mr Brown has a brown house and a brown car'

// let newstr3 = str3.replace("brown", "red") //* brown u bul ve red ile degistir

// let newstr4= str3.replace(/brown/i, "red") // * case sensetive ignore eder.
// let newstr5= str3.replace(/brown/ig, "red") // *  ne kadar varsa degistirir.  tum brownlari red yaptik

//* i casesensetive g tumu degistirir replace de

// console.log(newstr3)
// console.log(newstr4)
// console.log(newstr5)

//* Replace all

// let str = 'Mr Brown has a brown house and a brown car';

// console.log (str.replaceAll ('Brown', 'red')); //* sorguya uyan tum sonuclari degistirri.


//* Split () methods  tek bir array halinde donduruyor  Stringi arraye cevirirz

// let str = 'Welcome to: Full Stack'

// console.log(str.split())  //* [" Welcome to : Full Stack"]  no seperator

// console.log(str.split(' '))
// console.log(str.split( ': '))

// let arr = str.split( ' ')

// console.log(arr)

//* toUpperCase & tolowerCase  buyuk harf kucuk harf

// let str1= ' Welcome to Full Stack'

// console.log(str1.toLowerCase())
// console.log(str1.toUpperCase())


//*Trim methods  bosluk alma  promt alirken kullanilabilir. bosluklari temizler

// let str= "   Welcome to Full Stack   "
// console.log(str)
// console.log(str.trim())
// console.log(str.trimStart())
// console.log(str.trimEnd())

//* StartsWith & endWith  boolean true or false

let str = 'clarusway@Clarusway.com is our e-mail address'

console.log(str.startsWith('clarusway')) //* True
console.log(str.startsWith('Clarusway')) //* False
console.log(str.startsWith('Clarusway',10)) //* true