//* Loops white iterations **** 

//*  Array.forEach()  Array.map() Array.filter() Array.reduse() Array.find ()  Array.every()  Array 

// const rakamlar = [-5, 15, 22, -4, 45, 78, -25]

// let toplam = 0
// for (let i = 0 ; i<rakamlar.length; i++) { //* <= dersek 7. elemani dahil ederiz  dinamik kod  // Array.length propertisi ile . ile ulasiriz dinamik yapariz

//     toplam += rakamlar[i];

// }

// console.log(toplam) //* 126



const grades = [55, 77, 23, 89, 100, 44, 33]

let sum = 0

for (let i=0 ; i<grades.length; i++) {


     sum += grades[i]
}

 console.log("SUM:" ,sum) // 421
 console.log("AVG:" , (sum / grades.length).toFixed(2)) //* 60.14