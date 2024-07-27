 console.log("***Stein-Saks******")
 
 //* Selectors
  const selectionArticle= document.querySelector(".selection")



 //* Variables

 let userSelectorImg = document.createElement("img")
const yourChoiceDiv =  document.getElementById("your-choice") 



 //* Event Listeners

   

  selectionArticle.addEventListener("click", (e) => {
  console.log(e.target.id)

   if(e.target.id) {
    userSelectorImg.src =` ./assets/${e.target.id}.png`
    userSelectorImg.alt= e.target.id 
    yourChoiceDiv.appendChild(userSelectorImg) 

   }

  })











  //* Event Listeners

  //? Eksempel 1 

//   const rockImg =document.getElementById("rock")
//   const paperImg =document.getElementById("paper")
//   const scissorImg =document.getElementById("scissor")

//  //? Secilen elementlerin tasiyicisi 
// const yourChoiceDiv =  document.getElementById("your-choice")  
 
//   let image = document.createElement("img")
//    rockImg.addEventListener("click", () => {
 
//   image.src = "./assets/rock.png"
//   image.alt= "rock"

//   yourChoiceDiv.appendChild(image) })

//    paperImg.addEventListener("click", () => {
 
//   image.src = "./assets/paper.png"
//   image.alt= "paper"

//   yourChoiceDiv.appendChild(image) })


//   scissorImg.addEventListener("click", () => {
//   image.src = "./assets/scissor.png"
//   image.alt= "scissor"
//   yourChoiceDiv.appendChild(image) 
// })
 
 //* Functions 