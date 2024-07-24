

console.log("Traversing DOM")

//* Traversing DOM   bir yerden baska yere gitme

//? bir html elementini uzerinden baska elementleri secemeye Dom traversing denilir. 
//? Secme islemi 3 yonlu yapilir   

//? Yukari yonde (Parent)
//? Asagi yonde (childeren)
//? Yatay yonde (sibling)

//* 1- Yukari yonde traverse

const addItem = document.querySelector(".add-item")  //* claslar (.)  ile secilir.

console.log(addItem)

console.log(addItem.parentElement) //? main
console.log(addItem.parentNode.parentNode) //? body

//! closest() ustu veriyor belirtilen elementlerin parentini secer

  const list= document.querySelector(".list")

  console.log(list.textContent)

  console.log(list.closest("section"))  //* en yakin ilk gordugu ata sectionu alir


  console.log(list.closest("body").querySelector("header h1").innerText)