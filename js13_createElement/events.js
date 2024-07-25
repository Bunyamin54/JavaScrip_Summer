 console.log("*** Crate Node Events ***")  //* interup mantigi trigger tetikleyici- 


const langInput = document.querySelector("#input")
 //* 1- Created  - olusturma
const newP =document.createElement("p")
//* 2- Eger text tabanli bir element ise text dugumunu olutur
// const text = document.createTextNode("Bu bir yeni p elementidir.")
const text = document.createTextNode("langInput.value")

//*3- Olusturulan text elementini yeni elemente bagla

 newP.appendChild(text)

 console.log(newP)
 //* 4- Bagla (append)   yeni elementin baglanmasi

 
 const main = document.querySelector("main")

  console.log(main)
 main.appendChild(newP)

  //* item-list sectionun onune yeni elementi ekler
  //* Element.before () ve Element.after () appendChild gibi aslinda bir elementi DOM Treeye baglar. 
 const itemListSection = document.querySelector(".item-list")

 itemListSection.before(newP)

 //* ID- CLASS

 //? 1. YONTEM

 newP.id = "paragraf"
 newP.className = "par"
