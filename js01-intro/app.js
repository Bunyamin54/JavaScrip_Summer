// * const ve let

console.log("App JS Running")
const pi = 3.14
console.log(pi)
console.log(typeof pi)


// alert("Bu bir alerttir") //? alert uygulamayi bloklar

// karar = confirm ("Emin misiniz E/H")

// console.log(karar)

// console.warn("Bu bir uyaridir")

// console.error("Eyvah hata olustu")

const sayi1= "3"
console.log(sayi1)
console.log(typeof sayi1)

//! const ile atatnan degiskene baslangic degeri verilmelidir ve sonradan atama yapilamaz. 

let language = "Java"
console.log(language, typeof language)

language = "JavaScript"

console.log(language)

language= true
console.log(language)

language=3.14
console.log(language)

let adet

console.log(adet)


//? local degisken blogin icnde gecerlidir

{

    let localDegisken  = 5
    localDegisken = localDegisken +1
    console.log(localDegisken)
}

  //! app.js:52 Uncaught ReferenceError: localDegisken is not defined at app.js:52:15

  console.log(localDegisken)


  