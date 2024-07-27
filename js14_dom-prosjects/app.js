 console.log("***Stein-Saks******")
 
 //* Selectors

  const rockImg =document.getElementById("rock")
  const paperImg =document.getElementById("paper")
  const scissorImg =document.getElementById("scissor")

 //? Secilen elementlerin tasiyicisi 
const yourChoiceDiv =  document.getElementById("your-choice")  


 //* Variables






 //* Event Listeners
  let image = document.createElement("img")
   rockImg.addEventListener("click", () => {
 
  image.src = "./assets/rock.png"
  image.alt= "rock"

  yourChoiceDiv.appendChild(image) })

   paperImg.addEventListener("click", () => {
 
  image.src = "./assets/paper.png"
  image.alt= "paper"

  yourChoiceDiv.appendChild(image) })


  scissorImg.addEventListener("click", () => {
  image.src = "./assets/scissor.png"
  image.alt= "scissor"
  yourChoiceDiv.appendChild(image) 
})
 
 //* Functions 