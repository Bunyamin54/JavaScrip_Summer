 console.log("*** Crate Node Events ***")


const langInput = document.querySelector("#input")
 //* Created  - olusturma
const newP =document.createElement("p")
//* Eger text tabanli bir element ise text dugumunu olutur
// const text = document.createTextNode("Bu bir yeni p elementidir.")
const text = document.createTextNode("langInput.value")

//* Olusturulan text elementini yeni elemente bagla

 newP.appendChild(text)

 console.log(newP)
 //* Bagla (append)  
