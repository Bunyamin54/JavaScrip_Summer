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

 //? setAttribute()

 newP.setAttribute("id", "new-id")
 newP.setAttribute("class", "new-class")
 newP.setAttribute("name", "new-class")
 newP.setAttribute("type", "button")

//? ClassList


newP.classList.add("bg-danger", "border", "border-2", "border-succes")

//* Classlists contains - iceriyoru mu ?
console.log(newP.classList.contains("new-class"))

if(newP.classList.contains("border")) {
    newP.classList.add("border-succes")
}


 //* Classlist.remove()

 if(!newP.classList.contains("new-class")) {
    newP.classList.remove("new-class")
 }


 //* ClassList.toggle()  -tersleme varsa kaldirir yoksa ekler icerirse kaldirir icermezse ekler- bir class varsa kaldirir yoksa ekler

 newP.classList.toggle("bg-danger")

 