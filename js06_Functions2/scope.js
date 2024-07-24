//* Golbal degisken bulundugu ortamin tum katerogirlerinde gecerli olan degisken herkese acik olan degiskenler  park piknik alani gibi global alan // local scope kendi evimizin bahcesi (buna "block scope" denir)

//* 

console.log(" *** Global Block Scope *** ")


let number1 = 3  //? Global 
let number2 =5  //? Global

console.log(number1)

const func1 = () => {
    number1 = 44  //? local degisken 
    const number2= 7  //? local block-scoped degisken

    console.log("LOCAL:", number2)
}


func1()

console.log(number1) //? local degisken 
console.log(number2) //? global number2 gorururuz