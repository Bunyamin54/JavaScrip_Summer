

console.log("*** Conditions ***")

// const calismaSuresi = prompt("Calsima Suresi:")
// let maas = prompt("Maasinizi giriniz")

// if (calismaSuresi >= 10) {


//     maas=Math.round(maas *1.1)   //? math. round yuvarlar rakami
//     console.log(`Zamli maasiniz : ${maas}`)
// }else {
//     console.log("Uzgunuz maasiniza zam yapamiyoruz")
// }

// console.log("Gule  Gule")

// //? cok kosullu


// const grade = prompt ("Plase enter your grade:")


// let result = ""

// if (grade < 0) {
//     console.log("Grade can not be small than zero")
// }

// else if (grade < 40  ) {
//     result = "FF"
// }else if (grade <=50) {
//     result= "DD"
// }else if (grade <= 65){
//     result="CC"
// }else if (grade <=89) {
//     result="BB"
// }else if (grade <=100 ){
//     result="AA"
// }else {
//     console.log("Grade can not be bigger than 100")
// }

// if (result != "") {
//     console.log(`Your score: ${result}`)
// }


//? ornek 


const n1 = +prompt("Num1:")
const n2 = +prompt("Num2:")
const n3 = +prompt("Num3:")

if ( n1 > n2){
    if(n1 > n3) {
        console.log("Biggest:", n1)
    }
}


if (n1 >=  n2 && n1 >= n3) {
    console.log("Biggest:", n1)
}else if(n2 > n1 && n2> n3) {
    console.log("Biggest:", n2)
}else if (n3 > n1 && n3 > n2){
    console.log("Biggest:" , n3)
}

//? Andre methods

let biggest = n1

if (n2 >= biggest) {
    biggest = n=2
}

if (n3 >=biggest){
    biggest=n3
}