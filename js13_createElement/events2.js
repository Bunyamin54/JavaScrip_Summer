console.log("*** Events ***")

//* Onclick , Onload, Onmouseover, Onmouseout, Onchange, Onsubmit,Onkeyup

//* Inline Events

const heading1 = document.querySelector("header h1")

heading1.onmouseover = function () { 
  heading1.style.color = "red"
} 


heading1.onmouseout= function() {
    heading1.style.color = "black"
}

const printHello = () => {
    document.write("Hello")
}

//* onload event i tum html ve css kodlarinin yuklenmesini bekler

window.onload = printHello()


window.addEventListener("load", () => {
    document.getElementById("input").focus()
})

const addBtn = document.querySelector("#btn")


const ul = document.createElement("ul")
document.querySelector(".item-list").before(ul)
addBtn.addEventListener("click", (e) => {
//    console.log("Btn Clicked") 
//    console.log(e.target.value)


    if(!input.value) {
    alert("Please enter a comment")
    }else {
    const input = document.querySelector("#input")
    const li = document.createElement("li")
    ul.appendChild(li)
    const textLi = document.createTextNode(input.value)
    li.appendChild(textLi)
    
    input.value = ""
    input.focus()
    }})
  //* input uzerinde iken bir klavye tusuna basilirsa 
document.querySelector("#input").addEventListener("keydown", (e) => {
    // console.log(e.code)
    // console.log(e.KeyCode)
//? Basilan tus Enter ise 

    if(e.code === "Enter") {
        addBtn.click()  //? add butonuna tiklnama fonksiyonunu calistirir
    }
})