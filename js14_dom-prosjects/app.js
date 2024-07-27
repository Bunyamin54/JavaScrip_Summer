 console.log("***Stein-Saks******")
 
 //* Selectors

  const rockImg =document.getElementById("rock")
  const paperImg =document.getElementById("paper")
  const scissorImg =document.getElementById("sicissor")

 //? Secilen elementlerin tasiyicisi 
const yourChoiceDiv =  document.getElementById("your-choice")  


 //* Variables






 //* Event Listeners
  let image = document.createElement("img")
   rockImg.addEventListener("click", () => {
 
  image.src = "./assets/rock.png"
  image.alt= "rock"

  yourChoiceDiv.appendChild(image) })
 
 //* Functions 