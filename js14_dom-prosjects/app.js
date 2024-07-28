 console.log("***Stein-Saks******")
 
 //* Selectors
  const selectionArticle= document.querySelector(".selection")
  const yourChoiceDiv =  document.getElementById("your-choice") 
  const pcChoiceDiv= document.querySelector("pc-choice")



 //* Variables

 let userSelectImg = document.createElement("img")
 let pcSelectImg = document.createElement("img")
 let pcRandom

 //? colors

 const YELLOW ="#ffc538"
 const RED ="#5ab7ac"
 const GREEN ="#5ab7ac"

//* massage

const messagePar= document.querySelector(".message")


//* Score

const scoreCardSection = document.querySelector(".score-card")
const pcScoreSpan = document.getElementById("pc-score")
const yourScoreSpan = document.getElementById("your-score")

 //* Event Listeners

   

  selectionArticle.addEventListener("click", (e) => {
  // console.log(e.target.id)

   if(e.target.id) {
    userSelectImg.src =` ./assets/${e.target.id}.png`
    userSelectImg.alt= e.target.id 
    yourChoiceDiv.appendChild(userSelectImg) 
    createPcSelection ()

   } 
})
     //* Functions 

   const createPcSelection = () => {
   const pcArr = ["rock", "paper", "scissor"]
  pcRandom = pcArr[Math.floor(Math.random() * 3)]
   pcSelectImg.src = `./assets/${pcRandom}.png`
   pcSelectImg.alt = pcRandom   
   pcChoiceDiv.appendChild(pcSelectImg)
  calculateResult()

}
      

     const calculateResult = () => {
     
        if (userSelectImg.alt === pcRandom) {
            draw()
          } else {
            if (userSelectImg.alt === "rock") {
              pcRandom === "paper" ? youLost() : youWin()
            } else if (userSelectImg.alt === "scissor") {
              pcRandom === "rock" ? youLost() : youWin()
            } else if (userSelectImg.alt === "paper") {
              pcRandom === "scissor" ? youLost() : youWin()
            }
          }
        
          if (pcScoreSpan.textContent === "10" || yourScoreSpan.textContent === "10") {
            openModal()
          }
        }



          const draw = () => {
            messagePar.textContent = "Its a draw"
            scoreCardSection.computedStyleMap.color = YELLOW
            messagePar.style.backgroundColor = YELLOW
          }
  const youLost = () => {


    messagePar.textContent = "you Lost"
    scoreCardSection.computedStyleMap.color = RED
    messagePar.style.backgroundColor = RED
    pcScoreSpan.textContent++
  }



  const youWin = () => {

    messagePar.textContent = "You Win"
    scoreCardSection.computedStyleMap.color = GREEN
    messagePar.style.backgroundColor = GREEN
    pcScoreSpan.textContent++
    
  }





  //* Event Listeners

  //? Eksempel 1   Ilkel yontem

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
 
