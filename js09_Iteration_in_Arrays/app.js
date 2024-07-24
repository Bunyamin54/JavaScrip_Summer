//* Loops white iterations **** 

//*  Array.forEach()  Array.map() Array.filter() Array.reduse() Array.find ()  Array.every()  Array 

// const rakamlar = [-5, 15, 22, -4, 45, 78, -25]

// let toplam = 0
// for (let i = 0 ; i<rakamlar.length; i++) { //* <= dersek 7. elemani dahil ederiz  dinamik kod  // Array.length propertisi ile . ile ulasiriz dinamik yapariz

//     toplam += rakamlar[i];

// }

// console.log(toplam) //* 126



// const grades = [55, 77, 23, 89, 100, 44, 33]

// let sum = 0

// for (let i=0 ; i<grades.length; i++) {


//      sum += grades[i]
// }

//  console.log("SUM:" ,sum) // 421
//  console.log("AVG:" , (sum / grades.length).toFixed(2)) //* 60.14

//* eksempel
// const grades = [55, 77, 23, 89, 100, 44, 33,45]

// const lessThan50 = []
// const equalOrBiggerThan = []

// for(let j =0 ; j<grades.length; j++) {

//   if (grades[j]  < 50) {
//     lessThan50.push(grades[j])
//   } else {

//     equalOrBiggerThan.push(grades[j])
//   }

// }

// console.log(lessThan50)
// console.log(equalOrBiggerThan)

//* for in loops  length kullanamamiza gerek yok for in donugusu zaten sonuna kadar sayar  , amac iterasyonun basitlestirmek

//* eksempel 

const grades = [55, 77, 23, 89, 100, 44, 33,45]

const lessThan50 = []
const equalOrBiggerThan = []

for(let i in grades) {

  grades[i] < 50 ? lessThan50.push(grades[i]) : equalOrBiggerThan.push(grades[i])

}

console.log(lessThan50)
console.log(equalOrBiggerThan)
console.log(grades)