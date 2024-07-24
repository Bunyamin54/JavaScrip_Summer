 
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

console.log(new Date()) //* sistem tarihi ve saatini verir 

function calculate (name, yob){
    
    // const age = 2024 -yob
    const age = new Date().getFullYear() - yob
    console.log(`${name} is ${age} years old.`)
    return age
}

 

calculate("Ahmet",1990)
calculate("Bunyamin",1985)